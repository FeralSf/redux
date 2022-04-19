import { connect } from 'react-redux'
// import { likesReducer } from './redux/likesReducer'
import { likesReducer } from './redux/likesReducer'
import { PLUSLIKES, MINUSLIKES } from './redux/actions'

function Likes(props) {
	return (
		<div className='button-controls'>
			<button onClick={props.LikePlus}>+ {props.likes}</button>
			<button onClick={props.LikeMinus}>-</button>
		</div>
	)
}

function mapStateToProps(state) {
	console.log('mapStateToProps > ', state)
	const { likesReducer } = state
	return {
		likes: likesReducer.likes,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		LikePlus: () => dispatch(PLUSLIKES()),
		LikeMinus: () => dispatch(MINUSLIKES()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
