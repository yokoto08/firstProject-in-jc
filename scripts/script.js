const main = document.querySelector('main')

const titleCardform  = main.querySelector('.titleCard-form')
const textCardform  = main.querySelector('.textCard-form')
const linkCardform = main.querySelector('.linkCard-form')
const templete = document.getElementById('templete').content
const createElement = main.querySelector('.createButton')
const cardArea = main.querySelector('.cards')

function createCard() {
    const cloneCard = templete.cloneNode(true)
    cloneCard.querySelector('img').src = linkCardform.value
    cloneCard.querySelector('.title').textContent =  titleCardform.value
    cloneCard.querySelector('.text').textContent = textCardform.value

     main.appendChild(cloneCard)
     titleCardform.value = ''
     textCardform.value = ''
     linkCardform.value = ''
}
createElement.addEventListener ('click',createCard)


const cardsData = [
    {
        img : './images/Снимок экрана 2025-02-06 в 03.38.59.png',
        h1 : "танцевальная движение 1",
        p : ' Это плавное и грациозное движение, которое начинается с поднятия рук над головой, после чего они опускаются в стороны, создавая эффект распускающегося цветка. Тело слегка наклоняется вперед, а ноги выполняют легкие шаги в ритме музыки, создавая ощущение легкости и воздушности.'
    },
    {
        img : './images/Снимок экрана 2025-02-06 в 03.39.22.png',
        h1 : 'танцевальная движение 2',
        p : 'Динамичное вращение, которое начинается с небольшого шага назад на одной ноге, после чего танцор быстро разворачивается на 360 градусов, меняя вес тела на другую ногу. Руки поднимаются в стороны, добавляя выразительность движению, а бедра плавно следуют за ритмом музыки.'
    },
    {
        img : './images/Снимок экрана 2025-02-06 в 03.39.28.png',
        h1 : 'танцевальная двжение 3',
        p : 'Это энергичное движение, которое включает в себя повороты корпуса в стороны, при этом ноги остаются на месте или делают небольшие шаги. Руки могут быть согнуты в локтях и двигаться в такт поворотам, создавая игривую атмосферу. Твист часто используется в рок-н-ролле и диско.'
    },
    {
        img : '/images/Снимок экрана 2025-02-06 в 03.39.34.png',
        h1 : 'танцевальная движение 4',
        p : ' Это медленное и выразительное движение, при котором танцор делает широкий шаг вперед, одновременно поднимая одну ногу и вытягивая руки в стороны. Положение тела должно быть уверенным и элегантным, с акцентом на плавность переходов между движениями.'
    },
    {
        img : './images/Снимок экрана 2025-02-06 в 03.40.46.png',
        h1 : 'танцевальная движение 5',
        p : 'Энергичное движение, при котором танцор поднимает одну ногу и делает резкий удар вперед или в сторону. Это движение часто сопровождается поворотом корпуса и активными руками, которые могут направляться в ту же сторону, что и нога. Кик добавляет динамики и ритма в танец'
    }
]
    cardsData.forEach(obj  => {
        const cloneCard = templete.cloneNode(true)
        cloneCard.querySelector('.title').textContent = obj.h1
        cloneCard.querySelector('.text').textContent = obj.p
        cloneCard.querySelector('img').src = obj.img
        
        main.appendChild(cloneCard)
    });

    


