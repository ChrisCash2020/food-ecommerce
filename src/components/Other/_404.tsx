// a component for when something is not found
const _404 = ({
  img,
  alt,
  text,
  scale,
}: {
  img: string;
  alt: string;
  text: string;
  scale?: boolean;
}) => {
  return (
    <>
      <img
        loading='lazy'
        className={`h-[340px] mt-5 mb-3 ${scale && 'scale-125'}`}
        src={img}
        alt={alt}
      ></img>
      <p
        className={`text-textColor ${
          scale && 'mt-5'
        }  mb-5 text-center font-semibold`}
      >
        {text}
      </p>
    </>
  );
};
export default _404;
