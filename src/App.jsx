import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar'
import Feeds from './components/Feeds'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feeds />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;