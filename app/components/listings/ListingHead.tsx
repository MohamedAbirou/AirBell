"use client";
import useCountries from "@/hooks/useCountries";
import Heading from "../Heading";
import ImageSlider from "../image-slider";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string[];
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <ImageSlider urls={imageSrc} />
      </div>
    </>
  );
};

export default ListingHead;
