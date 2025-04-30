import './header.css'

function App() {
  return (
    <>
      <div className="header bg-blue-700 text-black p-4 text-2xl flex justify-between items-center md:px-8">
        <h2 className='text-white font-semibold'>Totem<span className='text-black font-bold'>AI</span></h2>
        <div className="text-lg flex gap-3 text-white md:gap-6 font-normal">
            <p><a href="links" className='links'>Desafios</a></p>
            <p><a href="links" className='links'>Soluções</a></p>
            <p><a href="links" className='links'>Objetivo</a></p>
        </div>
      </div>
    </>
  )
}

export default App