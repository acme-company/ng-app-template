//Document-level functionality
$(document).ready(function () {

    setPageHeight();
    $(window).on('resize', function () {
        setPageHeight();
    });

    $('a.search-submit').on('click', function () {
        document.getElementById('top_search').submit();
    });

    $(document).on('click', function () {
        $('.topics-menu').removeClass('opened');
        $('body').removeClass('pushed');
    });

    $('.topics-menu').click(function (event) {
        event.stopPropagation();
    });

    $('.nav-shelf').css({ 'max-height': '800px' });
    $('#thisSection').addClass('open');
    $('#thisSection').click(function () {
        $('.nav-shelf').toggleClass('open');
        if ($('.nav-shelf').hasClass('open')) {
            $('.nav-shelf').animate({ 'max-height': '800px' }, 500);
        } else {
            $('.nav-shelf').animate({ 'max-height': '0px' }, 500);
        }
        $('#thisSection').toggleClass('open');
    });
});

var topicData = { "pages": [{ "title": "Topic 1", "url": "/stage/csd-topic1.cfm", "pages": [{ "title": "Topic 1.1", "url": "/stage/csd-topic11.cfm", "pages": [{ "title": "Topic 1.1.1", "url": "/stage/csd-topic111.cfm" }] }, { "title": "Topic 1.2", "url": "/stage/csd-topic12.cfm" }, { "title": "Topic 1.3", "url": "/stage/csd-topic13.cfm" }, { "title": "Topic 1.4", "url": "/stage/csd-topic14.cfm" }, { "title": "Topic 1.5", "url": "/stage/1174.cfm" }, { "title": "Topic 1.6", "url": "/stage/1175.cfm" }, { "title": "Topic 1.7", "url": "/stage/1176.cfm" }, { "title": "Topic 1.8", "url": "/stage/1177.cfm" }, { "title": "Topic 1.9", "url": "/stage/1179.cfm" }, { "title": "Topic 1.10", "url": "/stage/1180.cfm" }] }, { "title": "Rights, Justice and the Law", "url": "/stage/rights-justice-and-law.cfm", "pages": [{ "title": "Bills, Acts and Legislation", "url": "/stage/1651.cfm", "pages": [{ "title": "Acts and Legislation", "url": "/stage/1659.cfm" }, { "title": "Bills and Amendments", "url": "/stage/1660.cfm" }] }, { "title": "Rights", "url": "/stage/1652.cfm", "pages": [{ "title": "Consumer Rights", "url": "/stage/1661.cfm" }, { "title": "Human Rights", "url": "/stage/1662.cfm" }] }, { "title": "Legal support services", "url": "/stage/1653.cfm", "pages": [{ "title": "Family Law", "url": "/stage/1663.cfm" }, { "title": "Help for Victims of Crime", "url": "/stage/1664.cfm" }, { "title": "Legal Assistance", "url": "/stage/1665.cfm" }, { "title": "Mediation/Dispute Resolution", "url": "/stage/1666.cfm" }, { "title": "Wills and Estate Planning", "url": "/stage/1667.cfm" }] }, { "title": "Law enforcement and fines", "url": "/stage/1658.cfm", "pages": [{ "title": "Corrections", "url": "/stage/1668.cfm" }, { "title": "Courts, Tribunals and Prosecution", "url": "/stage/1669.cfm" }, { "title": "Fines", "url": "/stage/1670.cfm" }] }] }, { "title": "Personal Support and Benefits", "url": "/stage/personal-support-and-benefits.cfm", "pages": [{ "title": "Family Violence", "url": "/stage/1623.cfm", "pages": [{ "title": "Child Abuse", "url": "/stage/1631.cfm" }, { "title": "Elder Abuse", "url": "/stage/1632.cfm" }, { "title": "Family Violence - Personal and Financial Support", "url": "/stage/1633.cfm" }] }, { "title": "Disability Services", "url": "/stage/1624.cfm", "pages": [{ "title": "Disability programs - personal and financial support", "url": "/stage/1634.cfm" }, { "title": "Education and Employment", "url": "/stage/1635.cfm" }] }, { "title": "Family Support", "url": "/stage/1625.cfm", "pages": [{ "title": "Childcare Supports", "url": "/stage/1636.cfm" }, { "title": "Financial Support", "url": "/stage/1637.cfm" }, { "title": "Guardianship", "url": "/stage/1638.cfm" }] }, { "title": "Death and Bereavement", "url": "/stage/1627.cfm", "pages": [{ "title": "Bereavement", "url": "/stage/1639.cfm" }, { "title": "Notifications of a death", "url": "/stage/1640.cfm" }, { "title": "Wills, Estates and Personal Directives", "url": "/stage/1641.cfm" }] }, { "title": "Marriage, Separation and Divorce", "url": "/stage/1628.cfm", "pages": [{ "title": "Child Supports", "url": "/stage/1642.cfm" }, { "title": "Divorce and Separation", "url": "/stage/1643.cfm" }, { "title": "Marriage", "url": "/stage/1644.cfm" }] }, { "title": "Becoming a Parent and Child Care", "url": "/stage/1630.cfm", "pages": [{ "title": "Adoption", "url": "/stage/1645.cfm" }, { "title": "Childcare", "url": "/stage/1646.cfm" }, { "title": "Foster Care", "url": "/stage/1647.cfm" }, { "title": "Kinship", "url": "/stage/1648.cfm" }, { "title": "Pregnancy and becoming a parent", "url": "/stage/1649.cfm" }] }, { "title": "Senior's Supports", "url": "/stage/1759.cfm" }] }, { "title": "Moving to Alberta", "url": "/stage/moving-to-alberta.cfm", "pages": [{ "title": "About Alberta", "url": "/stage/1614.cfm", "pages": [{ "title": "Alberta economy", "url": "/stage/1616.cfm" }, { "title": "Our province", "url": "/stage/1617.cfm" }] }, { "title": "Migration and Immigration", "url": "/stage/1615.cfm", "pages": [{ "title": "English language training (ESL)", "url": "/stage/1618.cfm" }, { "title": "Permanent immigration and settlement", "url": "/stage/1619.cfm" }, { "title": "Settlement", "url": "/stage/1620.cfm" }, { "title": "Temporary migration", "url": "/stage/1621.cfm" }] }] }, { "title": "Industry and Economy", "url": "/stage/1601.cfm", "pages": [{ "title": "Alberta economy", "url": "/stage/1602.cfm", "pages": [{ "title": "Alberta resources", "url": "/stage/1604.cfm" }, { "title": "Economic information", "url": "/stage/1605.cfm" }, { "title": "Infrastructure", "url": "/stage/1606.cfm" }, { "title": "National and international relations", "url": "/stage/1607.cfm" }] }, { "title": "Research and innovation", "url": "/stage/1603.cfm", "pages": [{ "title": "Bio research", "url": "/stage/1608.cfm" }, { "title": "Energy and environment research", "url": "/stage/1609.cfm" }, { "title": "Health research", "url": "/stage/1610.cfm" }, { "title": "Innovation in Alberta", "url": "/stage/1611.cfm" }, { "title": "Technology commercialization", "url": "/stage/1612.cfm" }] }] }, { "title": "Housing", "url": "/stage/1591.cfm", "pages": [{ "title": "Home, Apartments and Condominiums", "url": "/stage/1592.cfm", "pages": [{ "title": "Building, Renovations and Upgrades", "url": "/stage/1597.cfm" }, { "title": "Buying or selling a home/condominium", "url": "/stage/1598.cfm" }, { "title": "Property taxes and utilities", "url": "/stage/1599.cfm" }, { "title": "Renting, landlord and tenant", "url": "/stage/1600.cfm" }] }, { "title": "Housing supports", "url": "/stage/1593.cfm", "pages": [{ "title": "Housing Assistance for Special Needs, Lower Income and Seniors", "url": "/stage/1594.cfm" }, { "title": "Homelessness", "url": "/stage/1595.cfm" }, { "title": "Emergency and short-term housing", "url": "/stage/1596.cfm" }] }] }, { "title": "Health and Wellness", "url": "/stage/health-and-wellness.cfm", "pages": [{ "title": "Health Insurance and Benefits", "url": "/stage/1564.cfm", "pages": [{ "title": "Alberta Health Insurance Plan", "url": "/stage/1570.cfm" }, { "title": "Drug coverage and services", "url": "/stage/1571.cfm" }, { "title": "Home Care Services", "url": "/stage/1572.cfm" }, { "title": "Supplementary Health Benefits", "url": "/stage/1573.cfm" }] }, { "title": "Healthy Living and Disease Prevention", "url": "/stage/1565.cfm", "pages": [{ "title": "Disease and Injury Prevention", "url": "/stage/1574.cfm" }, { "title": "Health Alerts and Advisories", "url": "/stage/1575.cfm" }, { "title": "Healthy Living", "url": "/stage/1576.cfm" }] }, { "title": "Hospitals and care facilities", "url": "/stage/1566.cfm", "pages": [{ "title": "Continuing Care", "url": "/stage/1577.cfm" }, { "title": "Hospitals", "url": "/stage/1578.cfm" }] }, { "title": "Mental Health", "url": "/stage/1567.cfm", "pages": [{ "title": "Addiction", "url": "/stage/1579.cfm" }, { "title": "Mental Health &amp; Wellness", "url": "/stage/1580.cfm" }] }, { "title": "Patient Care and Rehabilitation Services", "url": "/stage/1568.cfm", "pages": [{ "title": "Palliative Care", "url": "/stage/1581.cfm" }, { "title": "Patient care", "url": "/stage/1582.cfm" }, { "title": "Rehabilitation services", "url": "/stage/1583.cfm" }] }, { "title": "Personal and Family Health", "url": "/stage/1569.cfm", "pages": [{ "title": "Doctors and healthcare providers", "url": "/stage/1584.cfm" }, { "title": "Early childhood health", "url": "/stage/1585.cfm" }, { "title": "Immunizations", "url": "/stage/1586.cfm" }, { "title": "Infant care", "url": "/stage/1587.cfm" }, { "title": "Pregnancy and Childbirth", "url": "/stage/1588.cfm" }, { "title": "Seniors Healthy living", "url": "/stage/1589.cfm" }, { "title": "Sexual Health", "url": "/stage/1590.cfm" }] }] }, { "title": "Government", "url": "/stage/1561.cfm", "pages": [{ "title": "Budget, Expenses and Spending", "url": "/stage/2206.cfm" }, { "title": "Projects and Priorities", "url": "/stage/2207.cfm" }, { "title": "About Government", "url": "/stage/2209.cfm" }, { "title": "Organizational Structure", "url": "/stage/2210.cfm" }, { "title": "Laws and Publications", "url": "/stage/2211.cfm" }] }, { "title": "Environment and Natural Resources", "url": "/stage/environment-and-natural-resources.cfm", "pages": [{ "title": "Air and air quality", "url": "/stage/1535.cfm", "pages": [{ "title": "Air", "url": "/stage/1542.cfm" }, { "title": "Air emissions", "url": "/stage/1543.cfm" }, { "title": "Air quality", "url": "/stage/1544.cfm" }] }, { "title": "Water", "url": "/stage/1536.cfm", "pages": [{ "title": "Water conservation and quantity", "url": "/stage/1545.cfm" }, { "title": "Water quality and standards", "url": "/stage/1546.cfm" }] }, { "title": "Waste and Pollution Reduction", "url": "/stage/1537.cfm", "pages": [{ "title": "Recycling and composting", "url": "/stage/1547.cfm" }, { "title": "Waste and pollution", "url": "/stage/1548.cfm" }] }, { "title": "Fish and Wildlife", "url": "/stage/1538.cfm", "pages": [{ "title": "Fish", "url": "/stage/1549.cfm" }, { "title": "Wildlife", "url": "/stage/1550.cfm" }] }, { "title": "Land and Forests", "url": "/stage/1539.cfm", "pages": [{ "title": "Forests", "url": "/stage/1551.cfm" }, { "title": "Land", "url": "/stage/1552.cfm" }, { "title": "Land management and legislation", "url": "/stage/1553.cfm" }, { "title": "Wildfire", "url": "/stage/1554.cfm" }] }, { "title": "Environment Protection and Sustainability", "url": "/stage/1540.cfm", "pages": [{ "title": "Alternative and renewable energy", "url": "/stage/1555.cfm" }, { "title": "Environment monitoring and reporting", "url": "/stage/1556.cfm" }, { "title": "Environmental compliance enforcement", "url": "/stage/1557.cfm" }] }, { "title": "Climate Change and Greenhouse Gases", "url": "/stage/1541.cfm", "pages": [{ "title": "Climate change", "url": "/stage/1558.cfm" }, { "title": "Greenhouse gases", "url": "/stage/1560.cfm" }] }] }, { "title": "Emergencies and Public Safety", "url": "/stage/1519.cfm", "pages": [{ "title": "Safe home and community", "url": "/stage/1520.cfm", "pages": [{ "title": "Wildfire safety", "url": "/stage/1529.cfm" }, { "title": "House fire safety", "url": "/stage/1530.cfm" }, { "title": "Home safety", "url": "/stage/1531.cfm" }, { "title": "Crime prevention", "url": "/stage/1532.cfm" }, { "title": "Bullying prevention", "url": "/stage/1533.cfm" }] }, { "title": "Policing and enforcement ", "url": "/stage/1521.cfm", "pages": [{ "title": "High risk offender awareness", "url": "/stage/1527.cfm" }, { "title": "Law enforcement and law enforcement programs", "url": "/stage/1528.cfm" }] }, { "title": "Emergencies and disasters", "url": "/stage/1522.cfm", "pages": [{ "title": "Floods, wildfire and natural disasters", "url": "/stage/1523.cfm" }, { "title": "Emergency preparedness", "url": "/stage/1524.cfm" }, { "title": "Emergency advisories and alerts", "url": "/stage/1525.cfm" }, { "title": "Assistance and recovery support", "url": "/stage/1526.cfm" }] }] }, { "title": "Education and Training", "url": "/stage/education-and-training.cfm", "pages": [{ "title": "Teaching in Alberta", "url": "/stage/1490.cfm", "pages": [{ "title": "Teacher education and standards", "url": "/stage/1517.cfm" }, { "title": "Teaching awards and recognition", "url": "/stage/1518.cfm" }] }, { "title": "Early childhood education", "url": "/stage/1491.cfm", "pages": [{ "title": "Early childhood educators", "url": "/stage/1514.cfm" }, { "title": "Early learning", "url": "/stage/1515.cfm" }, { "title": "Preschool", "url": "/stage/1516.cfm" }] }, { "title": "International students and studying abroad", "url": "/stage/1492.cfm", "pages": [{ "title": "Domestic students", "url": "/stage/1512.cfm" }, { "title": "International students", "url": "/stage/1513.cfm" }] }, { "title": "Apprenticeships and trades", "url": "/stage/1493.cfm", "pages": [{ "title": "Apprenticeship", "url": "/stage/1508.cfm" }, { "title": "Credentials and certification", "url": "/stage/1509.cfm" }, { "title": "Funding and finance", "url": "/stage/1510.cfm" }, { "title": "Trades and occupations", "url": "/stage/1511.cfm" }] }, { "title": "Post-secondary and adult education", "url": "/stage/1494.cfm", "pages": [{ "title": "Planning and admission", "url": "/stage/1504.cfm" }, { "title": "Post-secondary institutions", "url": "/stage/1505.cfm" }, { "title": "Prior learning and assessments", "url": "/stage/1506.cfm" }, { "title": "Student funding", "url": "/stage/1507.cfm" }] }, { "title": "K-12 education", "url": "/stage/1495.cfm", "pages": [{ "title": "Alberta education system", "url": "/stage/1498.cfm" }, { "title": "First Nations, Métis and Inuit learners", "url": "/stage/1499.cfm" }, { "title": "High school education", "url": "/stage/1500.cfm" }, { "title": "K-12 francophone and French immersion", "url": "/stage/1501.cfm" }, { "title": "Schools", "url": "/stage/1502.cfm" }, { "title": "Special needs learners", "url": "/stage/1503.cfm" }] }] }, { "title": "Communities and Recreation", "url": "/stage/1470.cfm", "pages": [{ "title": "Urban and rural municipalities", "url": "/stage/1471.cfm", "pages": [{ "title": "Alberta municipal information", "url": "/stage/1475.cfm" }, { "title": "Municipal programs", "url": "/stage/1476.cfm" }, { "title": "Municipal services", "url": "/stage/1477.cfm" }] }, { "title": "Sports and outdoor recreation", "url": "/stage/1472.cfm", "pages": [{ "title": "Boating", "url": "/stage/1478.cfm" }, { "title": "Fishing", "url": "/stage/1479.cfm" }, { "title": "General information", "url": "/stage/1480.cfm" }, { "title": "Hunting", "url": "/stage/1481.cfm" }, { "title": "Sports", "url": "/stage/1482.cfm" }] }, { "title": "Campgrounds, parks and trails", "url": "/stage/1473.cfm", "pages": [{ "title": "Alberta parks", "url": "/stage/1483.cfm" }, { "title": "Campgrounds", "url": "/stage/1484.cfm" }, { "title": "Park safety and advisories", "url": "/stage/1485.cfm" }] }, { "title": "Community service and supports", "url": "/stage/1474.cfm", "pages": [{ "title": "Community grants and funding", "url": "/stage/1486.cfm" }, { "title": "Recognition and awards", "url": "/stage/1487.cfm" }, { "title": "Volunteering", "url": "/stage/1488.cfm" }] }] }, { "title": "Business, Employment and Jobs", "url": "/stage/business-employment-and-jobs.cfm", "pages": [{ "title": "Employee rights and standards", "url": "/stage/1442.cfm", "pages": [{ "title": "Education and Awareness", "url": "/stage/1467.cfm" }, { "title": "Employment Standards and Employee Rights", "url": "/stage/1468.cfm" }, { "title": "Labour Relations", "url": "/stage/1469.cfm" }] }, { "title": "Employment and careers", "url": "/stage/1443.cfm", "pages": [{ "title": "Career Planning and Support", "url": "/stage/1463.cfm" }, { "title": "Employment and Training Supports", "url": "/stage/1464.cfm" }, { "title": "Find a job", "url": "/stage/1465.cfm" }, { "title": "Temporary Foreign Workers", "url": "/stage/1466.cfm" }] }, { "title": "Pensions and retirement", "url": "/stage/1444.cfm", "pages": [{ "title": "General Pension and Retirement Information", "url": "/stage/1460.cfm" }, { "title": "Private Sector Pension", "url": "/stage/1461.cfm" }, { "title": "Public Sector Pension", "url": "/stage/1462.cfm" }] }, { "title": "Starting a business", "url": "/stage/1445.cfm", "pages": [{ "title": "Financing your business", "url": "/stage/1458.cfm" }, { "title": "Set up a business, charity or non-profit", "url": "/stage/1459.cfm" }] }, { "title": "Workplace Health and Safety", "url": "/stage/1446.cfm", "pages": [{ "title": "Education and Awareness", "url": "/stage/1456.cfm" }, { "title": "Incident Reports and Complaints", "url": "/stage/1457.cfm" }] }, { "title": "Running a business", "url": "/stage/1447.cfm", "pages": [{ "title": "Agriculture products for sale", "url": "/stage/1448.cfm" }, { "title": "Business taxes", "url": "/stage/1450.cfm" }, { "title": "Doing business with government", "url": "/stage/1451.cfm" }, { "title": "Employment standards", "url": "/stage/1452.cfm" }, { "title": "Hire and manage employees", "url": "/stage/1453.cfm" }, { "title": "Occupational Health and Safety (OHS)", "url": "/stage/1454.cfm" }, { "title": "Regulations, permits and licenses", "url": "/stage/1455.cfm" }] }, { "title": "Government contracts and tendering", "url": "/stage/1675.cfm", "pages": [{ "title": "Consultation information", "url": "/stage/1685.cfm" }, { "title": "Contracts and tendering", "url": "/stage/1686.cfm" }] }] }, { "title": "Arts and Culture", "url": "/stage/1398.cfm", "pages": [{ "title": "Arts and film", "url": "/stage/1399.cfm", "pages": [{ "title": "Arts", "url": "/stage/1400.cfm" }, { "title": "Film", "url": "/stage/1401.cfm" }, { "title": "Grants for arts and film", "url": "/stage/1402.cfm" }] }, { "title": "Festivals, events and venues", "url": "/stage/1420.cfm", "pages": [{ "title": "Cultural and arts venues", "url": "/stage/1421.cfm" }, { "title": "Event planning support programs", "url": "/stage/1423.cfm" }, { "title": "Festivals and events", "url": "/stage/1427.cfm" }] }, { "title": "Museums, libraries and historic sites", "url": "/stage/1432.cfm", "pages": [{ "title": "Admission and passes", "url": "/stage/1434.cfm" }, { "title": "Culture, heritage and historic sites", "url": "/stage/1435.cfm" }, { "title": "Heritage and culture grants", "url": "/stage/1436.cfm" }, { "title": "Libraries and archives", "url": "/stage/1437.cfm" }, { "title": "Museums", "url": "/stage/1438.cfm" }, { "title": "Recognition and awards", "url": "/stage/1439.cfm" }, { "title": "Scholarships", "url": "/stage/1440.cfm" }] }] }, { "title": "Transportation, Roads and Driving", "url": "/stage/1671.cfm", "pages": [{ "title": "Vehicles and driving", "url": "/stage/1672.cfm", "pages": [{ "title": "Buying, selling and registering a vehicle", "url": "/stage/1676.cfm" }, { "title": "Driver programs and supports", "url": "/stage/1677.cfm" }, { "title": "Drivers education and licensing", "url": "/stage/1678.cfm" }, { "title": "Driving laws and leglislation", "url": "/stage/1679.cfm" }, { "title": "Vehicle inspections", "url": "/stage/1680.cfm" }] }, { "title": "Roads, highways and bridges", "url": "/stage/1673.cfm", "pages": [{ "title": "Infrastructure", "url": "/stage/1681.cfm" }, { "title": "Maintenance, restrictions/bans and inspections", "url": "/stage/1682.cfm" }] }, { "title": "Commercial and municipal transportation", "url": "/stage/1674.cfm", "pages": [{ "title": "Commercial permits and research", "url": "/stage/1683.cfm" }, { "title": "Commercial transport and safety", "url": "/stage/1684.cfm" }] }] }] };
function buildTopicsMenu() {
    if (topicData) {
        $('.topics-buttons').addClass("col-xs-6 col-md-2 col-md-push-4 text-right");
        $('.topics-buttons').append('<a href="#" class="btn btn-lg btn-info margin-md-top open-search-button hidden-md hidden-lg"><span class="fa fa-search"></span></a><a class="btn btn-lg btn-info expand-md margin-md-top top-nav-topics" href="javascript:{}"><span class="hidden-xs hidden-sm">Topics </span><span class="fa fa-bars margin-sm-left"></span></a>');
        $('.search-holder').toggleClass('col-md-3 col-md-pull-1 col-md-6');
        $('.topics-menu').append($('<nav>').append($('<ul>').addClass('margin-md padding-md menu topics-items')));

        for (var t in topicData.pages) {
            var topic = topicData.pages[t];
            addSubItems($('.topics-items'), topic);
        }

        $('.topics-menu nav > ul').append('<li class="nav-header-break"><h3>Quick Links</h3></li>');
        $('.topics-menu nav > ul').append($('.quick-links ul').html());
    }
}

