import { Logo } from "../../Components/Logo/Logo";
import { LoginBox } from "../../Components/LoginBox/LoginBox";

import "./Login.css";

export const Login = () => {
	return (
		<div className="login-container">
			<Logo />
			<LoginBox />
		</div>
	);
};
