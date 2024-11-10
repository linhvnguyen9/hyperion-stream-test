import {HyperionStreamClient} from "@eosrio/hyperion-stream-client";

console.log('Hello, TypeScript');

(async () => {

const client = new HyperionStreamClient({
    endpoint: 'https://hyperion.paycash.online',
    debug: true,
    libStream: false
});

client.connect()

client.on('connect', () => {
console.log('connected!');
});
  client.setAsyncDataHandler(async (data) => {
      console.log(data);
      console.log(data.content.receipts);
      // process incoming data, replace with your code
      // await processSomethingHere();
  })
  await client.connect();
  client.streamActions({
    contract: '',
    action: '',
    account: 'myacc.gm',
    start_from: 0,
    read_until: 0,
    filters: [],
  });
})()