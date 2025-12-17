// id -> remote get user's name -> remote get user's repos

console.log("before");

const getUser = (id, cbFn) => {
  setTimeout(() => {
    //remote job: get user's name
    console.log(`Get user data of id:${id} from db`);
    cbFn({ id: id, name: "David" });
  }, 2000);
};

const getRepos = (userName, cbFn) => {
  setTimeout(() => {
    //remote job: get user's repo by userName
    console.log(`Get ropes data of user:${userName} from GitHub`);
    cbFn(["repo1", "repo2", "repo3"]);
  }, 3000);
};

const cbFn2 = (repos) => {
  console.log(`user's repos:`, repos);
};

const cnFn1 = (user) => {
  console.log(`user data from remote: id: ${user.id}, name: ${user.name}`);
  getRepos(user.name, cbFn2);
}

getUser(1, cnFn1);// async: 交辦