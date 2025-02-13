window.onload = function (){
    homeback();
}

function homeback(){

    var result = "";


    result += "<h1> Welcome to SimpGet</h1>";

    ////////////////////////////////////////////////////////////////////////
    result += "<p>";
    result += " This is the web site which introduces the structural engineering software for getting simple calculation results.";
    result += " It's designed by assuming the person who has enough design ability to understand engineering formula and to use on basic design stage for the double check with hand-cal result. You can use it for free.";
    result += "</p><p>";
    result += " Let's the design begin. ^v^!";
    result += "</p>";
    ////////////////////////////////////////////////////////////////////////

    result += "<hr>";

    result += "<h2>Log</h2>";

    result += "<p>";
    result += "2021/12, Added fibGet.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2021/02, Added twoWaySlab.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2020/11, Added rigidWink.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2020/10/22, Added MoveLoad.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2020/10/21, Added DownLoad.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2020/10/08, Added Demo.";
    result += "</p>";
    result += "<hr>";

    result += "<p>";
    result += "2020/10/04, Test";
    result += "</p>";
    result += "<hr>";

    document.getElementById('home').innerHTML = result;
}

function aboutUs(){
    var result = "";
    result += "<h1>";
    result += "About me";
    result += "</h1>";
    result += "<hr>";

    result += "<p>";
    result += " My name is Tsunoppy, working in Tokyo, Japan as the structural engineer.";
    result += "</p>";
    result += "<p>";
    result += " I love developing softwares related to the civil engineering.";
    result += " Softwares on this site were coded for my private use.";
    result += "</p><p>";
    result += " Contact would be much appreciated, if any.";
    result += " For structural engineers all over the world!!";
    result += "</p>";

    result += "<hr>";

    result += "<p>";
    result += "Github: ";
    result += '<a class="linkFont" href="https://github.com/tsunoppy/" target="_blank">';
    result += "https://github.com/tsunoppy/;";
    result += "</a>";
    result += "</p>";

    result += "<p>";
    result += "Email:";
    result += '<a  href="mailto:tsunoppysimple@gmail.com" target="_top">';
    result += "tsunoppysimple@gmail.com;";
    result += "</a>";
    result += "</p>";


    document.getElementById('home').innerHTML = result;
}

function general(){

    var result = "";
    result += "<h1> General </h1>";

    result += "<hr>";
    result += "<h3> Seismic Load </h3>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/ubcSeismic/ubcSeismic.html"  target="_blank">';
    result += 'ubcSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Base Shear Coef. for the seismic load based on UBC CODE";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/asceS/asceSeismic.html"  target="_blank">';
    result += 'asceSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Base Shear Coef. based on ASCE-10";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/multiAsceS/multiSeismic.html"  target="_blank">';
    result += 'MultiAsceSeismic';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Seismic Load based on ASCE-10 for Multi story building";
    //result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    result += "</tr></table>"; 
    result += "<hr>";
    result += "<h3> Wind Load </h3>";
    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/windload/windPr.html"  target="_blank">';
    result += 'windForce';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Wind Pressure based on MWFRS Low-Rise Buildings by ASCE-10";
    result += '<a class="linkFont" href="demo/general/windload/Ref/WindLoad.html"  target="_blank">';
    result += '<br>';
    result += 'Reference';
    result += '</a><br  />';
    //result += "<hr>";
    result += "</td>";

    result += "</tr>";
    //////////////////////////////////////////////////

    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Analysis </h3>";
    result += "<table>";

    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/general/frame/frameOne.html"  target="_blank">';
    result += 'frameOne';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Frame, one span with single story";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////


    result += "</table>";
    document.getElementById('home').innerHTML = result;

}

function found(){

    var result = "";

    result += "<h1> Foundation </h1>";
    result += "<hr>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/foundation/direct/direct.html"  target="_blank">';
    result += 'direct';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Shallow Foundation design by working stress method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/foundation/Retaining/retain.html"  target="_blank">';
    result += 'retain';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Design of retaining wall";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/foundation/bearingCap/bearingCap.html"  target="_blank">';
    result += 'bearingCap';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Soil Bearing Capacity for spread footing";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</table>";


    //    result += "<hr>";

    document.getElementById('home').innerHTML = result;

}

