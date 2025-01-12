import "./Error.css";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err.error.message);
    console.log(err.error.stack)
    
  return (
    <div>
      {" "}
          <h1 className="ErrorCss">Oops!! { err.status}🚀</h1>
      <h2 className="ErrorCss">
        Something went wrong in the routing please check the routing URL
      </h2>
      <h3 className="ErrorClassNew">{err.error.message}</h3>
      <h5 className="ErrorClassNew">{err.error.stack}</h5>
    </div>
  );
};

export default Error;
