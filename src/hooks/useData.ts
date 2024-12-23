import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { useEffect } from 'react';
import { RootState, AppDispatch, fetchData } from '../store/store';

// Typed hooks for TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useData = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.data.status);
    const data = useAppSelector((state) => state.data.workspaceData);
    const error = useAppSelector((state) => state.data.error);
    
    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchData());
        }
    }, [status, dispatch]);
    
    return { status, data, error };
};

export default useData;