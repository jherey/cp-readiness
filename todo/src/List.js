import React from "react";

const List = props => {
	return (
		<div>
			<ul>{props.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
		</div>
	);
};

export default List;
