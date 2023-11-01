const Increment = (props) => {
    return (
        <button
            onClick={() => {
                props.setCounter(props.counter + 1);
            }}
        >
            Increment
        </button>
    );
};

export default Increment;