function buildTopMenu() {
    $('.topics-buttons').append('<a href="#" class="btn btn-lg btn-info margin-md-top open-search-button hidden-md hidden-lg"><span class="fa fa-search"></span></a><a class="btn btn-lg btn-info expand-md margin-md-top top-nav-topics hidden-md hidden-lg" href="javascript:{}">Menu <span class="fa fa-bars margin-sm-left"></span></a>');
    $('.topics-menu').append($('<nav>').append($('<ul>').addClass('margin-md padding-md menu topics-items')));

    $('#nav-local .menu li').each(function (e, o) {
        var ht = $(o).clone();
        $('.topics-items').append(ht);
    });

    $(window).on('resize', function () {
        $('.topics-menu').removeClass('opened');
        $('body').removeClass('pushed');
    });

    $('.topics-menu nav > ul').append('<li class="nav-header-break"><h3>Quick Links</h3></li>');
    $('.topics-menu nav > ul').append($('.quick-links ul').html());

    $('.top-nav-topics').on('click', function (event) {
        event.stopPropagation();
        $('.topics-menu').toggleClass('opened');

        $('body').toggleClass('pushed');
        positionTopicNavWindow();
    });

    $(document).on('click', function () {
        $('.topics-menu').removeClass('opened');
        $('body').removeClass('pushed');
    });

    $('.open-search-button').click(function (e) {
        $('.search-holder').toggleClass('open');
        if ($('.search-holder').hasClass('open')) {
            $('.open-search-button .fa').removeClass('fa-search');
            $('.open-search-button .fa').addClass('fa-angle-double-up');
        } else {
            $('.open-search-button .fa').addClass('fa-search');
            $('.open-search-button .fa').removeClass('fa-angle-double-up');
        }
    });
}


