'use strict';

function countSameElements(collection) {
	var result=[];
	var count=0;
	var i,j;
	for(i=0;i<collection.length;i=j)
	{
		for(j=i;j<collection.length;j++)
		{
			if(collection[i]==collection[j])
				count++;
			else 
				break;
		}
		var obj=new Object();
		obj.key=collection[i];
		obj.count=count;
		result.push(obj);
		count = 0 ;
	}
  return result;
}
