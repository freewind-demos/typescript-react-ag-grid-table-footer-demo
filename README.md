TypeScript React "Ag Grid" Table Footer Demo
============================================

在一个aggrid的table的下方显示一个footer table，比如"Total"等，实际上并不是在一个table里添加footer，
而是把两个table上下放在一起，通过样式调整，让下面的table看起来像footer。

有几个需要注意的：

1. 两个table之间需要在`alignedGrids`互相引用，以便收到另一个table的事件：
    ```
    bodyGridOptions.alignedGrids!.push(footerGridOptions);
    footerGridOptions.alignedGrids!.push(bodyGridOptions);
    ```

2. 下方的table的`headerHeight`通常设为`0` 

3. 每个`AgGridReact`的外层wrapper中，最好不要放别的东西（比如工具按钮等），否则样式容易错，导致上下两个table有重叠。

```
npm install
npm run demo
```

It will open page on browser automatically.
