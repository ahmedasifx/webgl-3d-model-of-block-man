
"use strict";
var canvas;
var gl;
//number of vertices
var NumVertices = 216;

var points = [];
var colors = [];
var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = 0;
var theta = [ 0, 0, 0 ];
var thetaLoc;
window.onload = function init()
{
canvas = document.getElementById( "gl-canvas" );
gl = canvas.getContext('webgl2');
if (!gl) alert("WebGL 2.0 isn't available");
//calling the function to draw the object
model();

gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
gl.enable(gl.DEPTH_TEST);
//
// Load shaders and initialize attribute buffers
//
var program = initShaders( gl, "vertex-shader", "fragment-shader" );
gl.useProgram( program );
var cBuffer = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
var vColor = gl.getAttribLocation( program, "vColor" );
gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
gl.enableVertexAttribArray( vColor );
var vBuffer = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );
var vPosition = gl.getAttribLocation( program, "vPosition" );
gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
gl.enableVertexAttribArray( vPosition );
thetaLoc = gl.getUniformLocation(program, "theta");
//event listeners for buttons
//the rotation for the different axis
document.getElementById( "xButton" ).onclick = function () {
axis = xAxis;
};
document.getElementById( "yButton" ).onclick = function () {
axis = yAxis;
};
document.getElementById( "zButton" ).onclick = function () {
axis = zAxis;
};
render();
}

//function to draw the model

function model()
{
    //hand 1
quad1( 1, 0, 3, 2 );
quad1( 2, 3, 7, 6 );
quad1( 3, 0, 4, 7 );
quad1( 6, 5, 1, 2 );
quad1( 4, 5, 6, 7 );
quad1( 5, 4, 0, 1 );
//hand 2
quad2( 1, 0, 3, 2 );
quad2( 2, 3, 7, 6 );
quad2( 3, 0, 4, 7 );
quad2( 6, 5, 1, 2 );
quad2( 4, 5, 6, 7 );
quad2( 5, 4, 0, 1 );
// head
    quad3( 1, 0, 3, 2 );
    quad3( 2, 3, 7, 6 );
    quad3( 3, 0, 4, 7 );
    quad3( 6, 5, 1, 2 );
    quad3( 4, 5, 6, 7 );
    quad3( 5, 4, 0, 1 );

//body
    quad4( 1, 0, 3, 2 );
    quad4( 2, 3, 7, 6 );
    quad4( 3, 0, 4, 7 );
    quad4( 6, 5, 1, 2 );
    quad4( 4, 5, 6, 7 );
    quad4( 5, 4, 0, 1 );
    
//leg1
    quad5( 1, 0, 3, 2 );
    quad5( 2, 3, 7, 6 );
    quad5( 3, 0, 4, 7 );
    quad5( 6, 5, 1, 2 );
    quad5( 4, 5, 6, 7 );
    quad5( 5, 4, 0, 1 );

//leg2
    quad6( 1, 0, 3, 2 );
    quad6( 2, 3, 7, 6 );
    quad6( 3, 0, 4, 7 );
    quad6( 6, 5, 1, 2 );
    quad6( 4, 5, 6, 7 );
    quad6( 5, 4, 0, 1 );
        
        





}







//leg2
function quad6(a,b,c,d){
    var vertices = [
  

       
        //coordinate's for leg2
       
        vec3(0.246, -0.098, -0.6),
        vec3( 0.246, 0.098, -0.6),
        vec3( 0.049, 0.098, -0.6),
        vec3( 0.049, -0.098,-0.6),
        vec3( 0.246, -0.098,-1),
        vec3( 0.246, 0.098, -1 ),
        vec3( 0.049, 0.098, -1 ),
        vec3( 0.049, -0.098, -1 ),

       

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];
        //vertex color is blue
        var vertexColors = [
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        ];
        // We need to parition the quad into two triangles in order for
        // WebGL to be able to render it. In this case, we create two
        // triangles from the quad indices
        //vertex color assigned by the index of the vertex
        var indices = [ a, b, c, a, c, d ];
        for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );
        colors.push( vertexColors[indices[i]] );
        // for solid colored faces use
        //colors.push(vertexColors[a]);
        }

}



//leg1
function quad5(a,b,c,d){
    var vertices = [
       

       
        //coordinate's for leg1
       
        vec3(-0.246, -0.098, -0.6),
        vec3( -0.246, 0.098, -0.6),
        vec3( -0.049, 0.098, -0.6),
        vec3( -0.049, -0.098,-0.6),
        vec3( -0.246, -0.098,-1),
        vec3( -0.246, 0.098, -1 ),
        vec3(  -0.049, 0.098, -1 ),
        vec3(  -0.049, -0.098, -1 ),

       

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];
         //vertex color is blue
        var vertexColors = [
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        ];
        // We need to parition the quad into two triangles in order for
        // WebGL to be able to render it. In this case, we create two
        // triangles from the quad indices
        //vertex color assigned by the index of the vertex
        var indices = [ a, b, c, a, c, d ];
        for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );
        colors.push( vertexColors[indices[i]] );
        // for solid colored faces use
        //colors.push(vertexColors[a]);
        }

}



