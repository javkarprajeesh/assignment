let Cuboid = class {
    constructor(height,width,length){
      this.height = height;
      this.width = width;
      this.length = length;
    }
  
    caclVolume(){
      return this.length*this.height*this.width;
    }
  
    get Volume(){
      return this.caclVolume();
    }
  
    caclSurface(){
      return 2*(this.length*this.height+this.width*this.height+this.length*this.width);
    }
  
    get surface(){
      return this.caclSurface();
    }
  
  }
  
  const shape1 = new Cuboid(2,5,10);
  console.log("Cuboid volume "+shape1.Volume + " ");
   console.log("Cuboid surface area "+shape1.surface + " ");
  
   class Cube extends Cuboid{
     constructor(length){
       super(length,length,length);
       this.length = length;
     }
  
     caclVolume2(){
      return this.length*this.length;
    }
  
    get Volume2(){
      return this.caclVolume2();
    }
  
    caclSurface2(){
      return 6*(this.length*this.length);
    }
  
    get surface2(){
      return this.caclSurface2();
    }
  
   }
  
   const shape2 = new Cube(2);
   console.log("Cube volume "+shape2.Volume2 + " ");
   console.log("Cube surface area "+shape2.surface2 + " ");