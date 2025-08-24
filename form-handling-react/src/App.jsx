import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikform";

function App() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">React Form Handling</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Controlled Components</h2>
        <RegistrationForm />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Formik + Yup</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
