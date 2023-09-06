import { Changa_One } from 'next/font/google'
import { CapsuleScene } from '../../3d-assets/3d-scenes/CapsuleScene';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function HomeBanner({ title, subtitle, description }) {
    return (
        <section className="pt-80">
            <div className="h-screen w-screen absolute top-0 left-0 bg-blue -z-10"></div>
            <div className='sticky text-white mr-16 text-right'>
                <p className='mr-0 ml-auto w-[540px] text-lg'>{description}</p>
                <h1 className={`text-9xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                <h2 className={`text-7xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
            </div>
        </section>
    )
}