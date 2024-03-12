const all_plants = [
    { name: 'Spider Plant',
        number: 0,
        img: 'deploy-assets/images/spider.jpg',
        audio: 'deploy-assets/sounds/Death-1.mp3',
        description: 
        'The Spider Plant (Chlorophytum comosum) is a resilient and visually appealing houseplant that has earned its popularity among both novice and experienced plant enthusiasts. Recognized for its arching, grass-like leaves, the Spider Plant is characterized by its unique ability to produce small plantlets at the ends of long, slender stems. These miniature offshoots, resembling tiny spiders, can be propagated to create new plants, making the Spider Plant an excellent choice for those interested in expanding their indoor garden. One of its most attractive features is its adaptability; it can thrive in a range of conditions, including moderate to bright indirect light and various soil types. Spider Plants are known for their air-purifying qualities, helping to enhance indoor air quality by removing common pollutants. Furthermore, they are relatively low-maintenance, requiring occasional watering and tolerating occasional neglect. With its combination of visual appeal, ease of care, and air-purifying benefits, the Spider Plant remains a popular choice, often finding a place in homes and offices alike.'
    },

    { name: 'Snake Plant',
        number: 1,
        img: 'deploy-assets/images/snake.jpg',
        audio: 'deploy-assets/sounds/Death-2.mp3',
        description:
        'The Snake Plant (Sansevieria trifasciata) is a robust and striking houseplant celebrated for its resilience and unique appearance. With its upright, sword-like leaves that grow in architectural clusters, the Snake Plant adds a touch of elegance to any indoor space. Also known as Mother-in-law\'s Tongue, this plant is highly adaptable and can thrive in low light conditions, making it an ideal choice for various settings, including offices and homes. One of its key attributes is its ability to tolerate neglect and periods of low water, making it an excellent option for those who may not have a green thumb or are frequently away. Beyond its aesthetic appeal, the Snake Plant is renowned for its air-purifying qualities, filtering out toxins and contributing to improved indoor air quality. Its architectural form and low-maintenance nature have made the Snake Plant a favorite among plant enthusiasts, adding a touch of sophistication and greenery to spaces while requiring minimal care.'
    },

    { name: 'Pothos',
        number: 2,
        img: 'deploy-assets/images/pothos.jpg',
        audio: 'deploy-assets/sounds/Death-3.mp3',
        description:
        'The Pothos (Epipremnum aureum), also known as Devil\'s Ivy, is a versatile and low-maintenance houseplant cherished for its heart-shaped leaves and cascading vines. Renowned for its adaptability, Pothos can thrive in various lighting conditions, from low to bright, indirect light, making it an ideal choice for different spaces within a home or office. With its trailing vines, Pothos is often used in hanging baskets or as a climber, adding a touch of greenery to both tabletops and shelves. One of its standout features is its resilience; Pothos can withstand periods of drought and occasional neglect, making it an excellent option for beginners or those with busy schedules. Beyond its aesthetic appeal, Pothos is known for its air-purifying properties, helping to cleanse indoor air by removing pollutants. Whether placed in a decorative pot or suspended from a hanging planter, the Pothos is celebrated for its ability to bring beauty and freshness to indoor spaces with minimal effort and care.'
    },

    { name: 'ZZ Plant',
        number: 3,
        img: 'deploy-assets/images/zz-plant.webp',
        audio: 'deploy-assets/sounds/Death-4.mp3',
        description: 
        'The ZZ Plant (Zamioculcas zamiifolia) is a resilient and visually striking houseplant, known for its glossy, dark green leaves that gracefully arch upwards. With a unique architectural presence, the ZZ Plant is often praised for its ability to thrive in low light conditions, making it an excellent choice for spaces with limited natural light. This hardy plant is characterized by its tolerance for neglect and infrequent watering, making it an ideal option for those seeking a low-maintenance yet visually appealing addition to their indoor greenery. The ZZ Plant\'s durability extends to its ability to adapt to various environments, from offices to homes, and its air-purifying qualities further enhance its popularity. The glossy foliage adds a touch of elegance to any room, and its upright growth habit allows it to fit seamlessly into a variety of decorative containers. Whether placed in a corner or as a centerpiece, the ZZ Plant stands out as a resilient and stylish choice for those looking to incorporate a low-fuss, high-impact plant into their indoor spaces.'
    },

    { name: 'Peace Lily',
        number: 4,
        img: 'deploy-assets/images/lily.jpg',
        audio: 'deploy-assets/sounds/Death-5.mp3',
        description: 
        'The Peace Lily (Spathiphyllum spp.) is a graceful and elegant houseplant known for its lush, dark green foliage and distinctive white blooms. Renowned for its air-purifying capabilities, the Peace Lily excels at removing common indoor pollutants, contributing to a healthier living environment. The plant\'s white, hood-like flowers add a touch of sophistication, creating a visually appealing contrast against the vibrant green leaves. Thriving in low to moderate indirect light, the Peace Lily is adaptable and well-suited for various indoor settings. While it appreciates consistent moisture, it has a unique feature - the ability to signal when it needs water by drooping its leaves, making it an interactive and responsive addition to any plant collection. With its ease of care and aesthetic allure, the Peace Lily is a popular choice for both novice and experienced plant enthusiasts, enhancing the ambiance of homes and offices alike. Whether used as a standalone decorative piece or incorporated into a larger indoor garden, the Peace Lily\'s beauty and air-purifying qualities make it a cherished and versatile houseplant.'
    },
    
    { name: 'Rubber Plant',
        number: 6,
        img: 'deploy-assets/images/rubber-plant.webp',
        audio: 'deploy-assets/sounds/Death-6.mp3',
        description: 'The Rubber Plant (Ficus elastica) is a classic and versatile houseplant appreciated for its large, glossy leaves and robust presence. With its dark green foliage and upright growth habit, the Rubber Plant adds a touch of sophistication to interior spaces. Belonging to the ficus family, it is known for its adaptability to various light conditions, thriving in bright, indirect light but also tolerating lower light levels. The broad, shiny leaves contribute to its aesthetic appeal, making it a popular choice for both modern and traditional home decor. Rubber Plants are relatively low-maintenance, requiring occasional watering and a well-draining soil mix. They can grow into impressive specimens over time, becoming a focal point in any room. Additionally, the Rubber Plant has air-purifying qualities, helping to improve indoor air quality by filtering out common pollutants. Whether placed in a decorative pot as a standalone piece or used in groupings with other plants, the Rubber Plant remains a timeless and reliable choice for those seeking a visually appealing and resilient houseplant.'
    },

    { name: 'Fiddle Leaf Fig',
        number: 5,
        img: 'deploy-assets/images/fiddle-leaf.jpg',
        audio: 'deploy-assets/sounds/Death-7.mp3',
        description: 
        'The Fiddle Leaf Fig (Ficus lyrata) is a striking and fashionable houseplant celebrated for its large, violin-shaped leaves that contribute a bold and dramatic flair to interior spaces. Characterized by its glossy, dark green foliage with prominent veins, the Fiddle Leaf Fig has become an icon in contemporary home decor. Its upright growth habit and impressive size make it a standout feature in any room. While it requires bright, indirect light to thrive, the Fiddle Leaf Fig demands attention and rewards its caretaker with a touch of tropical elegance. However, it\'s important to strike the right balance with watering and avoid overwatering, as these plants are sensitive to changes in moisture levels. Despite the challenge of maintaining optimal conditions, the Fiddle Leaf Fig remains a highly sought-after plant, adding a touch of sophistication and nature-inspired beauty to living spaces. Whether placed as a solitary statement piece or used in groupings with other greenery, the Fiddle Leaf Fig continues to be a favorite choice for those looking to make a bold and stylish statement with their indoor plant selections.'
    },

    { name: 'Aloe Vera',
        number: 7,
        img: 'deploy-assets/images/Aloe.webp',
        audio: 'deploy-assets/sounds/Death-8.mp3',
        description: 
        'Aloe Vera (Aloe barbadensis miller) is a distinctive and practical succulent widely appreciated for its unique appearance and versatile uses. Recognized by its fleshy, spiky leaves that contain a gel-like substance with various medicinal properties, Aloe Vera is a popular choice for both its aesthetic appeal and functional benefits. Its upright growth habit and vibrant green color add a touch of natural beauty to indoor spaces. Aloe Vera thrives in bright, indirect sunlight and well-draining soil, making it adaptable to various indoor conditions. Beyond its ornamental value, the gel inside its leaves is renowned for its soothing properties, often used to alleviate skin irritations, burns, and wounds. This dual-purpose plant requires minimal maintenance, with sporadic watering being sufficient, as it is well-adapted to withstand periods of drought. Whether displayed in a decorative pot or used for its healing properties, Aloe Vera remains a practical and visually appealing addition to homes, contributing both to the aesthetics of interior spaces and the well-being of its caretakers.'
    },

    { name: 'Monstera Deliciosa',
        number: 8,
        img: 'deploy-assets/images/monstera.webp', 
        audio: 'deploy-assets/sounds/Death-9.mp3',
        description: 
        'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a captivating and iconic houseplant celebrated for its large, glossy, and fenestrated leaves, which feature unique splits and holes. With its tropical and exotic appearance, the Monstera has become a staple in interior design, adding a touch of drama and vibrancy to living spaces. Characterized by its climbing and trailing vines, this plant can be cultivated as a statement piece with its lush foliage or trained to climb and cascade for added visual interest. Monstera Deliciosa prefers bright, indirect light and a well-draining soil mix, making it suitable for various indoor settings. While it requires some space to spread its leaves freely, its adaptability and relatively low-maintenance care needs make it a popular choice among plant enthusiasts. The Monstera\'s distinctive appearance and ability to thrive in indoor conditions contribute to its enduring popularity as a stylish and visually striking addition to homes, offices, and other interior environments.'
    },

    { name: 'Succulents',
        number: 9,
        img: 'deploy-assets/images/succulents.webp',
        audio: 'deploy-assets/sounds/Death-10.mp3',
        description:
        'Succulents encompass a diverse group of plants known for their unique ability to store water in their fleshy leaves, stems, or roots, making them well-adapted to arid environments. Popular varieties include Echeveria, Haworthia, and Jade Plants, each with its own distinct appearance. These plants are characterized by their striking shapes, colors, and textures, ranging from rosette forms to cascading vines. Succulents have gained immense popularity as houseplants due to their resilience and aesthetic appeal. Known for their water efficiency, succulents require well-draining soil and infrequent watering, making them suitable for those who prefer low-maintenance plants. They thrive in bright, indirect light and are often placed in decorative containers or arrangements, making them versatile for various interior design styles. The diversity within the succulent category allows for creative and personalized displays, with enthusiasts often arranging different species together for a visually captivating effect. Beyond their ornamental value, succulents are celebrated for their air-purifying qualities and adaptability to various containers, making them ideal for terrariums, hanging planters, or standalone pots. As a result, succulents continue to be favored by plant enthusiasts seeking both beauty and practicality in their indoor greenery.'
    },

    { name: 'Philodendron',
        number: 10,
        img: 'deploy-assets/images/Philodendron.jpg',
        audio: 'deploy-assets/sounds/Death-11.mp3',
        description: 
        'Philodendrons encompass a diverse group of tropical plants known for their attractive, often heart-shaped leaves. Popular as both indoor and outdoor plants, various species within the Philodendron genus, such as the Heartleaf Philodendron or the Swiss Cheese Plant (Monstera deliciosa), offer distinct characteristics. The Heartleaf Philodendron (Philodendron hederaceum) is particularly cherished for its trailing vines and heart-shaped, glossy leaves. Its adaptability to different light conditions, from low to bright indirect light, makes it a versatile choice for various indoor settings. Easy to care for, this Philodendron requires moderate watering and can thrive in a variety of potting mediums. On the other hand, the Swiss Cheese Plant, while technically part of the Monstera genus, is often colloquially referred to as a Philodendron. Recognized for its large, fenestrated leaves, it brings a tropical and exotic feel to interiors. Thriving in bright, indirect light, it requires well-draining soil and benefits from occasional pruning to maintain its desired shape. Overall, Philodendrons are favored for their decorative foliage and adaptability, making them suitable for plant enthusiasts of all experience levels. Their unique leaf shapes and sizes contribute to their widespread popularity as versatile and visually appealing houseplants.'
    },

    { name: 'Chinese Money Plant',
        number: 11,
        img: 'deploy-assets/images/chinese-money.webp', 
        audio: 'deploy-assets/sounds/Death-12.mp3',
        description: 
        'The Chinese Money Plant, scientifically known as Pilea peperomioides, is a distinctive and charming houseplant that has gained popularity for its unique coin-shaped leaves and minimalistic appeal. Native to China, this plant features round, pancake-like foliage on delicate stems, creating an eye-catching display. The Chinese Money Plant has become a trendy choice for modern interiors and is often admired for its elegant simplicity. Known for its ease of care, the Chinese Money Plant thrives in bright, indirect light but can tolerate lower light conditions. It prefers well-draining soil and requires moderate watering, allowing the soil to dry out between waterings. With its compact size and attractive foliage, it is commonly used as a standalone plant in decorative pots or as part of stylish plant arrangements. Beyond its aesthetic charm, the Chinese Money Plant is also known for its propagation potential. It produces offshoots, or "pups," around the base of the main plant, which can be separated and planted to create new individual plants. This feature adds to its allure for plant enthusiasts looking to expand their indoor greenery. The Chinese Money Plant\'s distinctive appearance, low-maintenance nature, and trend-setting status make it a sought-after choice for those seeking a visually appealing and fuss-free addition to their homes or offices.'
    }
];

