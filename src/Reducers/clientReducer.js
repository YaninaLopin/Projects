const ADD_CLIENS = 'clients\ADD_CLIENS';

const initialValue = [    {
    name: 'Иван',
    surname: 'Иванов',
    age: 25,
    patronymic: 'Иванович',
    position: 'Бухгалтер',
    phone: '+7-900-123-45-67',
    cardnumber: '100500',
    blocked: false,
    coupons: 4,
    issued: 1,
  },
  {
    name: 'Сергей',
    surname: 'Сидоров',
    age: 39,
    patronymic: 'Сергеевич',
    position: 'Учитель',
    phone: '+7-911-123-12-13',
    cardnumber: '100100',
    blocked: true,
    coupons: 12,
    issued: 1,
  },
  {
    name: 'Измаил',
    surname: 'Игнатов',
    age: 15,
    patronymic: 'Алексеевич',
    position: 'Бухгалтер',
    phone: '+7-911-123-33-44',
    cardnumber: '100200',
    blocked: false,
    coupons: 7,
    issued: 3,
  }];

const clientsReducer = (state=initialValue, action) => {
  switch (action.type) {
    case ADD_CLIENS:
      return [ ...state, action.payload ];
    default:
        return state;
  }
};

export default clientsReducer;

export const addClient = (client) => ({
  type: ADD_CLIENS,
  payload: client
})

//const [state, dispatch] = useReducer(reducer, initialValue);