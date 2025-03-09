.gitignore  忽略文件

git config  配置git
    --system    应用于系统中所有用户所有仓库
    --global    应用于当前用户的所有仓库
        user.name   "name"  
        user.email  <email>
    --local (default)   应用于当前仓库
    --list  列出所有的信息
    --show-origin   <key>   原始信息

git help <verb> 获取帮助
git <verb> --help
git <verb> -h
man git-<verb>

git add <file/filePath>  精确地将内容添加到下一次提交中
git commit  提交文件
    -m "message"    提交注释
    -a  将所有已经跟踪过的文件都暂存起来并一起提交
git status  查看工作区文件状态
    -s / --short    简洁输出

git diff    查看工作区和暂存区之间文件的差别
    --staged / --cached    查看已暂存和最后一次提交的文件之间的差别
git difftool    调用软件输出diff分析的结果
    --tool-help 查看系统支持哪些Git diff软件

