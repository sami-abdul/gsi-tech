pragma solidity 0.5.0;

import "./Ownable.sol";
import "./ERC20Token.sol";

contract ICO is Ownable {

    ERC20Token public token;
    uint public rate = 10;
    uint256 public tokensSold;

    // constructor (address _tokenAddress) public {
        // token = ERC20Token(_tokenAddress);
    // }

    function buyToken() public payable {
        require((msg.value * rate) <= token.balanceOf(address(this)));
        token.mint(msg.sender, (msg.value * rate));
        tokensSold += (msg.value * rate);
    }

    function tokenWithdraw() public onlyOwner {
        token.transfer(owner, token.balanceOf(address(this)));
    }

    function getBalance() public view returns (uint) {
        return token.balanceOf(msg.sender);
    }

    function getICOBalance() public view returns (uint) {
        return token.balanceOf(address(this));
    }

    function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
        uint256 etherAmount = _weiAmount / 1000000000000000000;
        return etherAmount*rate;
    }

    function forwardFunds() public onlyOwner {
        owner.transfer(address(this).balance);
    }
}