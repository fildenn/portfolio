<?php
header('Content-type:application/zip');
header('Content-Disposition:attachment; filename="PinPointerAPKfile.zip"');
readfile('files/app-debug.zip');
?>