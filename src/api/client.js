export const loginUser = (user, users) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const us = Object.entries(users);
      const u = us.filter((c) => c[1].email === user.email)[0];
      if (u) {
        if (u[1].password === user.password) {
          resolve({ status: 200, message: 'OK', id: u[0], keepLogged: user.keepLogged });
        } else {
          reject(new Error('BAD_PASSWORD'));
        }
      } else {
        reject(new Error('BAD_EMAIL'));
      }
    }, 2500);
  });
};

export const addUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({ user });
    }, 5000);
  });
};
