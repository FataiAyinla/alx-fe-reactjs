import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered with Formik:", data);
      alert("Registration successful!");
      resetForm();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-4 p-4 border rounded w-80">
        <h2 className="text-xl font-bold">Register with Formik</h2>

        <div>
          <Field name="username" placeholder="Username" className="border p-2 w-full" />
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
