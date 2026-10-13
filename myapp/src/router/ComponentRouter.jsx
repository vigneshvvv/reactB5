import {BrowserRouter, Routes, Route, Link} from "react-router" 
import Home from "../sampleComponent/Home";
import StateFile from "../hooks/StateFile";
import UseEffectHook from "../hooks/UseEffectHook";

function ComponentRouter(){
    return(
        <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" >Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            {/* <nav>
                <Link to="/">Home</Link>{"|"}
                <Link to="/Product">Product</Link>{"|"}
                <Link to="/contact">Contact</Link>
            </nav> */}

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Product" element={<StateFile/>}></Route>
                <Route path="/contact" element={<UseEffectHook/>}></Route>
            </Routes>
        
        </BrowserRouter>


    );
}

export default ComponentRouter;