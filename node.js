const csvFilePath='<ClassApp\input.csv>'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})
 
const jsonArray=await csv().fromFile(csvFilePath);

const csv=require('csvtojson')
csv({
    noheader:true,
    trim:true,
    ignoreEmpty: true,
    output: jsonObj,
})
.fromString(csvStr)
.then((csvRow)=>{ 
    console.log(csvRow) 
})

const request=require('request')
const csv=require('csvtojson')
 
csv()
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
    })
},onError,onComplete);

const csv=require('csvtojson')
csv({output:"json"})
.fromString(csvStr)
.subscribe((csvLine)=>{ 
})

const csv=require('csvtojson');
 
const readStream=require('fs').createReadStream(csvFilePath);

 readStream.pipe(csv()).pipe(writeStream);

