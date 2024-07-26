





const Search = () => {



    const handleClick = () => {
        console.log("click")
        
    }

  return (
    
    <div className="container p-2">
      <div className=" bg-dark p-2 gap-3">
        <input className="col-md-5 rounded p-1"  type="text" placeholder="Buscar..."  />
        <button  className="btn btn-secondary col-md-2 p-1" onClick={handleClick}  type="button">Buscar</button>
      </div>
    </div>
  )
}

export default Search