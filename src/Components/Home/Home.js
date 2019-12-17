import React from 'react';
import { connect } from 'react-redux';
import { getEmployeeDetail } from '../ReduxProperties/Actions/UserActions';
import './Home.css'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getEmployeeDetail();
  }

  showDetails() {
    var data = this.props.employeeData.user;
    return data.map((val, i) => {
      return (
        <div key={i} className="userCard" >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='https://icon-library.net/images/user-icon-png/user-icon-png-25.jpg' style={{ width: '75px', height: '75px', margin: 10 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <p style={{ margin: 5, color: '#727272', fontWeight: 'bold' }}>Email : <span style={{ color: '#555', fontSize: 14 }}>{val.email}</span></p>
              <p style={{ margin: 5, color: '#727272', fontWeight: 'bold', textAlign: 'center' }}>Name : <span style={{ color: '#555', fontSize: 14 }}>{val.name}</span></p>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div style={{ display: 'flex', flex: 1, }}>
                <p style={{ margin: 5, color: '#727272', fontWeight: 'bold' }}>Age: <span style={{ color: '#555', fontSize: 14 }}>{val.age}</span></p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ margin: 5, color: '#727272', fontWeight: 'bold' }}>Gender : <span style={{ color: '#555', fontSize: 14 }}>{val.gender}</span></p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ margin: 5, color: '#727272', fontWeight: 'bold' }}>PhoneNo: <span style={{ color: '#555', fontSize: 14 }}>{val.phoneNo}</span></p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, height: "97vh", flexDirection: 'column' }}>
        <div style={{ height: 50, backgroundColor: '#2196F3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: '#fff' }}>Employee Details</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          {
            this.props.employeeData != null ?
              this.showDetails()
              :
              <h1>Loading...</h1>
          }
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    employeeData: state.employeeData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeeDetail: () => dispatch(getEmployeeDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);