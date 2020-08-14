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
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import {
  INVESTMENT_HORIZON,
  INVESTMENT_HORIZON_ATTRIBUTE_MAPPING,
  PRODUCT_TENOR_ATTRIBUTE_MAPPING,
  INVESTMENT_OBJECTIVE,
  PRR_CPR,
} from '../utils/constants'

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 200,
  },
  detailsNameWrapper: {
    paddingTop: theme.spacing(4),
    textDecoration: 'underline',
  },
  /*   portfolioDetailsForm: {
    margin: theme.spacing(2),
    minWidth: 200,
  }, */
  paper1stColumn: {
    marginTop: theme.spacing(2),
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
  },
  paper2ndColumn: {
    marginTop: theme.spacing(2),
    overflow: 'auto',
    padding: '8px',
  },
  /*   paperTextWrapper: {
    paddingTop: 5,
    paddingLeft: 5,
    fontStyle: 'italic',
    color: 'gray',
  }, */
  priceQuantityWrapper: {
    margin: theme.spacing(1),
    display: 'inline-block',
  },
  buttonWrapper: {
    paddingTop: theme.spacing(8),
  },
})

class EugeneOMS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // not used
      portfolioNo: '1000123456-1',
      instrumentDetails: 'Fund',

      // common
      HKRegulated: 'Yes',
      Direction: 'Buy',
      ProductType: 'Funds',
      ProductSubType: 'Exclude Mutual Funds',
      ExecutionType: 'Execution Only',
      VCStatus: 'N',

      // investment horizon
      InvestmentHorizon: 'D',
      ProductTenor: 'D',
      Tenor: 'NA',
      FundMasterList: 'Y',

      // investment objective
      ClientInvObjective: '',
      ProductInvObjective: 'Capital Preservation',

      // prr cpr
      HYBFIndicator: 'Y',
      HedgingIndicator: 'NA',
      CPR: '4',
      PRR: '4',
      IsPRRMoreThanOREqualsToCPR: 'NA',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onNextButtonClick = () => {
    const { onNextButtonClick } = this.props
    const {
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
      IsPRRMoreThanOREqualsToCPR,
    } = this.state

    return onNextButtonClick(
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
    )
  }

  render() {
    const { classes } = this.props
    const {
      portfolioNo,
      instrumentDetails,
      InvestmentHorizon,
      ClientInvObjective,
      ProductSubType,
      ProductTenor,
      Tenor,
      VCStatus,
      FundMasterList,
      ProductInvObjective,
      HKRegulated,
      ExecutionType,
      HYBFIndicator,
      HedgingIndicator,
      CPR,
      PRR,
    } = this.state

    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4} xl={3}>
            <Typography variant="h5">Order Form</Typography>
            <Typography
              variant="subtitle1"
              className={classes.detailsNameWrapper}
            >
              Portfolio/Instrument Details
            </Typography>
            <Paper className={classes.paper1stColumn}>
              <FormControl className={classes.formControl}>
                <InputLabel id="portfolio-no-select-outlined-label">
                  Portfolio No.
                </InputLabel>
                <Select
                  labelId="portfolio-no-select-outlined-label"
                  id="portfolio-no-select-outlined"
                  value={portfolioNo}
                  onChange={this.handleChange}
                  label="portfolioNo"
                  inputProps={{
                    name: 'portfolioNo',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1000123456-1">1000123456-1</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="instrument-det-select-outlined-label">
                  Instrument
                </InputLabel>
                <Select
                  labelId="instrument-det-select-outlined-label"
                  id="instrument-det-select-outlined"
                  value={instrumentDetails}
                  onChange={this.handleChange}
                  label="instrumentDetails"
                  inputProps={{
                    name: 'instrumentDetails',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Fund">Fund: Eugene&apos;s Fund</MenuItem>
                </Select>
              </FormControl>
            </Paper>
            <Typography
              variant="subtitle1"
              className={classes.detailsNameWrapper}
            >
              Order Details (Buy)
            </Typography>
            <Paper className={classes.paper1stColumn}>
              <TextField
                id="standard-basic"
                label="Price"
                className={classes.priceQuantityWrapper}
              />
              <TextField
                id="filled-basic"
                label="Quantity"
                className={classes.priceQuantityWrapper}
              />
            </Paper>
          </Grid>

          {/* 2nd column */}

          <Grid item xs={12} md={8} xl={4}>
            <Typography variant="h5">Simulated Data from Backend</Typography>
            <Typography
              variant="subtitle1"
              className={classes.detailsNameWrapper}
            >
              Portfolio Attributes
            </Typography>
            <Paper className={classes.paper2ndColumn}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="investment-horizon-select-outlined-label">
                  Investment Horizon
                </InputLabel>
                <Select
                  labelId="investment-horizon-select-outlined-label"
                  id="investment-horizon-select-outlined"
                  value={InvestmentHorizon}
                  onChange={this.handleChange}
                  label="InvestmentHorizon"
                  inputProps={{
                    name: 'InvestmentHorizon',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.InvestmentHorizon.map((item) => (
                    <MenuItem key={item} value={item}>
                      {INVESTMENT_HORIZON_ATTRIBUTE_MAPPING[item]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="investment-objective-select-outlined-label">
                  Client Inv Objective
                </InputLabel>
                <Select
                  labelId="investment-objective-select-outlined-label"
                  id="investment-objective-select-outlined"
                  value={ClientInvObjective}
                  onChange={this.handleChange}
                  label="ClientInvObjective"
                  inputProps={{
                    name: 'ClientInvObjective',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_OBJECTIVE.ClientInvObjective.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="cpr-outlined-label">CPR</InputLabel>
                <Select
                  labelId="cpr-outlined-label"
                  id="cpr-outlined"
                  value={CPR}
                  onChange={this.handleChange}
                  label="CPR"
                  inputProps={{
                    name: 'CPR',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {PRR_CPR.CPR.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="vc-status-outlined-label">VC Status</InputLabel>
                <Select
                  labelId="vc-status-outlined-label"
                  id="vc-status-outlined"
                  value={VCStatus}
                  onChange={this.handleChange}
                  label="VCStatus"
                  inputProps={{
                    name: 'VCStatus',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.VC.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="execution-type-outlined-label">
                  Execution Type
                </InputLabel>
                <Select
                  labelId="execution-type-outlined-label"
                  id="execution-type-outlined"
                  value={ExecutionType}
                  onChange={this.handleChange}
                  label="ExecutionType"
                  inputProps={{
                    name: 'ExecutionType',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.ExecutionType.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
            <Typography
              variant="subtitle1"
              className={classes.detailsNameWrapper}
            >
              Product Attributes
            </Typography>
            <Paper className={classes.paper2ndColumn}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="hk-regulated-select-outlined-label">
                  HK Regulated
                </InputLabel>
                <Select
                  labelId="hk-regulated-select-outlined-label"
                  id="hk-regulated-select-outlined"
                  value={HKRegulated}
                  onChange={this.handleChange}
                  label="HKRegulated"
                  inputProps={{
                    name: 'HKRegulated',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.HKRegulated.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="product-sub-type-select-outlined-label">
                  Product Sub Type
                </InputLabel>
                <Select
                  labelId="product-sub-type-select-outlined-label"
                  id="product-sub-type-select-outlined"
                  value={ProductSubType}
                  onChange={this.handleChange}
                  label="ProductSubType"
                  inputProps={{
                    name: 'ProductSubType',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.ProductSubType.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="product-tenor-select-outlined-label">
                  Product Tenor
                </InputLabel>
                <Select
                  labelId="product-tenor-select-outlined-label"
                  id="product-tenor-select-outlined"
                  value={ProductTenor}
                  onChange={this.handleChange}
                  label="ProductTenor"
                  inputProps={{
                    name: 'ProductTenor',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.ProductTenor.map((item) => (
                    <MenuItem key={item} value={item}>
                      {PRODUCT_TENOR_ATTRIBUTE_MAPPING[item]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="tenor-select-outlined-label">Tenor</InputLabel>
                <Select
                  labelId="tenor-select-outlined-label"
                  id="tenor-select-outlined"
                  value={Tenor}
                  onChange={this.handleChange}
                  label="Tenor"
                  inputProps={{
                    name: 'Tenor',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.Tenor.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="fund-master-list-outlined-label">
                  Fund Master List
                </InputLabel>
                <Select
                  labelId="fund-master-list-outlined-label"
                  id="fund-master-list-outlined"
                  value={FundMasterList}
                  onChange={this.handleChange}
                  label="FundMasterList"
                  inputProps={{
                    name: 'FundMasterList',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_HORIZON.FundMasterList.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="product-inv-objective-outlined-label">
                  Product Inv Objective
                </InputLabel>
                <Select
                  labelId="product-inv-objective-outlined-label"
                  id="product-inv-objective-outlined"
                  value={ProductInvObjective}
                  onChange={this.handleChange}
                  label="ProductInvObjective"
                  inputProps={{
                    name: 'ProductInvObjective',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {INVESTMENT_OBJECTIVE.ProductInvObjective.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="prr-outlined-label">PRR</InputLabel>
                <Select
                  labelId="prr-outlined-label"
                  id="prr-outlined"
                  value={PRR}
                  onChange={this.handleChange}
                  label="PRR"
                  inputProps={{
                    name: 'PRR',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {PRR_CPR.PRR.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="hybf-indicator-outlined-label">
                  HYBF Indicator
                </InputLabel>
                <Select
                  labelId="hybf-indicator-outlined-label"
                  id="hybf-indicator-outlined"
                  value={HYBFIndicator}
                  onChange={this.handleChange}
                  label="HYBFIndicator"
                  inputProps={{
                    name: 'HYBFIndicator',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {PRR_CPR.HYBFIndicator.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="hedging-indicator-outlined-label">
                  Hedging Indicator
                </InputLabel>
                <Select
                  labelId="hedging-indicator-outlined-label"
                  id="hedging-indicator-outlined"
                  value={HedgingIndicator}
                  onChange={this.handleChange}
                  label="HedgingIndicator"
                  inputProps={{
                    name: 'HedgingIndicator',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {PRR_CPR.HedgingIndicator.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>

        <Grid className={classes.buttonWrapper}>
          <Button variant="contained" onClick={this.onNextButtonClick}>
            Check PTCC
          </Button>
        </Grid>
      </>
    )
  }
}

EugeneOMS.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
}

EugeneOMS.defaultProps = {}

export default withStyles(useStyles)(EugeneOMS)
