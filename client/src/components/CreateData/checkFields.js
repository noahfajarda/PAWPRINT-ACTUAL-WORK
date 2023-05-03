export function checkFields(state) {
  // error checking for if field is empty
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      if (state[key].length === 0) {
        console.error(`ERROR: The field ${key} is empty`);
        return false;
      }
    }
  }

  // check if password is the same
  if (state.password !== state.CONFIRM_PASSWORD) {
    console.error(`ERROR: Passwords do not match`);
    return false;
  }
  return true
}