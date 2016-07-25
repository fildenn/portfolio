<?php
header('Content-type:application/zip');
header('Content-Disposition:attachment; filename="MANUEL,JOHNDAVE_RESUME.zip"');
readfile('resume/resume.zip');
?>