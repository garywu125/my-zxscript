$.verbose = false

await $`echo 1; sleep 1; echo 2; sleep 1; echo 3;`
  .pipe(process.stdout)


await $`echo "one"; sleep 1; echo "two"; sleep 1; echo "three";`
  .pipe(process.stdout)  