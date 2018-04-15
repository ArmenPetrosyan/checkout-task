const initialState = {
  items: [
    {
      id    : 1,
      title : 'Good 1',
      brand : 'Gucci',
      price : 100,
      img   : 'https://wiki.wildberries.ru/img/2011/08/gucci-logo1.jpg'
    },
    {
      id    : 2,
      title : 'Good 2',
      brand : 'Hermes',
      price : 990,
      img   : 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/36/Herm%C3%A8s_Logo.svg/640px-Herm%C3%A8s_Logo.svg.png'
    },
    {
      id    : 3,
      title : 'Good 3',
      brand : 'Louis Vuitton',
      price : 500,
      img   : 'http://f2f-mag.ru/upload/Video/Louis-Vuitton_logotype.gif'
    },
  ],
  subtotal: 1590,
  taxes: 0,
  total: 1590,
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': {
      let subtotal = state.subtotal + action.payload.price;
      let total = subtotal + state.taxes;

      return {
        ...state,
        items: [...state.items, action.payload],
        subtotal: subtotal,
        total: total
      };
    }
    case 'REMOVE_FROM_CART': {
      let subtotal = state.subtotal - state.items[action.payload].price;
      let total = subtotal + state.taxes;

      return {
        ...state,
        items    : state.items.filter((el, id) => action.payload !== id),
        subtotal : subtotal,
        total    : total
      };
    }
    default:
      return state;
  }

};

export default cartReducer;