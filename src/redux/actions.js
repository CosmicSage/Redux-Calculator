// Actions
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_DISPLAY = "CHANGE_DISPLAY";
export const CHANGE_RESULT = "CHANGE_RESULT";
export const CLEAR = "CLEAR";
// Action Creators
export const changeMode = update => ({
  type : CHANGE_MODE, payload : update
});

export const changeDisplay = update => ({
  type : CHANGE_DISPLAY, payload : update
})

export const changeResult = update => ({
  type : CHANGE_RESULT, payload : update
})

export const clear = update => ({
  type : CLEAR, payload : update
})
