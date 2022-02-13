import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Sign-In | Log-In</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  )
}

export default AuthPage;