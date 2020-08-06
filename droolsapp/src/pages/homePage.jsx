import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Container from '@material-ui/core/Container'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { postNewRule as postNewRuleAction } from '../store/actions/drools'
import { createNewRuleResponse } from '../utils/services'
import {
  INVESTMENT_HORIZON,
  INVESTMENT_HORIZON_MAPPING,
} from '../utils/constants'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 240,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
})

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hkRegulated: '',
      direction: '',
      productType: '',
      productSubType: '',
      executionType: '',
      investmentHorizon: '',
      productTenor: '',
      tenor: '',
      vcStatus: '',
      fundMasterList: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmitButton = () => {
    const { postNewRule } = this.props
    const {
      hkRegulated,
      direction,
      productType,
      productSubType,
      executionType,
      investmentHorizon,
      productTenor,
      tenor,
      vcStatus,
      fundMasterList,
    } = this.state

    const newRuleResponse = createNewRuleResponse(
      hkRegulated,
      direction,
      productType,
      productSubType,
      executionType,
      investmentHorizon,
      productTenor,
      tenor,
      vcStatus,
      fundMasterList
    )

    postNewRule(newRuleResponse)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h5">Investment Horizon</Typography>
            {Object.keys(INVESTMENT_HORIZON).map((entries) => (
              <FormControl key={entries} className={classes.formControl}>
                <InputLabel>{INVESTMENT_HORIZON_MAPPING[entries]}</InputLabel>
                <Select
                  // eslint-disable-next-line react/destructuring-assignment
                  value={this.state[entries]}
                  inputProps={{
                    name: entries,
                  }}
                  onChange={this.handleChange}
                >
                  {INVESTMENT_HORIZON[entries].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Container>
          <Container maxWidth="lg">
            <Button variant="contained" onClick={this.handleSubmitButton}>
              Submit
            </Button>
          </Container>
        </main>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  postNewRule: PropTypes.func.isRequired,
  postNewRuleIsLoading: PropTypes.bool,
  postNewRuleError: PropTypes.shape({}),
}

HomePage.defaultProps = {
  postNewRuleIsLoading: false,
  postNewRuleError: null,
}

const mapStateToProps = (store) => ({
  postNewRuleIsLoading: store.drools.postNewRuleIsLoading,
  postNewRuleError: store.drools.postNewRuleError,
})

const mapDispatchToProps = {
  postNewRule: postNewRuleAction,
}

export default withRouter(
  withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(HomePage))
)
