export const PROBLEMS = {
  "find-number": {
    id: "find-number",
    title: "Find Number in Array",
    difficulty: "Easy",
    category: "Array • Linear Search",
    description: {
      text: "Given an array of integers and a number x, return the index of x if it exists, otherwise return -1.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,4,7,2,9], x = 7", output: "2" },
      { input: "arr = [5,3,2], x = 4", output: "-1" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function findNumber(arr, x) {

}`,
      python: `def findNumber(arr, x):
    pass`,
      java: `class Solution {
    public static int findNumber(int[] arr, int x) {

    }
}`,
      cpp: `int findNumber(vector<int>& arr, int x) {

}`
    },
    expectedOutput: {
      javascript: "2\n-1",
      python: "2\n-1",
      java: "2\n-1",
      cpp: "2\n-1",
    },
  },

  "largest-element": {
    id: "largest-element",
    title: "Largest Element in Array",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return the largest element in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [3,7,2,9,1]", output: "9" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function largestElement(arr) {

}`,
      python: `def largestElement(arr):
    pass`,
      java: `class Solution {
    public static int largestElement(int[] arr) {

    }
}`,
      cpp: `int largestElement(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "9",
      python: "9",
      java: "9",
      cpp: "9",
    },
  },

  "smallest-element": {
    id: "smallest-element",
    title: "Smallest Element in Array",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return the smallest element in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [3,7,2,9,1]", output: "1" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function smallestElement(arr) {

}`,
      python: `def smallestElement(arr):
    pass`,
      java: `class Solution {
    public static int smallestElement(int[] arr) {

    }
}`,
      cpp: `int smallestElement(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
      cpp: "1",
    },
  },

  "reverse-array": {
    id: "reverse-array",
    title: "Reverse Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Reverse the given array.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4]", output: "[4,3,2,1]" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function reverseArray(arr) {

}`,
      python: `def reverseArray(arr):
    pass`,
      java: `class Solution {
    public static void reverseArray(int[] arr) {

    }
}`,
      cpp: `void reverseArray(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "[4,3,2,1]",
      python: "[4,3,2,1]",
      java: "[4,3,2,1]",
      cpp: "[4,3,2,1]",
    },
  },

  "sum-of-array": {
    id: "sum-of-array",
    title: "Sum of Array Elements",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return the sum of all elements in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4]", output: "10" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function arraySum(arr) {

}`,
      python: `def arraySum(arr):
    pass`,
      java: `class Solution {
    public static int arraySum(int[] arr) {

    }
}`,
      cpp: `int arraySum(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "10",
      python: "10",
      java: "10",
      cpp: "10",
    },
  },

  "count-even": {
    id: "count-even",
    title: "Count Even Numbers",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return how many even numbers are present in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4,6]", output: "3" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function countEven(arr) {

}`,
      python: `def countEven(arr):
    pass`,
      java: `class Solution {
    public static int countEven(int[] arr) {

    }
}`,
      cpp: `int countEven(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
    },
  },

  "count-odd": {
    id: "count-odd",
    title: "Count Odd Numbers",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return how many odd numbers are present in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4,6]", output: "2" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function countOdd(arr) {

}`,
      python: `def countOdd(arr):
    pass`,
      java: `class Solution {
    public static int countOdd(int[] arr) {

    }
}`,
      cpp: `int countOdd(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
      cpp: "2",
    },
  },

  "second-largest": {
    id: "second-largest",
    title: "Second Largest Element",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Find the second largest element in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [3,5,1,7,4]", output: "5" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function secondLargest(arr) {

}`,
      python: `def secondLargest(arr):
    pass`,
      java: `class Solution {
    public static int secondLargest(int[] arr) {

    }
}`,
      cpp: `int secondLargest(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
      cpp: "5",
    },
  },

  "check-sorted": {
    id: "check-sorted",
    title: "Check if Array is Sorted",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return true if array is sorted in ascending order otherwise false.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4]", output: "true" },
      { input: "arr = [4,2,1]", output: "false" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function isSorted(arr) {

}`,
      python: `def isSorted(arr):
    pass`,
      java: `class Solution {
    public static boolean isSorted(int[] arr) {

    }
}`,
      cpp: `bool isSorted(vector<int>& arr) {

}`
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "count-occurrence": {
    id: "count-occurrence",
    title: "Count Occurrence of Number",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Return how many times a number x appears in the array.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,2,3,2], x = 2", output: "3" }
    ],
    constraints: [],
    starterCode: {
      javascript: `function countOccurrence(arr, x) {

}`,
      python: `def countOccurrence(arr, x):
    pass`,
      java: `class Solution {
    public static int countOccurrence(int[] arr, int x) {

    }
}`,
      cpp: `int countOccurrence(vector<int>& arr, int x) {

}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
    },
  }
};
export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};