function pile(){

    var result = "";
    result += "<h1> Pile </h1>";
    result += "<hr>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/pile/PileBearGen/pileBear.html"  target="_blank">';
    result += 'PileBearGen';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the pile bearing capacity in general method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/pile/PileBearThai/pileBear.html"  target="_blank">';
    result += 'PileBearThai';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the pile bearing capacity by Thai method.";
    result += '<br  />';;
    result += '<a class="linkFont" href="demo/pile/PileBearThai/note.html"  target="_blank">';
    result += 'Notation';
    result += '</a>';
    result += "<hr>";
    result += "</td>";


    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/pile/pileSt/pileStress.html"  target="_blank">';
    result += 'PileStress';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the bending moment due to lateral shear for the long pile by chang fomula based on Japanese method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/pile/protrudingPile/protPile.html"  target="_blank">';
    result += 'ProtrudingPile';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Evaluation of the bending moment due to lateral shear for the long pile with protruding part by chang fomula based on Japanese method";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";


    document.getElementById('home').innerHTML = result;


}

function masonry(){

    var result = "";

    result += "<h1> Masonry </h1>";
    result += "<hr>";

    result += "<h2> Brick</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="app/freeStandingHtml/freeStanding.html" target="_blank">';
    result += 'fleestandBrick';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Freestanding Brick wall design based on India Code (IS, Practice for structural use of unreinforced masonry.).";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////

    result += "</table>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h1> Steel Fiber Concrete </h1>";
    result += "<hr>";

    result += "<h2> Crack due to shrinkage</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="others/crackSlabOnGrade/crack.html" target="_blank">';
    result += 'CrackFiber';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Estimation of the crack width by emperial method for steel fiber concrete slab on grade";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////

    result += "</table>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h1> CFT </h1>";
    result += "<hr>";

    result += "<h2> Column </h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="composit/cft/cft.html" target="_blank">';
    result += 'CFT';
    result += '</a><br  />';

    result += "</td><td>";
    result += "CFT MN Interaction by Japanese Method";
    //result += "<hr>";
    result += "</td>";
    result += "</tr>";


    //////////////////////////////////////////////////

    /*
       result += "<tr valign=\"top\">";
       result += '<td>';
       result += "</td><td style=\"width:150px;\">";

       result += '<a class="linkFont" href="app/freeStandingHtml/freeStanding.html" target="_blank">';
       result += 'BrickGutter';
       result += '</a><br  />';

       result += "</td><td>";
       result += "Brick Gutter Design.";
       result += "<hr>";
       result += "</td>";
       result += "</tr>";
     */

    //////////////////////////////////////////////////

    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;

}

function steel(){

    var result = "";
    result += "<h1> Steel </h1>";
    result += "<hr>";

    //////////////////////////////////////////////////

    result += "<h2> Purlin</h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/steel/purlin/pulin.html" target="_blank">';
    result += 'purlin';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Purlin design by working stress method ";
    result += "</td>";

    result += "</tr>";
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/steel/fly/purWB.html" target="_blank">';
    result += 'purWB';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Purlin with fly brace by working stress method ";
    result += "</td>";

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += "<h2> Lattice Truss W/ Hollow Section </h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/steel/pipeLatt/steelTruss.html" target="_blank">';
    result += 'pipeLattice';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Pipe Truss Analysis by working stress method ";
    result += "</td>";

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += "<h2> Hollow Section Connection</h2>";

    result += "<table>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += 'hollowConnect';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Getting stress on simple frame model. Cantilever Beam, Single Beam, Single Beam with Cantilever, Pin-Fixed Beam, Fixed Beam, Continuous Beam";
    result += "<hr>";
    result += "</td>";

    result += "</tr>";

    //////////////////////////////////////////////////

    result += "<tr>";
    result += "<td></td>";
    result += "<td></td>";
    result += "<td>";
    result += '<a href="demo/steel/pipeConnection/TYconnect.html" target="_blank">';
    result += '<button>T,Y type</button>';
    result += '</a> &nbsp;';
    result += '<a href="demo/steel/pipeConnection/Cconnect.html" target="_blank">';
    result += '<button>Cross type</button>';
    result += '</a> &nbsp;';
    result += '<a href="demo/steel/pipeConnection/Kconnect.html" target="_blank">';
    result += '<button>K type</button>';
    result += '</a>';
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</tr></table>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    document.getElementById('home').innerHTML = result;

}

