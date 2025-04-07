### Misc
git 的存储方式 —— 快照流，对于未更改文件，存储一个链接指向之前的文件

**三种状态**：
1. modified
2. staged
3. committed
对应**三个位置**：工作区、暂存区、git仓库

**.gitignore**


#### git config
--local     .git/config             本仓库配置
--global    /config/git/config      当前用户配置
--system    /etc/gitconfig          所有用户配置
--list      以列表形式显示信息
--show-origin   显示原始值

user.name    "example"  
user.email  jsdfsdf@example.com
core.editor     example
alias.<new> <old>                   别名

#### 获得帮助
git help <verb>
git verb -help / -h
man git-<verb>

#### git init                       初始化仓库
#### git clone <url> <newRepoName>  克隆远程仓库
#### git status                     查看文件状态
-s | --short                        缩短信息
#### git diff                       查看具体修改 (工作区和暂存区 之间的差别)
--staged | --cached                 暂存 和 最后一次提交 之间的差别
git difftool        调用图形化软件分析
#### git add <file>                 跟踪新文件 | 暂存文件更新
#### git commit                     提交暂存区文件进入仓库
-m "message"                        提交说明
-a                                  自动将所有已跟踪文件暂存并提交
--amend                             修复提交（提交现有暂存区，代替上一次提交）
#### git rm
-f 
#### git mv file_from file_to       更改文件名
#### git log                        查看提交历史
-p | --patch                        以补丁形式显示每次提交差异
--stat                              显示简略统计信息
--pretty= ?                         以不同于默认格式的方式显示
? = oneline
? = short
? = full
? = fuller
? = format:"..."
--graph             
-<n>                                仅显示最近的 n 条提交。
--since, --after                    仅显示指定时间之后的提交。
--until, --before                   仅显示指定时间之前的提交。
--author                            仅显示作者匹配指定字符串的提交。
--committer                         仅显示提交者匹配指定字符串的提交。
--grep                              仅显示提交说明中包含指定字符串的提交。
-S                                  仅显示添加或删除内容匹配指定字符串的提交。
#### git reset  HEAD -- <file>         取消暂存 file
#### git checkout
-- <file>                           用最近一次的提交代替本地版本
#### git remote                     列出你指定的所有远程仓库的简写
-v                                  显示需要读写远程仓库使用的git保存的简写和url

add <shortname> <url>               添加新的远程仓库(url)，并指定 简写(shortname)
show <remote>                       显示更多的远程仓库信息
rename <oldName> <newName>
remove <remote> | rm <remote>
#### git fetch <remote>             抓取远程仓库，下载本地仓库没有的数据
#### git push <remote> <branch>     将 branch分支 推送到 远程仓库
#### git tag
#### git show 