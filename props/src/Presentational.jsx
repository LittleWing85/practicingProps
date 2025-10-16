function Presentational(props) {
    return (
        <div>
            <h1>Engines are {props.active ? "ON" : "OFF"}</h1>
            <button onClick={() => props.toggle(!props.active)}>
                Engine Toggle
            </button>
        </div>
    );
}

export default Presentational;
