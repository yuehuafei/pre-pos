'use strict';

function createUpdatedCollection(collectionA, objectB) {
 	var result=[];
	var count=0;
	var i,j;
	for(i=0;i<collectionA.length;i=j)
	{
		for(j=i;j<collectionA.length;j++)
		{
			if(collectionA[i]==collectionA[j])
				count++;
			else 
				break;
		}
		var obj=new Object();
		obj.key=collectionA[i];
		obj.count=count;
		result.push(obj);
		count = 0 ;
	}
	for(var i=0;i<result.length;i++)
	{
		for(var j=0;j<objectB.value.length;j++)
		{
			if(result[i].key==objectB.value[j])
				result[i].count=result[i].count-parseInt(result[i].count/3);
		}
	}
  return result;
}
