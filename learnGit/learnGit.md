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

git add <file>  添加文件进入暂存区
git commit  提交文件
    -m "message"    提交注释
git status  查看工作区文件状态