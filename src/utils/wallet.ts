// Set of helper functions to facilitate wallet setup

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number, tokenLogo?: string) => {
  // better leave this undefined for default image instead of broken image url
  const image = tokenLogo ? tokenLogo : undefined;
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image,
      },
    },
  });

  return tokenAdded;
};

export const canRegisterToken = () =>
  typeof window !== 'undefined' &&
  // @ts-ignore
  !window?.ethereum?.isSafePal &&
  (window?.ethereum?.isMetaMask || window?.ethereum?.isTrust || window?.ethereum?.isCoinbaseWallet || window?.ethereum?.isTokenPocket);

export const getSignMessage = (address: string) => {
  return `Welcome to Lendup.Finance!\r\nPlease sign to let us verify that you are the owner of this address:\r\n${address}\r\nThis will not cost you any gas fees.\r\nBy signing you accept the Lendup.Finance Terms of Service.`;
};
