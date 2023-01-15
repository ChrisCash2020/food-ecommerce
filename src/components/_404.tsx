const _404 = ({
  img,
  alt,
  text,
  scale,
}: {
  img: string
  alt: string
  text: string
  scale?: boolean
}) => {
  return (
    <>
      <img
        className={`h-[340px] mt-5 mb-3 ${scale && 'scale-125'}`}
        src={img}
        alt={alt}
      ></img>
      <p className='text-textColor mb-5 text-center font-semibold'>{text}</p>
    </>
  )
}
export default _404
