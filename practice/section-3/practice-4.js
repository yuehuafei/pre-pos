'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var result=[];
	var count=0;
	var i,j,strs;
	for(i=0;i<collectionA.length;i=j)
	{
		for(j=i;j<collectionA.length;j++)
		{
			if(collectionA[i]==collectionA[j])
			{
				strs=collectionA[i].split("-");
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
	for(i=0;i<result.length;i++)
	{
		for(j=0;j<objectB.value.length;j++)
		{
			if(result[i].key==objectB.value[j])
				result[i].count-=parseInt(result[i].count/3);
		}
	}
	return result;
}
