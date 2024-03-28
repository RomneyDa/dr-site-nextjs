import Image, { type ImageProps } from "next/image";
import { s3FileUrl } from ".";

interface ImageSrcProps {
    src: string
    alt: string,
    width: number
    height: number
}

type ImagePropsNoSrc = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>


export const S3Image = ({ src, ...srcProps }: ImageSrcProps) => function S3Img(props: ImagePropsNoSrc) {
    return (
        <Image {...srcProps} {...props} src={s3FileUrl(src)} />
    )
}

export const WorldMap = S3Image({
    src: 'world-map.jpg',
    alt: 'Background',
    width: 2560,
    height: 1600
})

export const Bottles1 = S3Image({
    src: 'portfolio.jpeg',
    alt: 'Bottles',
    width: 1179,
    height: 1143
})