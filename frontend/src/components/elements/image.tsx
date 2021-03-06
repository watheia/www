import Image from "next/image"
import { getStrapiMedia } from "utils/media"

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText } = media

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
  }

  // The image is responsive
  return (
    <Image
      loader={loader}
      layout="responsive"
      width={media.width}
      height={media.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

// Image.propTypes = {
//   media: mediaPropTypes.isRequired,
//   className: PropTypes.string,
// }

export default NextImage
