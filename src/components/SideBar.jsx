import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {DropDownContainer,DropDownListContainer,DropDownList,ListItem} from '../components/NavBar';
import {KeyboardArrowDownOutlined} from '@material-ui/icons';


const Container = styled.div`
height:100%;
margin-left:6px`

export const Brand = styled.div`
display:flex;
flex:0.5;
margin-bottom:30px`

export const BrandName = styled.h1`
color:#00308f ;
font-weight:bold;
align-items:center;
justify-content:center;`

export const BrandLogo = styled.div`
align-items:center;
justify-content:center;
`

const SideBar = () => {
  const [toggle,setToggle] = useState(false)

  const handleDropDown = ()=>{
    setToggle(!toggle)
}

    const CustomerMenu=()=>(
        <div>
          
              <Link className="nav-link mb-4 sidebar-link"  to="/"><span><img src='/static/icons/users.png' alt='userslogo'/></span>Users</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/guarantor.png' alt='guarantorlogo'/></span>Guarantors</Link>
           
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/loan.png' alt='loanlogo'/></span>Loans</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/decision_model.png' alt='decisionlogo'/></span>Decision Models</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/savings.png' alt='savingslogo'/></span>Savings</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/loan_request.png' alt='loanRequestlogo'/></span>Loan Requests</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/karma.png' alt='karmalogo'/></span>Karma</Link>
           
        </div>)

    const BusinessMenu = ()=>(
        <div>
          
              <Link className="nav-link mb-4 sidebar-link"  to="/"><span><img src='/static/icons/org.png' alt='orglogo'/></span>Organization</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/loan_product.png' alt='logo'/></span>Loan Products</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/saving_product.png' alt='logo'/></span>Savings Products</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/fees_charges.png' alt='logo'/></span>Fees and Charges</Link>
           
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/transactions.png' alt='logo'/></span>Transactions</Link>
           
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/services.png' alt='logo'/></span>Services</Link>
           
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/service_account.png' alt='logo'/></span>Service Account</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/settlement.png' alt='logo'/></span>Settlements</Link>
            
              <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/reports.png' alt='logo'/></span>Reports</Link>
          
        </div>)
   
    const settingMenu = ()=>(
        <div>
          <Link className="nav-link mb-4 sidebar-link"  to="/"><span><img src='/static/icons/preferences.png' alt='logo'/></span>Preferences</Link>
          <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/fees_pricing.png' alt='logo'/></span>Fees and Pricing</Link>
          <Link  className='nav-link mb-4 sidebar-link' to="/"><span><img src='/static/icons/audit_log.png' alt='logo'/></span>Audit Logs</Link>
        </div>)


  return (
    <Container>
        
        <Brand>
                <BrandLogo>
                <img src='/static/icons/lendsqr.jpg' style={{height:50,width:50}} alt='brandlogo' />
                </BrandLogo>
                <BrandName>
                    lendsqr
                </BrandName>
        </Brand>
        <DropDownContainer style={{paddingBottom:'15px',paddingLeft:'0px'}}>
            <div  className='sidebar-title'  style={{fontSize:'18px'}}><span><img src='/static/icons/dashboard.png' alt='dash'/></span> Switch Organization <span> <KeyboardArrowDownOutlined style={{cursor:'pointer'}} onClick={handleDropDown } /> </span>  </div>
            <DropDownListContainer>
                <DropDownList className={toggle? 'show-dropdown' : 'hide-dropdown'} >
                    <ListItem>lendsqr</ListItem>
                    <ListItem>irorun</ListItem>
                    <ListItem>awale</ListItem>
                </DropDownList>
            </DropDownListContainer>
        </DropDownContainer>
        <div  className='sidebar-link'  style={{marginBottom:'30px'}}><span><img src='/static/icons/dash.png' alt='dash'/></span>Dashboard</div>
        <div className='sidebar-title mb-3'>CUSTOMERS</div>
        {CustomerMenu()}
        <div className='sidebar-title mb-3'>BUSINESSES</div>
        {BusinessMenu()}
        <div className='sidebar-title mb-3'>SETTINGS</div>
        {settingMenu()}
    </Container>
    
  );
}

export default SideBar;