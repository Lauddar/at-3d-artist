import { Title } from './Title'
import { ImageInput } from '../../layout-utils/ImageInput';


export function HomeBanner() {
    return (
        <section className="flex justify-between">
            <div className="pl-16 pt-28"><ImageInput width='500' height='500' /></div>
            <Title title='Albert Toll' subtitle='3D Artist' description='Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.' />
        </section>
    )
}