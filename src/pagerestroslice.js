import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch Swiggy data
export const Fetchdetails = createAsyncThunk(
  "pagerestroslice/fetchData",
  async (args, thunkAPI) => {
    try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${args}&catalog_qa=undefined&submitAction=ENTER`;
      const response = await fetch(proxyServer + swiggyAPI);
      const givedata = await response.json();

      console.log(givedata);
      return givedata; // ✅ Full raw data returned
    } catch (error) {
      console.error("Fetch failed:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
const slicer2 = createSlice({
  name: "pagerestroslice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetchdetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Fetchdetails.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(Fetchdetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slicer2.reducer;