+++
title = "Markdown"
categories = ["分类1"]
tags = ["tag1"]
slug = "md"
date = 2024-03-01
draft = true

featuredImage = "https://www.dmoe.cc/random.php"
featuredImagePreview = "https://www.dmoe.cc/random.php"

[params]
  math = true
+++

This is a markdown test 

<!--more-->


# An h1 header
# Welcome to Blog! 欢迎来到Blog!
 
## 1. 排版
 
**粗体** *斜体* 
 
~~这是一段错误的文本。~~
 
引用:
 
> 引用Blog官方的话, 为什么要做Blog, 原因是...
 
有充列表:
 1. 支持Vim
 2. 支持Emacs
 
无序列表:
 
 - 项目1
 - 项目2
 
 
## 2. 图片与链接
 
图片:
![Blog](https://www.dmoe.cc/random.php)
链接:
 
[这是去往Blog官方博客的链接](http://Blog.Blog.com)
 
## 3. 标题
 
以下是各级标题, 最多支持5级标题
 
```
# h1
## h2
### h3
#### h4
##### h4
###### h5
```
 
## 4. 代码
 
示例:
 
    function get(key) {
        return m[key];
    }
    
代码高亮示例:
 
``` javascript
/**
* nth element in the fibonacci series.
* @param n >= 0
* @return the nth element, >= 0.
*/
function fib(n) {
  var a = 1, b = 1;
  var tmp;
  while (--n >= 0) {
    tmp = a;
    a += b;
    b = tmp;
  }
  return a;
}
 
document.write(fib(10));
```
 
```python
class Employee:
   empCount = 0
 
   def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.empCount += 1
```
 
# 5. Markdown 扩展
 
Markdown 扩展支持:
 
* 表格
* 定义型列表
* Html 标签
* 脚注
* 目录
* 时序图与流程图
* MathJax 公式
 
## 5.1 表格
 
Item     | Value
-------- | ---
Computer | \$1600
Phone    | \$12
Pipe     | \$1
 
可以指定对齐方式, 如Item列左对齐, Value列右对齐, Qty列居中对齐
 
| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | \$1600 |  5    |
| Phone    | \$12   |  12   |
| Pipe     | \$1    |  234  |
 
 
## 5.2 定义型列表
 
名词 1
:   定义 1（左侧有一个可见的冒号和四个不可见的空格）
 
代码块 2
:   这是代码块的定义（左侧有一个可见的冒号和四个不可见的空格）
 
        代码块（左侧有八个不可见的空格）
 
## 5.3 Html 标签
 
支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：
 
    <table>
        <tr>
            <th rowspan="2">值班人员</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
        </tr>
        <tr>
            <td>李强</td>
            <td>张明</td>
            <td>王平</td>
        </tr>
    </table>
 
 
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>
 
**提示**, 如果想对图片的宽度和高度进行控制, 你也可以通过img标签, 如:
 
<img src="https://www.dmoe.cc/random.php" width="50px" />
 
## 5.4 脚注
 
Blog[^footnote]来创建一个脚注
  [^footnote]: Blog是xxx.
 
## 5.5 目录
 
通过 `[TOC]` 在文档中插入目录, 如:
 
[TOC]
 
## 5.6 时序图与流程图
 
```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!

流程图:
 
```flow
st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?
 
st->op->cond
cond(yes)->e
cond(no)->op
```
 
> **提示:** 更多关于时序图与流程图的语法请参考:
 
> - [时序图语法](http://bramp.github.io/js-sequence-diagrams/)
> - [流程图语法](http://adrai.github.io/flowchart.js)
 
## 5.7 KaTex 公式
 
$ 表示行内公式： 
 
一个很简洁的方程式 \(\overbrace{a+b+c}^{\text{note}}\) 来表达。

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
 
```
$$表示整行公式：
```

$$\sum_{i=1}^n a_i=0$$

$$f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$

$$\sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k}$$

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

#### 更复杂的公式:
$$
f(n) = 
    \begin{cases}
        \frac{n}{2}, & \text{if $n$ is even} \\\\
        3n+1,        & \text{if $n$ is odd} \\\\
    \end{cases}
$$


访问 [KaTex](https://katex.org/docs/api) 参考更多使用方法。