function buildTopMenuJSON() {
    if (topicData) {


        $('.topics-buttons').append('<a href="#" class="btn btn-lg btn-info margin-md-top open-search-button hidden-md hidden-lg"><span class="fa fa-search"></span></a><a class="btn btn-lg btn-info expand-md margin-md-top top-nav-topics hidden-md hidden-lg" href="javascript:{}">Menu <span class="fa fa-bars margin-sm-left"></span></a>');
        $('.topics-menu').append($('<nav>').append($('<ul>').addClass('margin-md padding-md menu topics-items')));

        /*
        $('#nav-local .menu li').each(function (e, o) {
            var ht = $(o).clone();
            $('.topics-items').append(ht);
        });
        */

        $(window).on('resize', function () {
            $('.topics-menu').removeClass('opened');
            $('body').removeClass('pushed');
        });

        $('.top-nav-topics').on('click', function (event) {
            event.stopPropagation();
            $('.topics-menu').toggleClass('opened');

            $('body').toggleClass('pushed');
            positionTopicNavWindow();
        });

        $(document).on('click', function () {
            $('.topics-menu').removeClass('opened');
            $('body').removeClass('pushed');
        });

        $('.open-search-button').click(function (e) {
            $('.search-holder').toggleClass('open');
            if ($('.search-holder').hasClass('open')) {
                $('.open-search-button .fa').removeClass('fa-search');
                $('.open-search-button .fa').addClass('fa-angle-double-up');
            } else {
                $('.open-search-button .fa').addClass('fa-search');
                $('.open-search-button .fa').removeClass('fa-angle-double-up');
            }
        });

        //$('.topics-menu').append($('<nav>').append($('<ul>').addClass('margin-md padding-md menu topics-items')));

        for (var t in topicData.pages) {
            var topic = topicData.pages[t];
            addSubItems($('.topics-items'), topic);
        }

        $('.topics-menu nav > ul').append('<li class="nav-header-break"><h3>Quick Links</h3></li>');
        $('.topics-menu nav > ul').append($('.quick-links ul').html());

        $('.expander').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('opened');
            if ($(this).hasClass('opened')) {
                $(this).parent().addClass('opened');
                $(this).attr({ 'aria-label': 'Close ' + $(this).siblings('a').html() });
                $(this).siblings('ul').attr({ 'aria-expanded': true });
                $(this).siblings('ul').focus();
            } else {
                $(this).parent().removeClass('opened');
                $(this).attr({ 'aria-label': 'Expand ' + $(this).siblings('a').html() });
                $(this).siblings('ul').attr({ 'aria-expanded': false });
            }
        });
    }
}

