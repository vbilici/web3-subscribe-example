pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract MyAwesomeToken is MintableToken {
  using SafeMath for uint256;

  string public constant name = "My Awesome Token";
  string public constant symbol = "MAT";
  uint8 public constant decimals = 18;

  bool public isCrowdsaleFinished;
 
  event CrowdsaleFinishedEvent(uint256 timestamp);


  function toggleCrowdsaleFinished()
    public
    onlyOwner
  {
    isCrowdsaleFinished = !isCrowdsaleFinished;
    emit CrowdsaleFinishedEvent(block.timestamp);
  }
}