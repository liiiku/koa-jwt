fetch('//api.github.com/users')
  .then(res => {
    return res.json();
  })
  .then(json => {
    console.log(json);
    fetch('//api.github.com/users/liiiku')
      .then(res => {
        return res.json();
      })
      .then(json2 => {
        console.log(json2);
      })
  })

// await 后面promise函数 await就是等待一个异步执行的结果咯
(async () => {
  const res = await fetch('//api.github.com/users');
  const json = await res.json();
  console.log(json);
  const res2 = await fetch('//api.github.com/users/liiiku');
  const json2 = await res2.json();
  console.log(json2);
})()