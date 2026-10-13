// props = {
//     name: "Vignesh",
//     marks: 430
// }


// function Contact(props){
function Contact({name, mark}){
    return(
        <>
        <h1>Contact page is working </h1>
        {/* <h1>Welcome {props.name} you scored {props.mark} marks</h1> */}
          <h1>Welcome {name} you scored {mark} marks</h1>
        </>
    );
}

export default Contact