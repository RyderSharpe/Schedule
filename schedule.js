// ============================================================================
// 0. DEFAULT SCHEDULE (BAKED IN FOR NEW DEVICES)
// ============================================================================
//
// STEP 1: On your PC where the schedule is correct, open the site and click
//         Export. Open the downloaded .json file in VS Code.
// STEP 2: Copy EVERYTHING inside that file (the whole { ... } object)
// STEP 3: Paste it here, replacing the {} below.

const DEFAULT_SCHEDULE = {
    "2025-01-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-05": {
    "shift": "N",
    "holiday": true,
    "vacation": false
  },
  "2025-01-06": {
    "shift": "N",
    "holiday": false,
    "vacation": true
  },
  "2025-01-07": {
    "shift": "N",
    "holiday": false,
    "vacation": true
  },
  "2025-01-08": {
    "shift": "N",
    "holiday": false,
    "vacation": true
  },
  "2025-01-09": {
    "shift": "N",
    "holiday": false,
    "vacation": true
  },
  "2025-01-10": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2025-01-11": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2025-01-12": {
    "shift": "E",
    "holiday": true,
    "vacation": false
  },
  "2025-01-13": {
    "shift": "E",
    "holiday": false,
    "vacation": true
  },
  "2025-01-14": {
    "shift": "E",
    "holiday": false,
    "vacation": true
  },
  "2025-01-15": {
    "shift": "E",
    "holiday": false,
    "vacation": true
  },
  "2025-01-16": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2025-01-17": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2025-01-18": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2025-01-19": {
    "shift": "D",
    "holiday": true,
    "vacation": false
  },
  "2025-01-20": {
    "shift": "D",
    "holiday": false,
    "vacation": true
  },
  "2025-01-21": {
    "shift": "D",
    "holiday": false,
    "vacation": true
  },
  "2025-01-22": {
    "shift": "D",
    "holiday": false,
    "vacation": true
  },
  "2025-01-23": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2025-01-24": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2025-01-25": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2025-01-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-01-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-02-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-03-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-04-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-05-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-06-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-07-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-08-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-09-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-10-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-11-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2025-12-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-01": {
    "shift": "N",
    "holiday": true,
    "vacation": false
  },
  "2026-01-02": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-01-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-07": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-08": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-09": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-10": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-11": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-12": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-13": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-17": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-01-18": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-01-19": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-01-20": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-01-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-01-24": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-25": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-26": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-27": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-01-28": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-29": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-30": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-01-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-04": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-05": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-06": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-11": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-02-12": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-02-13": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-02-14": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-02-15": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-02-16": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-02-17": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-02-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-21": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-22": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-23": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-24": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-02-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-02-28": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-01": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-02": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-03": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-11": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-12": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-13": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-18": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-19": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-20": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-03-21": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-03-22": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-03-23": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-03-24": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-03-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-03-28": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-29": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-30": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-03-31": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-04-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-03": {
    "shift": "",
    "holiday": true,
    "vacation": false
  },
  "2026-04-04": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-05": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-06": {
    "shift": "D",
    "holiday": true,
    "vacation": false
  },
  "2026-04-07": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-08": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-09": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-10": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-15": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-04-16": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-04-17": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-04-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-22": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-23": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-24": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-04-25": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-26": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-27": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-28": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-04-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-04-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-02": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-03": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-04": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-05": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-09": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-10": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-11": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-12": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-13": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-05-14": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-05-15": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-05-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-18": {
    "shift": "",
    "holiday": true,
    "vacation": false
  },
  "2026-05-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-20": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-21": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-22": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-05-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-05-27": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-28": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-29": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-05-30": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-05-31": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-01": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-02": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-06": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-07": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-08": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-09": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-13": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-06-14": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-06-15": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-06-16": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-06-17": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-18": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-19": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-06-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-24": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-25": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-26": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-06-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-06-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-01": {
    "shift": "D",
    "holiday": true,
    "vacation": false
  },
  "2026-07-02": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-03": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-04": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-05": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-06": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-07": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-11": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-12": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-13": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-14": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-18": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-19": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-20": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-21": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-07-22": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-23": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-24": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-07-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-07-29": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-30": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-07-31": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-08-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-03": {
    "shift": "",
    "holiday": true,
    "vacation": false
  },
  "2026-08-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-05": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-06": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-07": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-08": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-09": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-10": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-11": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-15": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-08-16": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-08-17": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-08-18": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-08-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-22": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-23": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-24": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-25": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-08-26": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-27": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-28": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-08-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-08-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-01": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-02": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-03": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-04": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-07": {
    "shift": "",
    "holiday": true,
    "vacation": false
  },
  "2026-09-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-09": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-10": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-11": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-12": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-09-13": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-09-14": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-09-15": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-09-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-18": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-19": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-20": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-21": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-22": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-09-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-24": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-09-26": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-27": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-28": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-29": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-09-30": {
    "shift": "E",
    "holiday": true,
    "vacation": false
  },
  "2026-10-01": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-02": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-05": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-06": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-07": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-08": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-09": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-11": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-12": {
    "shift": "",
    "holiday": true,
    "vacation": false
  },
  "2026-10-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-14": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-10-15": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-10-16": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-10-17": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-18": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-19": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-20": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-10-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-23": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-24": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-25": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-26": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-27": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-10-28": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-29": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-10-31": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-01": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-02": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-03": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-04": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-05": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-06": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-07": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-08": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-09": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-10": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-11": {
    "shift": "N",
    "holiday": true,
    "vacation": false
  },
  "2026-11-12": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-11-13": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-11-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-16": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-17": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-18": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-19": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-20": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-11-21": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-22": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-23": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-24": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-11-25": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-26": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-27": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-11-28": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-11-29": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-11-30": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-12-01": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-12-02": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-03": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-04": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-05": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-06": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-07": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-08": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-09": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-10": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-11": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-12": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-13": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-14": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-15": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-16": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-12-17": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-12-18": {
    "shift": "N",
    "holiday": false,
    "vacation": false
  },
  "2026-12-19": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-20": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-21": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-22": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-23": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-24": {
    "shift": "D",
    "holiday": false,
    "vacation": false
  },
  "2026-12-25": {
    "shift": "D",
    "holiday": true,
    "vacation": false
  },
  "2026-12-26": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-27": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-28": {
    "shift": "E",
    "holiday": true,
    "vacation": false
  },
  "2026-12-29": {
    "shift": "E",
    "holiday": false,
    "vacation": false
  },
  "2026-12-30": {
    "shift": "",
    "holiday": false,
    "vacation": false
  },
  "2026-12-31": {
    "shift": "",
    "holiday": false,
    "vacation": false
  }
  
};

