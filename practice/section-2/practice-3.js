'use strict';

function countSameElements(collection) {
    var result=[];
	var  res=[];
	var count=0;
	var tmp={};
	var i,j,strs;
	for(i=0;i<collection.length;i=j)
	{
		for(j=i;j<collection.length;j++)
		{
			if(collection[i]==collection[j])
			{
			strs=collection[i].split("");
				if(strs[2]!=null) 
					count+=parseInt(strs[2]+strs[3]);
				else count++;
			}
			else 
				break;
		}
		var obj=new Object();
		obj.name=strs[0];
		obj.summary=count;
		res.push(obj);
		count = 0 ;
	}
	for(i=0,i<res.length;i++)
	{	
		for(j=0;j<result.length;j++)
		{
			if(res[i].name==result[j].name)
			{
				result[j].summary+=res[i].summary;
			}
		}
			var obj=new Object();
			obj.name=res[i].name;
			obj.summary=res[i].summary;
			result.push(obj);
		}			
	}
  return result;
}
