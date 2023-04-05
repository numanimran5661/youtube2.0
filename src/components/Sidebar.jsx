import { Stack } from "@mui/material"

import { categories } from "../utils/constants"

const selectedCategory = 'New'

const Sidebar = ({ selectedCategory, setSelectedCategory }) =>  (
    <Stack direction="row" sx={{ overflow: 'auto', height: { sx: 'auto', md: '95%'}, flexDirection: 'column'}}>
      {categories.map((category) => (
        <button className="category-btn" style={{ background: category.name === selectedCategory && '#fc1503', color: '#fff'}} onClick={() => setSelectedCategory(category.name)}>
          <span style={{ color: category.name === selectedCategory ? 'white': 'red', marginRight: '15px'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )

export default Sidebar
