import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  message: {
    paddingBottom: theme.spacing(4),
  },
})

class SubmitNewRule extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderBody = () => {
    const { classes, postNewRuleIsLoading, postNewRuleError } = this.props

    if (postNewRuleIsLoading) {
      return <CircularProgress />
    }
    return (
      <>
        <Typography variant="h4" className={classes.message}>
          {postNewRuleError === null ? 'Success!' : 'Error!'}
        </Typography>
        <Button variant="contained" onClick={this.handleBackButtonClick}>
          Back
        </Button>
      </>
    )
  }

  handleBackButtonClick = () => {
    const { onBackButtonClick } = this.props
    return onBackButtonClick()
  }

  render() {
    const { classes } = this.props

    return (
      <Container className={classes.container}>{this.renderBody()}</Container>
    )
  }
}

SubmitNewRule.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  postNewRuleIsLoading: PropTypes.bool,
  postNewRuleError: PropTypes.shape({}),
}

SubmitNewRule.defaultProps = {
  postNewRuleIsLoading: false,
  postNewRuleError: null,
}

const mapStateToProps = (store) => ({
  postNewRuleIsLoading: store.drools.postNewRuleIsLoading,
  postNewRuleError: store.drools.postNewRuleError,
})

const mapDispatchToProps = {}

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(SubmitNewRule)
)
