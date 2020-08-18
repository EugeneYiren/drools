import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import {
  postInvestmentHorizonRule as postInvestmentHorizonRuleAction,
  postInvestmentObjectiveRule as postInvestmentObjectiveRuleAction,
  postPrrCprRule as postPrrCprRuleAction,
  getInvestmentHorizonRule as getInvestmentHorizonRuleAction,
  getInvestmentObjectiveRule as getInvestmentObjectiveRuleAction,
  getPrrCprRule as getPrrCprRuleAction,
} from '../store/actions/drools'
import CreateNewRule from '../components/createNewRule'
import SubmitNewRule from '../components/submitNewRule'
import TopAppBar from '../components/topAppBar'
import EugeneOMS from '../components/eugeneOMS'
import RuleCheck from '../components/ruleCheck'
import AuditTrail from '../components/auditTrail'

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

  handleAuditTrailClick = () => {
    this.setState({
      component: 'Audit Trail',
    })
  }

  renderComponent = () => {
    const { component } = this.state
    if (component === 'Create New Rule')
      return (
        <CreateNewRule onSubmitButtonClick={this.handleSubmitNewRuleClick} />
      )
    if (component === 'OMS')
      return <EugeneOMS onNextButtonClick={this.handleNextButtonClick} />
    if (component === 'Audit Trail') return <AuditTrail />
    if (component === 'Submit New Rule')
      return <SubmitNewRule onBackButtonClick={this.handleCreateNewRuleClick} />
    if (component === 'Rule Check') return <RuleCheck />

    return null
  }

  handleSubmitNewRuleClick = (response, ruleName) => {
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

  handleNextButtonClick = (
    HKRegulated,
    Direction,
    ProductType,
    ProductSubType,
    ExecutionType,
    VCStatus,
    InvestmentHorizon,
    ProductTenor,
    Tenor,
    FundMasterList,
    ClientInvObjective,
    ProductInvObjective,
    HYBFIndicator,
    HedgingIndicator,
    CPR,
    PRR,
    IsPRRMoreThanOREqualsToCPR
  ) => {
    const {
      getInvestmentHorizonRule,
      getInvestmentObjectiveRule,
      getPrrCprRule,
    } = this.props

    getInvestmentHorizonRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      InvestmentHorizon,
      ProductTenor,
      Tenor,
      VCStatus,
      FundMasterList
    )
    getInvestmentObjectiveRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      ExecutionType,
      VCStatus,
      ClientInvObjective,
      ProductInvObjective
    )
    getPrrCprRule(
      HKRegulated,
      Direction,
      ProductType,
      ProductSubType,
      HYBFIndicator,
      ExecutionType,
      VCStatus,
      HedgingIndicator,
      CPR,
      PRR,
      IsPRRMoreThanOREqualsToCPR
    )

    this.setState({
      component: 'Rule Check',
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopAppBar
          onCreateNewRuleClick={this.handleCreateNewRuleClick}
          onOMSClick={this.handleOMSClick}
          onAuditTrailClick={this.handleAuditTrailClick}
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
  getInvestmentHorizonRule: PropTypes.func.isRequired,
  getInvestmentObjectiveRule: PropTypes.func.isRequired,
  getPrrCprRule: PropTypes.func.isRequired,
}

HomePage.defaultProps = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  postInvestmentHorizonRule: postInvestmentHorizonRuleAction,
  postInvestmentObjectiveRule: postInvestmentObjectiveRuleAction,
  postPrrCprRule: postPrrCprRuleAction,
  getInvestmentHorizonRule: getInvestmentHorizonRuleAction,
  getInvestmentObjectiveRule: getInvestmentObjectiveRuleAction,
  getPrrCprRule: getPrrCprRuleAction,
}

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
)
