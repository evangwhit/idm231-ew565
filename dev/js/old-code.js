//     function find_plant(plant_name) {
//     let flag = false;

//     for (const plant of all_plants) {
//         if (plant.name === plant_name){
//             // console.log(plant.name);
//             // console.log(plant.number);
//             const name = plant.name;
//             console.log(name);
//             flag = true;
//             return plant
//         }
//     }

//     if(!flag){
//         console.log('no plant found')
//     }
// }

// find_plant('Succulents');



// // creating the html structure for each section

// function insert_info(plant_name) {
//     const new_element = document.createElement('h1');
//     const plant_info = find_plant(plant_name);
//     const new_text = document.createTextNode(plant_info.name);
//     new_element.appendChild(new_text);

//     const sections = document.getElementsByClassName('content_container');
//     const section = sections[1];
//     section.appendChild(new_element);
//     console.log('success!');
// }

// insert_info('Succulents')


//find the section with the class name and put them all into an array


// function find_sections() {

//     let classes = ""; // Declare classes variable outside the loops
//     let plant_name = ""; // Declare plant_name variable outside the loops

//     const sections = document.querySelectorAll('section');
    
//     // sections.forEach(section => {
//     //     classes = section.className;
//     //     plant_name = item.name;
//     //     console.log(plant_name + classes)

//     // });
    
//     // console.log(plant_name + classes)
//     // all_plants.forEach(item => {
//     //     plant_name = item.name; 
//     // });

//     const number_of_plants = all_plants.length;

//     for (let i = 0; i <= number_of_plants; i++) {
//         plant_name = all_plants[i].name;
//         classes = sections[i].className;
//         console.log(plant_name[i] + ' should equal ' + classes[i]);
//     }
// }

function find_sections() {
    const sections = document.querySelectorAll('section');
    sections.forEach (section => {
        console.log(section.className);
    });
}

find_sections();