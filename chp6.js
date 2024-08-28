const a = ["foo", "bar", "baz", "qux"];
const akeys = Array.from(a.keys());
const avalues = Array.from(a.values());
const aentries = Array.from(a.entries());
console.log(akeys);
console.log(avalues);
console.log(aentries);
for (const [idx, element] of a.entries()) {
    console.log(idx);
    console.log(element);
}
// map
const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
console.log(m1.size); // 3
//function
const m2 = new Map();
console.log(m2.has("firstName"));
console.log(m2.get("firstName"));
m2.set("firstName", "matt").set("lastName", "Frisbie");