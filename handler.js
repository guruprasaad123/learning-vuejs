function EventHandler()
{
  this.events={};
}

EventHandler.prototype.on=function (type ,action)
{
  this.events[type]= ( this.events[type] ) ? this.events[type] : [] ;

this.events[type].push(action);
  console.log(" stack val : "+this.events[type]); //function stack
}

EventHandler.prototype.act=function (type)
{
  if(this.events[type])
  {
    this.events[type].forEach(function(data){
    data();
    });
  }

}

let Eventhandler = new EventHandler();



Eventhandler.on("load",function(){
  console.log('Loaded');
});

Eventhandler.on("load",function(){
  console.log('Loaded again');
});


Eventhandler.act('load');
