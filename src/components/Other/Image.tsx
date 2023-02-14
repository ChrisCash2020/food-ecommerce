import { memo } from 'react';
const Image = memo(function Image({
  src,
  alt,
  classNames,
}: {
  src: string;
  alt: any;
  classNames: string;
}) {
  return <img loading='lazy' className={classNames} alt={alt} src={src} />;
});

export default Image;
