import Navbar from "./components/Navbar";
import './App.css';
import Page from './components/Page'
import { Button} from "./components/Button";
import {useState, useEffect} from 'react'
import Web3 from 'web3';
import JARL from './Pictures/JARL.png'
import KING from './Pictures/KING.png'
import FARMER from './Pictures/LOGO_2.jpg'
import ODIN from './Pictures/ODIN.png'
import VIKINGR from './Pictures/VIKINGR.png'

const abi = [
	{
		"inputs": [],
		"name": "addLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AddPresaler",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "AddToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "addr1",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "addr2",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			}
		],
		"name": "JackpotWon",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "manualsend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manualswap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openTrading",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "RedeemReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "removeBot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "RemoveFromWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "RemovePresaler",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendTokensToPresalers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_jackpot",
				"type": "address"
			}
		],
		"name": "SetJackpot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "maxTxPercent",
				"type": "uint256"
			}
		],
		"name": "setMaxTxPercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "setPresaleContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setTradingTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "GetHoldTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "GetTier",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "isBot",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isJackpotWinner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

function App() {


  useEffect(() => {
    // Update the document title using the browser API
    initiateMetamask()
  }, []);

  
  const state = {
    disableButton: false,
    btnTitle: "Connect to Metamask",
    btn_styling: "btn--primary--solid",
    account: "",
    image_class:"tier",
    tier_image: FARMER,
    textTier: "invisible-welcome",
    isbot_Txt: "You are not a bot",
    winner: "You havent won the jackpot yet",
    holdingTime: "0 seconds",
    eth_status:true,
    Ethtitle: "NOT ELIGIBLE",
    NFTtitle: "Unavailable",
    nft_status:true
  }

  let [disableButtons, setDisable] = useState(state.disableButton)
  let [btnTitles, setBtnTitle] = useState(state.btnTitle)
  let [btn_styles, setBtnStyle] = useState(state.btn_styling)
  let [imgcclass, setimgClass] = useState(state.image_class)
  let [tierimg, setimgTier] = useState(state.tier_image)
  let [txt_tier, settxtTier] = useState(state.textTier)
  let [isBotTxt, SetBot] = useState(state.isbot_Txt)
  let [isWinner, SetWinner] = useState(state.winner)
  let [hold_time, setholdtime] = useState(state.holdingTime)
  let [EthStatus, SetStatus] = useState(state.eth_status)
  let [Eth_title, SetETHTitle] = useState(state.Ethtitle)
  let [NFT_title, SetNFTTitle] = useState(state.NFTtitle)
  let [NFTStatus, SetNFTStatus] = useState(state.nft_status)
  let Ethbtn = <Button isdisabled={EthStatus} onClicked={RedeemETH}>{Eth_title}</Button>
  let NFTbtn = <Button isdisabled={NFTStatus}>{NFT_title}</Button>


  function initiateMetamask(){
    if (typeof window.ethereum !== 'undefined') {
    }
    else{
      setDisable(true);
      setBtnTitle("Install Metamask");
      setBtnStyle("btn--danger--outline")
      
    }
  }

  async function RedeemETH(){
    const web3 = new Web3(window.ethereum);
    const contractAddr = '0xe594b373d247C4437C7a3A1FB7b6904a917078Bf';
    const OdinContract = new web3.eth.Contract(abi, contractAddr);
    let tier = await OdinContract.methods.GetTier(state.account).call({from: state.account});
    if(tier === "FARMER"){

    }
    else{
      const result = await OdinContract.methods.RedeemReward(state.account).send({
        from: state.account
      })
    }

  }

  async function ConnectMetamask(){
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      state.account = account
      console.log(typeof state.account)
      console.log(state.account)
      setBtnTitle("Connected")
      setBtnStyle("btn--success--solid")
      GetInformation(account);
    }
    else{
      setDisable(true);
      setBtnTitle("Install Metamask");
      setBtnStyle("btn--danger--outline")
      
    }
  }

  async function GetInformation(addressRec){
    //getting the tier
    const web3 = new Web3(window.ethereum);
    const contractAddr = '0xe594b373d247C4437C7a3A1FB7b6904a917078Bf';
    const OdinContract = new web3.eth.Contract(abi, contractAddr);
    let result = await OdinContract.methods.GetTier(addressRec).call({from: addressRec});
    if(result === "FARMER"){
      setimgTier(FARMER)
    }
    if(result === "VIKINGR"){
      setimgTier(VIKINGR)
      SetStatus(false)
      SetETHTitle("CLAIM")
    }
    if(result === "JARL"){
      setimgTier(JARL)
      SetStatus(false)
      SetETHTitle("CLAIM")
    }
    if(result === "KING"){
      setimgTier(KING)
      SetStatus(false)
      SetETHTitle("CLAIM")
    }
    if(result === "GOD"){
      setimgTier(ODIN)
      SetStatus(false)
      SetETHTitle("CLAIM")
    }
    setimgClass("tierplay")
    settxtTier("welcome")

    result = await OdinContract.methods.isBot(addressRec).call({from: addressRec});
    if(result){
      SetBot("You are blacklisted")
    }

    result = await OdinContract.methods.GetHoldTime(addressRec).call({from: addressRec});
    setholdtime(`${result} Seconds`)

    result = await OdinContract.methods.isJackpotWinner(addressRec).call({from: addressRec});
    if(result){
      SetWinner("You have won the jackpot before")
    }



    //getting the rest of the stuff


  }


  return (
    <div className="App">
      <Navbar/>
      <Page NFTclaim={NFTbtn} ETHclaim={Ethbtn} isBot={isBotTxt} isWinner_text={isWinner} hodltime={hold_time} txtTierstyle={txt_tier} imgclassStyle={imgcclass} TierImage={tierimg} buttonSyling={btn_styles} titleBtn={btnTitles} clicked={ConnectMetamask} setVisible={disableButtons} />
    </div>
  );
}

export default App;
