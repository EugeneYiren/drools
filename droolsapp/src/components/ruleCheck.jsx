import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const useStyles = () => ({
  table: {
    maxWidth: 720,
  },
})

class RuleCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderRuleStatus = (isLoading, response, error) => {
    if (isLoading) {
      return <CircularProgress />
    }
    if (error !== null) {
      return 'Network Error'
    }
    if (Object.keys(response).length !== 0) {
      return response.Status
    }

    return null
  }

  render() {
    const {
      classes,
      getInvestmentHorizonRuleIsLoading,
      getInvestmentHorizonRule,
      getInvestmentHorizonRuleError,
      getInvestmentObjectiveRuleIsLoading,
      getInvestmentObjectiveRule,
      getInvestmentObjectiveRuleError,
      getPrrCprRuleIsLoading,
      getPrrCprRule,
      getPrrCprRuleError,
    } = this.props

    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rule Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Attestation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                SPAR_Investment_Horizon
              </TableCell>
              <TableCell>
                {this.renderRuleStatus(
                  getInvestmentHorizonRuleIsLoading,
                  getInvestmentHorizonRule,
                  getInvestmentHorizonRuleError
                )}
              </TableCell>
              <TableCell>NA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                SPAR_Investment_Objective
              </TableCell>
              <TableCell>
                {this.renderRuleStatus(
                  getInvestmentObjectiveRuleIsLoading,
                  getInvestmentObjectiveRule,
                  getInvestmentObjectiveRuleError
                )}
              </TableCell>
              <TableCell>NA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                SPAR_PRR_CPR
              </TableCell>
              <TableCell>
                {this.renderRuleStatus(
                  getPrrCprRuleIsLoading,
                  getPrrCprRule,
                  getPrrCprRuleError
                )}
              </TableCell>
              <TableCell>NA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

RuleCheck.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  getInvestmentHorizonRuleIsLoading: PropTypes.bool.isRequired,
  getInvestmentHorizonRule: PropTypes.shape({}).isRequired,
  getInvestmentHorizonRuleError: PropTypes.shape({}),
  getInvestmentObjectiveRuleIsLoading: PropTypes.bool.isRequired,
  getInvestmentObjectiveRule: PropTypes.shape({}).isRequired,
  getInvestmentObjectiveRuleError: PropTypes.shape({}),
  getPrrCprRuleIsLoading: PropTypes.bool.isRequired,
  getPrrCprRule: PropTypes.shape({}).isRequired,
  getPrrCprRuleError: PropTypes.shape({}),
}

RuleCheck.defaultProps = {
  getInvestmentHorizonRuleError: null,
  getInvestmentObjectiveRuleError: null,
  getPrrCprRuleError: null,
}

const mapStateToProps = (store) => ({
  getInvestmentHorizonRuleIsLoading:
    store.drools.getInvestmentHorizonRuleIsLoading,
  getInvestmentHorizonRule: store.drools.getInvestmentHorizonRule,
  getInvestmentHorizonRuleError: store.drools.getInvestmentHorizonRuleError,

  getInvestmentObjectiveRuleIsLoading:
    store.drools.getInvestmentObjectiveRuleIsLoading,
  getInvestmentObjectiveRule: store.drools.getInvestmentObjectiveRule,
  getInvestmentObjectiveRuleError: store.drools.getInvestmentObjectiveRuleError,

  getPrrCprRuleIsLoading: store.drools.getPrrCprRuleIsLoading,
  getPrrCprRule: store.drools.getPrrCprRule,
  getPrrCprRuleError: store.drools.getPrrCprRuleError,
})

const mapDispatchToProps = {}

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(RuleCheck)
)
