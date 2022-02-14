import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Sign-In</h1>
      <SignUpForm setUser={setUser} />
      <h1>Log-In</h1>
      <LoginForm setUser={setUser} />
    </main>
  )
}

export default AuthPage;