<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# atan

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [arctangent][arctangent] of a double-precision floating-point number.



<section class="usage">

## Usage

```javascript
import atan from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan@v0.2.4-deno/mod.js';
```

#### atan( x )

Computes the [arctangent][arctangent] of a double-precision floating-point number.

```javascript
var v = atan( 0.0 );
// returns ~0.0

v = atan( -3.141592653589793/2.0 );
// returns ~-1.004

v = atan( 3.141592653589793/2.0 );
// returns ~1.004

v = atan( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import atan from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan@v0.2.4-deno/mod.js';

var x = uniform( 100, -1000.0, 1000.0, {
    'dtype': 'float64'
});

logEachMap( 'atan(%0.4f) = %0.4f', x, atan );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acos`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asin`][@stdlib/math/base/special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>

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

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-atan.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-atan

[test-image]: https://github.com/stdlib-js/math-base-special-atan/actions/workflows/test.yml/badge.svg?branch=v0.2.4
[test-url]: https://github.com/stdlib-js/math-base-special-atan/actions/workflows/test.yml?query=branch:v0.2.4

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-atan/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-atan?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-atan.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-atan/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-atan/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-atan/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-atan/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-atan/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-atan/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-atan/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-atan/blob/main/branches.md

[arctangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math-base-special-acos/tree/deno

[@stdlib/math/base/special/asin]: https://github.com/stdlib-js/math-base-special-asin/tree/deno

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math-base-special-atanh/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
