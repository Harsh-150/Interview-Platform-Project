export const PROBLEMS = {
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if:",
        "1. Open brackets must be closed by the same type of brackets.",
        "2. Open brackets must be closed in the correct order.",
        "3. Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
      {
        input: 's = "([)]"',
        output: "false",
      },
      {
        input: 's = "{[]}"',
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
#include <stack>
#include <map>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    cout << boolalpha; // Print 'true'/'false' instead of 1/0
    cout << sol.isValid("()") << endl;
    cout << sol.isValid("()[]{}") << endl;
    cout << sol.isValid("(]") << endl;
    cout << sol.isValid("([)]") << endl;
    cout << sol.isValid("{[]}") << endl;
    return 0;
}`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.isValid("()"))
print(sol.isValid("()[]{}"))
print(sol.isValid("(]"))
print(sol.isValid("([)]"))
print(sol.isValid("{[]}"))
`,
      java: `import java.util.Stack;
import java.util.Map;
import java.util.HashMap;

class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isValid("()"));
        System.out.println(sol.isValid("()[]{}"));
        System.out.println(sol.isValid("(]"));
        System.out.println(sol.isValid("([)]"));
        System.out.println(sol.isValid("{[]}"));
    }
}`,
    },
    expectedOutput: {
      cpp: "true\ntrue\nfalse\nfalse\ntrue",
      python: "True\nTrue\nFalse\nFalse\nTrue",
      java: "true\ntrue\nfalse\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      notes: [
        "A subarray is a contiguous part of an array.",
      ],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    vector<int> nums2 = {1};
    vector<int> nums3 = {5,4,-1,7,8};
    
    cout << sol.maxSubArray(nums1) << endl;
    cout << sol.maxSubArray(nums2) << endl;
    cout << sol.maxSubArray(nums3) << endl;
    
    return 0;
}`,
      python: `from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(sol.maxSubArray([1]))
print(sol.maxSubArray([5,4,-1,7,8]))
`,
      java: `import java.util.Arrays;

class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(sol.maxSubArray(new int[]{1}));
        System.out.println(sol.maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
    },
    expectedOutput: {
      cpp: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
      notes: [],
    },
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 ≤ Node.val ≤ 100",
      "Both list1 and list2 are sorted in non-decreasing order.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

// Helper function to create list from vector
ListNode* createList(const std::vector<int>& vals) {
    ListNode* head = nullptr;
    ListNode* tail = nullptr;
    for (int val : vals) {
        if (!head) {
            head = tail = new ListNode(val);
        } else {
            tail->next = new ListNode(val);
            tail = tail->next;
        }
    }
    return head;
}

// Helper function to print list
void printList(ListNode* head) {
    std::cout << "[";
    while (head) {
        std::cout << head->val;
        if (head->next) std::cout << ",";
        head = head->next;
    }
    std::cout << "]" << std::endl;
}

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Write your solution here
        
        return nullptr;
    }
};

