import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import HomeCards from "./Components/HomeCards"
import JobsListings from "./Components/JobsListings"
import ViewAllJobs from "./Components/ViewAllJobs"
const App = () => {
  return (
    <>
    <Navbar />
    <Hero titulo={"Conviertete en un desarrollador de React"} subtitulo={"Encuentra el trabajo de React que se adapte a tus habilidades y necesidades"}/>
    <HomeCards /> 
    <JobsListings />
    <ViewAllJobs />

    </>
  )
}

export default App
