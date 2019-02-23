pragma solidity 0.5.0;

import "./Ownable.sol";
import "./ERC20Token.sol";

contract ICO is Ownable {

    ERC20Token public token;
    uint public etherRate = 10;
    uint public bitcoinRate = 50;
    uint256 public tokensSold;

     constructor (address _tokenAddress) public {
         token = ERC20Token(_tokenAddress);
     }

    function buyTokensWithEther() public payable {
        token.mint(msg.sender, (msg.value * etherRate));
        tokensSold += (msg.value * etherRate);
    }

    function buyTokensWithBitcoin(address _to, uint _value) public {
        token.mint(_to, (_value * bitcoinRate));
        tokensSold += (_value * bitcoinRate);
    }

    function tokenWithdraw() public onlyOwner {
        token.transfer(owner, token.balanceOf(address(this)));
    }

    function forwardFunds() public onlyOwner {
        owner.transfer(address(this).balance);
    }
}
