import "./LoginBox.css";

export const LoginBox = () => {
	return (
		<div className="loginbox-container">
			<div className="loginbox-header">Welcome! Log in below!</div>
			<form action="/dashboard" method="" id="loginbox-form">
				<div className="form-email">
					<label htmlFor="email">E-mail:</label>
					<input
						type="text"
						id="email-field"
						value="email@domain.com"
						className="login-field"
					/>
				</div>
				<div className="form-password">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password-field"
						value="hello123"
						className="login-field"
					/>
				</div>
				<button className="form-button">Login</button>
			</form>
		</div>
	);
};
