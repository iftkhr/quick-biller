import "./Logo.css";

export const Logo = ({ size }) => {
	if (size === "small") {
		return (
			<div className="logo-container">
				<div className="logo logo-small">QB</div>
			</div>
		);
	} else {
		return (
			<div className="logo-container">
				<div className="logo">QuickBiller</div>
				<div className="tagline">billed different!</div>
			</div>
		);
	}
};
