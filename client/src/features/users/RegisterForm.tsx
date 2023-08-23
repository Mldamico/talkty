import { ErrorMessage, Form, Formik } from "formik";
import { Input } from "../../app/common/form/Input";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";
import { ValidationError } from "../errors/ValidationError";

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
        userStore.register(values).catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="error" onSubmit={handleSubmit} autoComplete="off">
          <h2 className="mb-2 text-2xl text-center text-blue-600">
            Sign up to Talkty
          </h2>
          <Input placeholder="Display Name" name="displayName" />
          <Input placeholder="Username" name="username" />
          <Input placeholder="Email" name="email" />
          <Input placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => <ValidationError errors={errors.error} />}
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
