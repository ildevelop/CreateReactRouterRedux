export const onAdd = (component) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'ADD',
      payload: component
    })
  },1000);
};