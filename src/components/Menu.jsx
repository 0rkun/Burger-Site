import "../styles/Menu.css";
import MenuItem from "./MenuItem";
import { Data } from "./helpers/Data";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              image={menuItem.image}
              content={menuItem.content}
              name={menuItem.name}
              price={menuItem.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