int main() {
    Solution sol;
    
    ListNode* l1 = createList({1,2,4});
    ListNode* l2 = createList({1,3,4});
    printList(sol.mergeTwoLists(l1, l2));

    ListNode* l3 = createList({});
    ListNode* l4 = createList({});
    printList(sol.mergeTwoLists(l3, l4));

    ListNode* l5 = createList({});
    ListNode* l6 = createList({0});
    printList(sol.mergeTwoLists(l5, l6));
    
    return 0;
}`,
      python: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Helper function to create list from array
def create_list(vals):
    if not vals:
        return None
    head = ListNode(vals[0])
    current = head
    for val in vals[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to print list
def print_list(head):
    vals = []
    current = head
    while current:
        vals.append(str(current.val))
        current = current.next
    print("[" + ",".join(vals) + "]")

class Solution:
    def mergeTwoLists(self, list1: ListNode | None, list2: ListNode | None) -> ListNode | None:
        # Write your solution here
        pass

# Test cases
sol = Solution()

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print_list(sol.mergeTwoLists(l1, l2))

l3 = create_list([])
l4 = create_list([])
print_list(sol.mergeTwoLists(l3, l4))

l5 = create_list([])
l6 = create_list([0])
print_list(sol.mergeTwoLists(l5, l6))
`,
      java: `import java.util.ArrayList;

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {

    // Helper function to create list from array
    public static ListNode createList(int[] vals) {
        if (vals == null || vals.length == 0) {
            return null;
        }
        ListNode head = new ListNode(vals[0]);
        ListNode current = head;
        for (int i = 1; i < vals.length; i++) {
            current.next = new ListNode(vals[i]);
            current = current.next;
        }
        return head;
    }

    // Helper function to print list
    public static void printList(ListNode head) {
        ArrayList<String> vals = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            vals.add(String.valueOf(current.val));
            current = current.next;
        }
        System.out.println("[" + String.join(",", vals) + "]");
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        ListNode l1 = createList(new int[]{1,2,4});
        ListNode l2 = createList(new int[]{1,3,4});
        printList(sol.mergeTwoLists(l1, l2));

        ListNode l3 = createList(new int[]{});
        ListNode l4 = createList(new int[]{});
        printList(sol.mergeTwoLists(l3, l4));

        ListNode l5 = createList(new int[]{});
        ListNode l6 = createList(new int[]{0});
        printList(sol.mergeTwoLists(l5, l6));
    }
}`,
    },
    expectedOutput: {
      cpp: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1,1,2,3,4,4]\n[]\n[0]",
      java: "[1,1,2,3,4,4]\n[]\n[0]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "s[i] is a printable ascii character.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Helper function to print vector
void printVector(const vector<char>& s) {
    cout << "[";
    for (size_t i = 0; i < s.size(); ++i) {
        cout << "\"" << s[i] << "\"";
        if (i < s.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    
    vector<char> s1 = {'h','e','l','l','o'};
    sol.reverseString(s1);
    printVector(s1);
    
    vector<char> s2 = {'H','a','n','n','a','h'};
    sol.reverseString(s2);
    printVector(s2);
    
    return 0;
}`,
      python: `from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # Write your solution here
        pass

# Test cases
sol = Solution()

s1 = ["h","e","l","l","o"]
sol.reverseString(s1)
print(s1)

s2 = ["H","a","n","n","a","h"]
sol.reverseString(s2)
print(s2)
`,
      java: `import java.util.Arrays;

class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        char[] s1 = {'h','e','l','l','o'};
        sol.reverseString(s1);
        System.out.println(Arrays.toString(s1));
        
        char[] s2 = {'H','a','n','n','a','h'};
        sol.reverseString(s2);
        System.out.println(Arrays.toString(s2));
    }
}`,
    },
    expectedOutput: {
      cpp: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Hash Table • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "A substring is a contiguous sequence of characters within a string.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: "The answer is 'abc', with the length of 3.",
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: "The answer is 'b', with the length of 1.",
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: "The answer is 'wke', with the length of 3. Notice that the answer must be a substring, 'pwke' is a subsequence and not a substring.",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.lengthOfLongestSubstring("abcabcbb") << endl;
    cout << sol.lengthOfLongestSubstring("bbbbb") << endl;
    cout << sol.lengthOfLongestSubstring("pwwkew") << endl;
    cout << sol.lengthOfLongestSubstring("") << endl;
    cout << sol.lengthOfLongestSubstring(" ") << endl;
    return 0;
}`,
      python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.lengthOfLongestSubstring("abcabcbb"))
