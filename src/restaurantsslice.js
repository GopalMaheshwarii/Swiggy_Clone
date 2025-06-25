import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch Swiggy data
export const Fetchdata = createAsyncThunk(
  "restaurantsslice/fetchData",
  async (_, thunkAPI) => {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      const response = await fetch(proxyServer + swiggyAPI);
      const givedata = await response.json();

      console.log("Raw Swiggy Data:", givedata);
      return givedata; // ✅ Full raw data returned
    } catch (error) {
      console.error("Fetch failed:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
const slicer1 = createSlice({
  name: "restaurantsslice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetchdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Fetchdata.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(Fetchdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slicer1.reducer;

