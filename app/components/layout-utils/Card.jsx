import { ImageInput } from '../../layout-utils/ImageInput';

export function ImageInput({ width = 790.839, height = 867 }) {
    let imageUrl = '/Image-input.png';

    return (
        <Image
            src={imageUrl}
            alt="Input Image"
            width={width}
            height={height}
        />
    )
}