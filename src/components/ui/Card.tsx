interface Props {
  image?: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: Props) => {
  return (
    <div
      className={
        "w-32 h-32 bg-zinc-500 rounded-md relative overflow-clip px-2 py-4 flex items-end"
      }
    >
      {image && (
        <img
          src={image}
          alt="Card image"
          className="absolute left-0 top-0 w-full h-full"
        />
      )}
      <div className="z-30">
        <p className="text-zinc-50 font-600">{title}</p>
        <p className="text-sm text-zinc-300">{description}</p>
      </div>
      <div className="bg-linear-to-t from-zinc-900 to-transparent h-11/12 w-full absolute bottom-0 left-0 right-0 z-20" />
    </div>
  );
};

export default Card;
