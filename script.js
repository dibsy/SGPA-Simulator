// SGPA Calculator v2.0 Developer: Dibyendu (dibsyhex)
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
	var count=document.getElementById("count").value;
	for(i=1;i<=count;i++)
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
	var count=document.getElementById("count").value;
	for(i=1;i<=count;i++)
	{
		
		scredits+=arr[i];
	}
	sgpa=parseFloat(scredits/tcredits);
	msg="SGPA : "+sgpa;
	alert(msg);
	location.reload();
};

/* The function below generates input DOM based on the input provided */
var generate=function(){
	//var text="Hello";
	//alert(text);
	var form=document.getElementById("formcontent");
	var count=document.getElementById("count").value;
	//alert(count);
	var i;
	var string='<b>Enter Credit and Select Grade<b><br><br>';
	for(i=1;i<=count;i++)
	{
		string+=('<input class="input-small" id="c'+(i)+'" type="text">&nbsp;&nbsp;<select id="g'+(i)+'"><option value="O">O</option value="E"><option>E</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="F">F</option></select><br><br>');
	}
	string+='<button type="button" class="btn btn-danger btn-sm" onclick="calcSGPA();">Calculate Result</button>';
	form.innerHTML=string;

	

};