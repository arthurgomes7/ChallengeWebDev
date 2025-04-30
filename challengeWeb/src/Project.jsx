import './header.css'
import triagem from './assets/TriagemRápida.png'
import ficha from './assets/FichaRápida.png'

function Project(){
    return(
        <>
        <div className="solucoes p-6 flex flex-col gap-8 xl:flex-row">
            <div className="Triagem border-4 border-blue-700 p-3 rounded-2xl sm:flex md:flex flex-row xl:flex-row-reverse gap-4">
                <div className="texts flex flex-col justify-center gap-6">
                    <h2 className='font-semibold text-2xl text-center py-2 sm:text-start md:text-3xl'>
                        Triagem Rápida
                    </h2>
                    <p className='text-center py-3 sm:text-base text-start md:text-start text-xl'>O totem faz perguntas simples e objetivas sobre os sintomas do paciente, coletando as informações necessárias para encaminhá-lo à especialidade correta.
                    Isso torna o processo mais rápido, organizado e eficiente, mesmo sem a presença imediata de um profissional de saúde. O paciente consegue ser direcionado com mais agilidade, diminuindo o tempo de espera e ajudando o hospital a organizar melhor o fluxo de atendimento.</p>
                </div>
                <img src={triagem} alt="Modelo de Página de Triagem" className='rounded-2xl sm:w-64 md:w-64'/>
            </div>
            <div className="Ficha border-4 border-blue-700 p-3 rounded-2xl sm:flex md:flex flex-row xl:flex-row-reverse gap-4">
                <div className="texts flex flex-col justify-center gap-6">
                    <h2 className='font-semibold text-2xl text-center py-2 sm:text-start md:text-3xl'>
                        Ficha Rápida
                    </h2>
                    <p className='text-center py-3 sm:text-base text-start md:text-start text-xl'>Ao inserir o CPF, os dados do paciente são carregados automaticamente, evitando erros e agilizando o processo.
                    O paciente precisa apenas confirmar ou complementar as informações e escolher a especialidade desejada. Isso torna o processo mais rápido e reduz o estresse logo na chegada ao hospital.</p>
                </div>
                <img src={ficha} alt="Modelo de Página de Triagem" className='rounded-2xl sm:w-64 md:w-64'/>
            </div>
        </div>
        </>
        )
}
export default Project