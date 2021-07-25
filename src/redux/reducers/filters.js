import { EDIT_FILTER } from "../constants";

const initialFilter = "all";

const filter = (state = initialFilter, { type, crnFilter }) => {
  switch (type) {
    case EDIT_FILTER:
      return crnFilter;
    default:
      return state;
  }
};

export default filter;
