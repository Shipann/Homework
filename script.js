
const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

function getStudentAverageMark(id) {
    const student = students.find((student) => student.id === id)
    if (!student) {
        return null;
    }
    const avg = student.marks.reduce((acc, mark) => acc + mark) / student.marks.length;
return avg;
}
function getGroupAvarageMark(){
    const groupMarks = students.flatMap(({marks}) => marks)
    return groupMarks.reduce((acc, mark) => acc + mark) / student.marks.length;
}