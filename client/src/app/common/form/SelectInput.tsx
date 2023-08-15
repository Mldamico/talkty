import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  options: any;
  label?: string;
}

export const SelectInput = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <select
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
        onChange={(event) => helpers.setValue(event?.target.value)}
        className={`${
          meta.touched && !!meta.error
            ? "bg-red-100 border-red-700"
            : "bg-white border-gray-300"
        } py-1 px-2 my-1 rounded-lg border outline-none`}
      >
        {props.options.map((option: any) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <p className="px-2 py-1 mb-1 text-sm font-light text-red-700 bg-red-100 border border-red-700">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
