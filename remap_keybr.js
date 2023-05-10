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
    {
    { from: "T", to: "B" },
    { from: "G", to: "G" },
    { from: "H", to: "M" },
    { from: "Z", to: "X" },
    { from: "X", to: "C" },
    { from: "C", to: "D" },
    { from: "B", to: "Z" },
    { from: "M", to: "H" },
  ];

  const remapKey = ({ from, to }) => {
    document.querySelector(`svg[data-key='Key${from}'] > text`).innerHTML = to;
  };

  const remapKeys = () => {
    KEYS_TO_REMAP.forEach(remapKey);
  };

  const loopToFindKeyboard = () => {
    const kb = document.querySelector("main > div > div > svg");
    if (document.title === "Typing Practice" && kb) return remapKeys();
    setTimeout(loopToFindKeyboard, 500);
  };

  loopToFindKeyboard();
})();