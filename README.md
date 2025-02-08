# Type 'string | number' is not assignable to type 'string'

This repository demonstrates a common type error in TypeScript where a function expects a specific type but receives a union type.

The `processValue` function attempts to handle both strings and numbers, but the type checker doesn't allow assigning `string | number` directly to a parameter expecting only 'string'.

## Bug

The `bug.ts` file contains the code exhibiting the error.  The type checker will complain when trying to pass a `string | number` to a function expecting a `string`.

## Solution

The `bugSolution.ts` file demonstrates a solution.  Type narrowing is used to ensure that before calling `printString`, the type of `value` is checked to ensure it is indeed a string.