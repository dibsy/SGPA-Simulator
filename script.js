// SGPA Calculator 1.0 Developer: Dibyendu (inDi-hex-k0d3r)
var tcredits=0;// total credits of the all the subjects
var scredits=0;// total credits secured by the student
var arr=new Array();
var getGradePoint=function(grade){
  var pt;
	if(grade=="O")
		pt=10;
	else if(grade=="E")
		pt=9;
	else if(grade=="A")
		pt=8;
	else if(grade=="B")
		pt=7;
	else if(grade=="C")
		pt=6;
	else if(grade=="D")
		pt=5;
	else if(grade=="F")
		pt=2;
	else
		pt=0;
	return pt;
	
};


var creditsBox=function(){
	for(i=1;i<=7;i++)
	{
		c="c"+parseInt(i);
		g="g"+parseInt(i);
		
		cret=parseInt(document.getElementById(c).value);//credits
		
		tcredits+=parseInt(cret);
		gret=document.getElementById(g).value;//grade 
		
		point=parseInt(getGradePoint(gret));
		point=point * cret;
		
		arr[i]=point;
	}
	return tcredits;
};

var calcSGPA=function(){
	tcredits=creditsBox();
	for(i=1;i<=7;i++)
	{
		
		scredits+=arr[i];
	}
	sgpa=parseFloat(scredits/tcredits);
	msg="SGPA : "+sgpa;
	alert(msg);
};
