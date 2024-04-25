import {Component} from "react"

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"Uttam Parajuli",
            userList:null
        }
        console.log("I am a first call")
    }

   componentDidMount=()=>{
    this.setState({
        ...this.state,
      userList:  [{
            name:"User One",
            email:"one@user.com",
            address:"Kathmandu",
            phone:1231223,

        },
        {
            name:"User two",
            email:"two@user.com",
            address:"Bhaktapur",
            phone:456456456,

        }

        ]
    })
     console.log("I am a third call")

   }
componentWillUnmount =()=>{
    console.log("At the end of component")
}

componentDidUpdate =()=>{
    console.log("After every render except first call")
}

render =()=>{
    console.log("I am a Second call");
    return (<div>
        <h1>This is home Page {this.props.name}</h1>
        <h2>This is props {this.props.title}</h2>
    
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque illo labore omnis repudiandae ad neque saepe in tempora cum accusantium, sed voluptas voluptatum provident. Reprehenderit tempore obcaecati quia adipisci eius!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quisquam omnis maxime est quidem, enim reiciendis deleniti tenetur? Ipsum, ex. Totam possimus tempore accusamus accusantium, vitae unde id ipsum earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non, eaque, nulla corrupti similique magni architecto dolor officiis libero at nisi, quasi quidem? Fugiat, officiis? Dolorum assumenda provident voluptas quis.</p>
        <table>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
    </div>)
}







}
export default LandingPage;