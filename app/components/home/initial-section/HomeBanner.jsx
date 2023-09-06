import { ImageInput } from '../../layout-utils/ImageInput'
import { Changa_One } from 'next/font/google'
import { CapsuleScene } from '../../3d-assets/3d-scenes/CapsuleScene';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function HomeBanner({ title, subtitle, description }) {
    return (
        <>
            <div className="h-[1700px] w-full absolute top-0 left-0 bg-secondary "></div>
            <div className="h-screen w-full absolute top-0 left-0 bg-transparent z-50"><CapsuleScene /></div>
            <section className="h-[1700px] w-full absolute top-0 left-0 padding-default ">
                <div className='sticky top-0 right-0 text-white mr-16 text-right title-position z-30'>
                    <p className='mr-0 ml-auto w-1/3'>{description}</p>
                    <h1 className={`text-8xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                    <h2 className={`text-6xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
                </div>
            </section >
        </>
    )
}