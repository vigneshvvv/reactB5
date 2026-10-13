import Contact from "../contactComponent/Contact";

function Home(){

    const name= "Vignesh"
    const mark = 430

    return(
        <>
        <h1>Home page</h1>
        <h1>Welcome to sample page</h1>
        {/* <Contact name="Vignesh" mark = {430}/> */}
        <Contact name={name} mark = {mark}/>
        </>
    );
    
}

export default Home