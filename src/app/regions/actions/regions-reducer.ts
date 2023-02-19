import { Action, createReducer, on } from "@ngrx/store"
import { setRegion } from "./regions-actions"

interface State {
  regionName: string
}

const initialState: State = {
  regionName: ''
}

export const regionReducer = createReducer(initialState,
  on(setRegion, (state, action) => {
    return {
      ...state,
      regionName: action.regionName
    }
  })
  )

// export function regionsReducer(state: State, action: Action) {
//     return reducer(state, action);
// }