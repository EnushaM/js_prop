const names=["enu","harshi","sam","str"]
names.forEach(function(ele)
{
	console.log(ele)
})


const arr=["india","algeria","andorra","europe","EUROPE"]
const arr1=arr.filter(num=>num.startsWith("E"))
console.log(arr1)

const arr=[1,2,3,4,5,6]
const arr1=arr.map(function(ele)
{
	return (ele*ele)
})
console.log(arr1)

const arr=["enu","harshi","sam","str",1,2,3,4]
function getStringLists(arr)
{
	const arr1=arr.filter(num=>typeof num=="string")
	return(arr1)
}
console.log(getStringLists(arr))

const arr=["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"]
let sent=arr.reduce((a,b)=> a.concat(" "+b))
sent=sent.concat(" are north European countries")
console.log(sent)

const arr=["Estonia","Finland","Sweden","Denmark","Norway","IceLand","Fiji","France","India","North Korea"]
function frequent_initial(arr)
{
	var freq={};
	for (var i=0;i<arr.length;i++)
	{
		var s=arr[i];
		if(freq[s.charAt(0)]){freq[s.charAt(0)]++;}
		else{freq[s.charAt(0)]=1;}
	}
	return Object.keys(freq).reduce((a,b)=>freq[a]>freq[b]?a:b);
};
console.log(frequent_initial(arr));

const arr=[1,2,3,4]
var[e, pi, gravity, humanBodyTemp]=arr
console.log(e, pi, gravity, humanBodyTemp)

const set=new Set()
for(var i=1;i<=10;i++)
{
	set.add(i)
}
console.log(set)

const arr=["enu","harshi","sam","str","brinds"]
const set1=new Set()
arr.forEach(function(ele)
{set.add(ele)})
console.log(set1)

const arr=["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"]
const map=new Map()
arr.forEach(function(ele)
{map.set(ele,ele.length)})
console.log(map)


const a=[1,2,3,4,5]
const b=[4,5,6,7,8]
const union=[...a,...b]
const intersection=a.filter(num=>b.includes(num))
const a_with_b=a.filter(num=>!b.includes(num))
console.log(union)
console.log(intersection)
console.log(a_with_b)