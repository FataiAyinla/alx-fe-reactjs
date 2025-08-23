import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
