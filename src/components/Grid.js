import {Component} from 'react'
import './Grid.css'





const grids = ["Blacklisted:","Jackpot winner:","Your Holding Time:"]
const grids2 = ["NFTS REWARDS", "ETH TIER REWARD"]
class Grid extends Component {
    state = {  }

    DistributeElements(x) {
        return this.props.details[x]
    }


    render() { 
        return (
            <div className="flexbox-dad">
            <div className="flexbox-container">
                {grids.map((item, index) =>{
                    return(
                        <div key={index} className={`flexbox-item flexbox-item-${index}`}>
                            <div className="inside">{item}</div>
                            <div className="inside2">{this.props.details[index]}</div>
                        </div>
                    )
                })}
            </div>
            <div className="flexbox-container">
                {grids2.map((item, index) =>{
                    return(
                        <div key={index} className={`flexbox-item flexbox-item-${index}`}>
                            <div className="inside">{item}</div>
                            <div className="inside2">{this.props.details2[index]}</div>
                        </div>
                    )
                })}
            </div>
         </div>
        )
    }
}
 
export default Grid;