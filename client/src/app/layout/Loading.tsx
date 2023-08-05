import { InfinitySpin } from "react-loader-spinner";

interface LoadingProps {
  content?: string;
}

export const Loading = ({ content = "Loading..." }: LoadingProps) => {
  return (
    <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
      <InfinitySpin width="200" color="blue" />
      <span className="flex justify-center">{content}</span>
    </div>
  );
};