print(sol.lengthOfLongestSubstring("bbbbb"))
print(sol.lengthOfLongestSubstring("pwwkew"))
print(sol.lengthOfLongestSubstring(""))
print(sol.lengthOfLongestSubstring(" "))
`,
      java: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb"));
        System.out.println(sol.lengthOfLongestSubstring("bbbbb"));
        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));
        System.out.println(sol.lengthOfLongestSubstring(""));
        System.out.println(sol.lengthOfLongestSubstring(" "));
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n1\n3\n0\n1",
      python: "3\n1\n3\n0\n1",
      java: "3\n1\n3\n0\n1",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can hold is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: [
      "n == height.length",
      "2 ≤ n ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁴",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> h1 = {1,8,6,2,5,4,8,3,7};
    cout << sol.maxArea(h1) << endl;
    
    vector<int> h2 = {1,1};
    cout << sol.maxArea(h2) << endl;
    
    return 0;
}`,
      python: `from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.maxArea([1,8,6,2,5,4,8,3,7]))
print(sol.maxArea([1,1]))
`,
      java: `import java.lang.Math;

class Solution {
    public int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(sol.maxArea(new int[]{1,1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Alphanumeric characters include letters and numbers."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation:
          'After processing, the string becomes "amanaplanacanalpanama", which is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation:
          'After processing, the string becomes "raceacar", which is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          "After processing, the string becomes an empty string \"\". An empty string is a valid palindrome.",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
#include <cctype>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        
        return false;
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isPalindrome("A man, a plan, a canal: Panama") << endl;
    cout << sol.isPalindrome("race a car") << endl;
    cout << sol.isPalindrome(" ") << endl;
    return 0;
}`,
      python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.isPalindrome("A man, a plan, a canal: Panama"))
