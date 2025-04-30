import './header.css'
import imagem from './assets/Totem.png'
function Principal() {
    return (
      <>
        <div className="conteudo px-4 flex flex-col gap-5 sm:flex-row md:flex-row p-8 2xl:px-64 py-32 justify-around">
            <div className="text-main flex flex-col gap-5 md:items-start">
              <div className="title flex flex-col font-semibold items-center sm:items-start p-4 md:items-start">
                  <span className='text-3xl md:text-4xl'>Valorize seu tempo</span>
                  <span className='text-3xl md:text-4xl'>Utilize o Totem<span className='text-blue-700'>AI</span></span>
              </div>
              <div className="text text-center flex flex-col gap-4 sm:text-start p-4 md:text-left text-lg">
                  <p>O TotemAi é um projeto universitário que tem como principal
                  objetivo a otimização de tempo e o aumento na eficiencia e
                  agilizade de processos oferecidos e executados pelo Hospital Sabará.</p>
                  <p>Todo o processo e ideia serão demonstrados e aplicados atraves do uso da tecnologia, com automação e programação, visando a efiencia e a comunicação entre hospital e paciente.</p>
              </div>
              <div className="p-4 gap-5 flex justify-center md:justify-start px-8 xl:justify-center">
                <button className='bg-blue-700 p-3 text-white rounded-xl xl:text-xl'>Desafios</button>
                <button className='bg-blue-600 p-3 text-white rounded-xl xl:text-xl'>Soluções</button>
                <button className='bg-blue-500 p-3 text-white rounded-xl xl:text-xl'>Objetivo</button>
              </div>
            </div>
            <div className="image">
                <img src={imagem} alt="" />
            </div>
        </div>
      </>
    )
  }
  
  export default Principal