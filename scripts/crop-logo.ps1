Add-Type -AssemblyName System.Drawing
$sourcePath = Join-Path $PSScriptRoot "..\src\assets\logo.png"
$outputPath = Join-Path $PSScriptRoot "..\src\assets\logo-header.png"
$source = [System.Drawing.Image]::FromFile($sourcePath)
$crop = New-Object System.Drawing.Rectangle(125, 410, 825, 570)
$bitmap = New-Object System.Drawing.Bitmap($crop.Width, $crop.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $crop.Width, $crop.Height)), $crop, [System.Drawing.GraphicsUnit]::Pixel)
$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
$source.Dispose()
