import { ApolloQueryResult, OperationVariables } from "@apollo/client";

interface Session {
    getCurrentUser: {
        email: string;
        username: string;
        joinDate: string;
    }
}


export interface RouteComponentProps {
    path?: string;
    default?: boolean;
    username?: string;
    uri?: string;
    session?: Session;
    refetch?: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>
    setLogoutPressed?: React.Dispatch<React.SetStateAction<boolean>>
}