function build_HTML() {
    const main_container = document.getElementById('main_container');

    all_plants.forEach (plant => {

    /* Building HTML elements */        
        const new_section = document.createElement('section'); // sections for the plants
        const new_h1 = document.createElement('h1'); // the heading to hold the plant name
        const plant_name_text = document.createTextNode(plant.name); // the plant name text
        const arrow = document.createElement('button')
            arrow.classList.add('caret');
        
        const arrow_content = document.createElement('i')
            arrow_content.classList.add('fa-solid');
            arrow_content.classList.add('fa-angle-left');
            arrow_content.classList.add('fa-2xl');
        
        const line_div = document.createElement('div'); // create the seperator line
            line_div.classList.add('line'); // add class name to the line div
        const info_div = document.createElement('div'); // creat div to hold plant info
            info_div.classList.add('info'); // add class name to content div
            info_div.classList.add('hidden'); // add "hidden" class name to content div
        const inner_div = document.createElement('div');
            inner_div.classList.add('inner');
        const body_copy_div = document.createElement('div'); // create div to hold plant info
            body_copy_div.classList.add('body_copy'); // add class to body copy div
        const body_copy_p = document.createElement('p');


        const plant_description = document.createTextNode(plant.description) // the plant description text
        const plant_img = document.createElement('img');
        plant_img.src = plant.img;
        

        const name_no_spaces = plant.name.replace(/ /g, "_"); // converting the plant names to class names
       
    /* Combining HTML elements */ 
        main_container.appendChild(new_section); // add sections
        new_section.classList.add(name_no_spaces); // add class names to each section
        new_section.appendChild(line_div); // add line div
            line_div.appendChild(new_h1); // add headings
                new_h1.appendChild(plant_name_text); // add text to headings
            line_div.appendChild(arrow); // add arrow
                arrow.appendChild(arrow_content); // add arrow icon

        new_section.appendChild(info_div); // add div for content
            info_div.appendChild(inner_div);
                inner_div.appendChild(plant_img); // add plant image
                inner_div.appendChild(body_copy_div); // add description div
                    body_copy_div.appendChild(body_copy_p) // add description paragraph
                        body_copy_p.appendChild(plant_description); // add actual description

})}

