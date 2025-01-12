import "./User.css";

const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name: {props.name}</h3>
      <h3>Location: Pune</h3>
          <h4>Contact: abhijitagore2000@gmail.com</h4>
          <h4>Mobile: { props.mobile}</h4>
    </div>
  );
};

export default User;
