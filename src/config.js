"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Your project description";
const baseUri = "ipfs://NewUriToReplace";

const layerConfigurations = [
  {
    growEditionSizeTo: 9,
    layersOrder: [
//{ name: "puguman", Number: 1 },
      { name: "face", Number:3 },
      { name: "chest", Number:3 },
      { name: "hat", Number:2 },


    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 960,
  height: 1200,
};

// const background = {
//   generate: true,
//   brightness: "80%",
// };

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

//Preview option not compatible with sprite sheet
// const preview = {
//   thumbPerRow: 5,
//   thumbWidth: 50,
//   imageRatio: format.width / format.height,
//   imageName: "preview.png",
// };

module.exports = {
  format,
  baseUri,
  description,
 // background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  //preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
