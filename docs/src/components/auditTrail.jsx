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
import { CircularProgress, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { getAuditTrail as getAuditTrailAction } from '../store/actions/drools'

const useStyles = () => ({
  table: {},
})

class AuditTrail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { getAuditTrail } = this.props
    getAuditTrail()
  }

  render() {
    const {
      classes,
      getAuditTrailIsLoading,
      getAuditTrailResponse,
      getAuditTrailError,
    } = this.props

    if (getAuditTrailIsLoading) {
      return <CircularProgress />
    }
    if (getAuditTrailError !== null) {
      return <Typography>Network Error!</Typography>
    }
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Operation</TableCell>
              <TableCell>ReqId</TableCell>
              <TableCell>Rule</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getAuditTrailResponse.map((item) => (
              <TableRow key={item.ReqId}>
                <TableCell component="th" scope="row">
                  {item.Category}
                </TableCell>
                <TableCell>{item.Operation}</TableCell>
                <TableCell>{item.ReqId}</TableCell>
                <TableCell>{item.Rule}</TableCell>
                <TableCell>{item.Status}</TableCell>
                <TableCell>{item.Timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

AuditTrail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  getAuditTrail: PropTypes.func.isRequired,
  getAuditTrailIsLoading: PropTypes.bool.isRequired,
  getAuditTrailError: PropTypes.shape({}),
  getAuditTrailResponse: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

AuditTrail.defaultProps = {
  getAuditTrailError: null,
}

const mapStateToProps = (store) => ({
  getAuditTrailIsLoading: store.drools.getAuditTrailIsLoading,
  getAuditTrailResponse: store.drools.getAuditTrail,
  getAuditTrailError: store.drools.getAuditTrailError,
})

const mapDispatchToProps = {
  getAuditTrail: getAuditTrailAction,
}

export default withStyles(useStyles)(
  connect(mapStateToProps, mapDispatchToProps)(AuditTrail)
)
