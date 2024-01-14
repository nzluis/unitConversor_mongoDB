import PropTypes from 'prop-types';

export default function List({ saved, setSaved }) {
    const handleClick = (e, index) => {
        e.preventDefault()
        setSaved(currentSaved => currentSaved.filter((record, i) => i != index))
    }

    return (
        <div className="listContainer">
            <h3 className="listTitle">saved</h3>
            <div className="savedResults">
                {saved.map((record, index) => {
                    return (
                        <div key={index} className="resultCard">
                            <p>{record[0]} {record[1]} &#8594; {record[2]} {record[3]}</p>
                            <a href="" onClick={(e) => handleClick(e, index)}>
                                <img src="/public/imgs/iconmonstr-x-mark-lined-240.png" alt="delete_logo" width="12px" height="12px" />
                            </a>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

List.propTypes = {
    saved: PropTypes.array,
    setSaved: PropTypes.func
}
