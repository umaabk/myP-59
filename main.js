var canvas= new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function (Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
			});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '67') 
	{
		new_image('Cindy.png');
            console.log("c");
	}
	if(keyPressed == '74')
	{
		block_x = 300;
		new_image('Jasmine.png');
            console.log("j");
	}
	
	if(keyPressed == '83')
	{
		block_x =500;
		new_image('Snow_white.png');
            console.log("s");
	}
	if(keyPressed == '65')
	{
		block_x = 700;
		new_image('Anna.png');
            console.log("a");
	}
	if(keyPressed == '69')
	{
		block_x = 850;
		new_image('Elsa.png');
		console.log("e");
	}
	
}

