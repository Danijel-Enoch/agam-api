const BigNumber = require('bignumber.js');
const { bscWeb3: web3 } = require('../../../../utils/web3');

const NftyStaking = require('../../../../abis/degens/NftyStaking.json');
const fetchPrice = require('../../../../utils/fetchPrice');
const { compound } = require('../../../../utils/compound');
const { getContractWithProvider } = require('../../../../utils/contractHelper');
const { getTotalPerformanceFeeForVault } = require('../../../vaults/getVaultFees');

const stakingPool = '0x490147C65365c58F3404415b1194fbB4697A4B44';
const oracleId = 'NFTY';
const oracle = 'tokens';
const DECIMALS = '1e18';
const BLOCKS_PER_DAY = 28800;

const getNftyApys = async () => {
  const tokenPrice = await fetchPrice({ oracle, id: oracleId });
  const rewardPool = getContractWithProvider(NftyStaking, stakingPool, web3);

  const [rewardPerBlock, totalStaked] = await Promise.all([
    rewardPool.methods.rewardPerBlock().call(),
    rewardPool.methods.totalStakeTokenBalance().call(),
  ]);

  const yearlyRewards = new BigNumber(rewardPerBlock).times(BLOCKS_PER_DAY).times(365);
  const yearlyRewardsInUsd = yearlyRewards.times(tokenPrice).div(DECIMALS);
  const totalStakedInUsd = new BigNumber(totalStaked).times(tokenPrice).div(DECIMALS);

  const simpleApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  const shareAfterBeefyPerformanceFee = 1 - getTotalPerformanceFeeForVault('nfty-nfty');
  const apy = compound(simpleApy, process.env.BASE_HPY, 1, shareAfterBeefyPerformanceFee);
  // console.log("nfty", apy, totalStakedInUsd.valueOf(), yearlyRewardsInUsd.valueOf(), simpleApy.valueOf());
  return { 'nfty-nfty': apy };
};

module.exports = getNftyApys;
