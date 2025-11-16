// ============================================================================
// 1. CONSTANTS
// ============================================================================

const SHIFT_STATES = ["", "D", "E", "N"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const WEEKDAY_NAMES = ["S","M","T","W","T","F","S"];

// Storage key for saving schedules locally
const STORAGE_KEY = "ryder_shift_schedule_v1";

let scheduleStore = {}; // dateKey → { shift, holiday, vacation }

// ============================================================================
// 2. LOAD & SAVE SCHEDULE
// ============================================================================

// Load from localStorage, or fallback to DEFAULT_SCHEDULE (from schedule-data.js)
function loadSchedule() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      // No saved schedule → use DEFAULT_SCHEDULE from schedule-data.js
      scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
      saveSchedule();
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      scheduleStore = parsed;
    } else {
      scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
      saveSchedule();
    }

  } catch (err) {
    console.error("Failed to load schedule:", err);
    scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
    saveSchedule();
  }
}

function saveSchedule() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleStore));
  } catch (err) {
    console.error("Failed to save schedule:", err);
  }
}

// ============================================================================
// 3. DOM ELEMENTS
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
// 4. DATE HELPERS
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
    saveSchedule();
  }
  return scheduleStore[key];
}

// ============================================================================
// 5. BUILD MONTH TABLE
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
// 6. UPDATE CELL FROM STATE
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
// 7. CLICK HANDLERS
// ============================================================================

function onDayClick(td, event) {
  if (td.classList.contains("empty")) return;

  const key = td.dataset.dateKey;
  const state = getDayState(key);

  // Alt-click = VACATION
  if (event.altKey) {
    state.vacation = !state.vacation;
    saveSchedule();
    updateCell(td);
    statusEl.textContent = `${key} vacation ${state.vacation ? "ON" : "OFF"}`;
    return;
  }

  // Normal click = cycle shift
  const idx = SHIFT_STATES.indexOf(state.shift);
  const newShift = SHIFT_STATES[(idx + 1) % SHIFT_STATES.length];
  state.shift = newShift;
  saveSchedule();
  updateCell(td);
  statusEl.textContent = `${key} shift set to ${newShift || "empty"}.`;
}

function toggleHoliday(key) {
  const state = getDayState(key);
  state.holiday = !state.holiday;
  saveSchedule();
  statusEl.textContent = `${key} holiday ${state.holiday ? "ON" : "OFF"}`;
}

// ============================================================================
// 8. EXPORT / IMPORT
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
});

importBtn.addEventListener("click", () => importFile.click());

importFile.addEventListener("change", () => {
  const file = importFile.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      scheduleStore = JSON.parse(e.target.result);
      saveSchedule();
      renderCalendar(currentYear);
      statusEl.textContent = "Schedule imported.";
    } catch {
      statusEl.textContent = "Import failed.";
    }
  };
  reader.readAsText(file);
});

// ============================================================================
// 9. CONTROLS
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
// 10. INIT
// ============================================================================

loadSchedule();
document.body.classList.add("size-medium");
yearInput.value = currentYear;
renderCalendar(currentYear);
