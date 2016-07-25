<?php
header('Content-type:application/docx');
header('Content-Disposition:attachment; filename="MANUEL,JOHNDAVE_RESUME.docx"');
readfile('resume/resumedocx.docx');
?>