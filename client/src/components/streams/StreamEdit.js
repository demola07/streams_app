import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	onSubmit = (formValues) => {
		console.log(formValues)
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading....</div>
		}
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					initialValues={this.props.stream}
					onSubmit={this.onSubmit}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id],
})

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
