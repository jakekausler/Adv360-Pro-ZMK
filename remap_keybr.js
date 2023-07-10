// ==UserScript==
// @name          KeyBR Colemak-DH
// @namespace     http://tampermonkey.net/
// @version       v1.1
// @description   Switch Colemak layout in keybr.com to Colemak DH
// @author        https://github.com/Zyst
// @match         https://www.keybr.com/
// @icon          https://www.google.com/s2/favicons?domain=keybr.com
// @grant         none
// @contributors  https://github.com/hilarycheng
// ==/UserScript==

(() => {
  "use strict";
  const KEYS_TO_REMAP = [
    { from: "Q", to: "Q", column: 4, finger: 4, hand: 0, row: 0 },
    { from: "W", to: "W", column: 3, finger: 3, hand: 0, row: 0 },
    { from: "F", to: "F", column: 2, finger: 2, hand: 0, row: 0 },
    { from: "P", to: "P", column: 1, finger: 1, hand: 0, row: 0 },
    { from: "G", to: "B", column: 0, finger: 1, hand: 0, row: 0 },
    { from: "J", to: "J", column: 0, finger: 1, hand: 1, row: 0 },
    { from: "L", to: "L", column: 1, finger: 1, hand: 1, row: 0 },
    { from: "U", to: "U", column: 2, finger: 2, hand: 1, row: 0 },
    { from: "Y", to: "Y", column: 3, finger: 3, hand: 1, row: 0 },
    { from: "A", to: "A", column: 4, finger: 4, hand: 0, row: 1 },
    { from: "R", to: "R", column: 3, finger: 3, hand: 0, row: 1 },
    { from: "S", to: "S", column: 2, finger: 2, hand: 0, row: 1 },
    { from: "T", to: "T", column: 1, finger: 1, hand: 0, row: 1 },
    { from: "D", to: "G", column: 0, finger: 1, hand: 0, row: 1 },
    { from: "H", to: "M", column: 0, finger: 1, hand: 1, row: 1 },
    { from: "N", to: "N", column: 1, finger: 1, hand: 1, row: 1 },
    { from: "E", to: "E", column: 2, finger: 2, hand: 1, row: 1 },
    { from: "I", to: "I", column: 3, finger: 3, hand: 1, row: 1 },
    { from: "O", to: "O", column: 4, finger: 4, hand: 1, row: 1 },
    { from: "Z", to: "Z", column: 4, finger: 4, hand: 0, row: 2 },
    { from: "X", to: "X", column: 3, finger: 3, hand: 0, row: 2 },
    { from: "C", to: "C", column: 2, finger: 2, hand: 0, row: 2 },
    { from: "V", to: "D", column: 1, finger: 1, hand: 0, row: 2 },
    { from: "B", to: "V", column: 0, finger: 1, hand: 0, row: 2 },
    { from: "K", to: "K", column: 0, finger: 1, hand: 1, row: 2 },
    { from: "M", to: "H", column: 1, finger: 1, hand: 1, row: 2 },
  ];

//   const remapKey = ({ from, to }) => {
//     document.querySelector(`svg[data-key='Key${from}'] > text`).innerHTML = to;
//   };

  const remapKeys = () => {
    // KEYS_TO_REMAP.forEach(remapKey);
    let elems = document.querySelectorAll(`svg[data-key]:not([value=""])`);
    elems.forEach(elem => {
        let item = KEYS_TO_REMAP.find(i => `Key${i.from}` === elem.getAttribute('data-key'));
        console.log(item, elem.getAttribute('data-key'), elem);
        if (item) {
            console.log("Keeping", elem);
            elem.querySelector("text").innerHTML = item.to;
        } else {
            console.log("Removing", elem);
            elem.remove();
        }
    });
  };

  const loopToFindKeyboard = () => {
    const kb = document.querySelector("main > div > div > svg");
    if (document.title === "Typing Practice" && kb) return remapKeys();
    setTimeout(loopToFindKeyboard, 500);
  };

  loopToFindKeyboard();
})();