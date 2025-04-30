import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Principal from './Principal.jsx'
import Project from './Project.jsx'
import DiagnosticoSimples from './Example.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Principal></Principal>
    <Project></Project>
    <DiagnosticoSimples></DiagnosticoSimples>
    <Footer></Footer>
  </StrictMode>,
)
