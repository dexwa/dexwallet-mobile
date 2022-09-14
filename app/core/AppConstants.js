import Device from '../util/device';
import { MAINNET, RINKEBY } from '../constants/network';

const DEVELOPMENT = 'development';

export default {
  IS_DEV: process.env?.NODE_ENV === DEVELOPMENT,
  DEFAULT_LOCK_TIMEOUT: 30000,
  DEFAULT_SEARCH_ENGINE: 'DuckDuckGo',
  TX_CHECK_MAX_FREQUENCY: 5000,
  TX_CHECK_NORMAL_FREQUENCY: 10000,
  TX_CHECK_BACKGROUND_FREQUENCY: 30000,
  IPFS_OVERRIDE_PARAM: 'mm_override',
  IPFS_DEFAULT_GATEWAY_URL: 'https://cloudflare-ipfs.com/ipfs/',
  IPNS_DEFAULT_GATEWAY_URL: 'https://cloudflare-ipfs.com/ipns/',
  SWARM_DEFAULT_GATEWAY_URL: 'https://swarm-gateways.net/bzz:/',
  supportedTLDs: ['eth', 'xyz', 'test'],
  MAX_PUSH_NOTIFICATION_PROMPT_TIMES: 2,
  CONNEXT: {
    HUB_EXCHANGE_CEILING_TOKEN: 69,
    MIN_DEPOSIT_ETH: 0.03,
    MAX_DEPOSIT_TOKEN: 30,
    BLOCKED_DEPOSIT_DURATION_MINUTES: 5,
    CONTRACTS: {
      4: '0x0Fa90eC3AC3245112c6955d8F9DD74Ec9D599996',
      1: '0xdfa6edAe2EC0cF1d4A60542422724A48195A5071',
    },
    SUPPORTED_NETWORKS: [MAINNET, RINKEBY],
  },
  MM_UNIVERSAL_LINK_HOST: '8hjke.app.link/dexwallet',
  MM_DEEP_ITMS_APP_LINK: 'https://8hjke.app.link/dexwallet/skAH3BaF99',
  SAI_ADDRESS: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
  HOMEPAGE_URL: process.env.MM_HOMEPAGE || 'https://dexwallet-home.netlify.app/',
  SHORT_HOMEPAGE_URL: 'DexWallet.io',
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  USER_AGENT: Device.isAndroid()
    ? 'Mozilla/5.0 (Linux; Android 10; Android SDK built for x86 Build/OSM1.180201.023) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.92 Mobile Safari/537.36'
    : 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/76.0.3809.123 Mobile/15E148 Safari/605.1',
  NOTIFICATION_NAMES: {
    accountsChanged: 'metamask_accountsChanged',
    unlockStateChanged: 'metamask_unlockStateChanged',
    chainChanged: 'metamask_chainChanged',
  },
  FIAT_ORDERS: {
    TRANSAK_URL: 'https://global.transak.com/',
    TRANSAK_URL_STAGING: 'https://staging-global.transak.com/',
    TRANSAK_API_URL_PRODUCTION: 'https://api.transak.com/',
    TRANSAK_API_URL_STAGING: 'https://staging-api.transak.com/',
    TRANSAK_REDIRECT_URL: 'https://dexwallet.com/',
    MOONPAY_URL: 'https://buy.moonpay.com/',
    MOONPAY_URL_STAGING: 'https://buy-sandbox.moonpay.com/',
    MOONPAY_API_URL_PRODUCTION: 'https://api.moonpay.com/',
    MOONPAY_REDIRECT_URL: 'about:blank',
    MOONPAY_SIGN_URL_PRODUCTION:
      'https://swap.metaswap.codefi.network/moonpaySign',
    MOONPAY_SIGN_URL_STAGING:
      'https://swap.metaswap-dev.codefi.network/moonpaySign',
    WYRE_API_ENDPOINT: 'https://api.sendwyre.com/',
    WYRE_API_ENDPOINT_TEST: 'https://api.testwyre.com/',
    WYRE_MERCHANT_ID: 'merchant.com.dexwallet.wyre',
    WYRE_MERCHANT_ID_TEST: 'merchant.com.dexwallet.wyre.test',
    POLLING_FREQUENCY: 10000,
  },
  DEEPLINKS: {
    ORIGIN_DEEPLINK: 'deeplink',
    ORIGIN_QR_CODE: 'qr-code',
  },
  SWAPS: {
    ACTIVE: true,
    ONLY_MAINNET: true,
    CLIENT_ID: 'mobile',
    LIVENESS_POLLING_FREQUENCY: 5 * 60 * 1000,
    POLL_COUNT_LIMIT: 3,
    DEFAULT_SLIPPAGE: 2,
    CACHE_AGGREGATOR_METADATA_THRESHOLD: 5 * 60 * 1000,
    CACHE_TOKENS_THRESHOLD: 5 * 60 * 1000,
    CACHE_TOP_ASSETS_THRESHOLD: 5 * 60 * 1000,
  },
  MAX_SAFE_CHAIN_ID: 4503599627370476,
  URLS: {
    TERMS_AND_CONDITIONS: 'https://dexwallet.com/terms-of-use/',
    PRIVACY_POLICY: 'https://dexwallet.com/privacy-policy/',
    CONNECTIVITY_ISSUES:
      'https://dexwallet.com/infura-limitations.html',
    NFT: 'https://dexwallet.com/support/hc/en-us/articles/NFT-tokens-in-DexWallet-wallet',
    SECURITY:
        'https://dexwallet.com/safety-tips.html',
    TOKEN_BALANCE:
      'https://dexwallet.com/token-balance-issues.html',
    MM_FAUCET: 'https://goerlifaucet.com/',
  },
  ERRORS: {
    INFURA_BLOCKED_MESSAGE:
      'EthQuery - RPC Error - This service is not available in your country',
  },
  GAS_OPTIONS: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    MARKET: 'market',
    AGGRESSIVE: 'aggressive',
  },
  GAS_TIMES: {
    UNKNOWN: 'unknown',
    MAYBE: 'maybe',
    LIKELY: 'likely',
    VERY_LIKELY: 'very_likely',
    AT_LEAST: 'at_least',
    LESS_THAN: 'less_than',
    RANGE: 'range',
  },
  REVIEW_PROMPT: {
    HIGH_GAS_FEES:
      'https://dexwallet.com/gas-fees-high-issues.html',
    MISSING_TOKENS:
      'https://dexwallet.com/adding-unlisted-tokens.html',
    SWAP_ISSUES:
      'https://dexwallet.com/error-fetching-quote.html',
    SUPPORT: 'https://dexwallet.com/support/',
  },
  BUNDLE_IDS: {
    IOS: 'com.dexwallet.DexWallet',
    ANDROID: 'com.dexwallet',
  },
  LEAST_SUPPORTED_ANDROID_API_LEVEL: 29,
  ADD_CUSTOM_NETWORK_POPULAR_TAB_ID: 'popular-tab',
  ADD_CUSTOM_NETWORK_CUSTOM_TAB_ID: 'custom-tab',
};
