import { bswap } from './platforms/bswap';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import Chain from '../../types/chain';
import { tokens } from './Tokens/tokens';
import { ConstInterface } from '../../types/const';

const _bsc = {
  platforms: {
    bswap
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const bitgert: ConstInterface<typeof bswap, Chain> =bswap;
