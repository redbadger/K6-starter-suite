# !/bin/bash

# start the server and send the console and error logs on nodeserver.log
npm start > nodeserver.log 2>&1 &

# keep waiting until the server is started 
# (in this case wait for mongodb://localhost:27017/app-test to be logged)
while ! grep -q "localhost:3003/" nodeserver.log
do
  sleep .1
done
echo -e "server has started running\n"
exit 0