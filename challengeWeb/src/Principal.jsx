import './header.css'
import imagem from './assets/Totem.png'
function Principal() {
    return (
      <>
        <div className="conteudo p-4 flex flex-col gap-5">
            <div className="title flex flex-col p-4 font-semibold items-center">
                <span className='text-2xl'>Valorize seu tempo</span>
                <span className='text-3xl'>Utilize o Totem<span className='text-blue-700'>AI</span></span>
            </div>
            <div className="text text-center flex flex-col gap-4">
                <p>O TotemAi é um projeto universitário que tem como principal
                objetivo a otimização de tempo e o aumento na eficiencia e
                agilizade de processos oferecidos e executados pelo Hospital Sabará.</p>
                <p>Todo o processo e ideia serão demonstrados e aplicados atraves do uso da tecnologia, com automação e programação, visando a efiencia e a comunicação entre hospital e paciente.</p>
            </div>
            <div className="image">
                <img src={imagem} alt="" />
            </div>
        </div>
      </>
    )
  }
  
  export default Principal