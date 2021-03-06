import { _transpose } from './_transpose' ;

/**
 * Reverses input permutation ___in-place___ from input index <code>i</code>
 * (include) to input index <code>j</code> (excluded).
 *
 * @param {Array} sigma The input permutation to reverse (modified in-place).
 * @param {Number} i The left bound (included).
 * @param {Number} j The right bound (excluded).
 */
export function _reverse ( sigma , i , j ) {

	while ( i <-- j ) _transpose( i++ , j , sigma ) ;

}