function addSubItems(domContainer, topic) {
    var newContainer = $('<li>').append('<a href="' + topic.url + '">' + topic.title + '</a>');
    $(domContainer).append(newContainer);
    if (topic.pages) {
        newContainer.addClass('has-children');
        newContainer.append('<a href="#" class="expander" aria-label="Expand ' + topic.title + '"></a>');

        var subtopicContainer = $(newContainer).append('<ul class="subtopics" aria-expanded="false">').find('ul');
        for (var t in topic.pages) {
            var subtopic = topic.pages[t];
            addSubItems(subtopicContainer, subtopic);
        }
    }
}

function positionTopicNavWindow() {
    var rightPos = $(window).innerWidth() - ($('.top-nav-topics').offset().left + $('.top-nav-topics').outerWidth());
    var topAdj = 36;
    if ($(window).innerWidth() < 768) {
        topAdj = 24;
    }
    $('.topics-menu').css({
        'right': rightPos,
        'top': $('.top-nav-topics').position().top + $('.top-nav-topics').height() + topAdj
    });
}

function setPageHeight() {
    var mainmin = $(window).innerHeight() - elemHeight('.site-header') - elemHeight('#breadcrumbs-share') - elemHeight('.page-footer') - elemHeight('.footer-contact') - elemHeight('.footer-social') - elemHeight('.footer-fluid') - 3;
    $('main').css({ 'min-height': mainmin + 'px' });
}

