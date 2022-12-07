query=$1
parentDir=$(pwd)

echo -n $query
echo -n $parentDir

file-to-clipboard() {
  osascript \
    -e 'on run args' \
    -e 'set the clipboard to POSIX file (first item of args)' \
    -e 'return the clipboard' \
    -e end \
    "$@"
}

file-to-clipboard $query