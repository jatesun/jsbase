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