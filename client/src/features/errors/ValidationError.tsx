interface Props {
  errors: string[];
}

export const ValidationError = ({ errors }: Props) => {
  return (
    <div className="p-4 my-2 bg-red-100 border border-red-900">
      {errors && (
        <ul className="p-4 font-light text-red-900 list-disc text-md">
          {errors.map((err: string, i: number) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
