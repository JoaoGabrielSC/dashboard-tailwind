import { IconType } from "react-icons";


export interface CardProps {
  data: {
    title: string;
    icon: IconType;
    count: number;
    bgColor: string;
  };
}
