var http = require('http');
var bl = require('bl');
var htmls = [];
var count = 0;

for( var i = 0; i<3; i++){ get_http(i) }

function get_http(i){
    http.get( process.argv[2+i], function( r ){
        r.pipe(bl(function( err, buf ){
            if (err) {
                console.log(err);
            }
            count++;
            htmls[ i ] = buf.toString();
            if ( count == 3 ){
                print_results();
            }
        }));
    });
}

function print_results(){
    for( var j=0; j<3; j++ ){     
        console.log( htmls[j] );
    }
}
