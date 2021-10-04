import logo from './logo.svg';
import './App.css';

export default function App() { 
  
const plan = [
  {
    name:"FREE",
    price:"$0",
    features:[
"Single User",
"5GB Storage",
"Unlimited Public Projects",
"Community Access",
"Unlimited Private Projects",
"Dedicated Phone Support",
"Free Subdomain",
"Monthly Status Reports"
    ]

    
  },
  {
    name:"PLUS",
    price:"$9",
    features:[
     " 5 Users",
     " 50GB Storage",
     " Unlimited Public Projects",
     " Community Access",
     " Unlimited Private Projects",
     " Dedicated Phone Support",
     " Free Subdomain",
     " Monthly Status Reports"
    ]

    
  }
  ,
  {
    name:"PRO",
    price:"$49",
    features:[
    " Unlimited Users",
    " 150GB Storage",
    "  Unlimited Public Projects",
    "  Community Access",
     " Unlimited Private Projects",
     " Dedicated Phone Support",
     " Unlimited Free Subdomains",
     " Monthly Status Reports"
    ]

    
  }
] 
// the index values is because when we use map that time one error will came so to rempve that we have to set all id to unique and key =index set id for all card to unique
  return (
    <div className="App">
      {plan.map((plan , index)=>(
      <Card key={index} name={plan.name} price={plan.price} feat={plan.features} />
    ))
      }
    </div>
  );
}

function Card(props)
{
return (
  // <div className="container">
  //   <div className="row">
  <div className="card">
    <p className="head">{props.name}</p>
    <p className="price">{props.price}<span className="month">/month</span></p>
   <hr/>
    <ul className="ul">
      {props.feat.map((feat,index)=>
      (<li key={index} className="li">{feat}</li>
      ))}
    </ul>
    <button className="btn">BUY</button>
  </div>
  // </div>
  // </div>
);
}
