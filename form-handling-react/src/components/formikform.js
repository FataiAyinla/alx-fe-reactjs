import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// ✅ Formik form component
export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Formik Form Submitted:", values);
        alert("Formik registration successful!");
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-700 text-center">
          Formik & Yup Form
        </h2>

        <div>
          <label className="block mb-1 font-medium text-sm">Username</label>
          <Field
            type="text"
            name="username"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Email</label>
          <Field
            type="email"
            name="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Password</label>
          <Field
            type="password"
            name="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          className="mt-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}
