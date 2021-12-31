// Boiler:

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


// Challenge:
  //Define propTypes for the Items component to require quantity
  // as a prop and verify that it is of type number.
// Solution:

Items.propTypes = { quantity: PropTypes.number.isRequired };
