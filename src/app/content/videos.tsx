import { VideoHTMLAttributes } from 'react'
import { s3FileUrl } from ".";

interface S3SrcProps {
    fileName: string
    height: number
    width: number
    type?: string // e.g. video/mp4
}

export const S3Video = (srcProps: S3SrcProps) => function S3Vid(props: VideoHTMLAttributes<HTMLVideoElement>) {
    // const videoRef = useRef<HTMLVideoElement>(null)
    const { type, fileName, height, width } = srcProps
    const { controls, autoPlay } = props
    const auto = autoPlay === undefined ? !controls : autoPlay

    return (
        <video {...props} autoPlay={auto} loop={auto} muted={auto} height={height} width={width}>
            <source src={s3FileUrl(fileName)} type={type ?? "video/mp4"} />
            Your browser does not support the video tag.
        </video>
    )
}

export const Grapes4 = S3Video({
    fileName: 'grapes-4.mp4',
    height: 848,
    width: 480,
})

export const Grapes5 = S3Video({
    fileName: 'grapes-5.mp4',
    height: 848,
    width: 480,
})

export const Grapes6 = S3Video({
    fileName: 'grapes-6.mp4',
    height: 848,
    width: 480,
})

export const Grapes7 = S3Video({
    fileName: 'grapes-7.mp4',
    height: 848,
    width: 480,
})

export const Grapes8 = S3Video({
    fileName: 'grapes-8.mp4',
    height: 848,
    width: 480,
})

export const Grapes9 = S3Video({
    fileName: 'grapes-9.mp4',
    height: 848,
    width: 480,
})

export const Grapes10 = S3Video({
    fileName: 'grapes-10.mp4',
    height: 848,
    width: 480,
})

export const Grapes11 = S3Video({
    fileName: 'grapes-11.mp4',
    height: 848,
    width: 480,
})

export const Grapes12 = S3Video({
    fileName: 'grapes-12.mp4',
    height: 848,
    width: 480,
})

export const Grapes13 = S3Video({
    fileName: 'grapes-13.mp4',
    height: 480,
    width: 848,
}) 