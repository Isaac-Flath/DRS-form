from datetime import datetime
from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image,  Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from io import BytesIO
import boto3

def lambda_handler(event, context):
    obj = event
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(name='Header_CENTER',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_CENTER,
                              fontSize=16,
                              leading=13,
                              textColor=colors.black,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.5*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))

    styles.add(ParagraphStyle(name='Header_LEFT',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_LEFT,
                              fontSize=16,
                              leading=13,
                              textColor=colors.black,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.25*inch,
                              spaceBefore=0.25*inch,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))



    styles.add(ParagraphStyle(name='Bold_CENTER',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_CENTER,
                              fontSize=12,
                              leading=13,
                              textColor=colors.black,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.1*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))


    styles.add(ParagraphStyle(name='Normal_LEFT',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_LEFT,
                              fontSize=12,
                              leading=13,
                              textColor=colors.black,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.1*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))

    styles.add(ParagraphStyle(name='Table_LEFT',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_LEFT,
                              fontSize=8,
                              leading=13,
                              textColor=colors.black,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.1*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))

    styles.add(ParagraphStyle(name='Table_LEFT_GREY',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_LEFT,
                              fontSize=8,
                              leading=13,
                              textColor=colors.lightslategray,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.1*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))


    styles.add(ParagraphStyle(name='Blue_LEFT',
                              parent=styles['Normal'],
                              fontName='Helvetica',
                              wordWrap='LTR',
                              alignment=TA_LEFT,
                              fontSize=12,
                              leading=13,
                              textColor=colors.blue,
                              borderPadding=0,
                              leftIndent=0,
                              rightIndent=0,
                              spaceAfter=0.1*inch,
                              spaceBefore=0,
                              splitLongWords=True,
                              spaceShrinkage=0.05,
                              
                              ))

    buff = BytesIO()

    doc = SimpleDocTemplate(buff, pagesize=letter,
                            rightMargin=72,leftMargin=72,
                            topMargin=12,bottomMargin=18)

    elements = []

    im = Image("logo.png", 1*inch, .5*inch,hAlign='RIGHT')
    elements.append(im)

    data= [
        [obj['firstName'] + ' ' + obj['lastName'], obj['email']],
        [f"Age: {obj['age']}",f"Leg Length: {obj['legLength']}"],
        [f"Standing Leg: {obj['standingLeg']}", f"Working Leg: {obj['workingLeg']}"],
        [f"Sex: {obj['sex']}", f"Ethnicity: {obj['ethnicity']}"],
        [f"Test Date: {obj['testingdate']}",f"Test Administrator: {obj['testadministrator']}"],
        [f"3 Month Injury: {obj['threeMonthInjury']}",f"5 Year Injury: {obj['fiveYearInjury']}"]]


    t=Table(data,2*[2*inch], 6*[0.2*inch],hAlign='LEFT')
    t.setStyle(TableStyle([('TEXTCOLOR',(0,0),(5,5),colors.grey)]))
    elements.append(t)


    im = Image("getReady.png", 6*inch, 3*inch,hAlign='CENTER')
    elements.append(im)

    tx = Paragraph('<u><b>Patient Instructions</b></u>',style=styles['Header_CENTER'])
    elements.append(tx)

    tx = Paragraph('<b>Read all information on this document</b>',style=styles['Bold_CENTER'])
    elements.append(tx)

    tx = Paragraph('<b>Ask your provider about any questions or concerns</b>',style=styles['Bold_CENTER'])
    elements.append(tx)

    tx = Paragraph('<b>Pay special attention to all recommendations</b>',style=styles['Bold_CENTER'])
    elements.append(tx)

    # Recomendations
    tx = Paragraph('<u><b>Recommendations:</b></u>',style=styles['Header_LEFT'])
    elements.append(tx)

    for o in obj.items():
        if type(o[1])==dict:
            a = o[1].get('accommodations',False)
            if a == False: continue
            else: 
                elements.append(Paragraph(a,style=styles['Normal_LEFT'],bulletText='-'))

    # Scores
    tx = Paragraph('<u><b>Test Results:</b></u>',style=styles['Header_LEFT'])
    elements.append(tx)

    tx = Paragraph(f"Dance Ready Score = {obj['DRSTotal']}",style=styles['Blue_LEFT'])
    elements.append(tx)

    tx = Paragraph(f"Left Side Score = {obj['DRSLeft']}",style=styles['Blue_LEFT'])
    elements.append(tx)

    tx = Paragraph(f"Right Side Score = {obj['DRSRight']}",style=styles['Blue_LEFT'])
    elements.append(tx)

    elements.append(PageBreak())


    data = [['<font size=12><b>Test</b></font>','<font size=12><b>Meaure</b></font>','<font size=12><b>Score</b></font>','<font size=12><b>Comments</b></font>'],
            
            ['Plank','Core Strength',obj['plank']['score'],obj['rightSingleLegBridges']['comments']],
            ['Side Plank with Abduction','Hip & Core Strength',f"L: {obj['leftSidePlank']['score']} <br/>R: {obj['rightSidePlank']['score']}"],

            
            ['Single Leg Releves','Calf Strength',f"L: {obj['leftSingleLegReleves']['score']} <br/>R: {obj['rightSingleLegReleves']['score']}",obj['leftWallSitTest']['comments']],
            ['Single Leg Bridges','Hamstring & Gluteal Strength',f"L: {obj['leftSingleLegBridges']['score']} <br/>R: {obj['rightSingleLegBridges']['score']}"],
            ['Hop Test','Quadricepts & Gluteal Function',f"L: {obj['leftHopTest']['score']} <br/>R: {obj['rightHopTest']['score']}"],
            ['Wall Sitn','Lower Body Muscular Endurance',f"L: {obj['leftWallSitTest']['score']} <br/>R: {obj['rightWallSitTest']['score']}"],

            # ['Passe Releve Balance','Balance & Proprioception',f"L: {obj['leftPasseReleveBalance']['score']} <br/>R: {obj['rightPasseReleveBalance']['score']}",   obj['rightPasseFlatFootBalance']['comments']],
            ['Passe Flat Foot Balance - Eyes Closed','Balance & Proprioception',f"L: {obj['leftPasseFlatFootBalance']['score']} <br/>R: {obj['rightPasseFlatFootBalance']['score']}",obj['rightPasseFlatFootBalance']['comments']],
            
            
            ['CKCUEST',    'Flexibility',    f"{obj['ckcuestVar']['score']}",   obj['ckcuestVar']['comments']],
            ['Sit and Reach ',    'Range of Motion ',    f"{obj['sitAndReachTest']['score']}",   obj['sitAndReachTest']['comments']],
            
            
            ['Hip Turnout - Disc (HTOD)',    'Range of Motion',    f"L: {obj['leftHtod']['score']} <br/>R: {obj['rightHtod']['score']}",   obj['leftHtod']['comments']],
            ['Hip Turnout - Floor (HTOD)',    'Range of Motion',    f"L: {obj['leftHtof']['score']} <br/>R: {obj['rightHtof']['score']}"],

           
           
           ]

    def apply_style(data,style):
        return [[Paragraph(str(o),style=style) for o in row] for row in data]
        


    t=Table(apply_style(data,styles['Table_LEFT']),
            colWidths=[1.5*inch,1.5*inch,0.75*inch,3*inch], 
            rowHeights=[0.4*inch,
                        0.8*inch,0.8*inch,
                       0.55*inch,0.55*inch,0.55*inch,0.55*inch,
                       1.1*inch,
                        1.2*inch,
                        0.95*inch,
                        0.6*inch,0.6*inch

                       ],
            hAlign='LEFT', vAlign='CENTER')#,
            
            

    t.setStyle(TableStyle([('FONTNAME',(0,0),(-1,0),'Courier-Bold'),
                           ('LINEBELOW',(0,0),(-1,0),1,colors.blue),
                           ('LINEBELOW',(0,1),(-1,-1),1,colors.lightslategrey),
                           ('ALIGN', (-1, 1), (-1, -1), "LEFT"),
                            ('VALIGN', (0,0), (-1, -1), 'CENTER'),

                           ('SPAN',(3,1),(3,2)),
                            ('SPAN',(3,3),(3,6)),
                            # ('SPAN',(3,7),(3,8)),
                            ('SPAN',(3,10),(3,11)),
     
                          
        
                          ]))
                          
                          
    elements.append(t)

    data= [
        [Image("Logo2.png", 1*inch, .5*inch,hAlign='RIGHT'),
         Paragraph('Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS<br/>Dance Ready Project: www.danceready.org',style=styles['Table_LEFT_GREY'])
    ]]

    t=Table(data,[1.25*inch,5*inch],[1*inch],hAlign='LEFT')
    elements.append(t)


    # write the document to disk
    doc.build(elements)


    pdf_value = buff.getvalue()
    buff.close()    
    #session = boto3.Session(profile_name='drs')
    #s3 = session.resource('s3')
    s3 = boto3.resource('s3')
    
    generation_ts = datetime.now()
    s3.Object('drs-pdf-storage', f"{obj['firstName']}{obj['lastName']}_{generation_ts:%Y%m%dT%H%M%S}.pdf").put(Body=pdf_value)
#     time.sleep(0.5)
#     Call_Email_lambda(obj['EmailAddress'],generation_ts)
    return 'Complete'
