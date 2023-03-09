import React, {Dispatch, SetStateAction, useContext, useState} from 'react';

export interface IUserProvider {
    myState: string
    setMyState: Dispatch<SetStateAction<string>>
}

const defaultUserProvider:IUserProvider = {
    myState : 'transparent',
    setMyState: ()=>{},
}



const UserContext = React.createContext<IUserProvider>(defaultUserProvider);

export const useUserContext = () => useContext(UserContext)

export default function UserProvider({ children }:any) {
    const [myState, setMyState] = useState('transparent');
    const value = {
        myState,
        setMyState
    };

    return(
        <>
            <UserContext.Provider value={value}>
                {/*{isUserReady ? children : <></>}*/}
                {children}
            </UserContext.Provider>
        </>
    );
}