function rc(){
    var result = "";
    result += "<h1> RC </h1>";
    result += "<hr>";

    result += "<h3> Column </h3>";

    result += "<table >";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";


    result += '<a class="linkFont" href="demo/rc/slender/slender.html" target="_blank">';
    result += 'slenderCol';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Moment magnifier based on ACI-08.";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td>";

    result += '<a class="linkFont" href="demo/rc/corbel/corbel.html" target="_blank">';
    result += 'corbel';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Corbel capacity based on ACI-08.";
    //    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Beam </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="demo/rc/simpRC/simpBeam.html" target="_blank">';
    result += 'SimpBeam';
    result += '</a><br  />';

    result += "</td><td>";
    result += "RC beam design by SDM";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="demo/rc/simpRC/WSDsimpBeam.html" target="_blank">';
    result += 'SimpBeamWSD';
    result += '</a><br  />';

    result += "</td><td>";
    result += "RC beam design by WSD";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////


    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";
    result += '<a class="linkFont" href="demo/rc/torsion/torsion.html"  target="_blank">';
    result += 'TorsionBeam';

    result += "</td><td>";
    result += "Torsional moment strength based on ACI-08.";

    result += "</td>";
    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Slab </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="demo/rc/DDM/ddm.html"  target="_blank">';
    result += 'DDM';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Direct Design Method for the Flat Slab based on ACI-08.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";
    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += '<a class="linkFont" href="demo/rc/EFM/efm.html"  target="_blank">';
    result += 'EFM';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Equivalent Frame Method for the Flat Slab.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td>";

    result += '<a class="linkFont" href="demo/rc/ptSlab/ptSlab.html"  target="_blank">';
    result += 'ptSlab';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Two way post tensioned slab by Equivalent Frame Method for the Flat Slab.";
    result += "<hr>";

    result += "</td>";
    result += "</tr>";


    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";
    result += '<a class="linkFont" href="demo/rc/slabOnGrade/SlabOnGrade.html"  target="_blank">';
    result += 'slabOnGrade';
    result += '</a><br  />';

    result += "</td>";

    result += "<td>";
    result += "Conventional RC slab on glade by using stress obtained from Westergaard formula, refering PCA";
    //result += "<hr>";
    result += "</td>";

    result += "</tr>";

    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "</tr></table>";
    result += "<hr>";
    result += "<h3> Others </h3>";
    result += "<table>";
    ////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += "<td>";
    result += "</td><td style=\"width:150px;\">";

    result += 'Anchor';

    result += "</td><td>";
    result += "Breakout shear strength in only shear force based on ACI-08.";

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += '<a href="demo/rc/shearAnchor/shearAnchor.html" target="_blank">';
    result += '<button>shearAnchor</button>';
    result += '</a> &nbsp;';

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += "Breakout strength, pullout strength and concrete side-face blowout strength in only tension force based on ACI-08.";

    result += "</td></tr>";
    result += "<tr><td>";

    result += "</td><td>";
    result += "</td><td>";
    result += '<a href="demo/rc/tensionAnchor/tenAnchor.html" target="_blank">';
    result += '<button>tensionAnchor</button>';
    result += '</a> &nbsp;';

    result += "<hr>";

    result += "</td>";
    result += "</tr>";



    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;
}

////////////////////////////////////////////////////////////////////////
function Ref() {
    var result = "";
    result += '<h1>';
    result += 'Under Development...';
    result += '</h1>';

    result += "<hr>";


    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> SSet</h2>";

    result += "<p>";
    result += " You can get the immediate soil settlmenet and consolidation settlement";
    result += "</p>";


    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Consolidation soil settlement';
    result += "</li>";

    result += "<li>";
    result += 'Immediate soil settlement';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/SSet.png\" width=\"350px\">";

    result += "<p>";
    result += "<h3> Under Construction.... </h3>";
    result += "</p>";

    result += "<hr>";
    ////////////////////////////////////////////////////////////////////////

    result += "<hr>";

    document.getElementById('home').innerHTML = result;
}

