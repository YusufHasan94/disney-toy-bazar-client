import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#6a24e2" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={false}></Navigate>;
};

export default Private;