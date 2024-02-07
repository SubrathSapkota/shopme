import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const response = await fetch("http://localhost:5000/product/getallproducts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
});

let allData ={};


const initialState = {
  products: [],
  singleProduct: null,
  isLoading: false,
  isError: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      allData = action.payload.products;

    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
      console.log("Error :", action.payload);
    });
  },
  reducers: {
    setCategory: (state, action) => {
      state.products =allData.filter(
        (product) => product.category === action.payload
      );
    },
    setSingleProduct: (state, action) => {
      state.singleProduct =
      allData.find((product) => product.id === action.payload) || null;
    },
  },
});

export const { setCategory, setSingleProduct } = shopSlice.actions;

export default shopSlice.reducer;