function euroCode(){

    var result = "";
    result += "<h1> Euro Code/ Vietnam </h1>";
    result += "<hr>";

    result += "<h2> Seismic Load</h2>";

    result += "<table>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="euro/seEuro/seEuro.html" target="_blank">';
    result += 'SeismicEuro';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Seismic load estimation by euro code. TCVN(Vietnam Code) is based on Euro Code";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////
    result += "<tr valign=\"top\">";
    result += '<td>';
    result += "</td><td style=\"width:150px;\">";

    result += '<a class="linkFont" href="demo/pile/pileBearing/pileBear.html" target="_blank">';
    result += 'PileBearing';
    result += '</a><br  />';

    result += "</td><td>";
    result += "Pile Evaluation for driven pile based on Japanese standard";
    result += "<hr>";
    result += "</td>";
    result += "</tr>";

    //////////////////////////////////////////////////

    result += "</tr></table>";
    document.getElementById('home').innerHTML = result;

}

function underCon(){
    var result = "";
    result += '<h1>';
    result += 'Sorry, Under Construction...';
    result += '</h1>';
    result += '<p>';
    result += '<a class="linkFont" href="index.html">';
    result += 'Back to Home';
    result += '</a><br  />';
    result += '</p>';
    document.getElementById('home').innerHTML = result;
}

function bigLink(){
    var gui = require('nw.gui');
    var link = 'myanmarApp/myanmarApp.html';
    var win = gui.Window.open (link, {
	position: 'center',
	width: 720,
	height: 800
    });
    //    win.on ('loaded', function(){
    // the native onload event has just occurred
    //	var document = win.window.document;
    //    });
}

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
	var myDropdown = document.getElementById("myDropdown");
	if (myDropdown.classList.contains('show')) {
	    myDropdown.classList.remove('show');
	}
    }
}


