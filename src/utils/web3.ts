import { constants } from "ethers";

export const getMinimumDepositByToken = (token: string) => {
  if (token === constants.AddressZero) {
    return 0.02;
  }
  return 20000;
};

export const getMinimumWithdrawByToken = (token: string) => {
  if (token === constants.AddressZero) {
    return 0.02;
  }
  return 10000;
};

export const getWithdrawFeeByToken = (token: string) => {
  if (token === constants.AddressZero) {
    return 0.01;
  }
  return 2000;
};
