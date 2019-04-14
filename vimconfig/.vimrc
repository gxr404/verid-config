" set number
" nu是number的缩写，所以上面两个配置命令是完全等效的。
" 显示行号
" set nonu  "不显示行号，默认
set nu 

" set noic  "查找时考虑大小写，默认
set ic  " 查找时不考虑大小写

" 搜索时高亮显示被找到的字符，hls
set hlsearch  

" 突出显示当前行
set cursorline

" 显示括号匹配
set showmatch

" 解决插入模式下delete/backspce键失效问题
set backspace=2
" 开启语法高亮
syntax on

" set incsearch

" 启用鼠标
" 设定在任何模式下鼠标都可用，相当于 光标 跟在 鼠标走，
" 副作用是 ：选中该项 将无法用鼠标复制，鼠标 将失去的 右键的 复制功能
set mouse=a " window下貌似无效

set selection=exclusive
set selectmode=mouse,key

" Vim编辑器里默认是不启用鼠标的，也就是说不管你鼠标点击哪个位置，光标都不会移动。
" 通过以上设置就可以启动鼠标，不过对于高级玩家来说，用Vim就是为了解放双方不用鼠标，所以这个设置可以根据个人爱好选择。


"------------------------------设置编码---------------------------------
" fileencoding选项是Vim写入文件时采用的编码类型
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
" termencoding选项表示输出到终端时采用的编码类型
set termencoding=utf-8
" encoding选项用于缓存的文本、寄存器、Vim 脚本文件等
set encoding=utf-8

"------------------------------设置缩进---------------------------------
" 设置Tab长度为4空格
set tabstop=4
" 设置自动缩进长度为4空格
set shiftwidth=4
" 继承前一行的缩进方式，适用于多行注释
set autoindent
" 编辑时将所有 Tab 替换为空格，et
" set expandtab                      
" 注：该选项只在编辑时将 Tab 替换为空格， 如果打开一个已经存在的文件， 并不会将已有的 Tab 替换为空格。 
" 如果希望进行这样的替换的话， 可以使用这条命令“:retab”。
" 自动缩进，默认 打开
set autoindent                 


" 总是显示状态栏
set laststatus=2
" 显示光标当前位置
set ruler
set statusline=%F%m%r\ line=%L-%p%%\ type=%{&fileformat}\ ASCII=\%b,HEX=\%B,%l,%c%V
" 设置在状态行显示的信息如下：
"   %F              当前文件名
"   %m              当前文件修改状态
"   %r              当前文件是否只读
"   %Y              当前文件类型
"   %{&fileformat}  当前文件编码
"   %b              当前光标处字符的ASCII码值
"   %B              当前光标处字符的十六进制值
"   %l              当前光标行号
"   %c              当前光标列号
"   %V              当前光标虚拟列号(根据字符所占字节数计算)
"   %p              当前行占总行数的百分比
"   %%              百分号
"   %L              当前文件总行数



" history文件中需要记录的行数 
set history=100 



"------------------------------方法---------------------------------

" 获取当前文件名
function GetFileName()
    return bufname(winbufnr(winnr()))  "获取当前窗口缓冲区的名字
endfunction

" 获取当前时间，精确到分
function GetDateTime()
    return strftime("%Y-%m-%d %H:%M")
endfunction

" 用 ctrl+v 组合键，添加 如下 信息：
" nmap <C-V> i/************************************************************<CR>
"         \<CR>******* *   Function :     <CR>
"         \<CR>******* *     Time   :    ZaiLang<CR>
"         \<CR>******* *    Author  : <C-R>=GetDateTime()<ESC>    <CR>
"         \<CR>***************************************************************/<CR>
"         <ESC>



"------------------------------gvim 的界面设置---------------------------------
set guioptions-=T              " 去除工具栏
set guioptions-=m              " 去除顶部的菜单栏
set guioptions-=l              " 去除左边的滚动条
set guioptions-=L              " 去除左边的滚动条
set guioptions-=r              " 去除右边的滚动条
set guioptions-=R              " 去除右边的滚动条
set guifont=Consolas:h14       " 设置字体



"------------------------------添加文件头---------------------------------
source $VIM/g_copyright.vim

"------------------------------键盘映射---------------------------------
source $VIM/g_mapkey.vim

" ------------------------------vundle插件管理-------------------------------------

" 去除VI一致性,必须要添加
set nocompatible              
filetype off
" 此处规定Vundle的路径
set rtp+=$VIM/vimfiles/bundle/Vundle.vim/
call vundle#begin()
" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" Plugin 'mattn/emmet-vim'

" 这里是插件列表！
Bundle 'L9'
Bundle 'FuzzyFinder'
Bundle 'bufexplorer.zip'
Bundle 'Mark'
Bundle 'The-NERD-tree'
Bundle 'matrix.vim'
Bundle 'closetag.vim'
Bundle 'The-NERD-Commenter'
Bundle 'matchit.zip'
Bundle 'AutoComplPop'
Bundle 'jsbeautify'
Bundle 'YankRing.vim' 
Bundle 'vim-scripts/khaki.vim' 
Bundle 'ervandew/supertab'
" emmet
Bundle 'mattn/emmet-vim'
" 彩虹括号增强版
" https://github.com/luochen1990/rainbow/blob/master/README_zh.md
Bundle 'luochen1990/rainbow'
" 你的所有插件需要在下面这行之前
call vundle#end()            " 必须
filetype plugin indent on   " required! 

"------------------------------插件配置---------------------------------
" luochen1990/rainbow
let g:rainbow_active = 1 "0 if you want to enable it later via :RainbowToggle


"------------------------------插件键盘映射---------------------------------
" emmet插件
" let g:user_emmet_leader_key='<C-Y>' " 默认 ctrl+y+, 
let g:user_emmet_leader_key='<Leader><Leader>' " 修改为 laeader+laeader+, //空格+空格+,

