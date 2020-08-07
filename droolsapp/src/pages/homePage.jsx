import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import {
  postInvestmentHorizonRule as postInvestmentHorizonRuleAction,
  postInvestmentObjectiveRule as postInvestmentObjectiveRuleAction,
  postPrrCprRule as postPrrCprRuleAction,
} from '../store/actions/drools'
import CreateNewRule from '../components/createNewRule'
import SubmitNewRule from '../components/submitNewRule'
import TopAppBar from '../components/topAppBar'

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: 'Create New Rule',
    }
  }

  handleCreateNewRuleClick = () => {
    this.setState({
      component: 'Create New Rule',
    })
  }

  handleOMSClick = () => {
    this.setState({
      component: 'OMS',
    })
  }

  renderComponent = () => {
    const { component } = this.state
    if (component === 'Create New Rule')
      return (
        <CreateNewRule onSubmitButtonClick={this.handleSubmitButtonClick} />
      )
    if (component === 'OMS') return null
    if (component === 'Submit New Rule')
      return <SubmitNewRule onBackButtonClick={this.handleCreateNewRuleClick} />

    return null
  }

  handleSubmitButtonClick = (response, ruleName) => {
    const {
      postInvestmentHorizonRule,
      postInvestmentObjectiveRule,
      postPrrCprRule,
    } = this.props
    this.setState({
      component: 'Submit New Rule',
    })

    if (ruleName === 'Investment Horizon') {
      postInvestmentHorizonRule(response)
    } else if (ruleName === 'Investment Objective') {
      postInvestmentObjectiveRule(response)
    } else if (ruleName === 'PRR CPR') {
      postPrrCprRule(response)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopAppBar
          onCreateNewRuleClick={this.handleCreateNewRuleClick}
          onOMSClick={this.handleOMSClick}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.renderComponent()}
        </main>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  postInvestmentHorizonRule: PropTypes.func.isRequired,
  postInvestmentObjectiveRule: PropTypes.func.isRequired,
  postPrrCprRule: PropTypes.func.isRequired,
}

HomePage.defaultProps = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  postInvestmentHorizonRule: postInvestmentHorizonRuleAction,
  postInvestmentObjectiveRule: postInvestmentObjectiveRuleAction,
  postPrrCprRule: postPrrCprRuleAction,
}

export default withRouter(
  withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(HomePage))
)
