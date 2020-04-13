//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  
  let output = ""
  for (let char of rna) {
    if (char == 'G') {output += 'C'};
    if (char == 'C') {output += 'G'};
    if (char == 'T') {output += 'A'};
    if (char == 'A') {output += 'U'};
  }
  return output
};
