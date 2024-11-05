import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TeamView from '/routes/TeamView.jsx'
import ViewAllTeams from '/routes/ViewAllTeams.jsx'
import FormATeam from '/routes/FormATeam.jsx'
import EditATeam from '../routes/EditATeam.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index={true} path="/" element={<App />} />
      <Route path="/view" element={<ViewAllTeams />} />
      <Route path="/create" element={<FormATeam />} />
      <Route path="/team/:teamId" element={<TeamView />} />
      <Route path="/edit/:teamId" element={<EditATeam />} />

    </Routes>
  </BrowserRouter>
)
