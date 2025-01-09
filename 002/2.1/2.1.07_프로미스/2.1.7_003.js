// (2.14)

/* // 첫 번째 코드: 콜백 기반
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
      if (err) {
        return console.error(err);
      }
      user.name = 'zero';
      user.save((err) => { // 두 번째 콜백
        if (err) {
          return console.error(err);
        }
        Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
          // 생략
        });
      });
    });
  }
  */


  // 두 번째 코드: Promise 기반

  function findAndSaveUser(Users) {
    Users.findOne({})
      .then((user) => {
        user.name = 'zero';
        return user.save();
      })
      .then((user) => {
        return Users.findOne({ gender: 'm' });
      })
      .then((user) => {
        // 생략
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  