import PropTypes from 'prop-types'
import './Cardbox.css'

function Cardbox(props) {
  return (
    <>

    <div className="rectangle">
        <div className="img">
            <img src={props.img} alt="components" />
        </div>
        <div className="content">
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div>
    </div>


      
    </>
  )
}

Cardbox.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}


export default Cardbox