//body
function quad4(a,b,c,d){
    var vertices = [

       
        //coordinate's for the body
       
        vec3( -0.236, -0.196, 0.4263),
        vec3( -0.236, 0.196, 0.4263),
        vec3( 0.236, 0.196, 0.4263),
        vec3( 0.236, -0.196,0.4263),
        vec3( -0.236, -0.196,-0.6),
        vec3( -0.236, 0.196, -0.6 ),
        vec3( 0.236,0.196, -0.6 ),
        vec3( 0.236,-0.196, -0.6 ),

       

        
        
 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];
         //vertex color is blue
        var vertexColors = [
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        [ 0.0, 0.0, 1.0, 1.0 ], 
        ];
        // We need to parition the quad into two triangles in order for
        // WebGL to be able to render it. In this case, we create two
        // triangles from the quad indices
        //vertex color assigned by the index of the vertex
        var indices = [ a, b, c, a, c, d ];
        for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );
        colors.push( vertexColors[indices[i]] );
        // for solid colored faces use
        //colors.push(vertexColors[a]);
        }

}
//head
function quad3(a,b,c,d){
    var vertices = [
   
        
       //coordinates for head 
        vec3( -0.334, -0.334, 1),
        vec3( -0.334,0.334, 1 ),
        vec3(0.334 , 0.334, 1 ),
        vec3( 0.334, -0.334, 1),
        vec3( -0.334, -0.334,0.4262 ),
        vec3( -0.334, 0.334, 0.4262 ),
        vec3( 0.334, 0.334, 0.4262 ),
        vec3( 0.334, -0.334, 0.4262 ),

       

        
        
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];
         //vertex color is yellow
        var vertexColors = [
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        [ 1.0, 1.0, 0.0, 1.0 ], 
        ];
        // We need to parition the quad into two triangles in order for
        // WebGL to be able to render it. In this case, we create two
        // triangles from the quad indices
        //vertex color assigned by the index of the vertex
        var indices = [ a, b, c, a, c, d ];
        for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );
        colors.push( vertexColors[indices[i]] );
        // for solid colored faces use
        //colors.push(vertexColors[a]);
        }

}

//hand 2
function quad2(a,b,c,d){
    var vertices = [
   
        
        //coordinate's for hand2
        vec3( -0.427, -0.11, 0.3 ),
        vec3( -0.427, 0.11, 0.3 ),
        vec3( -0.208, 0.11, 0.3 ),
        vec3( -0.208, -0.11, 0.3 ),
        vec3( -0.427, -0.11, -0.4 ),
        vec3( -0.427, 0.11, -0.4 ),
        vec3( -0.208, 0.11, -0.4 ),
        vec3( -0.208, -0.11,-0.4 ),
        
        
        
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];
        var vertexColors = [
             //vertex color is red
        [ 1.0, 0.0, 0.0, 1.0 ],
        [ 1.0, 0.0, 0.0, 1.0 ], 
        [ 1.0, 0.0, 0.0, 1.0 ], 
        [ 1.0, 0.0, 0.0, 1.0 ], 
        [ 1.0, 0.0, 0.0, 1.0 ], 
        [ 1.0, 0.0, 0.0, 1.0 ],
        [ 1.0, 0.0, 0.0, 1.0 ], 
        [ 1.0, 0.0, 0.0, 1.0 ], 
        ];
        // We need to parition the quad into two triangles in order for
        // WebGL to be able to render it. In this case, we create two
        // triangles from the quad indices
        //vertex color assigned by the index of the vertex
        var indices = [ a, b, c, a, c, d ];
        for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );
        colors.push( vertexColors[indices[i]] );
        // for solid colored faces use
        //colors.push(vertexColors[a]);
        }

}
//hand 1
function quad1(a, b, c, d)
{
var vertices = [



//coordinate's for hand2
vec3( 0.427, -0.11, 0.3 ),
vec3( 0.427, 0.11, 0.3 ),
vec3( 0.208, 0.11, 0.3 ),
vec3( 0.208, -0.11, 0.3 ),
vec3( 0.427, -0.11, -0.4 ),
vec3( 0.427, 0.11, -0.4 ),
vec3( 0.208, 0.11, -0.4 ),
vec3( 0.208, -0.11,-0.4 ),



















];
var vertexColors = [
    //vertex color is red
[ 1.0, 0.0, 0.0, 1.0 ],
[ 1.0, 0.0, 0.0, 1.0 ], 
[ 1.0, 0.0, 0.0, 1.0 ], 
[ 1.0, 0.0, 0.0, 1.0 ], 
[ 1.0, 0.0, 0.0, 1.0 ], 
[ 1.0, 0.0, 0.0, 1.0 ],
[ 1.0, 0.0, 0.0, 1.0 ], 
[ 1.0, 0.0, 0.0, 1.0 ], 
];
// We need to parition the quad into two triangles in order for
// WebGL to be able to render it. In this case, we create two
// triangles from the quad indices
//vertex color assigned by the index of the vertex
var indices = [ a, b, c, a, c, d ];
for ( var i = 0; i < indices.length; ++i ) {
points.push( vertices[indices[i]] );
colors.push( vertexColors[indices[i]] );
// for solid colored faces use
//colors.push(vertexColors[a]);
}
}
function render()
{
gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
theta[axis] += 0.5;
gl.uniform3fv(thetaLoc, theta);
gl.drawArrays( gl.TRIANGLES, 0, NumVertices );
  requestAnimationFrame( render );
}
