interface Props {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

function EmptyState({
  title,
  description,
  imagePath,
  imageAlt,
  ...props
}: Props) {
  return (
    <div
      className="flex flex-col justify-center max-w-[240px] mx-auto"
      {...props}
    >
      <img className="mb-10" src={imagePath} alt={imageAlt} />

      <div className="text-center">
        <h3 className="font-bold text-lg mb-6 text-brand-text dark:text-brand-white">
          {title}
        </h3>
        <p className="font-medium text-sm text-brand-text-muted dark:text-brand-violet-highlight">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
