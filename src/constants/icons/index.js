import { HiThumbUp, HiTranslate } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";

export const ThumbsUp = ({ className }) => {
  return <HiThumbUp className={className} />;
};

export const AverageVote = ({ className }) => {
  return <AiFillStar className={className} />;
};

export const Cross = ({ className }) => {
  return <FaRegTimesCircle className={className} />;
};

export const Language = ({ className }) => {
  return <HiTranslate className={className} />;
};
