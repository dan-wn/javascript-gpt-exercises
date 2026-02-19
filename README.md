# javascript-gpt-exercises
For learning purposes only.

# JavaScript Fundamentals — Learning Summary

This document summarizes the core JavaScript concepts learned through hands-on exercises, focusing on writing clean, readable, and production-ready logic.

---

## Variables & Constants
- Variables can store both values and expressions.
- Constants are used for values that should not change (e.g. business rules).
- Descriptive naming improves readability and maintainability.
- Avoid hard-coded “magic values” by giving them meaning.

---

## Assignment vs Comparison
- Assignment stores a value.
- Comparison checks equality.
- Strict comparison is preferred in professional code to avoid type coercion bugs.
- Confusing assignment with comparison is a common beginner mistake.

---

## Boolean Logic
- Most application logic revolves around true/false decisions.
- Conditions always evaluate to a boolean.
- Logical AND requires all conditions to be true.
- Boolean expressions can be returned directly without using conditionals.

---

## Truthy & Falsy Values
- JavaScript treats some values as false in conditionals.
- Falsy values include empty strings, zero, null, undefined, NaN, and false.
- All other values are considered truthy.
- Existence checks do not require explicit comparisons.

---

## Explicit Boolean Conversion
- Any value can be converted into a true boolean.
- Explicit booleans improve clarity and predictability.
- This pattern is common in UI state and validation logic.

---

## Conditionals & Readability
- Code should read like natural language.
- Breaking logic into named variables improves understanding.
- Readability is prioritized over clever or overly compact code.
- Clean logic is easier to debug and maintain.

---

## Functions
- Functions encapsulate logic and return values.
- Functions should have a single responsibility.
- Returning values is preferred over logging.
- Well-written functions are reusable and testable.

---

## Parameters & Arguments
- Parameters are placeholders defined in functions.
- Arguments are the actual values passed in.
- Clear parameter naming improves function usability.
- Understanding this distinction avoids logical errors.

---

## Default Parameters
- Functions should handle missing inputs safely.
- Default parameters prevent runtime bugs.
- Defensive programming is expected in production environments.
- Safer functions are easier to reuse across an application.

---

## Arrow Functions & Returns
- Arrow syntax does not automatically imply a return.
- Implicit return only occurs when no block body is used.
- Block bodies require an explicit return statement.
- Function syntax directly affects behavior.

---

## Clean Code Principles Adopted
- Prefer clarity over brevity.
- Write predictable and testable logic.
- Avoid unnecessary conditionals.
- Think in terms of data flow instead of output.
- Code should explain itself without comments.

