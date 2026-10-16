# JavaScript Curriculum — Assignments & Capstone Project

Seven runnable Node.js scripts covering the core JavaScript curriculum.

## How to run

```bash
node <filename>.js [arguments...]
```

`prompt()` only exists in browsers, so scripts that need input fall back to
command-line arguments when run in Node. In a browser the same code calls
`prompt()` as the assignment requires.

| File | Assignment | Run with |
|------|------------|----------|
| `assignment-1-variables.js` | Variables, data types, `typeof` | `node assignment-1-variables.js` |
| `assignment-2-operators.js` | Operators, expressions, input | `node assignment-2-operators.js 100 15` |
| `assignment-3-conditionals.js` | if/else, switch, ternary | `node assignment-3-conditionals.js 85` |
| `assignment-4-loops.js` | for/while/do-while, break/continue | `node assignment-4-loops.js` |
| `assignment-5-functions.js` | Functions, defaults, scope | `node assignment-5-functions.js` |
| `assignment-6-arrays.js` | Arrays, objects, forEach/filter/map | `node assignment-6-arrays.js` |
| `capstone-inventory.js` | Capstone: inventory dashboard | `node capstone-inventory.js Monitor 150` |

## Capstone project

`capstone-inventory.js` implements the full Interactive Product Inventory &
Analytics Dashboard:

1. **Data & input** — collects a product name and price (`prompt()` / CLI),
   converts with `Number()`, stores it alongside pre-existing items.
2. **Control flow** — `if...else` validates the input (missing name, bad
   price), a loop with `break` rejects duplicates, and a `switch` assigns
   the Budget / Standard / Premium badge from price thresholds.
3. **Loops & flow control** — `forEach` prints the roster, skipping invalid
   entries the way `continue` would.
4. **Functions & scope** — a regular function totals the inventory; arrow
   functions apply tax and discount with default parameters, all locally
   scoped.
5. **Array methods** — `filter()` isolates affordable items, `map()` builds
   the formatted report list.

Expected output for `node capstone-inventory.js Monitor 150`:

```
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
```
