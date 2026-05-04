#If you somehow managed to see this, no you didn't. 
#don't tell anyone how i live...

from datetime import datetime
import xml.etree.ElementTree as ET

tree = ET.parse("feed.xml")
root = tree.getroot()

time = datetime.now()

title = f"{time.strftime("%A")[:3]}, {time.day}/{time.month}/{time.year}"
pdate = f"{time.strftime("%A")[:3]}, {time.day} {time.strftime("%B")[:3]} {time.year} {time.hour}:{time.minute}:{time.second} {datetime.now().astimezone().strftime("%z")}"

root.find("channel").find("lastBuildDate").text = pdate
tree.write("feed.xml")

xml = open("feed.xml","r")

txt = ''.join(xml.readlines())
txt = txt[:txt.find("</channel>")]

descvalue = '''
First time trying actual rss! Main page done but no mobile view.
            '''

l = [
"       <item>\n",
f"           <title>{title}</title>\n",
"           <link>https://jujuba83c.neocities.org</link>\n",
f"           <pubDate>{pdate}</pubDate>\n",
f"           <description>\n",f"{descvalue}\n","            </description>\n",
"       </item>\n\n",
"  </channel>\n",
"</rss>"
]

l = ''.join(l)

xml = open("feed.xml","w")
xml.writelines(txt+l)










