interface Person{
    name: string,
    age: number
}
interface Employee{
    employeeId: string,
    department: string
}
type StaffMember=Person& Employee
let person1 : StaffMember={
    name: 'Nguyen Van A',
    age: 28,
    employeeId:'EMP001',
    department:'Ke toan'
}
console.log(`Nhan vien: ${person1.name} (${person1.age} tuoi), Ma nhan vien: ${person1.employeeId} - Phong: ${person1.department}`)