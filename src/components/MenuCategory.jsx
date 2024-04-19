import { useSelector } from "react-redux"
import PropTypes from 'prop-types';

const IMAGE = 'https://placehold.co/100x100'

const MenuCategory = ({ setCategory }) => {
  const menu = useSelector(state => state.menu.menu)

  const handleCategory = (category) => {
    setCategory(category.id);
  }

  return (
    <section>
      <div className="flex gap-2 justify-start md:justify-center overflow-x-auto px-5">
        {menu && menu.map(category => (
          <button key={category.id} onClick={() => handleCategory(category)}>
            <div className="text-center min-w-max">
              <img src={IMAGE} alt={category.name} className="rounded-full mb-2 w-24 h-24" />
              <p className="text-xs">{category.name}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

MenuCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default MenuCategory