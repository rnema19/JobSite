/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {Route,createBrowserRouter,createRoutesFromElements,
RouterProvider} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPages from './pages/JobsPages'
import NotFound from './pages/NotFound'
import {Jobpage,jobLoader} from './pages/Jobpage'
import AddJobPage from './pages/AddJobPage'

// const PORT = process.env.PORT('0.0.0.0')

const App = () => {
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'post',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newJob)
    })
    console.log(newJob)
    return
  }


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPages/>} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<Jobpage/>} loader={jobLoader}/>
      <Route path='*' element={<NotFound/>} />
    </Route>
    )
)


  return (    
      <RouterProvider router={router}/>        
  )
}
export default App