function Projects(){

    var result = "";
    result += "<h1> Projects </h2>";
    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/fibGet.git" target="_blank">';
    result += "<h2> fibGet </h2>";
    result += "</a>";

    result += "<p>";
    result += " 1-D fiber analyisi for the reinforced concrete section";
    result += "</p>";

    result += "<img src=\"image/fibGet.png\" width=\"350px\">";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/punch.git" target="_blank">';
    result += "<h2> Punch </h2>";
    result += "</a>";

    result += "<p>";
    result += " Design of the two way slab";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Follow ACI Code';
    result += "</li>";

    result += "<li>";
    result += 'Calculate panching capacity';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/punch.jpg\" width=\"350px\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/punch/releases/download/1.0/punch.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/punch.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/punch.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";

    result += "<p>";
    result += "Coded by python3";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/efm.git" target="_blank">';
    result += "<h2> efm </h2>";
    result += "</a>";

    result += "<p>";
    result += " Equivalent Frame analysis";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/stiffSt.git" target="_blank">';
    result += "<h2> Stiffner </h2>";
    result += "</a>";

    result += "<p>";
    result += " Design of steel joint for the stiffner";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Follow Japanese Code';
    result += "</li>";

    result += "<li>";
    result += 'Calculate by Building letter';
    result += "</li>";

    result += "<li>";
    result += 'Compute HTB shear force';
    result += "</li>";
    
    result += "<li>";
    result += 'Import/Export by csv format.';
    result += "</li>";
    
    result += "<li>";
    result += 'Export pdf file report.';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/Stiff.png\" width=\"350px\">";

    result += "<br>";

    result += "<p>";
    result += "Coded by python3";
    result += "</p>";

    result += "<hr>";
    
    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/twoWaySlab.git" target="_blank">';
    result += "<h2> twoWaySlab </h2>";
    result += "</a>";

    result += "<p>";
    result += " Design of the two way slab";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Follow Japanese Code';
    result += "</li>";

    result += "<li>";
    result += 'Calculate deflection and stress of the two way RC slab';
    result += "</li>";

    result += "<li>";
    result += 'Solve plate eq. directly by Fourier Method.';
    result += "</li>";
    
    result += "<li>";
    result += 'Import/Export by csv format.';
    result += "</li>";
    
    result += "<li>";
    result += 'Export pdf file report.';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/twoWaySlab.png\" width=\"350px\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/twoWaySlab/releases/download/v1.0/twoWaySlab_win.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/twoWaySlab.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/twoWaySlab.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";

    result += "<p>";
    result += "Coded by python3";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += '<a href="https://github.com/tsunoppy/rigidWink.git" target="_blank">';
    result += "<h2> rigidWink </h2>";
    result += "</a>";

    result += "<p>";
    result += " rigidWink can solve uplift analysis of the winkler model, assuming rigid plate";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Uplift Analysis by convergent calculation';
    result += "</li>";

    result += "<li>";
    result += 'Rigid Plate Model & Winkler Model';
    result += "</li>";

    result += "</li>";
    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/rigidWink.png\" width=\"350px\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/rigidWink/releases/download/v1.0/rigidWink_win.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/rigidWink.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/rigidWink.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";

    result += "<p>";
    result += "Coded by python3";
    result += "</p>";

    result += "<hr>";



    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> MnGen </h2>";

    result += "<p>";
    result += " MnGen makes M-N interaction diagram for the RC column based on ACI.";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'M-N diagram based on ACI';
    result += "</li>";

    result += "<li>";
    result += 'Material';
    result += "</li>";

    result += "<ul><li>";
    result += 'JIS/Japan&nbsp;';
    result += "</li><li>";
    result += 'TIS/Thailand;';
    result += "</li><li>";
    result += 'GB/China;';
    result += "</li></ul>";

    result += "</li><li>";
    result += 'SDM and WSDM is available';

    result += "</li><li>";
    result += 'Bi-Axial Strength can be evaluated, only SDM';


    result += "</li>";
    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/MnGen_ScreenShot.png\" width=\"350px\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MnGen/releases/download/v1.0/mngen_win64_pack.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MnGen.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MnGen.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";
    
    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2018/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> MoveLoad </h2>";


    result += "<p>";
    result += " MoveLoad calculates the maximamu stress on the single beam due to the moving load, such as crane girder";
    result += "</p>";


    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Stress diagram and deflection of the simple beam';
    result += "</li>";

    result += "<li>";
    result += 'Moving load like crane wheel loads';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/MoveLoad.png\" width=\"350px\">";
    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MoveLoad/releases/download/v1.0/moveload_win64_pack.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MoveLoad.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/MoveLoad.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";

    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2018/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";
    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
    result += "<h2> SimpThai </h2>";


    result += "<p>";
    result += " SimpGet can get the result of the simple calculation for the verification of the design.";
    result += "</p>";

    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Capable of getting simple calculation result';
    result += "</li>";

    result += "<li>";
    result += 'Material';
    result += "</li>";

    result += "<ul><li>";
    result += 'TIS/Thailand, only';
    result += "</li></ul>";

    result += "</li><li>";
    result += 'RC, Steel, Foundation, Pile/ Pls, check demo';

    result += "</li><li>";
    result += 'GUI include saving data function';


    result += "</li>";
    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////
    result += "<img src=\"image/simpGet.png\" width=\"350px\">";

    result += "<br>";

    //-- Download Btn --
    result += "<tr><td>";
    result += "</td><td>";
    result += 'Download: &nbsp;';
    result += "</td><td>";
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/simpThai/releases/download/v1.0/simpthai_win64_pack.zip">';
    result += '<button>Windows</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/simpThai.git" target="_blank">';
    result += '<button>Mac</button>';
    result += '</a> &nbsp;';
    //result += '<a href="#" onclick=underCon() target="_blank">';
    result += '<a href="https://github.com/tsunoppy/simpThai.git" target="_blank">';
    result += '<button>Linux</button>';
    result += '</a> &nbsp;';

    result += "</td>";
    result += "</tr>";

    //-- Download Btn -- End

    result += "<p>";
    result += "Version 1.0: 2017/09, ";
    result += "Coded by Javascript + CSS + HTML on nwjs";
    result += "</p>";

    result += "<hr>";

    ////////////////////////////////////////////////////////////////////////

    result += '<a href="https://github.com/tsunoppy/frame2d.git" target="_blank">';
    result += "<h2> frame2d, demo </h2>";
    result += '</a>';

    result += "<p>";
    result += " 2D frame analysis coded by python3";
    result += "</p>";


    /////////////////////
    result += "<p>";
    result += "<h3>Feature</h3>";
    result += "</p>";

    result += "<p>";
    result += "<ul>";

    result += "<li>";
    result += 'Input & Output Method by Excel format';
    result += "</li>";

    result += "</ul>";

    result += "</p>";

    /////////////////////////////////////////////

    result += "<img src=\"image/frame2d.png\" width=\"350px\">";
    result += "<hr>";



    document.getElementById('home').innerHTML = result;

}
