import inquirer from "inquirer";


    
let numberofqs = 0;
let answers = await inquirer.prompt([
    {
        name : "Q1",
        type : "checkbox",
        choices : ["Karachi","Lahore","Islamabad","Rawalpindi"],
        message : "What is the official name of Pakistan's capital city?",
        
    },
    {
        name : "Q2",
        type : "checkbox",
        choices : ["Himalayas","Alps","Andes","Karakoram Range"],
        message : "Which mountain range is home to the world's second-highest peak, K2?",
    },
    {
        name : "Q3",
        type : "checkbox",
        choices : ["India","Afghanistan","China","Iran"],
        message : "Pakistan shares its longest border with which neighboring country?",
    },
    {        
        name : "Q4",
        type : "checkbox",
        choices : ["Indus River","Jhelum River","Chenab River","Ravi River"],
        message : " Which river is often referred to as the 'Soul of Pakistan' and is the longest river that flows through the country?",
    },
    {
        name : "Q5",
        type : "checkbox",
        choices : ["Punjab","Sindh","Balochistan","Khyber Pakhtunkhwa"],
        message : " The ancient city of Mohenjo-daro, part of the Indus Valley Civilization, is located in which modern-day Pakistani province?"

    },
     {
        name : "Q6",
        type : "checkbox",
        choices : ["Karachi","Lahore","Islamabad","Peshawar"],
        message : " The Badshahi Mosque, one of the largest mosques in the world, is located in which Pakistani city?"

    },
    {

        name : "Q7",
        type : "checkbox",
        choices : ["India","Bangladesh","Sri Lanka","Nepal"],
        message : "Pakistan was created in 1947 as a result of the partition of which British colonial territory?"
    },
    {

        name : "Q8",
        type : "checkbox",
        choices : ["Faiz Ahmed Faiz","Allama Iqbal","Mirza Ghalib","Ahmed Faraz"],
        message : " Who is often referred to as the 'National Poet of Pakistan' and is known for his poetry in both Urdu and Persian languages?"

    },
    {

        name : "Q9",
        type : "checkbox",
        choices : ["Sitar","Tabla","Dhol","Rubabkhwa"],
        message : "  Which traditional Pakistani musical instrument is often associated with folk music and is played using a set of wooden sticks?"

    },
    {
//         
        name : "Q10",
        type : "checkbox",
        choices : ["Himalayas","Karakoram Range","Hindu Kush"," Pamir Mountains"],
        message : " Which mountain range is home to some of the world's highest peaks, including K2, the second-highest mountain on Earth?"

    },
]);
 
 export {answers};

