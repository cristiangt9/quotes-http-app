import * as Actions from "../actions";
const initialState = {
  items: [],
};

const reducerQuote = (state = initialState, { type, payload }) => {
  console.log({ type, payload });
  switch (type) {
    case Actions.ADD_QUOTE:
      return {
        ...state,
        items: [
          ...state.items,
          { ...payload, id: Math.random().toString(), comments: [] },
        ],
      };
    case Actions.ADD_COMMENT:
      const items = [...state.items];
      const { id, comment } = payload;
      const itemExistem = items.find((item) => item.id === id);
      console.log("item Encontrado", itemExistem);
      if (itemExistem) {
        itemExistem.comments = [
          ...itemExistem.comments,
          { id: Math.random().toString(), text: comment },
        ];
      } // caso contrario deberia devolver error pero esta es una app de prueba
      return { ...state, items };
    default:
      return state;
  }
};
export default reducerQuote;
