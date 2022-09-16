import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'


const Titulares = () => {
    const { id } = useParams();
    return (
        <div>
            <ItemDetailContainer />
        </div>
    )
}

export default Titulares