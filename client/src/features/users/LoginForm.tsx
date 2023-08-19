import { Form, Formik } from "formik";
import { Input } from "../../app/common/form/Input";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export const LoginForm = observer(() => {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => userStore.login(values)}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="" onSubmit={handleSubmit} autoComplete="off">
          <Input placeholder="Email" name="email" />
          <Input placeholder="Password" name="password" type="password" />
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
