import { LinkedList } from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log({
  "list to string": list.toString(),
  "list size": list.size,
  "return head": list.head,
  "return tail": list.tail,
  //   "return tail": list.tail().toString(),
});
