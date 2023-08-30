import { ImageInput } from '../../layout-utils/ImageInput'
import { Changa_One } from 'next/font/google'
import { CapsuleScene } from '../../3d-assets/CapsuleScene'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function HomeBanner({ title, subtitle, description }) {
    return (
        <>
            <div className="h-[1700px] w-full absolute top-0 left-0 -z-50 bg-secondary"></div>
            <section className="h-[1700px] w-full absolute top-0 right-0 padding-default">
                <div class="fixed w-full h-screen top-0 right-0 bg-yellow-500"><CapsuleScene /></div>
                <div className='fixed right-24 text-white text-right title-position'>
                    <p className='text-lg w-1/3 leading-normal mr-0 ml-auto'>{description}</p>
                    <h1 className={`text-9xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                    <h2 className={`text-7xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
                </div>
            </section >
        </>
    )
}