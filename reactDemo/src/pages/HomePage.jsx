import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import Viewjobs from '../components/Viewjobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Homecards/>
    <JobListings isHome={true}/>
    <Viewjobs/>
    </>
  )
}
export default HomePage