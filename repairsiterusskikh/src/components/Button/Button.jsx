import './Button.css'

export default function Button({children, className = "", style = {} }) {
	function Click() {
		console.log("click");
	}
	return <button onClick={Click} className={`Btn ${className}`} 
	style={style}>{children}</button>
	
}