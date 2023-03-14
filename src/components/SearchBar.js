import React from "react";

const SearchBar = ({getUserData, setUrlusername}) => {

	const onChange = (e) =>{
		setUrlusername(e.target.value)
	}
	return (
		<div className="input-group">
		<input 
			type="search" 
			className="form-control rounded"
			placeholder="Search" 
			aria-label="Search" 
			aria-describedby="search-addon" 
			onChange={(event) => {onChange(event)}}
			onKeyUp={(event) => {onChange(event)}}
			onPaste={(event) => {onChange(event)}}
		/>
		<button type="button" className="btn btn-outline-primary" onClick={getUserData}>search</button>
		</div>
	);
}

export default SearchBar;
