
import { FilterWraper } from 'components/Filter/Filter.styled'



const Filter = ({ value, onChange}) => {
       return <FilterWraper>
                <label htmlFor='filter'>Find contacts by name</label>
                    <input
               type="text"
               onChange={onChange}
               value={value}
               id='filter'
               style={{maxWidth:'50%' }}
                    />
            </FilterWraper>
} 
   

export default Filter

