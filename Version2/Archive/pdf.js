function create_pdf() {
    var d = getData()

    var dd = {


        footer: function (currentPage, pageCount) {
            return {
                text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                italics: true, color: 'grey', fontSize: 10, margin: [15, 10], alignment: 'right'
            }
        },

        header: function (currentPage, pageCount, pageSize) {
            // you can apply any logic and return any valid pdfmake element



            return { image: 'logo', alignment: 'right', width: 100 }
        },

        // background: function (currentPage, pageSize) {
        //     return {
        //         table: {
        //             widths: [pageSize.width - 30],
        //             heights: [pageSize.height - 30],
        //             body: [['']]
        //         },
        //         margin: 10
        //     };
        // },
        content: [
            {
                style: 'headerTable',
                table: {
                    widths: [150, 150],
                    body: [
                        [{ text: d.firstName + ' ' + d.lastName }, { text: d.email }],
                        [{ text: 'Standing Leg: ' + d.standingLeg }, { text: 'Working Leg: ' + d.workingLeg }],
                        [{ text: 'Sex: ' + d.sex }, { text: 'Ethnicity: ' + d.ethnicity }],
                        [{ text: 'Test Date: ' + d.testingdate }, { text: 'Test Administrator: ' + d.testadministrator }],
                        [{ text: '3 Month Injury: ' + d.threeMonthInjury }, { text: '5 Year Injury: ' + d.fiveYearInjury }],

                    ]
                },
                layout: 'noBorders'
            },





            {
                image: 'getReady', width: 500, alignment: 'center'
            },

            { text: '\n\nPatient Instructions\n\n', style: 'header', alignment: 'center' },
            { text: 'Read all information on this document\n\n', alignment: 'center', bold: true },
            { text: 'Ask your provider about any questions or concerns\n\n', alignment: 'center', bold: true },
            { text: 'Pay special attention to all recommendations\n\n\n\n', alignment: 'center', bold: true },

            { text: '\n\nRecommendations\n\n', style: 'header' },
            {
                ul: [d.plankExtra.accommodations,
                d.passeExtra.accommodations,
                d.ckcuestVar.accommodations,
                d.bolt.accommodations], pageBreak: 'after'

            }

            , { text: 'Test Results:\n\n', style: 'header', alignment: 'center' }
            , {
                style: 'headerTable',
                color: 'blue',
                fontSize: 12,
                table: {
                    alignment: 'center',
                    widths: [175, 175, 175],
                    body: [
                        ['Dance Ready Score = ' + d.DRSTotal, 'Left Side Score = ' + d.DRSLeft, 'Right Side Score = ' + d.DRSRight]
                    ]
                },
                layout: 'noBorders'
            },

            {
                style: 'resultTable',
                table: {
                    alignment: 'center',
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Test', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Measure', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Score', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Comments', style: 'tableHeader', bold: true, decoration: 'underline' }],
                        [{ text: "Plank" }, { text: "Core Strength" }, d.plank.score, { rowSpan: 2, text: d.rightSingleLegBridges.comments }],
                        [{ text: "Side Plank with Abduction" }, { text: "Hip & Core Strength" }, { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSidePlank.score, d.rightSidePlank.score]] } }],

                        [{ text: "Single Leg Releves" }, { text: "Calf Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegReleves.score, d.rightSingleLegReleves.score]] } },
                        { rowSpan: 3, text: d.rightSingleLegBridges.comments }],



                        [{ text: "Single Leg Bridges" }, { text: "Hamstring & Gluteal Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegBridges.score, d.rightSingleLegBridges.score]] } }],


                        [{ text: "Hop Test" }, { text: "Quadriceps & Gluteal Function	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHopTest.score, d.rightHopTest.score]] } }],



                        [{ text: "Passe Releve Balance" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseReleveBalance.score, d.rightPasseReleveBalance.score]] } },
                        { rowSpan: 2, text: d.rightSingleLegBridges.comments }],


                        [{ text: "Passe Flat Foot Balance - Eyes Closed" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseFlatFootBalance.score, d.rightPasseFlatFootBalance.score]] } }],



                        [{ text: "CKCUEST" }, { text: "Shoulder Strength and Stability	" }, d.ckcuestVar.score, { text: d.ckcuestVar.comments }],
                        [{ text: "BOLT Test" }, { text: "Cardiovascular Fitness	" }, d.bolt.score, { text: d.bolt.comments }],
                    ]

                }
            },
            {
                columns: [
                    {
                        width: '*',
                        image: 'logo2',
                        width: 100
                    },
                    {
                        width: 'auto',
                        text: '\nPrepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS\n\nDance Ready Project: www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', link: 'www.danceready.org'
                    },


                ]
            }
            // {

            //     table: {
            //         alignment: 'center',
            //         body: [
            //             [{ text: 'Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS}:\n\n', alignment: 'left', fontSize: 10, color: 'grey' }],
            //             [{ text: 'Dance Ready Project: www.danceready.org', link: 'www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', }]

            //             ,
            //         ]
            //     },
            //     style: 'headerTable',
            //     layout: 'noBorders'

            // }
            ,],

        styles: {
            resultTable: {
                margin: [0, 5, 0, 15],
                fontSize: 10
            }, headerTable: {
                margin: [0, 5, 0, 15],
                fontSize: 10,
                color: 'grey',

            },
            header: {
                bold: true,
                fontSize: 15,
                decoration: 'underline'
            }
        }
        ,
        defaultStyle: {
            fontSize: 12,
        },

        images: {
            logo2: 'https://s3.us-east-1.amazonaws.com/contents.newzenler.com/9238/library/5fca8b87470cb_1607109511_official-drp-logo-dark-blue.png',
            getReady: 'https://drs-form-image-hosting.s3.amazonaws.com/getReady.png',
            logo: 'https://drs-form-image-hosting.s3.amazonaws.com/logo.png'

        }
    }



    return dd
    // pdfMake.createPdf(d).print();

}
    // pdfMake.createPdf(dd).open();
