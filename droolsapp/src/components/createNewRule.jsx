import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import { createNewRuleResponse } from '../utils/services'
import RuleDetails from './ruleDetails'

import {
  INVESTMENT_HORIZON,
  INVESTMENT_HORIZON_MAPPING,
  INVESTMENT_OBJECTIVE,
  INVESTMENT_OBJECTIVE_MAPPING,
  PRR_CPR,
  PRR_CPR_MAPPING,
} from '../utils/constants'

const useStyles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  gridWrapper: {
    paddingBottom: theme.spacing(6),
  },
  approverWrapper: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
  },
})

class CreateNewRule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ruleName: 'Investment Horizon',
      responseObj: {},
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmitButton = () => {
    const { onSubmitButtonClick } = this.props
    const { ruleName, responseObj } = this.state
    const newRuleResponse = createNewRuleResponse(responseObj)

    onSubmitButtonClick(newRuleResponse, ruleName)
  }

  handleResponseObj = (obj) => {
    this.setState({
      responseObj: obj,
    })
  }

  renderRuleDetails = () => {
    const { ruleName } = this.state

    if (ruleName === 'Investment Horizon')
      return (
        <RuleDetails
          ruleObject={INVESTMENT_HORIZON}
          ruleObjectMapping={INVESTMENT_HORIZON_MAPPING}
          handleResponseObj={this.handleResponseObj}
        />
      )
    if (ruleName === 'Investment Objective')
      return (
        <RuleDetails
          ruleObject={INVESTMENT_OBJECTIVE}
          ruleObjectMapping={INVESTMENT_OBJECTIVE_MAPPING}
          handleResponseObj={this.handleResponseObj}
        />
      )
    if (ruleName === 'PRR CPR')
      return (
        <RuleDetails
          ruleObject={PRR_CPR}
          ruleObjectMapping={PRR_CPR_MAPPING}
          handleResponseObj={this.handleResponseObj}
        />
      )

    return null
  }

  render() {
    const { classes } = this.props
    const { ruleName } = this.state

    return (
      <>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Create New Rule</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel>Rule Name</InputLabel>
            <Select
              value={ruleName}
              inputProps={{
                name: 'ruleName',
              }}
              onChange={this.handleChange}
            >
              <MenuItem value="Investment Horizon">Investment Horizon</MenuItem>
              <MenuItem value="Investment Objective">
                Investment Objective
              </MenuItem>
              <MenuItem value="PRR CPR">PRR CPR</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Rule Details</Typography>
          {this.renderRuleDetails()}
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Approver</Typography>
          <TextField
            id="standard-basic"
            placeholder="Fill in approver..."
            className={classes.approverWrapper}
          />
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Button variant="contained" onClick={this.onSubmitButton}>
            Submit
          </Button>
        </Grid>
      </>
    )
  }
}

CreateNewRule.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmitButtonClick: PropTypes.func.isRequired,
}

CreateNewRule.defaultProps = {}

export default withStyles(useStyles)(CreateNewRule)
