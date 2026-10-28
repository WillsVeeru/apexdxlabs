import zipfile,xml.etree.ElementTree as E,json
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
with zipfile.ZipFile(r'C:\Users\VEERAIAH\Downloads\Apex_DX_Labs_Website_Legal_Policies.docx') as z: root=E.fromstring(z.read('word/document.xml'))
rows=[]
for p in root.findall('.//w:body/w:p',ns):
 parts=[]
 for el in p.iter():
  if el.tag=='{'+ns['w']+'}t':parts.append(el.text or '')
  elif el.tag=='{'+ns['w']+'}br':parts.append('\n')
  elif el.tag=='{'+ns['w']+'}tab':parts.append('\t')
 text=''.join(parts)
 if text.strip():rows.append(text)
with open('work/legal-paragraphs.json','w',encoding='utf-8') as f:json.dump(rows,f,ensure_ascii=False)
print('Extracted',len(rows),'paragraphs with original text and line breaks.')
