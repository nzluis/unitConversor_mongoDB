import PropTypes from 'prop-types';
import axios from 'axios'

List.propTypes = {
    saved: PropTypes.array,
    setSaved: PropTypes.func
}

export default function List({ saved, setSaved }) {
    const handleClick = async (e, id) => {
        e.preventDefault()
        try {
            await axios.delete(`http://localhost:3000/api/saved/${id}`)
            const response = await axios.get('http://localhost:3000/api/saved')
            setSaved(response.data)
        } catch (error) {
            console.error('Error deleting data', error)
        }
    }

    return (
        <div className="listContainer">
            <h3 className="listTitle">saved</h3>
            <div className="savedResults">
                {saved && saved.map((record) => {
                    return (
                        <div key={record._id} className="resultCard">
                            <p>{record.input} {record.inputMeasure} &#8594; {record.result} {record.resultMeasure}</p>
                            <a href="" onClick={(e) => handleClick(e, record._id)}>
                                <img src="../imgs/iconmonstr-x-mark-lined-240.png" alt="delete_logo" width="12px" height="12px" />
                            </a>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}