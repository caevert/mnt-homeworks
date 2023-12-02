#!/usr/bin/python3
import os.path
path = r'./New_file'
content = 'Hello World'
if os.path.exists(path):
    print('file already exists')
else:
    # create a file
    with open(path, 'w') as fp:
        # uncomment if you want empty file
        fp.write(content)