// ============================================================================
// 1. CONSTANTS
// ============================================================================
const SHIFT_STATES = ["", "D", "E", "N"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const WEEKDAY_NAMES = ["S","M","T","W","T","F","S"];

const STORAGE_KEY = "ryder_shift_schedule_v1";

// ============================================================================
// 2. SCHEDULE STORE + PERSISTENCE
// ============================================================================
let scheduleStore = {}; // dateKey -> { shift, holiday, vacation }

/**
 * loadSchedule:
 * - First tries to read from localStorage.
 * - If nothing is stored (first visit on this device), it seeds from
 *   DEFAULT_SCHEDULE and saves that into localStorage.
 */
function loadSchedule() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      // First visit on this device: seed with baked-in schedule
      if (DEFAULT_SCHEDULE && typeof DEFAULT_SCHEDULE === "object") {
        // deep clone so we don't mutate DEFAULT_SCHEDULE
        scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
      } else {
        scheduleStore = {};
      }
      saveSchedule();
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      scheduleStore = parsed;
    } else {
      // Corrupt or invalid – fall back to default
      if (DEFAULT_SCHEDULE && typeof DEFAULT_SCHEDULE === "object") {
        scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
      } else {
        scheduleStore = {};
      }
      saveSchedule();
    }
  } catch (err) {
    console.error("Failed to load schedule from localStorage:", err);
    // On error, still fall back to default if available
    if (DEFAULT_SCHEDULE && typeof DEFAULT_SCHEDULE === "object") {
      scheduleStore = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
    } else {
      scheduleStore = {};
    }
    saveSchedule();
  }
}

function saveSchedule() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleStore));
  } catch (err) {
    console.error("Failed to save schedule to localStorage:", err);
  }
}

// ============================================================================
// 3. DOM REFERENCES
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
// 5. BUILDING THE CALENDAR
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
  const headRow = document.createElement("tr");
  WEEKDAY_NAMES.forEach(d => {
    const th = document.createElement("th");
    th.textContent = d;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
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

      if (key === TODAY_KEY) {
        td.classList.add("today");
      }

      const dayNumberDiv = document.createElement("div");
      dayNumberDiv.className = "day-number";
      dayNumberDiv.textContent = currentDay;

      const shiftCodeDiv = document.createElement("div");
      shiftCodeDiv.className = "shift-code";

      td.appendChild(dayNumberDiv);
      td.appendChild(shiftCodeDiv);

      td.addEventListener("click", (e) => onDayCellClick(td, e));

      td.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (td.classList.contains("empty")) return;
        toggleHoliday(key);
        updateCellFromStore(td);
      });

      updateCellFromStore(td);

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
    const monthCard = buildMonthTable(year, m);
    calendarEl.appendChild(monthCard);
  }
}