build_HTML();

const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');
const infos = document.querySelectorAll('.info');
const inners = document.querySelectorAll('.inner');
const audio_element = document.querySelector('audio');

function play_audio(audio_element, src) {
    audio_element.pause();
    audio_element.currentTime = 0;
    audio_element.src = src;
    audio_element.play();
}


function open_card([button, info, inner, plant_name]) {
    inner.style.transitionDelay = '0.3s';
    button.classList.add('rotate');
    info.classList.remove('hidden');

    for (let i = 0; i < all_plants.length; i++) {
        const current_plant = all_plants[i].name;
        
        if (current_plant === plant_name) {
            const src = all_plants[i].audio;
            
            play_audio(audio_element, src);
                    break;

        } else {
            console.log(`Plant ${current_plant} not found`);
        }
    }
}


function close_all_cards() {

    inners.forEach(inner => {
        inner.style.transitionDelay = '0s';
    });

    infos.forEach(info => {
        info.classList.add('hidden');
    });

    buttons.forEach(button => {
        button.classList.remove('rotate');
    });

    audio_element.pause();
}


function card_clicks() {
    
    sections.forEach(section => {
        const button = section.querySelector('button');
        const info = section.querySelector('.info');
        const inner = section.querySelector('.inner');
        const plant_name = section.classList.value.replace(/_/g, ' ');

        button.addEventListener('click', () => { 
            if (!button.classList.contains('rotate')) { // this is for opening the section

                close_all_cards();
                open_card([button,info,inner,plant_name]);


            } else { // this is for closing the section
                
                close_all_cards();
            }
        });
    });
}


