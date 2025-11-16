// ============================================================================
// 1. CONSTANTS
// ============================================================================
const SHIFT_STATES = ["", "D", "E", "N"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const WEEKDAY_NAMES = ["S","M","T","W","T","F","S"];

// Read-only mode: just use DEFAULT_SCHEDULE from schedule-data.js
let scheduleStore = DEFAULT_SCHEDULE;

// ============================================================================
// 2. DOM ELEMENTS
// ============================================================================
const calendarEl   = document.getElementById("calendar");
const yearInput    = document.getElementById("yearInput");
const applyYearBtn = document.getElementById("applyYearBtn");
const statusEl     = document.getElementById("status");
const printBtn     = document.getElementById("printBtn");
const sizeSelect   = document.getElementById("sizeSelect");
const exportBtn    = document.getElementById("exportBtn");
const importBtn    = document.getElementById("importBtn");
const importFile   = document.getElementById("importFile");

// ============================================================================
// 3. DATE HELPERS
// ============================================================================
function pad(n) {
  return n < 10 ? "0" + n : String(n);
}

const today = new Date();
const TODAY_KEY = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

function dateKey(year, monthIndex, day) {
  return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
}

function getDayState(key) {
  if (!scheduleStore[key]) {
    scheduleStore[key] = { shift: "", holiday: false, vacation: false };
  }
  return scheduleStore[key];
}

// ============================================================================
// 4. BUILD MONTH TABLE
// ============================================================================
function buildMonthTable(year, monthIndex) {
  const monthCard = document.createElement("div");
  monthCard.className = "month-card";

  const title = document.createElement("div");
  title.className = "month-title";
  title.textContent = MONTH_NAMES[monthIndex] + " " + year;
  monthCard.appendChild(title);

  const table = document.createElement("table");
  table.className = "month-table";

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  WEEKDAY_NAMES.forEach(d => {
    const th = document.createElement("th");
    th.textContent = d;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  let currentDay = 1;
  for (let week = 0; week < 6; week++) {
    const tr = document.createElement("tr");
    for (let wd = 0; wd < 7; wd++) {
      const td = document.createElement("td");
      if ((week === 0 && wd < firstDayOfWeek) || currentDay > daysInMonth) {
        td.classList.add("empty");
        tr.appendChild(td);
        continue;
      }

      const key = dateKey(year, monthIndex, currentDay);
      td.dataset.dateKey = key;
      if (key === TODAY_KEY) td.classList.add("today");

      const dayNum = document.createElement("div");
      dayNum.className = "day-number";
      dayNum.textContent = currentDay;

      const shiftCode = document.createElement("div");
      shiftCode.className = "shift-code";

      td.appendChild(dayNum);
      td.appendChild(shiftCode);

      td.addEventListener("click", (e) => onDayClick(td, e));
      td.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        toggleHoliday(key);
        updateCell(td);
      });

      updateCell(td);
      tr.appendChild(td);
      currentDay++;
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  monthCard.appendChild(table);
  return monthCard;
}

function renderCalendar(year) {
  calendarEl.innerHTML = "";
  for (let m = 0; m < 12; m++) {
    calendarEl.appendChild(buildMonthTable(year, m));
  }
}

// ============================================================================
// 5. UPDATE CELL FROM STATE
// ============================================================================
function updateCell(td) {
  const key = td.dataset.dateKey;
  const state = getDayState(key);
  const shiftDiv = td.querySelector(".shift-code");
  const dayNum = td.querySelector(".day-number");

  td.classList.remove("shift-day", "shift-eve", "shift-night", "holiday-on");
  dayNum.classList.remove("vacation-on");

  shiftDiv.textContent = state.shift;
  if (state.shift === "D") td.classList.add("shift-day");
  if (state.shift === "E") td.classList.add("shift-eve");
  if (state.shift === "N") td.classList.add("shift-night");
  if (state.holiday) td.classList.add("holiday-on");
  if (state.vacation) dayNum.classList.add("vacation-on");
}

// ============================================================================
// 6. CLICK HANDLERS - READ ONLY, CHANGES NOT SAVED
// ============================================================================
function onDayClick(td, event) {
  if (td.classList.contains("empty")) return;
  const key = td.dataset.dateKey;
  const state = getDayState(key);

  // Alt-click = VACATION
  if (event.altKey) {
    state.vacation = !state.vacation;
    updateCell(td);
    statusEl.textContent = `${key} vacation ${state.vacation ? "ON" : "OFF"} (temporary - not saved)`;
    return;
  }

  // Normal click = cycle shift
  const idx = SHIFT_STATES.indexOf(state.shift);
  const newShift = SHIFT_STATES[(idx + 1) % SHIFT_STATES.length];
  state.shift = newShift;
  updateCell(td);
  statusEl.textContent = `${key} shift set to ${newShift || "empty"} (temporary - not saved)`;
}

function toggleHoliday(key) {
  const state = getDayState(key);
  state.holiday = !state.holiday;
  statusEl.textContent = `${key} holiday ${state.holiday ? "ON" : "OFF"} (temporary - not saved)`;
}

// ============================================================================
// 7. EXPORT / IMPORT
// ============================================================================
exportBtn.addEventListener("click", () => {
  const data = JSON.stringify(scheduleStore, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ryder-shifts.json";
  a.click();
  URL.revokeObjectURL(url);
  statusEl.textContent = "Schedule exported! Copy this JSON into schedule-data.js on GitHub.";
});

importBtn.addEventListener("click", () => importFile.click());

importFile.addEventListener("change", () => {
  const file = importFile.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      scheduleStore = JSON.parse(e.target.result);
      renderCalendar(currentYear);
      statusEl.textContent = "Schedule imported.";
    } catch {
      statusEl.textContent = "Import failed.";
    }
  };
  reader.readAsText(file);
});

// ============================================================================
// 8. CONTROLS
// ============================================================================
let currentYear = new Date().getFullYear();

applyYearBtn.addEventListener("click", () => {
  const y = parseInt(yearInput.value, 10);
  if (y < 1900 || y > 2100) {
    statusEl.textContent = "Invalid year.";
    return;
  }
  currentYear = y;
  renderCalendar(currentYear);
});

sizeSelect.addEventListener("change", () => {
  document.body.className = "";
  document.body.classList.add("size-" + sizeSelect.value);
});

printBtn.addEventListener("click", () => window.print());

// ============================================================================
// 9. INIT
// ============================================================================
document.body.classList.add("size-medium");
yearInput.value = currentYear;
renderCalendar(currentYear);
statusEl.textContent = "Schedule loaded from GitHub (read-only)";