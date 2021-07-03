import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthState";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />
            }
        />
    );
};

export default PrivateRoute;
