export default function Login() {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/profile"; // redirect after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
