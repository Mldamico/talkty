import { useField } from "formik";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

export const DateInput = (props: Partial<ReactDatePickerProps>) => {
  const [field, meta, helpers] = useField(props.name!);
  return (
    <div className="flex flex-col">
      <DatePicker
        className={`${
          meta.touched && !!meta.error
            ? "bg-red-100 border-red-700"
            : "bg-white border-gray-300"
        } py-1 px-2 my-1 rounded-lg border outline-none w-full`}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error ? (
        <p className="px-2 py-1 mb-1 text-sm font-light text-red-700 bg-red-100 border border-red-700">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
