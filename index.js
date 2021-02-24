[
  ["10", "sale", "january-sale"],
  ["200", "sale", "EMPTY"],
][(["sale", "0", "10"], ["january-sale", "1", "10"])];

let alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  " F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// A - Z = 65 - 90
// a - z = 97 - 122

const map = () => {
  let output = { 32: " " };
  let upperCase = 65;
  let lowerCase = 97;

  for (let i = 0; i < alpha.length; i++) {
    let upperVal = alpha[i];
    let lowerVal = alpha[i].toLowerCase();

    if (!output[upperCase]) {
      output[upperCase] = upperVal;
      upperCase += 1;
    }

    if (!output[lowerCase]) {
      output[lowerCase] = lowerVal;
      lowerCase += 1;
    }
  }

  return output;
};

const decode = (encoded) => {
  const alphaMap = map();
  let output = "";

  let decoded = encoded.split("").reverse().join("");

  for (let i = 0; i < decoded.length; i++) {
    let doubleVal = `${decoded[i]}${decoded[i + 1]}`;
    let trippleVal = `${decoded[i]}${decoded[i + 1]}${decoded[i + 2]}`;

    if (alphaMap[doubleVal]) {
      output += alphaMap[doubleVal];
      i = i + 1;
    } else if (alphaMap[trippleVal]) {
      output += alphaMap[trippleVal];
      i = i + 2;
    }
  }

  return output;
};

// console.log(decode("23511011501782351112179911801562340161171141148"));

const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    }
  }

  return -1;
};

// console.log(search([-1, 1, 3, 5, 9, 12, 15, 30, 80], 80));
[-1, 1, 3][3];
// let tess = [-1, 0, 3, 5, 9, 12];
// console.log(tess.slice(0, 2));

class Printer {
  constructor(leftX, topY, rightX, bottomY) {
    this.canvas = {
      0: new Array(10).fill("_"),
      1: new Array(10).fill("_"),
      2: new Array(10).fill("_"),
      3: new Array(10).fill("_"),
      4: new Array(10).fill("_"),
      5: new Array(10).fill("_"),
    };
    (this.leftX = leftX),
      (this.topY = topY),
      (this.rightX = rightX),
      (this.bottomY = bottomY);
  }

  DRAW_RECTANGLE(char) {
    //   this function will key into the canvas object at the leftX value
  }

  ERASE_AREA() {}

  PRINT_CANVAS() {
    for (let key in this.canvas) {
      console.log(this.canvas[key]);
    }
  }
}

let printer = new Printer();

// console.log(printer.PRINT_CANVAS());

const sellPosition = (currentPos, sellPrice) => {
  return sellPrice - currentPos;
};

var maxProfit = function (prices) {
  let profit = 0;
  let currentPos = null;

  for (let i = 0; i < prices.length; i++) {
    let value = prices[i];
    let nextValue = prices[i + 1];

    console.log("start");
    if (currentPos || currentPos === 0) {
      profit += sellPosition(currentPos, value);
      currentPos = null;
      console.log("here1");
    }

    if (value < nextValue) {
      currentPos = value;
      console.log("here");
    }
  }
  return profit;
};

// console.log(maxProfit([1, 2, 3, 4, 5]));

var rotate = function (nums = [], k) {
  while (k > 0) {
    let num = nums.pop();
    nums.unshift(num);
    --k;
  }
  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

var singleNumber = function (nums = []) {
  nums.sort();

  while (nums.length >= 1) {
    let currentVal = nums[0];
    let nextVal = nums[1];

    if (currentVal !== nextVal) return currentVal;
    nums.shift();
    nums.shift();
  }
};

// console.log(singleNumber([4, 1, 2, 1, 2]));

const determineSize = (arr1, arr2) => {
  return arr1.length < arr2.length
    ? { smallest: arr1, largest: arr2 }
    : { smallest: arr2, largest: arr1 };
};

var intersect = function (nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]) {
  let output = [];
  let { largest, smallest } = determineSize(nums1, nums2);
  let map = {};

  for (let index of largest) {
    if (map[index]) {
      map[index] += 1;
    } else {
      map[index] = 1;
    }
  }

  for (let index of smallest) {
    if (map[index] && map[index] >= 1) {
      output.push(index);
      map[index] -= 1;
    }
  }

  return output;
};

// console.log(intersect());

var moveZeroes = function (nums) {
  let zeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (value === 0) {
      nums.splice(i, 1);
      zeroes += 1;
    }
  }

  for (let i = 0; i < zeroes; i++) {
    nums.push(0);
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

const createSets = (num) => {
  let columns = {};
  for (let i = 0; i < num; i++) {
    columns[i] = new Set();
  }
  return columns;
};

// console.log(createColumnsSet(9));

const determineBoard = (row, column) => {};

const board = [
  ["5", "5", ".", ".", "7", ".", ".", ".", "."],
  ["5", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],

  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const ts = () => {
  let columns = createSets(9);
  let subBoards = createSets(9);

  for (let row of board) {
    for (let i = 0; i < row.length; i++) {
      let value = row[i];
      let rowSet = new Set();

      if (value < 1 || value > 9) return false;

      if (rowSet.has(value.toString())) {
        return false;
      } else if (value !== ".") {
        rowSet.add(value);

        if (columns[i].has(value.toString())) {
          return false;
        } else {
          columns[i].add(value);
        }
      }
    }
  }
  return true;
};

// console.log(ts());

// console.log(Math.floor(0.5 / 3));
console.log({
  "&amp;": "'",
  "&amp;": "&",
  "&gt;": ">",
  "&lt;": "<",
  "&frasl;": "/",
  "&quot;": '"',
});
