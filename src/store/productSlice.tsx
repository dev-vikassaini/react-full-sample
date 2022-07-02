const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export enum PRODUCT_STATUS {
    IDLE = 'idle',
    ERROR = 'error',
    LOADING = 'loading',
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: PRODUCT_STATUS.IDLE
    },
    reducers: {
        //TODO this is normal way to use thunk functions
        // setProducts(state: any, action: any) {
        //     state.data = action.payload;
        // },
        // setStatus(state: any, action: any) {
        //     state.status = action.status;
        // }
    },
    extraReducers: (builder: any) => {
        builder
            .addCase(fetchProducts.pending, (state: any, action: any) => {
                state.status = PRODUCT_STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state: any, action: any) => {
                state.data = action.payload;
                state.status = PRODUCT_STATUS.IDLE;
            })
            .addCase(fetchProducts.rejected, (state: any, action: any) => {
                state.status = PRODUCT_STATUS.ERROR;
            })
    }
    
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//TODO this is recommended thunk functions
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});

//TODO this is normal way to use thunk functions

export function fetchProducts1() {
    return async function fetchProductThunk(dispatch: any, getState: any) {
        dispatch(setStatus(PRODUCT_STATUS.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(PRODUCT_STATUS.IDLE))
        } catch (err) {
            dispatch(setStatus(PRODUCT_STATUS.ERROR));
        }
    };
}