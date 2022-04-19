import { connect } from 'react-redux'
// import store from './redux/store'

function Likes(props) {
	return (
		<div className='button-controls'>
			<button onClick={props.LikePlus}>PLUSSSSSSss {props.likes}</button>
			<button onClick={props.LikeMinus}>MINUS</button>
		</div>
	)
}

function mapStateToProps(state) {
	console.log('mapStateToProps > ', state)
	const { likes } = state
	console.log('что это', likes)
	return {
		likes: likes.likes,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		LikePlus: () => {
			console.log('click')
			const action = { type: 'PLUS' }
			dispatch(action)
		},
		LikeMinus: () => {
			console.log('click')
			const action = { type: 'MINUS' }
			dispatch(action)
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
