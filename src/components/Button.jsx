function Button(props) {
    // let x=10;
    // write JS here
    return (
        <div className={`px-5 py-2 text-white border-2 border-red-500 inline ${props.bgcolor} `}>
            {props.text}
        </div>
    )
}

export default Button