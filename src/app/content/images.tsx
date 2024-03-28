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

export const Bottles1 = S3Image({
    src: 'bottles-1.jpeg',
    alt: 'Bottles',
    width: 1179,
    height: 1143
})

export const Bottles2 = S3Image({
    src: 'bottles-2.jpeg',
    alt: 'Bottles',
    width: 1179,
    height: 1168
})

export const Bottles3 = S3Image({
    src: 'bottles-3.jpeg',
    alt: 'Bottles',
    width: 1179,
    height: 1165
})

export const TechnicalDetails = S3Image({
    src: 'ficha-tecnica.png',
    alt: 'Ficha Tecnica',
    width: 1179,
    height: 1465
})

export const Friends = S3Image({
    src: 'friends.png',
    alt: 'Friends',
    width: 888,
    height: 1024
})

export const Grapes1 = S3Image({
    src: 'grapes-1.png',
    alt: 'Grapes',
    width: 1200,
    height: 1600
})

export const Grapes2 = S3Image({
    src: 'grapes-2.png',
    alt: 'Grapes',
    width: 1200,
    height: 1600
})

export const Grapes3 = S3Image({
    src: 'grapes-3.png',
    alt: 'Grapes',
    width: 1200,
    height: 1600
})

export const Logo = S3Image({
    src: 'logo.png',
    alt: 'Logo',
    width: 392,
    height: 392
})

export const LogoFull = S3Image({
    src: 'logo-full.png',
    alt: 'Logo',
    width: 1179,
    height: 1344
})

export const ProductBlack = S3Image({
    src: 'product-black.png',
    alt: 'Pisco Toromata',
    width: 1179,
    height: 648
})

export const ProductRed = S3Image({
    src: 'product-red.png',
    alt: 'Pisco Toromata',
    width: 1179,
    height: 1092
})

// export const S3Image = ({ src, ...props }: S3ImageProps) => <Image {...props} src={s3ImageUrl(src)} />
// export const Bottles1 = () => <S3Image src='bottles-1.jpeg' alt='bottles' width={1179} height={1143} />
