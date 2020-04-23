'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserBooks', [
      {
        UserId: 1,
        BookId: 1,
        review: 'I always start a new book by a favorite writer with a bit of trepidation: Please be good, please stand up to the earlier ones, please deliver that satisfaction that you tend to feel after reading something that is solidly strong writing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        BookId: 1,
        review: 'Without a doubt, one of the most brilliant books I have ever had the honor of reading. A brilliant homage to New York City, packed with all its love and harshness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        BookId: 1,
        review: 'A wonderfully inventive love letter to New York City that spans the multiverse. A big middle finger to Lovercraft with a lot of heart, creativity, smarts and humor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        BookId: 1,
        review: `I want you to understand that you're not ready for this book. Even if you've read Jemisin's other work, even if you've read The City Born Great, which is the starting place for this book`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 5,
        BookId: 1,
        review: 'Coming back to Jemisin, my expectations are extraordinarily high. After reading the short fiction that this novel was based on, it made me wonder and scheme and imagine where it would go.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        BookId: 2,
        review: 'Those words keep sounding in my head since I read this book. Gosh, probably the most haunting not to mention frightening book I\'ve ever read. 1984 should also be included in the horror genre.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        BookId: 2,
        review: `This book is far from perfect. Its characters lack depth, its rhetoric is sometimes didactic, its plot (well, half of it anyway) was lifted from Zumyatins We`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 5,
        BookId: 2,
        review: 'In George Orwell\'s 1984, Winston Smith is an open source developer who writes his code offline because his ISP has installed packet sniffers that are regulated by the government under the Patriot Act.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        BookId: 3,
        review: 'JK Rowling really knows how to write a great book, thats for sure! Although this wasn\'t my favorite book in the series, it definitely wasn\'t because it was bad.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        BookId: 3,
        review: `(A-) 83% | Very Good
        Notes: A bit bland at times, with less wonder and discovery than before, but finishes well with a more satisfying conclusion.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        BookId: 3,
        review: 'I love this book, of course I do, but the fact remains that this book prominently featured two of my most hated Harry Potter characters. Ginny Weasley and Dobby.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        BookId: 3,
        review: `I'm quite hyped to keep reading this series, The wizarding world is definitely an interesting one..`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 5,
        BookId: 3,
        review: "What can I say that hasn't been said before about this series? What words can do this book justice? I've felt at a loss on how to explain my feelings for these books as I've read them.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        BookId: 4,
        review: `Wow! Okay! I dont know what I have to feel about this book. Did I like it? Mostly I did. But as soon as I finish, I felt like something missing. `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        BookId: 4,
        review: 'This is one of those books thats hard to review because I think if read quickly it would come across as just a good story. Reading this more slowly its revealed that there is much more to this book than just entertainment.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        BookId: 4,
        review: `i absolutely adore reese witherspoon and enjoy her book club choices, but this one isnt quite the hit i was expecting it to be, unfortunately. `,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        BookId: 5,
        review: 'Africaville is the story of one family in three generations over time. As former slaves, the family settles in Nova Scotia. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        BookId: 5,
        review: 'I thought the premise of this sounded so interesting - three generations of the Sebolt family are highlighted in a small town in Nova Scotia, Canada. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        BookId: 5,
        review: 'I will start by saying that learning about this real Black community in Nova Scotia was refreshing. Multigenerational stories are my favorite but this one fell flat for me.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserBooks', null, {});
  }
};
