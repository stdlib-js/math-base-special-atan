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

# atan

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [arctangent][arctangent] of a double-precision floating-point number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-atan
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var atan = require( '@stdlib/math-base-special-atan' );
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
var linspace = require( '@stdlib/array-base-linspace' );
var atan = require( '@stdlib/math-base-special-atan' );

var x = linspace( -1000.0, 1000.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( atan( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/atan.h"
```

#### stdlib_base_atan( x )

Computes the [arctangent][arctangent] of a double-precision floating-point number.

```c
double out = stdlib_base_atan( 0.0 );
// returns ~0.0

out = stdlib_base_atan( -3.141592653589793/2.0 );
// returns ~-1.004
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_atan( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/atan.h"
#include <stdlib.h>
#include <stdio.h>

int main() {
    double x[] = { -1000.0, -777.78, -555.56, -333.33, -111.11,  111.11, 333.33,  555.56, 777.78, 1000.0 };
    double v;
    int i;
    
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_atan( x[ i ] );
        printf( "atan(%lf) = %lf\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/acos`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asin`][@stdlib/math/base/special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-atan.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-atan

[test-image]: https://github.com/stdlib-js/math-base-special-atan/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-atan/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-atan/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-atan?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-atan.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-atan/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-atan/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-atan/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-atan/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-atan/blob/main/branches.md

[arctangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math-base-special-acos

[@stdlib/math/base/special/asin]: https://github.com/stdlib-js/math-base-special-asin

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math-base-special-atanh

<!-- </related-links> -->

</section>

<!-- /.links -->
