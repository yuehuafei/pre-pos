'use strict';

function countSameElements(collection) {
    var result=[];
	var count=0;
	var i,j,strs;
	for(i=0;i<collection.length;i=j)
	{
		for(j=i;j<collection.length;j++)
		{
			if(collection[i]==collection[j])
			{
				strs=collection[i].split("-");
				if(strs[1]!=null) 
					count=parseInt(strs[1]);
				else count++;
			}
			else 
				break;
		}
		var obj=new Object();
		obj.key=strs[0];
		obj.count=count;
		result.push(obj);
		count = 0 ;
	}
  return result;
}
