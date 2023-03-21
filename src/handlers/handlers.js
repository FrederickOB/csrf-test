export const onChangeHandler = (setState, state, event) => {
  if (state) {
    setState({ ...state, [event.target.name]: event.target.value });
  } else {
    setState(event.target.value);
  }
};
