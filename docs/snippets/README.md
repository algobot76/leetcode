# Snippets

[[toc]]

## Python

### Lists

#### Concatenate two lists

```python
l1 = [1, 2, 3]
l2 = [4, 5, 6]

l3 = l1 + l2 // [1, 2, 3, 4, 5, 6]
```

### Dicts

#### Use `defaultdict` to replace `dict`

```python
from collections import defaultdict

s = 'mississippi'
d = defaultdict(int)
for k in s:
    d[k] += 1

print(sorted(d.items())) # [('i', 4), ('m', 1), ('p', 2), ('s', 4)]
```

### `__lt__`

Override `__lt__` method of a class such that its objects can be used for comparisons.

See: [23. Merge k Sorted Lists](/problems/1_50.md#_23-merge-k-sorted-lists)

## Java

### Maps

```java
var staff = new HashMap<String, Employee>();
staff.put("144-25-5464", new Employee("Amy Lee"));
staff.put("567-24-2546", new Employee("Harry Hacker"));
staff.put("157-62-7935", new Employee("Gary Cooper"));
staff.put("456-62-5527", new Employee("Francesca Cruz"));

// print all entries
System.out.println(staff);

// remove an entry
staff.remove("567-24-5462");

// replace an entry
staff.put("456-62-5527", new Employee("Francesca Miller"));

// look up a value
System.out.println(staff.get("157-62-7935"));

// iterate through all entries
staff.forEach((k, v) -> System.out.println("key=" + k + ", value=" + v));
```

- `java.util.Map<K, V>`
  - `V get(Object key)`: gets the value associated with the key.
  - `default V getOrDefault(Object key, V defaultValue)`: gets the value associated with the key.
  - `V put(K key, V value)`: puts the association of a key and a value into a map.
  - `void putAll(Map<? extends K, ? extends V>) entries`: adds all entries from the specified map to this map.
  - `boolean containsKey(Object key)`: returns `true` if the key is present in the map.
  - `default void forEach(BiConsumer<? super K, ? super V> action)`: applies the action to all key/value pairs of this map.
  - `default V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunctoin)`: If the specified key is not already associated with a value or is associated with `null`, associates it with the given non-`null` value. Otherwise, replaces the associated value with the results of the given remapping function, or removes if the result is `null`.
  - `default V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)`: Applies the function to `key` and `get(key)`. Either associates `key` with the result or, if the result is `null`, removes the key. Returns `get(key)`.
  - `default V computeIfPresent(K key, Function<? super K, ? super V, ? extends V> mappingFunction)`:

#### References

- Core Java Vol. 1 (11th Version)

## C++

### Sorting

#### Sort a vector

```cpp
vector<int> v = {4,2,5,3,5,8,3};
sort(v.begin(), v.end());
sort(v.rbegin(), v.rend()); // reverse v
```

#### Sort an array

```cpp
int n = 7; // array size
int a[] = {4,2,5,3,5,8,3};
sort(a,a+n);
```

#### Sort a string

```cpp
string s = "monkey";
sort(s.begin(), s.end());
```

#### Sort structs

```cpp
struct P {
    int x, y;
    bool operator<(const P &p) { // operator< makes it possible to sort structs
        if (x != p.x) return x < p.x;
        else return y < p.y;
    }
}
```

#### Use a comparison function

```cpp
bool comp(string a, string b) {
    if (a.size() != b.size()) return a.size() < b.size()
    return a < b;
}

sort(v.begin(), v.end(), comp);
```

---

## Queue

### Implement a queue

Java:

```java
class MyQueue {
    private ArrayList<Integer> elements;
    private int pointer;

    public MyQueue() {
        this.elements = new ArrayList<>();
        pointer = 0;
    }

    public int size() {
        return this.elements.size() - pointer;
    }

    public boolean empty() {
        return this.size() == 0;
    }

    public void add(Integer e) {
        this.elements.add(e);
    }

    public Integer poll() {
        if (this.empty()) {
            return null;
        }
        return this.elements.get(pointer++);
    }
}
```

Python:

```python
class MyQueue:
    def __init__(self):
        self.elements = []
        self.pointer = 0

    def size(self):
        return len(self.elements)-pointer

    def empty(self):
        return self.size() == 0

    def add(self, e):
        self.elements.append(e)

    def poll(self):
        if self.empty():
            return None
        pointer += 1
        return self.elements[pointer-1]
```

## Linked List

### Reverse a linked list

```java
public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }

    ListNode newHead = null;
    while (head != null) {
        ListNode next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }

    return newHead;
}
```

### Find the midpoint

Python:

```python
class Solution:
    def findMid(self, head):
        fast = head
        slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
```

Java:

```java
public ListNode findMid(ListNode head) {
    ListNode fast = head;
    ListNode slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
```

## Binary Search

Java:

```java
public int binarySearch(int[] nums, int target) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        int mid = start + (end - start) / 2;
        if (nums[mid] == target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (nums[start] == target) {
        return start;
    }
    if (nums[end] == target) {
        return end;
    }
    return -1;
}
```

Python:

```python
def binarySearch(self, nums, target):
    if not nums:
        return -1

    start, end = 0, len(nums) - 1
    while start + 1 < end:
        mid = (start + end) // 2
        if nums[mid] < target:
            start = mid
        elif nums[mid] == target:
            end = mid
        else:
            end = mid

    if nums[start] == target:
        return start
    if nums[end] == target:
        return end

    return -1
```

## BFS

### Variant 1

Java:

```java
Queue<T> q = new LinkedList<>();
Set<T> s = new HashSet<>();
s.add(start);
q.offer(start);
while(!q.isEmpty()) {
    T head = q.poll();
    for (T neighbor : head.neighbors) {
        if (!set.contains(neighbor)) {
            s.add(neighbor);
            q.offer(neighbor);
        }
    }
}
```

Python:

```python
from collections import deque

queue = deque()
seen = set()

seen.add(start)
queue.append(start)
while len(queue):
    head = queue.popleft()
    for neighbor in head.neighbors:
        if neighbor not in seen:
            seen.add(neighbor)
            queue.append(neighbor)
```

### Variant 2

Java:

```java
Queue<T> q = new LinkedList<>();
Set<T> s = new HashSet<>();
s.add(start);
q.offer(start);
while(!q.isEmpty()) {
    int size = q.size();
    for (int i = 0; i < size; i++) {
        T head = q.poll();
        for (T neighbor : head.neighbors) {
            if (!set.contains(neighbor)) {
                s.add(neighbor);
                q.offer(neighbor);
            }
        }
    }
}
```

Python:

```python
from collections import deque

queue = deque()
seen = set()

seen.add(start)
queue.append(start)
while len(queue):
    size = len(queue)
    for _ in range(size):
        head = queue.popleft()
        for neighbor in head.neighbors:
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append(neighbor)
```

### Use two queues to implement BFS

Java:

```java
Queue<T> queue1 = new LinkedList<>();
Queue<T> queue2 = new LinkedList<>();
queue1.offer(startNode);
int currentLevel = 0;

while (!queue1.isEmpty()) {
   int size = queue1.size();
    for (int i = 0; i < size; i++) {
        T head = queue1.poll();
        for (all neighbors of head) {
            queue2.offer(neighbor);
        }
    }
    Queue<T> temp = queue1;
    queue1 = queue2;
    queue2 = temp;

    queue2.clear();
    currentLevel++;
}
```

Python:

```python
from collections import deque

queue1, queue2 = deque(), deque()
seen = set()

seen.add(start)
queue1.append(start)
currentLevel = 0
while len(queue1):
    size = len(queue1)
    for _ in range(size):
        head = queue1.popleft()
        for neighbor in head.neighbors:
            if neighbor not in seen:
                seen.add(neighbor)
                queue2.append(neighbor)
    queue1, queue2 = queue2, queue1
    queue2.clear()
    currentLevel += 1
```

### Use a dummy head in BFS

Java:

```java
Queue<T> q = new LinkedList<>();
q.offer(start);
q.offer(null);
int currentLevel = 0;
while(q.size() > 1) {
    T head = q.poll();
    if (head == null) {
        currentLevel++;
        q.offer(null);
        continue;
    }
    for (all neighbors of head) {
        q.offer(neighbor);
    }
}
```

Python:

```python
from collections import deque

queue = deque()
seen = set()

seen.add(start)
queue.append(start)
queue.append(None)
currentLevel = 0
while len(queue) > 1:
    head = queue.popleft()
    if head == None:
        currentLevel += 1
        queue.append(None)
        continue
    for neighbor in head.neighbors:
        if neighbor not in seen:
            seen.add(neighbor)
            queue.append(neighbor)
```

### Bidirectional BFS

Java:

```java
public int doubleBFS(UndirectedGraphNode start, UndirectedGraphNode end) {
    if (start.equals(end)) {
        return 1;
    }
    Queue<UndirectedGraphNode> startQueue = new LinkedList<>();
    Queue<UndirectedGraphNode> endQueue = new LinkedList<>();
    startQueue.add(start);
    endQueue.add(end);
    int step = 0;
    Set<UndirectedGraphNode> startVisited = new HashSet<>();
    Set<UndirectedGraphNode> endVisited = new HashSet<>();
    startVisited.add(start);
    endVisited.add(end);
    while (!startQueue.isEmpty() || !endQueue.isEmpty()) {
        int startSize = startQueue.size();
        int endSize = endQueue.size();
        step ++;
        for (int i = 0; i < startSize; i ++) {
            UndirectedGraphNode cur = startQueue.poll();
            for (UndirectedGraphNode neighbor : cur.neighbors) {
                if (startVisited.contains(neighbor)) {
                    continue;
                } else if (endVisited.contains(neighbor)) {
                    return step;
                } else {
                    startVisited.add(neighbor);
                    startQueue.add(neighbor);
                }
            }
        }
        step ++;
        for (int i = 0; i < endSize; i ++) {
            UndirectedGraphNode cur = endQueue.poll();
            for (UndirectedGraphNode neighbor : cur.neighbors) {
                if (endVisited.contains(neighbor)) {
                    continue;
                } else if (startVisited.contains(neighbor)) {
                    return step;
                } else {
                    endVisited.add(neighbor);
                    endQueue.add(neighbor);
                }
            }
        }
    }
    return -1;
}
```

Python:

```python
from collections import deque

def doubleBFS(start, end):
    if start == end:
        return 1

    startQueue, endQueue = deque(), deque()
    startQueue.append(start)
    endQueue.append(end)
    step = 0

    startVisited, endVisited = set(), set()
    startVisited.add(start)
    endVisited.add(end)
    while len(startQueue) and len(endQueue):
        startSize, endSize = len(startQueue), len(endQueue)
        step += 1
        for _ in range(startSize):
            cur = startQueue.popleft()
            for neighbor in cur.neighbors:
                if neighbor in startVisited:
                    continue
                elif neighbor in endVisited:
                    return step
                else:
                    startVisited.add(neighbor)
                    startQueue.append(neighbor)
        step += 1
        for _ in range(endSize):
            cur = endQueue.popleft()
            for neighbor in cur.neighbors:
                if neighbor in endVisited:
                    continue
                elif neighbor in startVisited:
                    return step
                else:
                    endVisited.add(neighbor)
                    endQueue.append(neighbor)

    return -1
```

### Topological sorting

- [127. Topological Sorting](https://www.lintcode.com/problem/topological-sorting/description)

Java:

```java
public class Solution {
    /**
     * @param graph: A list of Directed graph node
     * @return: Any topological order for the given graph.
     */
    public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {
        HashMap<DirectedGraphNode, Integer> map = new HashMap();
        for (DirectedGraphNode node : graph) {
            for (DirectedGraphNode neighbor : node.neighbors) {
                if (map.containsKey(neighbor)) {
                    map.put(neighbor, map.get(neighbor) + 1);
                } else {
                    map.put(neighbor, 1);
                }
            }
        }

        ArrayList<DirectedGraphNode> result = new ArrayList<DirectedGraphNode>();

        Queue<DirectedGraphNode> q = new LinkedList<DirectedGraphNode>();
        for (DirectedGraphNode node : graph) {
            if (!map.containsKey(node)) {
                q.offer(node);
                result.add(node);
            }
        }

        while (!q.isEmpty()) {
            DirectedGraphNode node = q.poll();
            for (DirectedGraphNode n : node.neighbors) {
                map.put(n, map.get(n) - 1);
                if (map.get(n) == 0) {
                    result.add(n);
                    q.offer(n);
                }
            }
        }

        return result;
    }
}
```

Python:

```python
class Solution:
    """
    @param graph: A list of Directed graph node
    @return: Any topological order for the given graph.
    """
    def topSort(self, graph):
        node_to_indegree = self.get_indegree(graph)

        # bfs
        order = []
        start_nodes = [n for n in graph if node_to_indegree[n] == 0]
        queue = collections.deque(start_nodes)
        while queue:
            node = queue.popleft()
            order.append(node)
            for neighbor in node.neighbors:
                node_to_indegree[neighbor] -= 1
                if node_to_indegree[neighbor] == 0:
                    queue.append(neighbor)

        return order

    def get_indegree(self, graph):
        node_to_indegree = {x: 0 for x in graph}

        for node in graph:
            for neighbor in node.neighbors:
                node_to_indegree[neighbor] += 1

        return node_to_indegree
```

## Binary Tree

### Pre-order traversal

Java:

```java
public void traverse(TreeNode root, ArrayList<Integer> result) {
    if (root == null) {
        return;
    }
    result.add(root.val);
    traverse(root.left, result);
    traverse(root.right, result);
}
```

Python:

```python
def traverse(root, result):
    if not root:
        return
    result.append(root.val)
    traverse(root.left, result)
    traverse(root.right, result)
```

### In-order traversal

Java:

```java
public void traverse(TreeNode root, ArrayList<Integer> result) {
    if (root == null) {
        return;
    }
    traverse(root.left, result);
    result.add(root.val);
    traverse(root.right, result);
}
```

Python:

```python
def traverse(root, result):
    if not root:
        return
    traverse(root.left, result)
    result.append(root.val)
    traverse(root.right, result)
```

### Post-order traversal

Java:

```java
public void traverse(TreeNode root, ArrayList<Integer> result) {
    if (root == null) {
        return;
    }
    traverse(root.left, result);
    traverse(root.right, result);
    result.add(root.val);
}
```

Python:

```python
def traverse(root, result):
    if not root:
        return
    traverse(root.left, result)
    traverse(root.right, result)
    result.append(root.val)
```

### `ResultType`

Java:

```java
class ResultType {
    int maxValue, minValue;
    public ResultType(int maxValue, int minValue) {
        this.maxValue = maxValue;
        this.minValue = minValue;
    }
}
```

### Related problems

- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

## Matrix

### Move in 4 directions

```java
int[] dx = {1, 0, -1, 0};
int[] dy = {0, 1, 0, -1};
for (int i = 0; i < m; i++) {
  int nx = point[0] + dx[i];
  int ny = point[1] + dy[i];
  // ...
}
```

## Two Pointers

### Reverse an array of chars

#### Using `while` loop

Java:

```java
public void reverse(char[] s) {
    int left = 0, right = s.length - 1;
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
```

Python:

```python
def reverse(s):
    left, right = 0, len(s)-1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
```

#### Using `for` loop

Java:

```java
public void reverse(char[] s) {
    for (int i = 0, j = s.length - 1; i < j; i++, j--) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}
```
