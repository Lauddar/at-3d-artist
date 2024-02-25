import HomeBannerContent from './HomeBannerContent';
import { CapsuleScene } from '../../3d-assets/3d-scenes/CapsuleScene';

export default function HomeBanner({ title, subtitle, description }) {
    return (
        <>
            <div className="h-screen w-full absolute top-0 left-0 bg-gray-800 -z-10"></div>
            <div className="h-[88.7vh] w-full"></div>
            <HomeBannerContent title={title} subtitle={subtitle} description={description} />
        </>
    )
}