import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Welcome to Study Vibes!</h1>
      <h2>Sign-In</h2>
      <SignUpForm setUser={setUser} />
      <h2>Login</h2>
      <LoginForm setUser={setUser} />
    </main>
  )
}

export default AuthPage;