/**
 * stdin, stdout are the methods available on process object.
 * process object is globally available - it provides information and control of nodejs process.
 * stderr is a reserved method for stdout. It is used to output errors/warnings.
 * 
 * All I/o channels emit 'data' event whenever a chunk of data is received.
 * 
 * Here, we've attached a listener on stdin for that 'data' event.
 * As soon as the data buffer is received we're processing the data in our own way.
 * 
 * In this case, we're outputing the data using 'stdout' & 'stderr'.
 */
process.stdin.on('data', (data) => {

  const name = data.toString().trim().toUpperCase();

  if(!name) {
    process.stderr.write(`Name must not be empty!\n`)
  } else {
    process.stdout.write(`Hello ${name}\n`);
  }
});

/**
 * Whenever we press 'CTRL + c' on our keyboard, it emits 'SIGNINT' (signal interrupt) event.
 * Here, we're listening to that event and exiting the nodejs process manually.
 * 
 * @note
 * If we haven't had attached the listener for 'SIGINT', the exit would have happened automatically.
 */
process.on('SIGINT', (d) => {
  console.log('Exiting nodejs process!');
  process.exit();
})

/**
 * @note 
 * Console APIs - console.log, console.err uses stdout, stderr under the hood to output the data.
 */