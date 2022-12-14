import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const ETH = {
  name: 'Wrapped Ether',
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  symbol: 'WETH',
  decimals: 18,
  chainId: 1,
  website: 'https://weth.io/',
  description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  logoURI: 'https://arbiscan.io/token/images/weth_28.png',
  documentation: 'https://ethereum.org/en/developers/docs/',
} as const;

const _tokens = {
  ETH,
  WETH: ETH,
  WNATIVE: ETH,
  USDC: {
    name: 'USD Coin',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    chainId: 1,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
    documentation: 'https://developers.circle.com/docs',
  },
  wstETH: {
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    chainId: 1,
    decimals: 18,
    website: 'https://lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
    logoURI: '',
    documentation: 'https://docs.lido.fi/',
  },
  stETH: {
    name: 'Lido Wrapped Staked ETH',
    symbol: 'stETH',
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    chainId: 1,
    decimals: 18,
    website: 'https://lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
    logoURI: '',
    documentation: 'https://docs.lido.fi/',
  },
  BAL: {
    name: 'Balancer',
    symbol: 'BAL',
    address: '0xba100000625a3754423978a60c9317c58a424e3D',
    chainId: 1,
    decimals: 18,
    website: 'https://balancer.fi/',
    description:
      'Balancer turns the concept of an index fund on its head: instead of a paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities. ',
    logoURI: '',
    documentation: 'https://docs.balancer.fi/',
  },
  AURA: {
    name: 'Aura',
    symbol: 'AURA',
    address: '0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF',
    chainId: 1,
    decimals: 18,
    website: 'https://aura.finance/',
    description:
      'Aura Finance is a protocol built on top of the Balancer system to provide maximum incentives to Balancer liquidity providers and BAL stakers (into veBAL) through social aggregation of BAL deposits and Aura???s native token. For BAL stakers, Aura provides a seamless onboarding process to veBAL, by creating a tokenised wrapper token called auraBAL that represents the 80/20 BPT locked up for the maximum time in VotingEscrow (read more about what this means). This can be staked to receive existing rewards (BAL and bbaUSD) from Balancer, in addition to a share of any BAL earned by Aura (read more about the fees), and additional AURA. This minting process is irreversible however users can trade their auraBAL back to BAL through an incentivised liquidity pool.',
    logoURI: '',
    documentation: 'https://docs.aura.finance/',
  },
  MAI: {
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    address: '0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6',
    chainId: 1,
    decimals: 18,
    logoURI: '',
    website: 'https://mai.finance/',
    documentation: 'https://docs.mai.finance/',
    description:
      'MAI is a stable coin collateralized by your MATIC holdings. Its powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.',
  },
  CRV: {
    name: 'CRV',
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    symbol: 'CRV',
    decimals: 18,
    chainId: 1,
    website: 'https://curve.fi/',
    description:
      'Curve is an exchange liquidity pool on Ethereum. Curve is designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
    logoURI: '',
    documentation: 'https://curve.readthedocs.io/',
  },
  CVX: {
    name: 'CVX',
    address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    symbol: 'CVX',
    decimals: 18,
    chainId: 1,
    website: 'https://www.convexfinance.com/',
    documentation: 'https://docs.convexfinance.com/',
    description:
      'Convex allows Curve.fi liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves. Liquidity providers can receive boosted CRV and liquidity mining rewards with minimal effort.',
    logoURI: '',
  },
  cvxCRV: {
    name: 'cvxCRV',
    address: '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7',
    symbol: 'cvxCRV',
    decimals: 18,
    chainId: 1,
    website: 'https://www.convexfinance.com/',
    documentation: 'https://docs.convexfinance.com/',
    description:
      'Convex allows Curve.fi liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves. Liquidity providers can receive boosted CRV and liquidity mining rewards with minimal effort.',
    logoURI: '',
  },
  cvxFXS: {
    name: 'cvxFXS',
    address: '0xFEEf77d3f69374f66429C91d732A244f074bdf74',
    symbol: 'cvxFXS',
    decimals: 18,
    chainId: 1,
    website: 'https://frax.convexfinance.com/',
    documentation: 'https://docs.convexfinance.com/',
    description:
      'Convex Finance has expanded to optimize opportunities for liquidity providers on Frax the same way it has done so for Curve.fi LPs.',
    logoURI: '',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