function setHeaderHeight() {
    if ($('.site-header').hasClass('floating-header')) {
        $(".site-header").removeClass("floating-footer");
    }
    var headermin = elemHeight('.site-header');
    $('#header').css('min-height', headermin + 'px');
}

function elemHeight(elem) {
    var eheight = 0;
    if ($(elem).outerHeight() == null) {
        eheight = 0;
    } else {
        eheight = $(elem).outerHeight();
    }
    return eheight;
}

/* ============================== STEPS CAROUSEL SETUP ================================= */

$(window).on('resize', function () {
    carouselSetup();
    setLiSizes();
    setTimeout(setStepWidths, 250);
});

$(document).ready(function () {
    carouselSetup();
    setLiSizes();
    setupAutosteppers();
    checkForLinkedItems();
    setTimeout(setStepWidths, 250);
});

function setStepWidths() {
    //Position step content
    $('.summary-step p').each(function (e) {
        $(this).css({ 'margin-top': '-' + ($(this).outerHeight() / 2) + 'px' });
    });
}

function checkForLinkedItems() {
    $('.steps-carousel .item').each(function () {
        if ($(this).attr('data-url')) {
            $(this).click(function () {
                window.open($(this).attr('data-url'), '_self');
            });
            $(this).keypress(function () {
                if (event.which == 13 || event.which == 32) {
                    window.open($(this).attr('data-url'), '_self');
                }
            });
            $(this).attr('role', 'button');
            $(this).attr('tabindex', '0');
            $(this).addClass('has-link');
        }
        if ($(this).attr('onclick')) {
            $(this).attr('role', 'button');
            $(this).attr('tabindex', '0');
            $(this).addClass('has-link');
        }
    });
}

