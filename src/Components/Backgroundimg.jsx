
function Backgroundimg({imageUrl,children}){
    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>{children}</div>
        </>
    )
}

export default Backgroundimg