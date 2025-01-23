import Image from "next/image";
import { FC } from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapperClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

const ImageComponent: FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  wrapperClassName = "",
  imageClassName = "",
  priority = false,
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
};

export default ImageComponent;
