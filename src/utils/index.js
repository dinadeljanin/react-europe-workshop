export const formatAddress = (addr) => {
  return addr && `${addr.substr(0, 6)}...${addr.substr(-4)}`
}
