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
  // Write your solution here

}

// Test cases
console.log(findNumber([1,4,7,2,9], 7)); // Expected: 2
console.log(findNumber([5,3,2], 4)); // Expected: -1`,
      python: `def findNumber(arr, x):
    # Write your solution here
    pass

# Test cases
print(findNumber([1,4,7,2,9], 7))  # Expected: 2
print(findNumber([5,3,2], 4))  # Expected: -1`,
      java: `class Solution {
    public static int findNumber(int[] arr, int x) {
        // Write your solution here
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(findNumber(new int[]{1,4,7,2,9}, 7));
        System.out.println(findNumber(new int[]{5,3,2}, 4));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int findNumber(vector<int>& arr, int x) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> a1 = {1,4,7,2,9};
    cout << findNumber(a1, 7) << endl;
    vector<int> a2 = {5,3,2};
    cout << findNumber(a2, 4) << endl;
    return 0;
}`,
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
      { input: "arr = [3,7,2,9,1]", output: "9" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function largestElement(arr) {
  // Write your solution here

}

// Test cases
console.log(largestElement([3,7,2,9,1])); // Expected: 9`,
      python: `def largestElement(arr):
    # Write your solution here
    pass

# Test cases
print(largestElement([3,7,2,9,1]))  # Expected: 9`,
      java: `class Solution {
    public static int largestElement(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(largestElement(new int[]{3,7,2,9,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int largestElement(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {3,7,2,9,1};
    cout << largestElement(a) << endl;
    return 0;
}`,
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
      { input: "arr = [3,7,2,9,1]", output: "1" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function smallestElement(arr) {
  // Write your solution here

}

// Test cases
console.log(smallestElement([3,7,2,9,1])); // Expected: 1`,
      python: `def smallestElement(arr):
    # Write your solution here
    pass

# Test cases
print(smallestElement([3,7,2,9,1]))  # Expected: 1`,
      java: `class Solution {
    public static int smallestElement(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(smallestElement(new int[]{3,7,2,9,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int smallestElement(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {3,7,2,9,1};
    cout << smallestElement(a) << endl;
    return 0;
}`,
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
      text: "Reverse the given array and return it.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4]", output: "[4,3,2,1]" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function reverseArray(arr) {
  // Write your solution here

}

// Test cases
console.log(reverseArray([1,2,3,4]).join(",")); // Expected: 4,3,2,1`,
      python: `def reverseArray(arr):
    # Write your solution here
    pass

# Test cases
print(",".join(map(str, reverseArray([1,2,3,4]))))  # Expected: 4,3,2,1`,
      java: `import java.util.*;

class Solution {
    public static int[] reverseArray(int[] arr) {
        // Write your solution here
        return arr;
    }
    public static void main(String[] args) {
        int[] r = reverseArray(new int[]{1,2,3,4});
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<r.length;i++){sb.append(r[i]);if(i<r.length-1)sb.append(",");}
        System.out.println(sb.toString());
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> reverseArray(vector<int> arr) {
    // Write your solution here
    return arr;
}

int main() {
    vector<int> r = reverseArray({1,2,3,4});
    for(int i=0;i<r.size();i++){cout<<r[i];if(i<r.size()-1)cout<<",";}
    cout<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4,3,2,1",
      python: "4,3,2,1",
      java: "4,3,2,1",
      cpp: "4,3,2,1",
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
      { input: "arr = [1,2,3,4]", output: "10" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function arraySum(arr) {
  // Write your solution here

}

// Test cases
console.log(arraySum([1,2,3,4])); // Expected: 10`,
      python: `def arraySum(arr):
    # Write your solution here
    pass

# Test cases
print(arraySum([1,2,3,4]))  # Expected: 10`,
      java: `class Solution {
    public static int arraySum(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(arraySum(new int[]{1,2,3,4}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int arraySum(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,2,3,4};
    cout << arraySum(a) << endl;
    return 0;
}`,
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
      { input: "arr = [1,2,3,4,6]", output: "3" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function countEven(arr) {
  // Write your solution here

}

// Test cases
console.log(countEven([1,2,3,4,6])); // Expected: 3`,
      python: `def countEven(arr):
    # Write your solution here
    pass

# Test cases
print(countEven([1,2,3,4,6]))  # Expected: 3`,
      java: `class Solution {
    public static int countEven(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(countEven(new int[]{1,2,3,4,6}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int countEven(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,2,3,4,6};
    cout << countEven(a) << endl;
    return 0;
}`,
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
      { input: "arr = [1,2,3,4,6]", output: "2" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function countOdd(arr) {
  // Write your solution here

}

// Test cases
console.log(countOdd([1,2,3,4,6])); // Expected: 2`,
      python: `def countOdd(arr):
    # Write your solution here
    pass

# Test cases
print(countOdd([1,2,3,4,6]))  # Expected: 2`,
      java: `class Solution {
    public static int countOdd(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(countOdd(new int[]{1,2,3,4,6}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int countOdd(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,2,3,4,6};
    cout << countOdd(a) << endl;
    return 0;
}`,
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
      notes: ["All elements are distinct."],
    },
    examples: [
      { input: "arr = [3,5,1,7,4]", output: "5" },
    ],
    constraints: ["2 ≤ arr.length ≤ 10⁵", "All elements are distinct"],
    starterCode: {
      javascript: `function secondLargest(arr) {
  // Write your solution here

}

// Test cases
console.log(secondLargest([3,5,1,7,4])); // Expected: 5`,
      python: `def secondLargest(arr):
    # Write your solution here
    pass

# Test cases
print(secondLargest([3,5,1,7,4]))  # Expected: 5`,
      java: `class Solution {
    public static int secondLargest(int[] arr) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(secondLargest(new int[]{3,5,1,7,4}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int secondLargest(vector<int>& arr) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {3,5,1,7,4};
    cout << secondLargest(a) << endl;
    return 0;
}`,
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
      text: "Return true if array is sorted in ascending order, otherwise false.",
      notes: [],
    },
    examples: [
      { input: "arr = [1,2,3,4]", output: "true" },
      { input: "arr = [4,2,1]", output: "false" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function isSorted(arr) {
  // Write your solution here

}

// Test cases
console.log(isSorted([1,2,3,4])); // Expected: true
console.log(isSorted([4,2,1])); // Expected: false`,
      python: `def isSorted(arr):
    # Write your solution here
    pass

# Test cases
print(isSorted([1,2,3,4]))  # Expected: True
print(isSorted([4,2,1]))  # Expected: False`,
      java: `class Solution {
    public static boolean isSorted(int[] arr) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isSorted(new int[]{1,2,3,4}));
        System.out.println(isSorted(new int[]{4,2,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isSorted(vector<int>& arr) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> a1 = {1,2,3,4};
    cout << (isSorted(a1) ? "true" : "false") << endl;
    vector<int> a2 = {4,2,1};
    cout << (isSorted(a2) ? "true" : "false") << endl;
    return 0;
}`,
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
      { input: "arr = [1,2,2,3,2], x = 2", output: "3" },
    ],
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: {
      javascript: `function countOccurrence(arr, x) {
  // Write your solution here

}

// Test cases
console.log(countOccurrence([1,2,2,3,2], 2)); // Expected: 3`,
      python: `def countOccurrence(arr, x):
    # Write your solution here
    pass

# Test cases
print(countOccurrence([1,2,2,3,2], 2))  # Expected: 3`,
      java: `class Solution {
    public static int countOccurrence(int[] arr, int x) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(countOccurrence(new int[]{1,2,2,3,2}, 2));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int countOccurrence(vector<int>& arr, int x) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,2,2,3,2};
    cout << countOccurrence(a, 2) << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
    },
  },
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