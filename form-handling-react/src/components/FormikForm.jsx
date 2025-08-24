import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        alert("Formik Form Submitted Successfully!");
        resetForm();
      }}
    >
      {() => (
        <Form className="space-y-4 border p-4 rounded-md">
          <div>
            <label className="block">Username</label>
            <Field type="text" name="username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>
          <div>
            <label className="block">Email</label>
            <Field type="email" name="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div>
            <label className="block">Password</label>
            <Field type="password" name="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
