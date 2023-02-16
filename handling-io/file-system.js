/**
 * Here we're importing:
 * 'fs' module - it provides access to the core nodejs file system apis
 * 'path' modules - it helps working with the directory and file paths
 */
const fs = require('fs');
const path = require('path');

/**
 * 'path.join' - makes the path by joining the parameters provided with a seperator based on OS (\ for unix and / for windows)
 * 'process.cwd' - gets the path of current working directory of nodejs. In this case - /node-cookbook
 * 
 * Final path created here - '<system-path>/node-cookbook/handling-io/hello.txt'
 */
const filePath = path.join(process.cwd(), 'handling-io/hello.txt');

/**
 * @note 
 * We're using sync versions here, this will block the thread until the entire read/write operation is completed.
 * To avoid this, use async versions of these functions.
 * 
 * 'readFileSync' - takes in 2 parameters - filePath and encoding(optional). 
 *  If no encoding is provided, it returns a buffer which then needs to be manipulated.
 */
let content = fs.readFileSync(filePath, 'utf8');
process.stdout.write(`File content: ', ${content}`);

content = content.toUpperCase();

/**
 * 'writeFileSync' - takes in 2 parameters - filePath and content that needs to be written. 
 *  returns 'void'
 */
const res = fs.writeFileSync(filePath, content);
process.stdout.write('File updated successfully!');

process.exit();