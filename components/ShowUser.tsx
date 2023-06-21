import { SessionProvider } from "next-auth/react";
import SampleModel from "./SampleModel";

interface ShowUserProps {
    children: React.ReactNode;
}

const ShowUser = ({
    children
} : ShowUserProps ) => {    
    return ( 
           <SessionProvider>

            {children}
           
           </SessionProvider>
    )
}

export default ShowUser;
