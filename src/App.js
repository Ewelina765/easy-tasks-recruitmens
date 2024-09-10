import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ItemTask from "./components/zadaniePiotrDul/ItemTask";
import TodoApp from "./components/todoApp/TodoApp";
import Counter from "./components/counter/Counter";
import FilterPeople from "./components/filterPeople/FilterPeople";
import FormExample from "./components/form/FormExample";
import Fetch from "./components/fetching/Fetch";
import ThemeSwitcher from "./components/dynamicStyles/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Carousel from "./components/fotoCarousel/Carousel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/dynamicStyles" element={<ThemeSwitcher />} />
        <Route path="/fetching" element={<Fetch />} />
        <Route path="/filterPeople" element={<FilterPeople />} />
        <Route path="/simpleForm" element={<FormExample />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/zadanieMentor" element={<ItemTask />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </Router>
  );
}

export default App;
