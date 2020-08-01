// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

export default (state = filtersReducerDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: payload,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: payload,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: payload,
      };
    default:
      return state;
  }
};
