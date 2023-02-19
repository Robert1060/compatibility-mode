import { createAction, props } from "@ngrx/store";

export const setRegion = createAction('[Region] Set Region', props<{regionName:string}>())