// ============================================================================
// 6. STATE UPDATES (SHIFT / HOLIDAY / VACATION)
// ============================================================================
function updateCellFromStore(td) {
  const key = td.dataset.dateKey;
  const state = getDayState(key);
  const shiftDiv = td.querySelector(".shift-code");
  const dayNumberDiv = td.querySelector(".day-number");

  td.classList.remove("shift-day", "shift-eve", "shift-night", "holiday-on");
  dayNumberDiv.classList.remove("vacation-on");

  shiftDiv.textContent = state.shift || "";

  if (state.shift === "D") {
    td.classList.add("shift-day");
  } else if (state.shift === "E") {
    td.classList.add("shift-eve");
  } else if (state.shift === "N") {
    td.classList.add("shift-night");
  }

  if (state.holiday) {
    td.classList.add("holiday-on");
  }

  if (state.vacation) {
    dayNumberDiv.classList.add("vacation-on");
  }
}

function onDayCellClick(td, event) {
  if (td.classList.contains("empty")) return;
  const key = td.dataset.dateKey;
  const state = getDayState(key);

  // Alt+click = toggle vacation
  if (event.altKey) {
    state.vacation = !state.vacation;
    saveSchedule();
    updateCellFromStore(td);
    statusEl.textContent = `${key} vacation: ${state.vacation ? "ON" : "OFF"}.`;
    return;
  }

  // normal click = cycle shift
  const currentShift = state.shift || "";
  let idx = SHIFT_STATES.indexOf(currentShift);
  if (idx === -1) idx = 0;
  idx = (idx + 1) % SHIFT_STATES.length;
  const newShift = SHIFT_STATES[idx];
  state.shift = newShift;
  saveSchedule();

  updateCellFromStore(td);
  statusEl.textContent = `${key} shift set to ${newShift || "empty"}.`;
}

function toggleHoliday(key) {
  const state = getDayState(key);
  state.holiday = !state.holiday;
  saveSchedule();
  statusEl.textContent = `${key} holiday: ${state.holiday ? "ON" : "OFF"}.`;
}

// ============================================================================
// 7. CONTROLS (YEAR, SIZE, PRINT)
// ============================================================================
let currentYear = new Date().getFullYear();

applyYearBtn.addEventListener("click", () => {
  const y = parseInt(yearInput.value, 10);
  if (Number.isNaN(y) || y < 1900 || y > 2100) {
    statusEl.textContent = "Enter a valid year between 1900 and 2100.";
    return;
  }
  currentYear = y;
  renderCalendar(currentYear);
  statusEl.textContent = "Showing year " + currentYear + ".";
});

sizeSelect.addEventListener("change", () => {
  document.body.classList.remove("size-small", "size-medium", "size-large");
  document.body.classList.add("size-" + sizeSelect.value);
});

printBtn.addEventListener("click", () => {
  window.print();
});

// ============================================================================
// 8. EXPORT / IMPORT (BACKUP)
// ============================================================================
exportBtn.addEventListener("click", () => {
  try {
    const dataStr = JSON.stringify(scheduleStore, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    const now = new Date();
    const fname = `ryder-shift-schedule-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}.json`;
    a.download = fname;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    statusEl.textContent = "Schedule exported as JSON.";
  } catch (err) {
    console.error("Export failed:", err);
    statusEl.textContent = "Error: export failed.";
  }
});

importBtn.addEventListener("click", () => {
  importFile.value = "";
  importFile.click();
});

importFile.addEventListener("change", () => {
  const file = importFile.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = e.target.result;
      const parsed = JSON.parse(text);

      if (!parsed || typeof parsed !== "object") {
        statusEl.textContent = "Error: invalid schedule file.";
        return;
      }

      scheduleStore = parsed;
      saveSchedule();
      renderCalendar(currentYear);
      statusEl.textContent = "Schedule imported successfully.";
    } catch (err) {
      console.error("Import failed:", err);
      statusEl.textContent = "Error: import failed.";
    }
  };
  reader.readAsText(file);
});

// ============================================================================
// 9. INITIALIZATION
// ============================================================================
loadSchedule();
document.body.classList.add("size-medium");
yearInput.value = currentYear;
renderCalendar(currentYear);
