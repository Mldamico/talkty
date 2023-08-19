import { ErrorMessage, Form, Formik } from "formik";
import { Input } from "../../app/common/form/Input";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export const LoginForm = observer(() => {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch((_) => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="" onSubmit={handleSubmit} autoComplete="off">
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
            disabled={isSubmitting}
            className="container py-1 mt-2 text-white bg-blue-500 rounded-lg shadow-lg"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
});
