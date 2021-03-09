const reducer = (state, action) => {
  console.log(action.item);
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.item];
    case "REMOVE_FROM_BASKET":
      const index = state.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      const newBasket = [...state];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not in basket!)`
        );
      }
      return newBasket;
    case "EMPTY_BASKET":
      return [];
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
};

export default reducer;
