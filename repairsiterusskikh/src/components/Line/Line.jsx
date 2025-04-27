import './Line.css'

export default function Line({ className = "", style = {} }) {
	return (
	  <div 
		 className={`Line ${className}`} 
		 style={style}
	  ></div>
	);
 }