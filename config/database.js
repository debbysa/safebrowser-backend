const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://deby:deby@cluster0-shard-00-00-wfp3x.mongodb.net:27017,cluster0-shard-00-01-wfp3x.mongodb.net:27017,cluster0-shard-00-02-wfp3x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("connected"))
  .catch(err => console.log("err : " + err));
