document.addEventListener('DOMContentLoaded', () => {

    //Card Options
    const cardArray = [
        {
            name: 'dog1',
            img: 'images/dog1.png',
        },
        {
            name: 'dog1',
            img: 'images/dog1.png',
        },
        {
            name: 'dog2',
            img: 'images/dog2.png',
        },
        {
            name: 'dog2',
            img: 'images/dog2.png',
        },
        {
            name: 'dog3',
            img: 'images/dog3.png',
        },
        {
            name: 'dog3',
            img: 'images/dog3.png',
        },
        {
            name: 'dog4',
            img: 'images/dog4.png',
        },
        {
            name: 'dog4',
            img: 'images/dog4.png',
        },
        {
            name: 'dog5',
            img: 'images/dog5.png',
        },
        {
            name: 'dog5',
            img: 'images/dog5.png',
        },
        {
            name: 'dog6',
            img: 'images/dog6.png',
        },
        {
            name: 'dog6',
            img: 'images/dog6.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    // My Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check Card Match
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Well done! You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('Whoops! Try again :)')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrats! You found all the cards!'
        }
    }

    // Flip Card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()

})


