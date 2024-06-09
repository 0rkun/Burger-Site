import PropTypes from "prop-types";

function MenuItem({ name, price, content, image }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>
        <i>{price} TL</i>
      </p>
    </div>
  );
}
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default MenuItem;
