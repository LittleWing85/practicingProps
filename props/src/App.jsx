import { useState } from "react";
import Presentational from "./Presentational";

function App() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <Presentational active={isActive} toggle={setIsActive} />
        </>
    );
}

export default App;
