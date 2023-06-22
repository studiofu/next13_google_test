import exp from "constants"
import { useSession } from "next-auth/react";
import SampleModel from "./SampleModel";

const Dummy = () => {

    const { data: session } = useSession();
    
    return (
        
        <div>
            <SampleModel />
            <h1>{JSON.stringify(session)}</h1>
            <h2>h2 h2 h2 h2</h2>
        </div>
    )
}

export default Dummy
;