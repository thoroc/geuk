( function() {
    var g = d3.select( this );
    var svg = d3.select( g.property( "nearestViewportElement" ) );
    var height = ( Math.sqrt( 3 ) / 2 );
    var vertices = [
        {
            "x": radius + xp,
            "y": yp
        },
        {
            "x": radius / 2 + xp,
            "y": radius * h + yp
        },
        {
            "x": -radius / 2 + xp,
            "y": radius * h + yp
        },
        {
            "x": -radius + xp,
            "y": yp
        },
        {
            "x": -radius / 2 + xp,
            "y": -radius * h + yp
        },
        {
            "x": radius / 2 + xp,
            "y": -radius * h + yp
        } ];

    d3.hexagon = function() {
        svg.selectAll( '.hexagon' )
            .append( 'polygon' )
            .attr( 'points', function() {
                // console.log(d);
                return vertices.map( function( d ) {
                    return [ d.x, d.y ].join( "," );
                } ).join( " " );
            } );
    };

    hexagon.name = function( value ) {
        if ( !arguments.length ) return name;
        name = value;

        return hexagon;
    }

    hexagon.vertice_x = function( value ) {
        if ( !arguments.length ) return vertice_x;
        vertice_x = value;

        return hexagon;
    };

    hexagon.vertice_y = function( value ) {
        if ( !arguments.length ) return vertice_y;
        vertice_y = value;

        return hexagon;
    };

    hexagon.radius = function( value ) {
        if ( !arguments.length ) return radius;
        radius = value;

        return hexagon;
    };

    return hexagon;
} )();