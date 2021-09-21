const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let copiedStudent = Object.assign({}, student);

copiedStudent.skills.frontEnd.push([{skill:"BootStrap",level:8}])
copiedStudent.skills.backEnd.push([{skill:"Express",level:9}])
copiedStudent.skills.dataBase.push([{skill:"SQL",level:9}])
copiedStudent.skills.dataScience.push("SQL")


console.log(copiedStudent);

objectKeyLength = Object.keys(copiedStudent).length
console.log(objectKeyLength)

objectValueLength = Object.values(copiedStudent).length
console.log(objectValueLength)

skillsKeysLength = Object.keys(copiedStudent.skills).length
console.log(skillsKeysLength)

skillsKeysLength = Object.keys(copiedStudent.skills).length
console.log(skillsKeysLength)

console.log(copiedStudent.hasOwnProperty('graphicDesign'));
