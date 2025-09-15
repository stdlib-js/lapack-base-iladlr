<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iladlr

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Find the index of the last non-zero row in a matrix `A`.



<section class="usage">

## Usage

```javascript
import iladlr from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-iladlr@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/lapack-base-iladlr/tags). For example,

```javascript
import iladlr from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-iladlr@v0.0.0-deno/mod.js';
```

#### iladlr( order, M, N, A, LDA )

Returns the index of the last non-zero row in a matrix `A`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/

var out = iladlr( 'row-major', 3, 2, A, 2 );
// returns 1
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial array:
var A0 = new Float64Array( [ 9999.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

// Create an offset view:
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out = iladlr( 'row-major', 3, 2, A1, 2 );
// returns 1
```

#### iladlr.ndarray( M, N, A, strideA1, strideA2, offsetA )

Returns the index of the last non-zero row in a matrix `A` using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/

var out = iladlr.ndarray( 3, 2, A, 2, 1, 0 );
// returns 1
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **strideA1**: stride of the first dimension of `A`.
-   **strideA2**: stride of the second dimension of `A`.
-   **offsetA**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var A = new Float64Array( [ 9999.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/

var out = iladlr.ndarray( 3, 2, A, 2, 1, 1 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This routine is commonly used throughout LAPACK to shrink work domains (e.g., before bulge-chasing, deflation, or when trimming Householder panels), thus ensuring that higher-level routines operate only on numerically relevant sub-matrices.
-   `iladlr()` corresponds to the [LAPACK][lapack] routine [`iladlr`][lapack-iladlr].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@deno/mod.js';
import iladlr from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-iladlr@deno/mod.js';

var shape = [ 3, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 0.0, 0.0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var out = iladlr( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-iladlr.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-iladlr

[test-image]: https://github.com/stdlib-js/lapack-base-iladlr/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base-iladlr/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-iladlr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-iladlr?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-iladlr.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-iladlr/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-iladlr/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-iladlr/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-iladlr/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-iladlr/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-iladlr/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-iladlr/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-iladlr/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-iladlr/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-iladlr]: https://www.netlib.org/lapack/explore-html/da/d60/group__ilalr_gadb53a9bd5cc7a6e3bbca7bf4eca32208.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
