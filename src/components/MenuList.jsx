import PropTypes from 'prop-types';
import MenuItem from "./MenuItem";
import React from "react";


const MenuList = ({ lists, handleCart, button }) => {
  return (
    <section>
      <div className="flex flex-col gap-5 items-center mb-3">
        {lists && lists.map(dish => (
          <React.Fragment key={dish.id}>
            <MenuItem dish={dish} handleCart={handleCart} button={button} quantity={dish.quantity} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

MenuList.propTypes = {
  lists: PropTypes.any,
  handleCart: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired
};

export default MenuList