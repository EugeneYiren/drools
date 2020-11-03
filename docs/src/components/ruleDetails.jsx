import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'

import {
  INVESTMENT_HORIZON_ATTRIBUTE_MAPPING,
  PRODUCT_TENOR_ATTRIBUTE_MAPPING,
} from '../utils/constants'

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
})

class RuleDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    const { handleResponseObj } = this.props
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        handleResponseObj(this.state)
      }
    )
  }

  render() {
    const { classes, ruleObject, ruleObjectMapping } = this.props

    return Object.keys(ruleObject).map((entries) => (
      <FormControl key={entries} className={classes.formControl}>
        <InputLabel>{ruleObjectMapping[entries]}</InputLabel>
        <Select
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state[entries]}
          inputProps={{
            name: entries,
          }}
          onChange={this.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ruleObject[entries].map((item) => {
            if (entries === 'InvestmentHorizon') {
              return (
                <MenuItem key={item} value={item}>
                  {INVESTMENT_HORIZON_ATTRIBUTE_MAPPING[item]}
                </MenuItem>
              )
            }
            if (entries === 'ProductTenor') {
              return (
                <MenuItem key={item} value={item}>
                  {PRODUCT_TENOR_ATTRIBUTE_MAPPING[item]}
                </MenuItem>
              )
            }
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    ))
  }
}

RuleDetails.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  ruleObject: PropTypes.shape({}).isRequired,
  ruleObjectMapping: PropTypes.shape({}).isRequired,
  handleResponseObj: PropTypes.func.isRequired,
}

RuleDetails.defaultProps = {}

export default withStyles(useStyles)(RuleDetails)
