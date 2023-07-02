import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {

 const pageSize = 8
 const apiKey = process.env.REACT_APP_NEWS_API_KEY_YES
const apiKeyIn = process.env.REACT_APP_NEWS_API_IN_KEY2
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

            <Route exact path="/" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="General" head="General" pageSize={pageSize} country="india" category="india_english" />} />
            <Route exact path="/World" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="World" head="World" pageSize={pageSize} country="india" category="india_english_world" />} />
            <Route exact path="/Business" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="Business" head="Business" pageSize={pageSize} country="india" category="india_english_business" />} />
            <Route exact path="/Entertainment" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="Entertainment" head="Entertainment" pageSize={pageSize} country="india" category="india_english_entertainment" />} />
            <Route exact path="/Sports" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="Sports" head="Sports" pageSize={pageSize} country="india" category="india_english_sports" />} />
            <Route exact path="/Science&Technology" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="Science&Tech" head="Science & Tech" pageSize={pageSize} country="india" category="india_english_science" />} />
            <Route exact path="/Cryptocurrency" element={<News apiKeyIn={apiKeyIn} apiKey={apiKey} setProgress={setProgress} key="Cryptocurrency" head="Cryptocurrency" pageSize={pageSize} country="india" category="india_english_cryptocurrency" />} />
            
          </Routes>
        </Router>
      </div>

    )
  }

