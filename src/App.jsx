import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import './App.css'

const menuVideo = "https://res.cloudinary.com/dec3kly9b/video/upload/q_auto/f_auto/v1775852101/Mainn_small_e3vyod.mp4"
const main1 = "https://res.cloudinary.com/dec3kly9b/video/upload/q_auto/f_auto/v1775851533/main2_wn48ya.mp4"
const main2 = "https://res.cloudinary.com/dec3kly9b/video/upload/q_auto/f_auto/v1775851533/main2_wn48ya.mp4"
const main3 = "https://res.cloudinary.com/dec3kly9b/video/upload/q_auto/f_auto/v1775851516/main3_dchkuc.mp4"

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => {
        if (page === 'github') {
          window.open('https://github.com/un1xpected', '_blank')
        } else {
          navigate(`/${page}`)
        }
      }} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage src={main2} /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
