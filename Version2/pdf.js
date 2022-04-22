function create_pdf(){
    var d = getData()

    var dd = {


    footer: function(currentPage, pageCount) { 
    return {text: 'Page ' + currentPage.toString() + ' of ' + pageCount, 
    italics:true, color:'grey',fontSize:10,margin: [15,10],alignment:'right'}},
    header: function(currentPage, pageCount, pageSize) {
    // you can apply any logic and return any valid pdfmake element

    return [
    { image:'logo', alignment:'right',width:100},
    ]
    },
    background: function (currentPage, pageSize) {
    return {
    table: {
    widths: [pageSize.width - 30],
    heights: [pageSize.height - 30],
    body: [['']]
    },
    margin: 10
    };
    },
    content: [		
        {
			style: 'tableExample',
			table: {
                widths: [150,150],
				body: [
					[{color:'grey',text:d.firstName + ' ' + d.lastName}, {color:'grey',text:d.email}],
					[{color:'grey',text:'Standing Leg: ' + d.standingLeg}, {color:'grey',text:'Working Leg: ' + d.workingLeg}],
                    [{color:'grey',text:d.sex}, {color:'grey',text:d.ethnicity}]
				]
			},
			layout: 'noBorders'
		}  ,  
        
        
    { text: '\n\nPatient Instructions\n\n', style: 'header',alignment:'center'},
    {text: 'Read all information on this document\n\n', alignment:'center',bold:true},
    {text: 'Ask your provider about any questions or concerns\n\n', alignment:'center',bold:true},
    {text: 'Pay special attention to all accommodations\n\n\n\n', alignment:'center',bold:true},


    {
    image: 'getReady', width:500,alignment: 'center'
    },
{ text: '\n\nAccommodations\n\n', style: 'header' },
    {
    ul: [d.plankExtra.accommodations,
        d.passeExtra.accommodations,
        d.ckcuestVar.accommodations,
        d.bolt.accommodations],pageBreak: 'after'
    
    }
    ,{ text: '\n\nTest Results\n\n', style: 'header',alignment:'left' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Test', style: 'tableHeader',bold:true, decoration: 'underline'}, { text: 'Measure', style: 'tableHeader',bold:true, decoration: 'underline'}, { text: 'Score', style: 'tableHeader',bold:true, decoration: 'underline'}, { text: 'Comments', style: 'tableHeader',bold:true, decoration: 'underline'}],
                        [{fontSize: 10, text: "Plank"},{fontSize:10, text:"Core Strength"},d.plank.score,{rowSpan: 3, text: d.rightSingleLegBridges.comments,fontSize:10}],
                        [{fontSize: 10, text: "Side Plank with Abduction(Right)"},{fontSize:10, text:"Hip & Core Strength"},d.leftSidePlank.score],
                        [{fontSize: 10, text: "Side Plank with Abduction(Right)"},{fontSize:10, text:"Hip & Core Strength"},d.rightSidePlank.score],
                        [{fontSize: 10, text: "Single Leg Releves(Right)"},{fontSize:10, text:"Calf Strength	"},d.rightSingleLegReleves.score,{rowSpan: 6, text: d.rightSingleLegBridges.comments,fontSize:10}],
                        [{fontSize: 10, text: "Single Leg Releves(Left)"},{fontSize:10, text:"Calf Strength	"},d.leftSingleLegReleves.score],
                        [{fontSize: 10, text: "Single Leg Bridges(Right)"},{fontSize:10, text:"Hamstring & Gluteal Strength	"},d.rightSingleLegBridges.score],
                        [{fontSize: 10, text: "Single Leg Bridges(Left)"},{fontSize:10, text:"Hamstring & Gluteal Strength	"},d.leftSingleLegBridges.score],
                        [{fontSize: 10, text: "Hop Test(Right)"},{fontSize:10, text:"Quadriceps & Gluteal Function	"},d.rightHopTest.score],
                        [{fontSize: 10, text: "Hop Test(Left)"},{fontSize:10, text:"Quadriceps & Gluteal Function	"},d.leftHopTest.score],
                        [{fontSize: 10, text: "Passe Releve Balance(Right)"},{fontSize:10, text:"Balance & Priopriception	"},d.rightPasseReleveBalance.score,{rowSpan: 4, text: d.rightSingleLegBridges.comments,fontSize:10}],
                        [{fontSize: 10, text: "Passe Releve Balance(Left)"},{fontSize:10, text:"Balance & Priopriception	"},d.leftPasseReleveBalance.score],
                        [{fontSize: 10, text: "Passe Flat Foot Balance - Eyes Closed (Right)"},{fontSize:10, text:"Balance & Priopriception	"},d.leftPasseFlatFootBalance.score],
                        [{fontSize: 10, text: "Passe Flat Foot Balance - Eyes Closed (Left)"},{fontSize:10, text:"Balance & Priopriception	"},d.leftPasseFlatFootBalance.score],
                        [{fontSize: 10, text: "CKCUEST"},{fontSize:10, text:"Shoulder Strength and Stability	"},d.ckcuestVar.score,{text:d.ckcuestVar.comments,fontSize:10}],
                        [{fontSize: 10, text: "BOLT Test"},{fontSize:10, text:"Cardiovascular Fitness	"},d.bolt.score,{text:d.bolt.comments,fontSize:10}],                              
                        ]
                    
                }
            }


    ,
    ],
    styles: {
    header: {
    bold: true,
    fontSize: 15,
    decoration: 'underline'
    }
    },
    defaultStyle: {
    fontSize: 12
    },
    images: {
        getReady:'https://drs-form-image-hosting.s3.amazonaws.com/getReady.png',
        logo:'https://drs-form-image-hosting.s3.amazonaws.com/logo.png'
    
    }
}
    pdfMake.createPdf(dd).open();
    }