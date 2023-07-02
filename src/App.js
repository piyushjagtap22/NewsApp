import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {

 const pageSize = 8
 const apiKey = process.env.REACT_APP_NEWS_API_KEY_YES
const apiKeyIn = process.env.REACT_APP_NEWS_API_IN_KEY
  const [progress,setProgress] = useState(0);
  

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />

          <Routes>

            <Route exact path="/" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/Business" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/Entertainment" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/Health" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/Sports" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/Technology" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
            <Route exact path="/Science" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />

          </Routes>
        </Router>
      </div>

    )
  }

