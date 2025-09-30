/**
 * Node modules
 */
import type { FC } from "react";
/**
 * Components
 */
import Image from "./Image";
/**
 * Interfaces
 */
interface InfoCardProps {
  image: string;
  title: string;
  description: string;
};

const InfoCard: FC<InfoCardProps> = ({ image, title, description }) => {
  return (
    <div className="info-card">
      <Image src={image} alt={title} width="w-20 md:w-24" height="h-20 md:h-24" classes="mx-auto rounded-lg" />
      <h2 className="text-xl font-bold text-center my-3">{title}</h2>
      <p className="text-gray-400 text-center text-sm">{description}</p>
    </div>
  )
}

export default InfoCard;