function setCarouselPage(targetCarousel, pageNum) {
    targetCarousel = '.' + targetCarousel;
    var totalPages = Number($(targetCarousel).attr('data-total-pages'));
    var perPage = Number($(targetCarousel).attr('data-per-page'));
    if (pageNum > totalPages) {
        pageNum = 1;
    } else if (pageNum < 1) {
        pageNum = totalPages;
    }

    var liMargin = 3;
    if ($(targetCarousel).attr('data-li-margin') && $(targetCarousel).attr('data-per-page') != "1") {
        liMargin = Number($(targetCarousel).attr('data-li-margin'));
    }

    $(targetCarousel + ' .item').each(function (i, e) {
        $(this).attr('data-on-page', Math.floor(i / perPage) + 1 == pageNum);
    });

    var carouselInner = $(targetCarousel).outerWidth() + liMargin;
    if (perPage > 1) {
        $(targetCarousel + ' .item').animate({ 'left': (0 - ((pageNum - 1) * carouselInner)) + 'px' }, 750);
    }

    $(targetCarousel + ' .item[data-on-page=true]').removeClass('item-offscreen').removeClass('hidden').removeClass('zUp');
    $(targetCarousel + ' .item[data-on-page=false]').addClass('item-offscreen');
    if(perPage == 1){
        $(targetCarousel + ' .item[data-on-page=false]').addClass('zUp');
    }
    

    if (perPage > 1) {

        if (pageNum == 1) {
            $(targetCarousel).addClass('steps-prev-disabled');
        } else {
            $(targetCarousel).removeClass('steps-prev-disabled');
        }

        if (pageNum == totalPages) {
            $(targetCarousel).addClass('steps-next-disabled');
        } else {
            $(targetCarousel).removeClass('steps-next-disabled');
        }
    } else {
        setTimeout(function () {
            $(targetCarousel + ' .item[data-on-page=false]').addClass('hidden');
        }, 750);
        $(targetCarousel).removeClass('steps-next-disabled');
        $(targetCarousel).removeClass('steps-prev-disabled');
    }

    var maxPage = Math.ceil(pageNum);
    $(targetCarousel).find('li[data-page="' + maxPage + '"]').addClass('active').siblings().removeClass('active');
    $(targetCarousel).attr('data-current-page', maxPage);

    if ($(targetCarousel).attr('data-carousel-sync') && $(targetCarousel).attr('data-per-page') == "1") {
        setCarouselPage($(targetCarousel).attr('data-carousel-sync'), pageNum);
        $(targetCarousel).find('.item:nth-child(' + pageNum + ')').addClass('active');
        $(targetCarousel).find('.item:nth-child(' + pageNum + ')').siblings().removeClass('active');
    }

}

