---
title: "git常用命令"
sidebar: true
sidebarDepth: 5
tags: 
- git
categories:
- 前端
isShowComments: false
---

<Boxx/>

[[toc]]



<h2>git常用指令</h2>

1、git显示全部分支

git branch //显示本地分支
git branch -a //显示远程分支
2、git创建分支

git branch 分支名
3、切换分支

git checkout 分支名
git checkout -b 分支名 若分支不存在，则创建它
4、删除分支

git branch -d 分支名
-d 当分支已经合并到主干后删除
-D无论如何都删除分支
5、合并分支

git merge 分支名
6、撤销前一次commit

git revert HEAD
7、撤销所有本地修改

git reset --hard

8、撤销所有本地到上一次修改

git reset --hard HEAD^

9、撤销上一次commit，将commit的文件撤回暂存区

git reset --soft HEAD^

要是想撤销到上上次，就是HEAD^^ ,以此类推。

git revert 是撤销某次操作，此次操作之前的commit都会被保留

git reset 是撤销某次提交，但是此次之后的修改都会被退回到暂存区

10、将此次更新文件并入到上次commit的记录中，不新添加commit

git commit -amend
二、git进阶
1、git tag

可以将某个具体的版本打上一个标签，这样你就不需要记忆复杂的版本号哈希值了，
 例如你可以使用
  'git tag revert_version bbaf6fb5060b4875b18ff9ff637ce118256d6f20'
  来标记这个被你还原的版本，那么以后你想查看该版本时，
  就可以使用 revert_version标签名，而不是哈希值了

2、git stash

把所有本地修改都放到暂存区
3、git stash pop

把git stash放到暂存区的代码拿出来
tips：

使用git stash保存当前的工作现场，
那么就可以切换到其他分支进行工作，或者在当前分支上完成其他紧急的工作，
比如修订一个bug测试提交。
如果一个使用了一个

git stash，

切换到一个分支，
且在该分支上的工作未完成也需要保存它的工作现场。再使用gitstash。那么stash 队列中就有了两个工作现场。
可以使用

git stash list。  查看stash队列。

如果在一个分支上想要恢复某一个工作现场怎么办：
先用

git stashlist
查看stash队列

。确定要恢复哪个工作现场到当前分支。
然后用

git stash pop stash@{num}。num就是你要恢复的工作现场的编号。
如果想要清空stash队列则使用
git stash clear。

同时注意使用git stashpop命令是恢复
stash队列中的stash@{0}即最上层的那个工作现场。
而且使用pop命令恢复的工作现场，其对应的stash在队列中删除。
使用git stash apply stash@{num}方法

除了不在stash队列删除外其他和git stashpop 完全一样。
常见问题：
1、提交合并失败
查看源文件
这里写图片描述

git迷惑之处在于它不知道是把hello world这行放在前面还是把报时功能这段放在前面。
修改冲突
这里写图片描述

重新提交
git commit -am "xxx"

2、解决gerrit冲突
解决远程冲突：
cd demo以分支为develop为例打开Gerrit有冲突的那个网址，如 http://192.168.1.33:8080/#/c/16/ 找到Download 如下命令，执行
git fetch ssh://minggui.li@192.168.1.33:29418/demo refs/changes/16/16/1 && git checkout FETCH_HEADgit checkout -b new_branch_namegit fetch origingit rebase origin/develop
修改冲突文件
git add .git rebase --continuegit push origin new_branch_name:refs/for/developgit checkout developgit branch -D new_branch_name不会产生新的changes记录，

将原changes记录重新review提交即可，

这时在原冲突机器上直接pull会本地冲突，

需要git reset --hard HEAD^
否则会出现
cannot do a partial commit during a merge.最后更新下代码git pu