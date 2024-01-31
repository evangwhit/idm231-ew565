const all_plants = [
    {
        name: 'Spider Plant',
        number: 0,
        description: 'Spider Plant description'
    },

    {
        name: 'Snake Plant',
        number: 1,
        description: 'Snake plant description'
    },

    {
        name: 'Pothos',
        number: 2,
        description: 'Pothos description'
    },

    {
        name: 'ZZ Plant',
        number: 3,
        description: 'ZZ Plant description'
    },

    {
        name: 'Peace Lily',
        number: 4,
        description: 'Peace Lily description'
    },
    
    {
        name: 'Rubber Plant',
        number: 6,
        description: 'Rubber Plant description'
    },

    {
        name: 'Fiddle Leaf Fig',
        number: 5,
        description: 'Fiddle Leaf Fig description'
    },

    {
        name: 'Aloe Vera',
        number: 7,
        description: 'Aloe Vera description'
    },

    {
        name: 'Monstera Deliciosa',
        number: 8,
        description: 'Monstera Deliciosa description'
    },

    {
        name: 'Succulents',
        number: 9,
        description: 'Succulents description'
    },

    {
        name: 'Philodendron',
        number: 10,
        description: 'Philodendron description'
    },

    {
        name: 'Chinese Money Plant',
        number: 11,
        description: 'Chinese Money Plant description'
    }
];


function find_plant(plant_name) {
    let flag = false;

    for (const plant of all_plants) {
        if (plant.name === plant_name){
            console.log(plant.description);
            console.log(plant.number);
            flag = true;
            break;
        }
    }

    if(!flag){
        console.log('no plant found')
    }
}

find_plant('Succulents');




let i = 0;
    
while (i < 10){
    if ((i > 5) && (i < 8)){
        console.log(i);
    }
  i++
}   