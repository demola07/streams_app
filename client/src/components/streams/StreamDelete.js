import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	renderActions() {
		return (
			<>
				<button className="ui button negative">Delete</button>
				<button className="ui button ">Cancel</button>
			</>
		)
	}

	render() {
		return (
			<div>
				StreamDelete
				<Modal
					title="Delete Stream"
					content="Are you sure you want to delete this stream?"
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id],
})

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
)
