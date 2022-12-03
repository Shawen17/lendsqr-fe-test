import React,{useState,useMemo} from "react";
import styled from 'styled-components';
import SideBar from "../components/SideBar";
import Users from '../components/Users';
import NavBar from "../components/NavBar";



const Container = styled.div`
margin:8px;
display:flex;`

const Left = styled.div`
width:32%`

const Right= styled.div`
width:100%;
margin-left:20px;
`

const Dashstats = styled.div`
margin-left:5px;
margin-bottom:20px;
margin-top:20px;
display:flex;
align:items:center;
justify-content:center;
flex-wrap:wrap;
height:200px;
padding:20px;

`

const Stats = styled.div`
background-color:white;
height:160px;
width:240px;
border: 1px solid rgba(33, 63, 125, 0.06);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius:4px;
flex:1;
justify-content:flex-start;
align-items:left;
display:flex;
flex-direction:column;
margin:7px;
padding:12px 10px;
`

const StatIcon = styled.img`
height:25%;
width:25%;
border-radius:50%;

`

const StatDesc = styled.h5`
font-family: 'Work Sans';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
color: #0050B5;
margin-top:5px;

`
const StatNum = styled.h5`
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-transform: uppercase;
margin-top:3px;
color: #0050B5;
opacity:1
`



const Dashbaord=()=>{
    window.title='Dashboard'
    const [searchValue,setSearchValue] = useState([])
    var [raw] = useState(JSON.parse(localStorage.getItem('data')))


    const HandleInputChange = (event) =>{
        setSearchValue(event.target.value)
      }

    const data= useMemo(()=>{
        return raw
    },[raw])

    console.log('search',searchValue)
    
    var filteredUsers;

    if (searchValue.length<1){
        filteredUsers= raw
    }else{
        filteredUsers = raw.filter(function(user){ 
            const lowerCaseEmail=user.email.toLowerCase()
            const lowerCaseUsername = user.userName.toLowerCase()
            const lowerCaseStatus= user.status.toLowerCase()
            return lowerCaseEmail.includes(searchValue.toLowerCase()) || lowerCaseUsername.includes(searchValue.toLowerCase()) || lowerCaseStatus.includes(searchValue.toLowerCase())
    })
    }

    

    var active = data.filter(function(user){
        return user.status === 'Active'
    })

    var savings = data.filter(function(user){
        return +user.accountBalance > 0
    })
    
    var loan = data.filter(function(user){
         return +user.education.loanRepayment > 0
        })

    var[count,setCount]=useState(active.length)
    
    const increment = (user)=>{
        if(user==='Inactive' || user==='Blacklisted'  || user ==='Pending' || user==='' ){
            setCount(count+1)
            
        }
    }

    const decrement =(user)=>{
        if(user==='Active'){
            setCount(count-1)
        }
    }

    var currentData = useMemo(() => {
        return filteredUsers
      }, [filteredUsers]); 

     
    
    return (
        <Container>
            <Left>
                <SideBar />
            </Left>
            <Right>
                <NavBar searchValue={searchValue} HandleInputChange={HandleInputChange} />
                <div  style={{backgroundColor:'whitesmoke',}}>
                    <h3 style={{color:'#0050B5',marginLeft:'20px',paddingTop:'25px'}}>Users</h3>
                    <Dashstats>
                        <Stats>
                            <StatIcon src='/static/icons/user.png' alt='user'/>
                            <StatDesc>users</StatDesc>
                            <StatNum>{data.length.toLocaleString('en-US')}</StatNum>
                        </Stats>
                        <Stats>
                            <StatIcon  src='/static/icons/user_active.png' alt='active icon' />
                            <StatDesc>ACTIVE USERS</StatDesc>
                            <StatNum>{count.toLocaleString('en-US')}</StatNum>
                        </Stats>
                        <Stats>
                            <StatIcon src='/static/icons/user_loan.png' alt='loan icon' />
                            <StatDesc>USERS WITH LOANS</StatDesc>
                            <StatNum>{loan.length.toLocaleString('en-US')}</StatNum>
                        </Stats>
                        <Stats>
                            <StatIcon src="/static/icons/user_savings.png" alt='savings icon'/>
                            <StatDesc>USERS WITH SAVINGS</StatDesc>
                            <StatNum>{savings.length.toLocaleString('en-US')}</StatNum>
                        </Stats>
                        </Dashstats> 
                        <Users   currentData={currentData} increment={increment} decrement={decrement} />
                        
                    </div>
                </Right>
                    
        </Container>

    )
}

export default Dashbaord; 