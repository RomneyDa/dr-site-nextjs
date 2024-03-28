
export const THEME_COLOR = "#121621" // rgb(18, 22, 33) // hsl(224, 29%, 10%)

export const S3_BUCKET_URL = "https://s3.us-west-1.amazonaws.com/dallinromney.com/"

export const s3FileUrl = (file: string) => `${S3_BUCKET_URL}${file}`

export const RESUME_LINK = s3FileUrl("resume-dallin-romney.pdf")

export const CONTACT_LINK = "mailto:dallin@thunklab.com"