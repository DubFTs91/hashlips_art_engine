const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;
//const network = NETWORK.sol; add for reference

// General metadata for Ethereum
const namePrefix = "Collection Name";
const description = "Today is 12/17/2021. Took me 3 days to figure out the windows // vs \\ isue.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "Dub",
  seller_fee_basis_points: 777, // Define how much % you want from secondary market sales 1500 = 15%
  external_url: "https://www.linkedin.com/in/justinwilliams7/",
  
  //share % MUST = 100%
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", //wallet adress
      share: 100, //% of shares creator gets
    },
  ],
};

/*
sol = 0 based
eth = 1 based
*/


//configure to read layers from a file
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

/*
shuffleLayerConfigurations = false for TESTING
shuffleLayerConfigurations = true before RELEASE

*/
const shuffleLayerConfigurations = false;

const debugLogs = false;



const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

//ability to add addition metadata
const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

//creates a preview of the art collection
const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

//creates a gif preview of the art collection
const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
