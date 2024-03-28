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