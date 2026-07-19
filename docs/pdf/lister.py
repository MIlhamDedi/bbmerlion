import os
root_dir = "/Users/milhamdedi/Documents/tech/src/workspace/sss/bbmerlion/public/pdf"

file_set = []

for dir_, _, files in os.walk(root_dir):
    for file_name in files:
        rel_dir = os.path.relpath(dir_, root_dir)
        rel_file = os.path.join(rel_dir, file_name)
        file_set.append(rel_file)

for a in sorted(file_set):
    print(a)