import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Landing/Home"
import AppPage from "./components/AppPage/AppPage"
import Form from "./components/C-Form/Form"
import Contact from "./components/Contact/Contact"

function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="app" element={<AppPage />} />
        <Route path="form" element={<Form />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
