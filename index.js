let students=[{id: 1, s_name: "raghu",city: "hyd"},
         {id: 1, s_name: "varshi",city: "eluru"},
         {id: 1, s_name: "pavan",city: "vizag"},
         {id: 1, s_name: "rahul",city: "bangaluru"},
         {id: 1, s_name: "sita",city: "chennai"},
         {id: 1, s_name: "vijay",city: "mumbai"}
];
// for (let i in students){
//   console.log(`${students[i].s_name} from ${students[i].city}`)
// }  

for (students of students){
  console.log(`${students.s_name} from ${students.city}`)
}