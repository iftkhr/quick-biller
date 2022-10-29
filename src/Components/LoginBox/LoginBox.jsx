import "./LoginBox.css";

export const LoginBox = () => {
	return (
		<div className="loginbox-container">
			<div className="loginbox-header">Welcome! Log in below!</div>
			<form action="dashboard" method="" id="loginbox-form">
				<div className="form-email">
					<label for="email">E-mail:</label>
					<input type="text" id="email" value="adithya@gmail.com" />
				</div>
				<div className="form-password">
					<label for="password">Password:</label>
					<input type="password" id="password" value="hello123" />
				</div>
				<button className="form-button">Login</button>
			</form>
		</div>
	);
};
