import { ImageInput } from '../../layout-utils/ImageInput';
import { Changa_One } from 'next/font/google'
import { Scene } from '../../Scene';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function HomeBanner({ title, subtitle, description }) {
    return (
        <>
            <div className="h-[1700px] w-full absolute top-0 left-0 -z-50 bg-secondary"></div>
            <section className="h-[1700px] absolute top-0 margin-default">
                <div className="flex justify-between sticky top-24">
                    <div className="pl-16 pt-28 w-[600px] mb-28"><Scene /></div>
                    <div className='flex flex-col items-end text-white w-1/2 mr-10 text-right title-position'>
                        <p className='text-lg w-2/3 leading-normal'>{description}</p>
                        <h1 className={`text-9xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                        <h2 className={`text-7xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
                    </div>
                </div>
            </section >
        </>
    )
}