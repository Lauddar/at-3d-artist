import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function Title({ title, subtitle, description }) {
    return (
        <div className='flex flex-col items-end text-white w-1/2 mr-10 text-right title-position'>
            <p className='text-lg w-2/3'>{description}</p>
            <h1 className={`text-9xl uppercase ${changaOne.className}`}>{title}</h1>
            <h2 className={`text-7xl uppercase ${changaOne.className}`}>{subtitle}</h2>
        </div>
    )
}