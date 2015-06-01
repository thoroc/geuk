var width = 540;
var height = 710;
var margin = {
    top: 50,
    right: 20,
    bottom: 20,
    left: 50
};

var color = d3.scale.category10();

var tip = d3.tip()
    .attr( 'class', 'd3-tip' )
    .offset( [ -10, 0 ] )
    .html( function( d ) {
        return "<span style='color:red'>" + d.name + "</span>";
    } );

var svg = d3.select( '#map' ).append( 'svg' )
    .attr( 'width', width + margin.left + margin.right )
    .attr( 'height', height + margin.top + margin.bottom );


svg.call( tip );

d3.json( 'data/constituency.json', function( error, json ) {
    // console.log(json);

    var tiles = svg.selectAll( '.constituency' )
        .data( json[ 'constituency' ] )
        .enter()
        .append( 'polygon' )
        .attr( 'name', function( d ) {
            return d.name;
        } )
        .attr( 'points', function( d ) {
            // console.log(d);
            return d.polygon.map( function( d ) {
                return [ d.x, d.y ].join( "," );
            } ).join( " " );
        } )
        .attr( 'class', 'tile' )
        .attr( 'fill', function( d ) {
            return color( d[ 'region-name' ] );
        } )
        .attr( 'data-legend', function( d ) {
            return d[ 'region-name' ];
        } )
        .on( 'mouseover', tip.show )
        .on( 'mouseout', tip.hide );

    var legend = svg.append( "g" )
        .attr( "class", "legend" )
        .attr( "transform", "translate(480,30)" )
        .style( "font-size", "12px" )
        .call( d3.legend );
} );