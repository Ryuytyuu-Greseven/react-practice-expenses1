import Card2 from "../../UI/Card/Card2";

import calsses from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card2 className={calsses.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card2>
  );
};

export default UsersList;
