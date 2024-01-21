import { store } from '../store/index';

type TState = ReturnType<typeof store.getState> // тип значения результата выполнения foo
type TAppDispatch = typeof store.dispatch //foo для отправки действия

export type { TState, TAppDispatch };
