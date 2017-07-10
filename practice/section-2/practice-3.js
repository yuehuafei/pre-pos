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
	while(res.length>1)
	{	i=0;
		if(res[i].key!=res[i+1].key)
		{
		    var obj=new Object();
		    obj.name=res[i].key;
		    obj.summary=res[i].count;
		    result.push(obj);
			res.shift();
		}
		else
		{
			res[i+1].count+=res[i].count;
			res.shift();
		}
	}
		i=0;
		var obj=new Object();
    obj.name=res[i].key;
    obj.summary=res[i].count;
    result.push(obj);
  return result;
}
