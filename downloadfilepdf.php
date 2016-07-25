<?php
header('Content-type:application/pdf');
header('Content-Disposition:attachment; filename="MANUEL,JOHNDAVE_RESUME.pdf"');
readfile('resume/resumedocx.pdf');
?>