function carouselSetup() {
    var carouselNum = 0;

    $('.steps-carousel').each(function (e) {

        $(this).addClass('scarousel' + carouselNum);

        var perPage = 4; //default number of items per page
        if ($(this).attr('data-per-page')) { //check if there is a defined number of items per page
            if ($(this).attr('data-orig-per-page')) {
                perPage = Number($(this).attr('data-orig-per-page'));
            } else {
                perPage = Number($(this).attr('data-per-page'));
                $(this).attr('data-orig-per-page', perPage);
            }

            if ($(window).innerWidth() <= 600) {
                perPage = 1;

            } else if ($(window).innerWidth() <= 1024 && Number($(this).attr('data-per-page')) != 1) {
                perPage = 2;
            }

        }

        $(this).attr('data-per-page', perPage);

        if (perPage == 1) {
            $(this).addClass('single-page');
        } else {
            $(this).removeClass('single-page');
        }

        var pages = Math.ceil($(this).find('.item').length / perPage);

        //set up page data
        $(this).attr('data-current-page', "1");
        $(this).attr('data-total-pages', pages);
        $(this).find('.nav-dots').remove();

        if ($(this).attr('data-show-dots') == "true" || !$(this).attr('data-show-dots')) {
            if (pages > 1) {
                var navDots = '<ul class="nav-dots" data-carousel="' + ('scarousel' + carouselNum) + '">';
                for (var i = 0; i < pages; i++) {
                    navDots += '<li class="dot" data-page="' + (i + 1) + '"></li>';
                }
                navDots += '</ul>';
                $(this).append(navDots);
            }
        } else {
            $(this).addClass('dots-disabled');
        }

        if ($(this).attr('data-show-arrows') == "true" || !$(this).attr('data-show-arrows')) {
            if ($(this).find('.prev').length == 0) {
                $(this).append('<div class="prev" data-carousel="' + ('scarousel' + carouselNum) + '"></div><div class="next" data-carousel="' + ('scarousel' + carouselNum) + '"></div>');
                $(this).find('div.prev').click(function (e) {
                    var pg = Number($(this).parent('.steps-carousel').attr('data-current-page')) - 1;
                    setCarouselPage($(this).attr('data-carousel'), pg);
                    $(this).parent('.steps-carousel').attr('data-scrolling', 'false');
                });
                $(this).find('div.next').click(function (e) {
                    var pg = Number($(this).parent('.steps-carousel').attr('data-current-page')) + 1;
                    setCarouselPage($(this).attr('data-carousel'), pg);
                    $(this).parent('.steps-carousel').attr('data-scrolling', 'false');
                });
            }
        }

        $(this).attr('data-carousel', 'scarousel' + carouselNum);
        setCarouselPage('scarousel' + carouselNum, 1);

        carouselNum++;
    });

    $('ul.nav-dots').each(function (e) {
        $(this).find('li:first').addClass('active');
    });
    $('ul.nav-dots li').click(function (e) {
        var pg = Number($(this).attr('data-page'));
        var targetCarousel = $(this).parent('.nav-dots').attr('data-carousel');
        setCarouselPage(targetCarousel, pg);
        $('.' + targetCarousel).attr('data-scrolling', 'false');
    });
}

