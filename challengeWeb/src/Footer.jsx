import './header.css'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'

function Footer(){
    return(
        <>
            <div className="footer flex flex-col p-4 items-center gap-3 bg-blue-700 rounded-t-4xl">
                <h2 className='text-white text-xl font-bold links'>TotemAI</h2>
                <div className="links flex flex-col gap-2 sm:flex-row gap-6 items-center">
                    <div className="flex gap-3">
                        <p className='text-white links'>Desafios</p>
                        <p className='text-white links'>Soluções</p>
                        <p className='text-white links'>Objetivos</p>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <img src={instagram} alt="" className='w-8'/>
                        <img src={facebook} alt="" className='w-8'/>
                        <img src={twitter} alt="" className='w-8'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer