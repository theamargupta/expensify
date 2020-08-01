// SET_TEXT_FILTER
export const setTextFilter = (payload = '') => ({
  type: 'SET_TEXT_FILTER',
  payload,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
export const setStartDate = (payload) => ({
  type: 'SET_START_DATE',
  payload,
});

// SET_END_DATE
export const setEndDate = (payload) => ({
  type: 'SET_END_DATE',
  payload,
});
