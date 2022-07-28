function getState() {
  const state = APP_MANAGER_SHEET.getRange(STATE_ROW, STATE_COL).getValue();
  return state;
}

function getRateLimit() {
  const rateLimit = APP_MANAGER_SHEET.getRange(RATE_LIMIT_ROW, RATE_LIMIT_COL).getValue();
  return rateLimit;
}

function setState(value) {
  APP_MANAGER_SHEET.getRange(STATE_ROW, STATE_COL).setValue(value);
}

function setRateLimit(value) {
  APP_MANAGER_SHEET.getRange(RATE_LIMIT_ROW, RATE_LIMIT_COL).setValue(value);
}
