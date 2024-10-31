import Image, { StaticImageData } from 'next/image'

const ImageIso = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="100vw"
      width={0}
      height={0}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}

export default ImageIso
