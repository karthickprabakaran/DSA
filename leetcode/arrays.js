

// NOTE: 1. Contains Duplicate


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;


};

// NOTE:  2.Valid anagram - check if one string is anagram of another string


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if (s.length !== t.length) return false;

  let arr = new Array(26).fill(0);

  for (let char of s) {
    arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let char of t) {
    arr[char.charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let num of arr) {
    if (num !== 0) return false;
  }

  return true;
};


// NOTE: 3. two sum 
// NOTE: the brute can be done using the two loops (big O n square TC)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let n = nums.length;

  let map = new Map();

  for (let i = 0; i < n; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) return [map.get(diff), i];

    map.set(nums[i], i);

  }
  return [-1, -1];

};

// NOTE: 4.Group anagrams : 
// this solion makes this even more efficient by removing the need for the sorting and we are generating the key bu using the freq
// array this.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  let map = new Map();
  for (let str of strs) {
    let count = new Array.fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let key = count.join('#');

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

// NOTE:  5. 




