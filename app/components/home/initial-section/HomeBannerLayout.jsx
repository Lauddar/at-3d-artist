import { Changa_One } from 'next/font/google'
import { HomeBannerContent } from './HomeBannerContent';
import { CapsuleScene } from '../../3d-assets/3d-scenes/CapsuleScene';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function HomeBanner({ title, subtitle, description }) {
    return (
        <>
            <div className="h-screen w-full absolute top-0 left-0 bg-gray-800 -z-10"></div>
            <HomeBannerContent title={title} subtitle={subtitle} description={description} />
        </>
    )
}