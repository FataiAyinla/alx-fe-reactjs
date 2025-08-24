import FormikForm from "./components/formikForm";

import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // lowercase file

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;

