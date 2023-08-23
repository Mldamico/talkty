import { ErrorMessage, Form, Formik } from "formik";
import { Input } from "../../app/common/form/Input";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

export const RegisterForm = observer(() => {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{
        displayName: "",
        username: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .register(values)
          .catch((_) => setErrors({ error: "Invalid email or password" }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="" onSubmit={handleSubmit} autoComplete="off">
          <h2 className="mb-2 text-2xl text-center text-blue-600">
            Sign up to Talkty
          </h2>
          <Input placeholder="Display Name" name="displayName" />
          <Input placeholder="Username" name="username" />
          <Input placeholder="Email" name="email" />
          <Input placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <p className="inline-block px-2 my-1 text-red-600 bg-white border-2 border-red-600 rounded-md">
                {errors.error}
              </p>
            )}
          ></ErrorMessage>
          <button
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}
            className="container py-1 mt-2 text-white bg-blue-500 rounded-lg shadow-lg"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
});
