
var red_ligth = $('#red_light');
var yellow_ligth = $('#yellow_light');
var green_ligth = $('#green_light');
var counter =  $('#counter');
var cur_count = counter.html();

function count() {
	if ( red_ligth.hasClass( 'on-red' ) ) 
	{
		counter.addClass( 'red' );
		yellow_ligth.addClass( 'white-bg' );
		green_ligth.addClass( 'white-bg' );

		if ( cur_count == 4 ) 
		{
			red_ligth.addClass( 'white-bg' ).removeClass( 'on-red' );
			yellow_ligth.addClass( 'on-yellow' ).removeClass( 'white-bg' );
			counter.addClass( 'yellow' ).removeClass( 'red' );
		}

		counter.html( cur_count -= 1 );
	} 
	else if( yellow_ligth.hasClass( 'on-yellow' ) )
	{
		if ( cur_count == 1 ) 
		{
			yellow_ligth.addClass( 'white-bg' ).removeClass( 'on-yellow' );
			counter.addClass( 'green' ).removeClass( 'yellow' );
			green_ligth.addClass( 'on-green' ).removeClass( 'white-bg' );
		}

		counter.html( cur_count -= 1 );
	}
	else if( green_ligth.hasClass( 'on-green' ) )
	{
		if ( cur_count == 59 ) 
		{
			green_ligth.addClass( 'white-bg' ).removeClass( 'on-green' );
			counter.addClass( 'red' ).removeClass( 'green' );
			red_ligth.addClass( 'on-red' ).removeClass( 'white-bg' );
		}

		counter.html( cur_count += 1 );
	}
}

setInterval( count, 1000 );	
