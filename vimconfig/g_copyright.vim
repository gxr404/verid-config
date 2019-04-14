function MyCopy(type, position) 
    if a:position == 'start'
        let line_num = line(".")
    else
        let line_num = a:position
    endif
    if a:type == "class" 
        call setline(line_num,"/**") 
        call append(line_num+0," * $RCSfile$ ".expand("%")) 
        call append(line_num+1," * @touch date ".strftime("%c")) 
        call append(line_num+2," * @author Rambo Lee <blabalbal#babab>") 
        call append(line_num+3," * @package ") 
        call append(line_num+4," * @link http://lanbolee.com/") 
        call append(line_num+5," * @Copyright © ".strftime("%Y")." All rights reserved.") 
        call append(line_num+6," * @license http://www.zend.com/license/3_0.txt PHP License 3.0") 
        call append(line_num+7," * @version $Id$ ") 
        call append(line_num+8," * @filesource ") 
        call append(line_num+9," */") 
    else 
        if a:type == "func" 
            call setline(line_num," /**") 
            call append(line_num+0," * @access ") 
            call append(line_num+1," * @author Rambo Lee <blabalbal#babab>") 
            call append(line_num+2," * @param") 
            call append(line_num+3," * @return") 
            call append(line_num+4," */") 
        else 
            call setline(line_num," /**") 
            call append(line_num+0," * @access ") 
            call append(line_num+1," * @var ") 
            call append(line_num+2," */") 
        endif 
    endif
endfunction

" ctrl+i
map <C-I> <Esc>:call MyCopy("class",'start')<CR><Esc>10j$a
" df
map df <Esc>:call MyCopy("func", 'start')<CR><Esc>
" dv
map dv <Esc>:call MyCopy("var", 'start')<CR><Esc>
