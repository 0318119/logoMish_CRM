import React, { useState } from 'react'
import DashBoxes from '../components/DashBoxes'
import EarningPerDayChart from '../components/EarningPerDayChart'
import SalesProgress from '../components/SalesProgress'
import SideBar from '../components/SideBar'
import TopBar from '../components/topBar'
import VisitorsChart from '../components/VisitorsChart'
import OneMonthSaleProgress from '../components/OneMonthSaleProgress'
import OneMonthOrder from '../components/OneMonthOrder'
import Footer from '../components/Footer'

function Dashboard() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const hideShowMenuClick = () => {
    setMenuOpen(current => !current)
  }
  return (
    <>
      <div className="allPages">
          <SideBar 
            {...{isMenuOpen,setMenuOpen}}
          />
       <div className="innerBox">
          <TopBar
            {...{ hideShowMenuClick }}
          />
          <DashBoxes  />
          <div className="container">
            <div className="row">
              <VisitorsChart />
              <EarningPerDayChart />
              <SalesProgress />
              <OneMonthSaleProgress />
              <OneMonthOrder />
            </div>
          </div>
          <Footer />
       </div>
      </div>
    </>
  )
}

export default Dashboard