print(sol.isPalindrome("race a car"))
print(sol.isPalindrome(" "))
`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(sol.isPalindrome("race a car"));
        System.out.println(sol.isPalindrome(" "));
    }
}`,
    },
    expectedOutput: {
      cpp: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: [
        "Notice that the solution set must not contain duplicate triplets.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation:
          "The triplets are [-1,0,1] and [-1,-1,2]. The order of the output and the order of the triplets does not matter.",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "No triplet sums to zero.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "The only possible triplet sums to zero.",
      },
    ],
    constraints: [
      "3 ≤ nums.length ≤ 3000",
      "-10⁵ ≤ nums[i] ≤ 10⁵",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

// Helper function to print vector of vectors
void printMatrix(const vector<vector<int>>& mat) {
    cout << "[";
    for (size_t i = 0; i < mat.size(); ++i) {
        cout << "[";
        for (size_t j = 0; j < mat[i].size(); ++j) {
            cout << mat[i][j];
            if (j < mat[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < mat.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your solution here
        
        return {};
    }
};

int main() {
    Solution sol;
    
    vector<int> nums1 = {-1,0,1,2,-1,-4};
    vector<vector<int>> res1 = sol.threeSum(nums1);
    printMatrix(res1);
    
    vector<int> nums2 = {0,1,1};
    vector<vector<int>> res2 = sol.threeSum(nums2);
    printMatrix(res2);
    
    vector<int> nums3 = {0,0,0};
    vector<vector<int>> res3 = sol.threeSum(nums3);
    printMatrix(res3);
    
    return 0;
}`,
      python: `from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Write your solution here
        pass

# Test cases
sol = Solution()
print(sol.threeSum([-1,0,1,2,-1,-4]))
print(sol.threeSum([0,1,1]))
print(sol.threeSum([0,0,0]))
`,
      java: `import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(sol.threeSum(new int[]{0,1,1}));
        System.out.println(sol.threeSum(new int[]{0,0,0}));
    }
}`,
    },
    // Note: Output format for lists/vectors can be tricky to match exactly.
    // The C++ helper prints [[-1,0,1],[-1,-1,2]]
    // Python prints [[-1, -1, 2], [-1, 0, 1]] (or similar order)
    // Java prints [[-1, -1, 2], [-1, 0, 1]] (or similar order)
    // This expectedOutput is a generalization.
    expectedOutput: {
      cpp: "[[-1,0,1],[-1,-1,2]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },

  "rotten-oranges": {
    "id": "rotten-oranges",
    "title": "Rotten Oranges",
    "difficulty": "Hard",
    "category": "BFS • Matrix",
    "description": {
      "text": "You are given an m x n grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.",
      "notes": [
        "Return the minimum number of minutes that must elapse until no cell has a fresh orange.",
        "If this is impossible (i.e., some fresh oranges will never rot), return -1.",
        "If there are no fresh oranges to begin with, return 0."
      ]
    },
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4"
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "The orange at (2,0) is isolated and will never rot."
      },
      {
        "input": "grid = [[0,2]]",
        "output": "0",
        "explanation": "There are no fresh oranges."
      }
    ],
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 10",
      "grid[i][j] is 0, 1, or 2."
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <map>\n#include <stack>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        // Write your solution here\n        \n        return -1;\n    }\n};\n\nint main() {\n    Solution sol;\n    vector<vector<int>> grid1 = {{2,1,1},{1,1,0},{0,1,1}};\n    cout << sol.orangesRotting(grid1) << endl;\n\n    vector<vector<int>> grid2 = {{2,1,1},{0,1,1},{1,0,1}};\n    cout << sol.orangesRotting(grid2) << endl;\n\n    vector<vector<int>> grid3 = {{0,2}};\n    cout << sol.orangesRotting(grid3) << endl;\n    \n    return 0;\n}",
      "python": "from typing import List\nfrom collections import deque\n\nclass Solution:\n    def orangesRotting(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n\n# Test cases\nsol = Solution()\ngrid1 = [[2,1,1],[1,1,0],[0,1,1]]\nprint(sol.orangesRotting(grid1))\n\ngrid2 = [[2,1,1],[0,1,1],[1,0,1]]\nprint(sol.orangesRotting(grid2))\n\ngrid3 = [[0,2]]\nprint(sol.orangesRotting(grid3))\n",
      "java": "import java.util.Queue;\nimport java.util.LinkedList;\nimport java.util.Stack;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Solution {\n    public int orangesRotting(int[][] grid) {\n        // Write your solution here\n        \n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        \n        int[][] grid1 = {{2,1,1},{1,1,0},{0,1,1}};\n        System.out.println(sol.orangesRotting(grid1));\n\n        int[][] grid2 = {{2,1,1},{0,1,1},{1,0,1}};\n        System.out.println(sol.orangesRotting(grid2));\n\n        int[][] grid3 = {{0,2}};\n        System.out.println(sol.orangesRotting(grid3));\n    }\n}"
    },
    "expectedOutput": {
      "cpp": "4\n-1\n0",
      "python": "4\n-1\n0",
      "java": "4\n-1\n0"
    }
  },

  "trapping-rain-water": {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "category": "Array • Two Pointers • DP • Stack",
    "description": {
      "text": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      "notes": [
        "You must write an efficient solution.",
        "Expected time complexity: O(n)."
      ]
    },
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ],
    "constraints": [
      "1 ≤ height.length ≤ 2 × 10⁵",
      "0 ≤ height[i] ≤ 10⁵"
    ],

    "starterCode": {
      "cpp": 
  `#include <iostream>
  #include <vector>
  using namespace std;

  class Solution {
  public:
      int trap(vector<int>& height) {
          // Write your solution here
          
      }
  };

  int main() {
      Solution sol;
      
      vector<int> h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
      cout << sol.trap(h1) << endl;
      
      vector<int> h2 = {4,2,0,3,2,5};
      cout << sol.trap(h2) << endl;
      
      return 0;
  }`,

      "python": 
  `from typing import List

  class Solution:
      def trap(self, height: List[int]) -> int:
          # Write your solution here
          pass

  # Test cases
  sol = Solution()
  print(sol.trap([0,1,0,2,1,0,1,3,2,1,2,1]))
  print(sol.trap([4,2,0,3,2,5]))`,

      "java":
  `class Solution {
      public int trap(int[] height) {
          // Write your solution here
          
      }

      public static void main(String[] args) {
          Solution sol = new Solution();

          int[] h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
          System.out.println(sol.trap(h1));

          int[] h2 = {4,2,0,3,2,5};
          System.out.println(sol.trap(h2));
      }
  }`

    },

    "expectedOutput": {
      "cpp": "6\n9",
      "python": "6\n9",
      "java": "6\n9"
    }
  }

}

export const LANGUAGE_CONFIG = {
  cpp: {
    name: "C++",
    icon: "/cpp_icon.png",
    monacoLang: "cpp",
  },
  java: {
    name: "Java",
    icon: "/java_icon.png",
    monacoLang: "java",
  },
  python: {
    name: "Python",
    icon: "/python_icon.png",
    monacoLang: "python",
  },
};