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
  INVESTMENT_OBJECTIVE,
  PRR_CPR,
} from '../utils/constants'

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 160,
  },
  gridWrapper: {
    paddingBottom: theme.spacing(6),
  },
  portfolioDetailsForm: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  paper: {
    marginTop: theme.spacing(2),
    overflow: 'auto',
    width: 'fit-content',
  },
  paperTextWrapper: {
    paddingTop: 5,
    paddingLeft: 5,
    fontStyle: 'italic',
    color: 'gray',
  },
  priceQuantityWrapper: {
    margin: theme.spacing(1),
    minWidth: 160,
    width: 160,
  },
})

class EugeneOMS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // not used
      portfolioNo: '123456',
      isPortfolioClicked: true,
      instrumentDetails: '',
      isInstrumentDetailsClicked: false,

      // common
      HKRegulated: 'Yes',
      Direction: 'Buy',
      ProductType: 'Funds',
      ProductSubType: 'Exclude Mutual Funds',
      ExecutionType: 'ALL',
      VCStatus: 'Y',

      // investment horizon
      InvestmentHorizon: 'B',
      ProductTenor: 'A',
      Tenor: 'GT2',
      FundMasterList: 'Y',

      // investment objective
      ClientInvObjective: 'Capital Preservation',
      ProductInvObjective: 'Capital Preservation',

      // prr cpr
      HYBFIndicator: 'ALL',
      HedgingIndicator: 'Y',
      CPR: '2',
      PRR: '4',
      IsPRRMoreThanOREqualsToCPR: 'Y',
    }
  }

  handlePortfolioNoChange = (e) => {
    this.setState({ portfolioNo: e.target.value })

    if (e.target.value !== '') {
      this.setState({
        isPortfolioClicked: true,
      })
    } else {
      this.setState({
        isPortfolioClicked: false,
      })
    }
  }

  handleInstrumentChange = (e) => {
    this.setState({ instrumentDetails: e.target.value })

    if (e.target.value !== '') {
      this.setState({
        isInstrumentDetailsClicked: true,
      })
    } else {
      this.setState({
        isInstrumentDetailsClicked: false,
      })
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
      isPortfolioClicked,
      InvestmentHorizon,
      ClientInvObjective,
      instrumentDetails,
      isInstrumentDetailsClicked,
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
      IsPRRMoreThanOREqualsToCPR,
    } = this.state

    return (
      <>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Choose Portfolio</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel>Portfolio No.</InputLabel>
            <Select
              value={portfolioNo}
              inputProps={{
                name: 'portfolioNo',
              }}
              onChange={this.handlePortfolioNoChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="123456">123456</MenuItem>
            </Select>
          </FormControl>
          {isPortfolioClicked ? (
            <Paper className={classes.paper}>
              <Typography variant="body2" className={classes.paperTextWrapper}>
                Portfolio Details
              </Typography>
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
            </Paper>
          ) : null}
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Instrument Details</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel>Instrument</InputLabel>
            <Select
              value={instrumentDetails}
              inputProps={{
                name: 'instrumentDetails',
              }}
              onChange={this.handleInstrumentChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="123456">Fund: Eugene&apos;s Fund</MenuItem>
            </Select>
          </FormControl>
          {isInstrumentDetailsClicked ? (
            <Paper className={classes.paper}>
              <Typography variant="body2" className={classes.paperTextWrapper}>
                Instrument Details
              </Typography>
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
              <FormControl
                variant="outlined"
                className={classes.portfolioDetailsForm}
              >
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
            </Paper>
          ) : null}
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Typography variant="h5">Order Details (Buy)</Typography>
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
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel>Execution Type</InputLabel>
            <Select
              value={ExecutionType}
              inputProps={{
                name: ExecutionType,
              }}
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel>HYBF Indicator</InputLabel>
            <Select
              value={HYBFIndicator}
              inputProps={{
                name: HYBFIndicator,
              }}
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel>Hedging Indicator</InputLabel>
            <Select
              value={HedgingIndicator}
              inputProps={{
                name: HedgingIndicator,
              }}
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel>CPR</InputLabel>
            <Select
              value={CPR}
              inputProps={{
                name: CPR,
              }}
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel>PRR</InputLabel>
            <Select
              value={PRR}
              inputProps={{
                name: PRR,
              }}
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
            <InputLabel>PRR {'>'}= CPR</InputLabel>
            <Select
              value={IsPRRMoreThanOREqualsToCPR}
              inputProps={{
                name: IsPRRMoreThanOREqualsToCPR,
              }}
              onChange={this.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PRR_CPR.IsPRRMoreThanOREqualsToCPR.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridWrapper}>
          <Button variant="contained" onClick={this.onNextButtonClick}>
            Next
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
