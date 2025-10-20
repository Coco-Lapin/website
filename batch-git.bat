@echo off
cd /d "%~dp0"   REM Place le terminal dans le dossier du script

echo Ajout de tous les fichiers...
git add .

set /p message="Ajout du portfolio personnel : "
git commit -m "%message%"

echo Push vers GitHub...
git push

pause
