export const TRIGGER_START= 'TRIGGER_START';

export const startStopDataLoad = (start) => ({
  type: TRIGGER_START,
  payload: start,
});
