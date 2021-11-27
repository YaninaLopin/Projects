const REGISTRATION = 'profile\REGISTRATION';

const initialValue = {
    phone: '',
    name: '',
    surname: '',
    email: '',
    signedUp: false,
  }

  const profileReducer = (state=initialValue, action) => {
    switch (action.type) {
      case REGISTRATION:
        return  {...action.payload.user};
      default:
          return state;
    }
  };
  
  export default profileReducer;
  
  export const registration = (user) =>({
    type: REGISTRATION,
    payload: {user}})