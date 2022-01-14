async function main() {
  const MatiousNFT = await ethers.getContractFactory("MatiousNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const matiousNFT = await MatiousNFT.deploy()
  await matiousNFT.deployed()
  console.log("Contract deployed to address: ", matiousNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
