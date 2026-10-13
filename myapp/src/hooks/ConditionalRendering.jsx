function ContionalRendering(){
    const isLoggedIn = false
    const hasNotification = false


    return(
        <>
        {isLoggedIn? <h1>Welcome user</h1>
        :<h1>Please Login</h1>    
    }

    {hasNotification && <p>you have unread notification</p>}
        </>
    );
}

export default ContionalRendering