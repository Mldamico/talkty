import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export const Input = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input
        className={`${
          meta.touched && !!meta.error
            ? "bg-red-100 border-red-700"
            : "bg-white border-gray-300"
        } py-1 px-2 my-1 rounded-lg border outline-none`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="px-2 py-1 mb-1 text-sm font-light text-red-700 bg-red-100 border border-red-700">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
