const users=[]
const login = async (req, res) => {
  const {email,password} = req.body
  const user=users.find((user) => user.email==email)
  if(!user) return res.redirect("/api/register")

  const compare=users.find((compare) => user.password==password)
  
  if(!compare) return res.redirect("/api/register")

  res.redirect("/api")
};

const register = async (req, res) => {
  const {email,fullname,password} = req.body
  users.push({email,fullname,password})
  res.redirect("/api")
};

const addvideo = async (req, res) => {
  console.log(req.body);
};


module.exports = {
  login,
  register,
  addvideo
};
