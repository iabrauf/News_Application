import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
  loading: true,
  news: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchNews = createAsyncThunk('news/fetchNews', async (category) => {
  console.log(category);
  if (category == 'top') {
    const response = await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    return response.data
  }
  else {
    const response_2 = await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    return response_2.data
  }
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false
      state.news = action.payload
      state.error = ''
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false
      state.news = []
      state.error = action.error.message
    })
  }
})

export default newsSlice.reducer