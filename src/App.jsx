import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Table from "./routes/Table"
import Menu from "./routes/Menu"
import Cart from "./routes/Cart"
import Admin from "./routes/Admin"
import About from "./routes/About"
import ContactUs from "./routes/ContactUs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App