//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  
  for (let index = 0; index < COLORS.length; index++) {
    if (COLORS[index] === color)
    return index
  }
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
