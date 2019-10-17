from os import listdir, remove
from os.path import join

template_file_path = '/home/raymonddevries/WebstormProjects/Nookachamps/nookachamps/imagetemplate.js'
image_path = '/home/raymonddevries/WebstormProjects/Nookachamps/nookachamps/src/images/carousel'
js_file_path = '/home/raymonddevries/WebstormProjects/Nookachamps/nookachamps/src/components/images/carousel/'

width = 600

for file in listdir(js_file_path):
    abs_path = join(js_file_path, file)
    remove(abs_path)


with open(template_file_path, 'r') as template_file:
    template_content = template_file.read()

for file in listdir(image_path):
    new_file_content = template_content
    abs_path = join(image_path, file)
    filename_no_extension = file.split('.')[0]
    inserted_filepath = 'carousel/' + file
    new_file_path = js_file_path + filename_no_extension + '.js'

    new_file_content = new_file_content.replace('##IMAGEPATH##', inserted_filepath)
    new_file_content = new_file_content.replace('##WIDTH##', str(width))
    new_file_content = new_file_content.replace('Imagetemplate', filename_no_extension)

    with open(new_file_path, 'x') as new_file:
        new_file.write(new_file_content)
