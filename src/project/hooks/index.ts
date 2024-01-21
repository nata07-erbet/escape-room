import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { TState, TAppDispatch } from '../types/state.type';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TState> = useSelector ;

export { useAppDispatch, useAppSelector };
