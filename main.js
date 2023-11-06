//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
//Create an instance of the 'Circle' class and calculate its area. 
//Similarly, do the same for the 'Triangle' class.


class Shape{
    calculateArea(){
        
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius
    }

calculateArea(){
    return (3.14*this.radius*this.radius)
}
}

class Triangle extends Shape{
    constructor(base,height){
        super();
        this.base=base;
        this.height=height;
    }

calculateArea(){
    return (this.base*this.height)/2
}
}

let circle=new Circle(5)

let triangle=new Triangle(3,4)

console.log(`Area of the Circle :` + circle.calculateArea());

console.log(`Area of the Triangle :` + triangle.calculateArea());