function birthday_calc(date_real) {

    let plant_sign = 'undefined';
    let month = Number(date_real.month);
    let day = Number(date_real.day);
    

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        plant_sign = 'Spider Plant';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        plant_sign = 'Snake Plant'
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        plant_sign = 'Pothos'
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        plant_sign = 'ZZ Plant'
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        plant_sign = 'Peace Lily'
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        plant_sign = 'Rubber Plant'
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        plant_sign = 'Fiddle Leaf Fig'
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        plant_sign = 'Aloe Vera'
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        plant_sign = 'Monstera Deliciosa'
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        plant_sign = 'Succulents'
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        plant_sign = 'Philodendron'
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        plant_sign = 'Chinese Money Plant'
      }
    console.log(month);
    console.log(day);

    return plant_sign;
}


function submit_form() {
    const form = document.querySelector('form');
    const submit_btn = (form.elements['submit_btn']);
    
    submit_btn.addEventListener('click', (event) => {
        event.preventDefault();

        const date = (form.elements['birthday'].value);
        
        function date_object(og_date) { // this turns the array into an object
            
            const date_real = {
                year: og_date[0],
                month: og_date[1],
                day: og_date[2]
            }
            return date_real;
        }
    
        const plant_by_date = birthday_calc( // this returns a plant name based on date
            date_object( // this turns the array into an object
                date.split('-') // this turns the date input into an array
            ) 
        );
        console.log(plant_by_date);

        const class_by_date = plant_by_date.replace(/ /g, "_"); // converting the plant names to class names
        const date_plant = document.querySelector(`.${class_by_date}`); // finds the element that matches class and plant name

        if (date_plant) {
            
            date_plant.scrollIntoView({
                behavior: 'smooth',
                block: 'start'

            });

            const button = date_plant.querySelector('button');
            const info = date_plant.querySelector('.info');
            const inner = date_plant.querySelector('.inner');

            console.log(plant_by_date + ' = plant_by_date');

            close_all_cards();
            setTimeout(() => {
                open_card([button, info, inner, plant_by_date]); // Resolve the promise after the timeout
            }, 700); // Adjust the timeout as needed based on your animation duration
        } 
        
        else {
            console.log(`Element with class name '${class_by_date}' not found.`);
        }

    });
}


function card_interactions() { 
    card_clicks();
    submit_form();
}



card_interactions();
