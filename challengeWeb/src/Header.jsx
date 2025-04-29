import './header.css'

function App() {
  return (
    <>
      <div className="header bg-blue-700 text-black p-4 text-2xl flex justify-between items-center">
        <h2 className='text-white font-semibold'>Totem<span className='text-black font-bold'>AI</span></h2>
        <div className="links text-lg flex gap-3 text-white">
            <p><a href="">Desafios</a></p>
            <p><a href="">Soluções</a></p>
            <p><a href="">Objetivo</a></p>
        </div>
      </div>
    </>
  )
}

export default App