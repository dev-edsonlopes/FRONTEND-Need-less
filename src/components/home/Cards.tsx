import { ComponentProps } from "react";

interface CardsProps extends ComponentProps<"a"> {
  image_url: string;
  alt_text: string;
  children: React.ReactNode;
}

export default function Cards(props: CardsProps) {
  return (
    <a
      {...props}
      className="flex h-[26rem] w-80 flex-col items-center justify-around rounded-lg border-2 border-gray-50 p-3 shadow dark:border-gray-400"
    >
      <img src={props.image_url} alt={props.alt_text} />
      <p className="text-center font-details text-2xl font-bold">
        {props.children}
      </p>
    </a>
  );
}