function setupAutosteppers() {
    var autoSteppers = 0;
    $('.steps-carousel').each(function (e) {
        if ($(this).attr('data-auto-scroll') > 0) {
            $(this).attr('data-scrolling', 'true');
            $(this).attr('data-time-left', Number($(this).attr('data-auto-scroll')));
            $(this).click(function (e) {
                $(this).attr('data-scrolling', 'false');
            });
            autoSteppers++;
        }
    });
    if (autoSteppers > 0) {
        setInterval(nextCarouselPage, 250);
    }
}

function navToCarouselItem(targetCarousel, itemNum) {
    var sCarousel = '.' + targetCarousel;
    if ($(sCarousel).length > 0) {
        var whichPage = Math.ceil(itemNum / Number($(sCarousel).attr('data-per-page')));
        setCarouselPage(targetCarousel, whichPage);
        $(sCarousel).find('.item:nth-child(' + itemNum + ')').addClass('active');
        $(sCarousel).find('.item:nth-child(' + itemNum + ')').siblings().removeClass('active');

        if ($(sCarousel).attr('data-carousel-sync')) {
            navToCarouselItem($(sCarousel).attr('data-carousel-sync'), itemNum);
        }

        if ($(sCarousel).attr('data-item-height') == "auto") {
            $(sCarousel).css({ "height": $(sCarousel).find('.item:nth-child(' + itemNum + ')').innerHeight() + "px" });
        }

    }
}

function nextCarouselPage() {
    $('.steps-carousel').each(function (e) {
        if ($(this).attr('data-auto-scroll') > 0 && $(this).attr('data-scrolling') == 'true') {
            var tl = Number($(this).attr('data-time-left'));
            tl -= 250;
            if (tl < 0) {
                tl = Number($(this).attr('data-auto-scroll'));
                var pg = Number($(this).attr('data-current-page')) + 1;
                setCarouselPage($(this).attr('data-carousel'), pg);
            }
            $(this).attr('data-time-left', tl);
        }
    });
}


function setLiSizes() {
    $('.steps-carousel').each(function (e) {

        var perPage = 4;
        if ($(this).attr('data-per-page')) {
            perPage = Number($(this).attr('data-per-page'));
        }
        $(this).attr('data-per-page', perPage);
        var pages = $(this).find('.item').length / perPage;

        var liMargin = 3;
        if ($(this).attr('data-li-margin')) {
            liMargin = Number($(this).attr('data-li-margin'));
        }

        //Establish LI widths
        var liWidth = (($(this).innerWidth() / perPage) - ((liMargin * (perPage - 1) / perPage)));
        $(this).attr('data-li-width', liWidth);
        $(this).find('.item').css({ 'width': liWidth + 'px', 'margin-right': liMargin + 'px' });

        //check for defined item-height
        if ($(this).attr("data-item-height") == "auto") {

        } else {
            if ($(this).attr("data-item-height") > 0) {
            } else {
                $(this).attr("data-item-height", "0");
            }

            //Establish li heights
            $(this).find('.item').each(function (e) {
                var maxHeight = Number($(this).parent('.steps-carousel').attr("data-item-height"));
                if ($(this).outerHeight() > maxHeight) {
                    $(this).parent().attr("data-item-height", $(this).outerHeight());
                }
            });

            $(this).find('.item').css({ "height": $(this).attr("data-item-height") + "px", "overflow": "hidden" });

            if (perPage == 1) {
                $(this).css({ "height": $(this).attr("data-item-height") + "px" })
            }
        }

        $(this).addClass('loaded');
    });
}

function thisActive(targetObj) {
    $(targetObj).addClass('active');
    $(targetObj).siblings().removeClass('active');
}

// === Sharing functions without AddThis or ShareThis
var shareWindowOps = "width=400,height=320,top=100,location=no,scrollbar=no";
function shareToFacebook() {
    var url = "http://www.facebook.com/sharer.php?u=" + encodeURI(window.location.href);
    window.open(url, "_blank", shareWindowOps);
}
function shareToTwitter(msg) {
    var url = "https://twitter.com/intent/tweet?text=" + encodeURI(msg) + "&url=" + encodeURI(window.location.href);
    window.open(url, "_blank", shareWindowOps);
}
function shareToEmail(subject, body) {
    var url = "mailto:?Subject=" + encodeURI(subject) + "&Body=" + encodeURI(body) + "%20 " + encodeURI(window.location.href);
    window.open(url);
}