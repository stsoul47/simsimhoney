import {Routes, Route, useLocation} from "react-router";
import {Main, TestPages} from "@pages/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/test" element={ <TestPages /> }/>
    </Routes>
  );
}

export default App;