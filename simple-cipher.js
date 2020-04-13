//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function getAlphaPos(char, alpha) {
  
  return alpha.indexOf(char)
}

function getKeyChar(pos, key) {

  let keyPos= pos
  
  while (keyPos >= key.length) {
    keyPos -= key.length 
  }
  
    return key[keyPos]
  }


function getCypherChar(charPos, keyPos, alpha) {

  let newPos = charPos + keyPos

  while (newPos >= alpha.length) {

    newPos -= alpha.length

  }

    return alpha[newPos]
}

function getOrgChar(charPos, keyPos, alpha) {

  let newPos = charPos - keyPos

  while (newPos < 0) {

    newPos += alpha.length

  }

    return alpha[newPos]
}


export class Cipher {
  constructor(key = "aaaaaaaaaa") {

      this._key = key.toLowerCase().split("")
      this.alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    }


  encode(encodeStr) {

    let rtnVal = ""
    for (let pos = 0; pos < encodeStr.length; pos++) {
      let char = encodeStr[pos]

      let keyChar = getKeyChar(pos, this._key)

      let charPos = getAlphaPos(char.toLowerCase(), this.alpha)
      let keyPos = getAlphaPos(keyChar, this.alpha)

      rtnVal += getCypherChar(charPos, keyPos, this.alpha)
    } 
    return rtnVal 

  }

  decode(decodeStr) {
    
    let rtnVal = ""
    for (let pos = 0; pos < decodeStr.length; pos++) {
      let char = decodeStr[pos]

      let keyChar = getKeyChar(pos, this._key)

      let charPos = getAlphaPos(char.toLowerCase(), this.alpha)
      let keyPos = getAlphaPos(keyChar, this.alpha)

      rtnVal += getOrgChar(charPos, keyPos, this.alpha)
    } 
    return rtnVal 

  }

  get key() {
    return this._key.join("")

  }
}