import test from 'ava' ;
import {
	copy ,
	identity
} from '../../src' ;
import { shuffle } from '@aureooms/js-random' ;

function macro ( t , size ) {

	const sigma = identity( size ) ;

	shuffle( sigma , 0 , size ) ;

	const tau = copy( sigma ) ;

	t.deepEqual( tau , sigma ) ;

}

macro.title = ( _ , size ) => `copy (${size})` ;

for ( let n = 0 ; n < 100 ; ++n ) test( macro , n ) ;
