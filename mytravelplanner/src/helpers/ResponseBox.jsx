const ResponseBox =({res, onClose})=>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="response transition delay-800 ease-in-out bg-white relative rounded-md shadow-lg mx-w-lg mx-auto p-3">
            <button
          className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
               
              {res?<div className="err"> <h1 className="text-center text-5xl">&#128566;</h1>
                <h2 className="text-center">OH Man Not happing!!!<br/> <strong>{res}</strong></h2>
                </div>:
                 <div className="success">
                <h1 className="text-center text-5xl">&#128591;</h1>
                <h2 className="text-center">thank you for <br/> <strong>Submission</strong></h2>
                </div>
                }
            </div>
            
        </div>
    )
}

export default ResponseBox;