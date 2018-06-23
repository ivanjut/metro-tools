/**
 * Created by ivanjut333 on 5/26/16.
 */
$(document).ready(function() {


    $("#Drums").click(function (e) {
        e.preventDefault();
        $(".pianoSounds>li, .extraSounds>li, .stringSounds>li, .brassSounds>li, .customSounds>li").hide();
        $(".drumSounds > li").toggle();
    });
    $("#claps").click(function (e) {
        e.preventDefault();
        $("#claps>ul>li").toggle();
    });
    $(function () {
        $('#clap1').click(function (e) {
            e.stopPropagation();
            $("#clap1").draggable({scroll: true});
            $("#clap1sound")[0].play();
        });
    });
    $(function () {
        $('#clap2').click(function (e) {
            e.stopPropagation();
            $("#clap2sound")[0].play();
        });
    });
    $(function () {
        $('#clap3').click(function (e) {
            e.stopPropagation();
            $("#clap3sound")[0].play();
        });
    });
    $(function () {
        $('#clap4').click(function (e) {
            e.stopPropagation();
            $("#clap4sound")[0].play();
        });
    });
    $(function () {
        $('#clap5').click(function (e) {
            e.stopPropagation();
            $("#clap5sound")[0].play();
        });
    });
    $(function () {
        $('#clap6').click(function (e) {
            e.stopPropagation();
            $("#clap6sound")[0].play();
        });
    });
    $(function () {
        $('#clap7').click(function (e) {
            e.stopPropagation();
            $("#clap7sound")[0].play();
        });
    });
    $(function () {
        $('#clap8').click(function (e) {
            e.stopPropagation();
            $("#clap8sound")[0].play();
        });
    });
    $(function () {
        $('#clap9').click(function (e) {
            e.stopPropagation();
            $("#clap9sound")[0].play();
        });
    });
    $(function () {
        $('#clap10').click(function (e) {
            e.stopPropagation();
            $("#clap10sound")[0].play();
        });
    });
    $("#808s").click(function (e) {
        e.preventDefault();
        $("#808s>ul>li").toggle()
    });
    $(function () {
        $('#8081').click(function (e) {
            e.stopPropagation();
            $("#8081sound")[0].play();
        });
    });
    $(function () {
        $('#8082').click(function (e) {
            e.stopPropagation();
            $("#8082sound")[0].play();
        });
    });
    $(function () {
        $('#8083').click(function (e) {
            e.stopPropagation();
            $("#8083sound")[0].play();
        });
    });
    $(function () {
        $('#8084').click(function (e) {
            e.stopPropagation();
            $("#8084sound")[0].play();
        });
    });
    $(function () {
        $('#8085').click(function (e) {
            e.stopPropagation();
            $("#8085sound")[0].play();
        });
    });
    $(function () {
        $('#8086').click(function (e) {
            e.stopPropagation();
            $("#8086sound")[0].play();
        });
    });
    $(function () {
        $('#8087').click(function (e) {
            e.stopPropagation();
            $("#8087sound")[0].play();
        });
    });
    $(function () {
        $('#8088').click(function (e) {
            e.stopPropagation();
            $("#8089sound")[0].play();
        });
    });
    $(function () {
        $('#8089').click(function (e) {
            e.stopPropagation();
            $("#8089sound")[0].play();
        });
    });
    $(function () {
        $('#80810').click(function (e) {
            e.stopPropagation();
            $("#80810sound")[0].play();
        });
    });
    $("#crashes").click(function (e) {
        e.preventDefault();
        $("#crashes>ul>li").toggle()
    });
    $(function () {
        $('#crash1').click(function (e) {
            e.stopPropagation();
            $("#crash1sound")[0].play();
        });
    });
    $(function () {
        $('#crash2').click(function (e) {
            e.stopPropagation();
            $("#crash2sound")[0].play();
        });
    });
    $(function () {
        $('#crash3').click(function (e) {
            e.stopPropagation();
            $("#crash3sound")[0].play();
        });
    });
    $(function () {
        $('#crash4').click(function (e) {
            e.stopPropagation();
            $("#crash4sound")[0].play();
        });
    });
    $(function () {
        $('#crash5').click(function (e) {
            e.stopPropagation();
            $("#crash5sound")[0].play();
        });
    });
    $(function () {
        $('#crash6').click(function (e) {
            e.stopPropagation();
            $("#crash6sound")[0].play();
        });
    });
    $(function () {
        $('#crash7').click(function (e) {
            e.stopPropagation();
            $("#crash7sound")[0].play();
        });
    });
    $(function () {
        $('#crash8').click(function (e) {
            e.stopPropagation();
            $("#crash8sound")[0].play();
        });
    });
    $(function () {
        $('#crash9').click(function (e) {
            e.stopPropagation();
            $("#crash9sound")[0].play();
        });
    });
    $(function () {
        $('#crash10').click(function (e) {
            e.stopPropagation();
            $("#crash10sound")[0].play();
        });
    });
    $("#FX").click(function (e) {
        e.preventDefault();
        $("#FX>ul>li").toggle()
    });
    $(function () {
        $('#drop1').click(function (e) {
            e.stopPropagation();
            $("#drop1sound")[0].play();
        });
    });
    $(function () {
        $('#drop2').click(function (e) {
            e.stopPropagation();
            $("#drop2sound")[0].play();
        });
    });
    $(function () {
        $('#drop3').click(function (e) {
            e.stopPropagation();
            $("#drop3sound")[0].play();
        });
    });
    $(function () {
        $('#fx1').click(function (e) {
            e.stopPropagation();
            $("#fx1sound")[0].play();
        });
    });
    $(function () {
        $('#fx2').click(function (e) {
            e.stopPropagation();
            $("#fx2sound")[0].play();
        });
    });
    $(function () {
        $('#fx3').click(function (e) {
            e.stopPropagation();
            $("#fx3sound")[0].play();
        });
    });
    $(function () {
        $('#fx4').click(function (e) {
            e.stopPropagation();
            $("#fx4sound")[0].play();
        });
    });
    $(function () {
        $('#fx5').click(function (e) {
            e.stopPropagation();
            $("#fx5sound")[0].play();
        });
    });
    $(function () {
        $('#fx6').click(function (e) {
            e.stopPropagation();
            $("#fx6sound")[0].play();
        });
    });
    $(function () {
        $('#fx7').click(function (e) {
            e.stopPropagation();
            $("#fx7sound")[0].play();
        });
    });
    $(function () {
        $('#fx8').click(function (e) {
            e.stopPropagation();
            $("#fx8sound")[0].play();
        });
    });
    $(function () {
        $('#fx9').click(function (e) {
            e.stopPropagation();
            $("#fx9sound")[0].play();
        });
    });
    $(function () {
        $('#fx10').click(function (e) {
            e.stopPropagation();
            $("#fx10sound")[0].play();
        });
    });
    $(function () {
        $('#sfx1').click(function (e) {
            e.stopPropagation();
            $("#sfx1sound")[0].play();
        });
    });
    $(function () {
        $('#sfx2').click(function (e) {
            e.stopPropagation();
            $("#sfx2sound")[0].play();
        });
    });
    $(function () {
        $('#sfx3').click(function (e) {
            e.stopPropagation();
            $("#sfx3sound")[0].play();
        });
    });
    $(function () {
        $('#sfx4').click(function (e) {
            e.stopPropagation();
            $("#sfx4sound")[0].play();
        });
    });
    $(function () {
        $('#tfx1').click(function (e) {
            e.stopPropagation();
            $("#tfx1sound")[0].play();
        });
    });
    $(function () {
        $('#tfx2').click(function (e) {
            e.stopPropagation();
            $("#tfx2sound")[0].play();
        });
    });
    $(function () {
        $('#tfx3').click(function (e) {
            e.stopPropagation();
            $("#tfx3sound")[0].play();
        });
    });
    $(function () {
        $('#tfx4').click(function (e) {
            e.stopPropagation();
            $("#tfx4sound")[0].play();
        });
    });
    $(function () {
        $('#tfx5').click(function (e) {
            e.stopPropagation();
            $("#tfx5sound")[0].play();
        });
    });
    $(function () {
        $('#tfx6').click(function (e) {
            e.stopPropagation();
            $("#tfx6sound")[0].play();
        });
    });
    $(function () {
        $('#tfx7').click(function (e) {
            e.stopPropagation();
            $("#tfx7sound")[0].play();
        });
    });
    $(function () {
        $('#tfx8').click(function (e) {
            e.stopPropagation();
            $("#tfx8sound")[0].play();
        });
    });
    $(function () {
        $('#tfx9').click(function (e) {
            e.stopPropagation();
            $("#tfx9sound")[0].play();
        });
    });
    $(function () {
        $('#tfx10').click(function (e) {
            e.stopPropagation();
            $("#tfx10sound")[0].play();
        });
    });
    $("#hihats").click(function (e) {
        e.preventDefault();
        $("#hihats>ul>li").toggle()
    });
    $(function () {
        $('#hh1').click(function (e) {
            e.stopPropagation();
            $("#hh1sound")[0].play();
        });
    });
    $(function () {
        $('#hh2').click(function (e) {
            e.stopPropagation();
            $("#hh2sound")[0].play();
        });
    });
    $(function () {
        $('#hh3').click(function (e) {
            e.stopPropagation();
            $("#hh3sound")[0].play();
        });
    });
    $(function () {
        $('#hh4').click(function (e) {
            e.stopPropagation();
            $("#hh4sound")[0].play();
        });
    });
    $(function () {
        $('#hh5').click(function (e) {
            e.stopPropagation();
            $("#hh5sound")[0].play();
        });
    });
    $(function () {
        $('#hh6').click(function (e) {
            e.stopPropagation();
            $("#hh6sound")[0].play();
        });
    });
    $(function () {
        $('#hh7').click(function (e) {
            e.stopPropagation();
            $("#hh7sound")[0].play();
        });
    });
    $(function () {
        $('#hh8').click(function (e) {
            e.stopPropagation();
            $("#hh8sound")[0].play();
        });
    });
    $(function () {
        $('#hh9').click(function (e) {
            e.stopPropagation();
            $("#hh9sound")[0].play();
        });
    });
    $(function () {
        $('#hh10').click(function (e) {
            e.stopPropagation();
            $("#hh10sound")[0].play();
        });
    });
    $("#hits").click(function (e) {
        e.preventDefault();
        $("#hits>ul>li").toggle()
    });
    $(function () {
        $('#hit1').click(function (e) {
            e.stopPropagation();
            $("#hit1sound")[0].play();
        });
    });
    $(function () {
        $('#hit2').click(function (e) {
            e.stopPropagation();
            $("#hit2sound")[0].play();
        });
    });
    $(function () {
        $('#hit3').click(function (e) {
            e.stopPropagation();
            $("#hit3sound")[0].play();
        });
    });
    $(function () {
        $('#hit4').click(function (e) {
            e.stopPropagation();
            $("#hit4sound")[0].play();
        });
    });
    $(function () {
        $('#hit5').click(function (e) {
            e.stopPropagation();
            $("#hit5sound")[0].play();
        });
    });
    $(function () {
        $('#hit6').click(function (e) {
            e.stopPropagation();
            $("#hit6sound")[0].play();
        });
    });
    $(function () {
        $('#hit7').click(function (e) {
            e.stopPropagation();
            $("#hit7sound")[0].play();
        });
    });
    $(function () {
        $('#hit8').click(function (e) {
            e.stopPropagation();
            $("#hit8sound")[0].play();
        });
    });
    $("#kicks").click(function (e) {
        e.preventDefault();
        $("#kicks>ul>li").toggle()
    });
    $(function () {
        $('#kick1').click(function (e) {
            e.stopPropagation();
            $("#kick1sound")[0].play();
        });
    });
    $(function () {
        $('#kick2').click(function (e) {
            e.stopPropagation();
            $("#kick2sound")[0].play();
        });
    });
    $(function () {
        $('#kick3').click(function (e) {
            e.stopPropagation();
            $("#kick3sound")[0].play();
        });
    });
    $(function () {
        $('#kick4').click(function (e) {
            e.stopPropagation();
            $("#kick4sound")[0].play();
        });
    });
    $(function () {
        $('#kick5').click(function (e) {
            e.stopPropagation();
            $("#kick5sound")[0].play();
        });
    });
    $(function () {
        $('#kick6').click(function (e) {
            e.stopPropagation();
            $("#kick6sound")[0].play();
        });
    });
    $(function () {
        $('#kick7').click(function (e) {
            e.stopPropagation();
            $("#kick7sound")[0].play();
        });
    });
    $(function () {
        $('#kick8').click(function (e) {
            e.stopPropagation();
            $("#kick8sound")[0].play();
        });
    });
    $(function () {
        $('#kick9').click(function (e) {
            e.stopPropagation();
            $("#kick9sound")[0].play();
        });
    });
    $(function () {
        $('#kick10').click(function (e) {
            e.stopPropagation();
            $("#kick10sound")[0].play();
        });
    });
    $(function () {
        $('#kick11').click(function (e) {
            e.stopPropagation();
            $("#kick11sound")[0].play();
        });
    });
    $(function () {
        $('#kick12').click(function (e) {
            e.stopPropagation();
            $("#kick12sound")[0].play();
        });
    });
    $(function () {
        $('#kick13').click(function (e) {
            e.stopPropagation();
            $("#kick13sound")[0].play();
        });
    });
    $(function () {
        $('#kick14').click(function (e) {
            e.stopPropagation();
            $("#kick14sound")[0].play();
        });
    });
    $(function () {
        $('#kick15').click(function (e) {
            e.stopPropagation();
            $("#kick15sound")[0].play();
        });
    });
    $(function () {
        $('#kick16').click(function (e) {
            e.stopPropagation();
            $("#kick16sound")[0].play();
        });
    });
    $(function () {
        $('#kick17').click(function (e) {
            e.stopPropagation();
            $("#kick17sound")[0].play();
        });
    });
    $(function () {
        $('#kick18').click(function (e) {
            e.stopPropagation();
            $("#kick18sound")[0].play();
        });
    });
    $(function () {
        $('#kick19').click(function (e) {
            e.stopPropagation();
            $("#kick19sound")[0].play();
        });
    });
    $(function () {
        $('#kick20').click(function (e) {
            e.stopPropagation();
            $("#kick20sound")[0].play();
        });
    });
    $("#openhats").click(function (e) {
        e.preventDefault();
        $("#openhats>ul>li").toggle()
    });
    $(function () {
        $('#oh1').click(function (e) {
            e.stopPropagation();
            $("#oh1sound")[0].play();
        });
    });
    $(function () {
        $('#oh2').click(function (e) {
            e.stopPropagation();
            $("#oh2sound")[0].play();
        });
    });
    $(function () {
        $('#oh3').click(function (e) {
            e.stopPropagation();
            $("#oh3sound")[0].play();
        });
    });
    $(function () {
        $('#oh4').click(function (e) {
            e.stopPropagation();
            $("#oh4sound")[0].play();
        });
    });
    $(function () {
        $('#oh5').click(function (e) {
            e.stopPropagation();
            $("#oh5sound")[0].play();
        });
    });
    $(function () {
        $('#oh6').click(function (e) {
            e.stopPropagation();
            $("#oh6sound")[0].play();
        });
    });
    $(function () {
        $('#oh7').click(function (e) {
            e.stopPropagation();
            $("#oh7sound")[0].play();
        });
    });
    $(function () {
        $('#oh8').click(function (e) {
            e.stopPropagation();
            $("#oh8sound")[0].play();
        });
    });
    $("#percs").click(function (e) {
        e.preventDefault();
        $("#percs>ul>li").toggle()
    });
    $(function () {
        $('#perc1').click(function (e) {
            e.stopPropagation();
            $("#perc1sound")[0].play();
        });
    });
    $(function () {
        $('#perc2').click(function (e) {
            e.stopPropagation();
            $("#perc2sound")[0].play();
        });
    });
    $(function () {
        $('#perc3').click(function (e) {
            e.stopPropagation();
            $("#perc3sound")[0].play();
        });
    });
    $(function () {
        $('#perc4').click(function (e) {
            e.stopPropagation();
            $("#perc4sound")[0].play();
        });
    });
    $(function () {
        $('#perc5').click(function (e) {
            e.stopPropagation();
            $("#perc5sound")[0].play();
        });
    });
    $(function () {
        $('#perc6').click(function (e) {
            e.stopPropagation();
            $("#perc6sound")[0].play();
        });
    });
    $(function () {
        $('#perc7').click(function (e) {
            e.stopPropagation();
            $("#perc7sound")[0].play();
        });
    });
    $(function () {
        $('#perc8').click(function (e) {
            e.stopPropagation();
            $("#perc8sound")[0].play();
        });
    });
    $(function () {
        $('#perc9').click(function (e) {
            e.stopPropagation();
            $("#perc9sound")[0].play();
        });
    });
    $(function () {
        $('#perc10').click(function (e) {
            e.stopPropagation();
            $("#perc10sound")[0].play();
        });
    });
    $("#snares").click(function (e) {
        e.preventDefault();
        $("#snares>ul>li").toggle()
    });
    $(function () {
        $('#snare1').click(function (e) {
            e.stopPropagation();
            $("#snare1sound")[0].play();
        });
    });
    $(function () {
        $('#snare2').click(function (e) {
            e.stopPropagation();
            $("#snare2sound")[0].play();
        });
    });
    $(function () {
        $('#snare3').click(function (e) {
            e.stopPropagation();
            $("#snare3sound")[0].play();
        });
    });
    $(function () {
        $('#snare4').click(function (e) {
            e.stopPropagation();
            $("#snare4sound")[0].play();
        });
    });
    $(function () {
        $('#snare5').click(function (e) {
            e.stopPropagation();
            $("#snare5sound")[0].play();
        });
    });
    $(function () {
        $('#snare6').click(function (e) {
            e.stopPropagation();
            $("#snare6sound")[0].play();
        });
    });
    $(function () {
        $('#snare7').click(function (e) {
            e.stopPropagation();
            $("#snare7sound")[0].play();
        });
    });
    $(function () {
        $('#snare8').click(function (e) {
            e.stopPropagation();
            $("#snare8sound")[0].play();
        });
    });
    $(function () {
        $('#snare9').click(function (e) {
            e.stopPropagation();
            $("#snare9sound")[0].play();
        });
    });
    $(function () {
        $('#snare10').click(function (e) {
            e.stopPropagation();
            $("#snare10sound")[0].play();
        });
    });
    $(function () {
        $('#snare11').click(function (e) {
            e.stopPropagation();
            $("#snare11sound")[0].play();
        });
    });
    $(function () {
        $('#snare12').click(function (e) {
            e.stopPropagation();
            $("#snare12sound")[0].play();
        });
    });
    $(function () {
        $('#snare13').click(function (e) {
            e.stopPropagation();
            $("#snare13sound")[0].play();
        });
    });
    $(function () {
        $('#snare14').click(function (e) {
            e.stopPropagation();
            $("#snare14sound")[0].play();
        });
    });
    $(function () {
        $('#snare15').click(function (e) {
            e.stopPropagation();
            $("#snare15sound")[0].play();
        });
    });
    $("#vox").click(function (e) {
        e.preventDefault();
        $("#vox>ul>li").toggle()
    });
    $(function () {
        $('#vox1').click(function (e) {
            e.stopPropagation();
            $("#vox1sound")[0].play();
        });
    });
    $(function () {
        $('#vox2').click(function (e) {
            e.stopPropagation();
            $("#vox2sound")[0].play();
        });
    });
    $(function () {
        $('#vox3').click(function (e) {
            e.stopPropagation();
            $("#vox3sound")[0].play();
        });
    });
    $(function () {
        $('#vox4').click(function (e) {
            e.stopPropagation();
            $("#vox4sound")[0].play();
        });
    });
    $(function () {
        $('#vox5').click(function (e) {
            e.stopPropagation();
            $("#vox5sound")[0].play();
        });
    });
    $(function () {
        $('#vox6').click(function (e) {
            e.stopPropagation();
            $("#vox6sound")[0].play();
        });
    });
    $(function () {
        $('#vox7').click(function (e) {
            e.stopPropagation();
            $("#vox7sound")[0].play();
        });
    });
    $(function () {
        $('#vox8').click(function (e) {
            e.stopPropagation();
            $("#vox8sound")[0].play();
        });
    });
    $(function () {
        $('#vox9').click(function (e) {
            e.stopPropagation();
            $("#vox9sound")[0].play();
        });
    });
    $(function () {
        $('#vox10').click(function (e) {
            e.stopPropagation();
            $("#vox10sound")[0].play();
        });
    });


    $("#Extras").click(function (e) {
        e.preventDefault();
        $(".pianoSounds>li, .drumSounds>li, .stringSounds>li, .brassSounds>li, .customSounds>li").hide();
        $(".extraSounds>li").toggle()
    });
    $("#extraSounds").click(function (e) {
        e.preventDefault();
        $("#extraSounds>ul>li").toggle();
    });
    $(function () {
        $('#mafia').click(function (e) {
            e.stopPropagation();
            $("#mafiasound")[0].play();
        });
    });
    $(function () {
        $('#bomb').click(function (e) {
            e.stopPropagation();
            $("#bombsound")[0].play();
        });
    });
    $(function () {
        $('#choir').click(function (e) {
            e.stopPropagation();
            $("#choirsound")[0].play();
        });
    });
    $(function () {
        $('#churchbell').click(function (e) {
            e.stopPropagation();
            $("#churchbellsound")[0].play();
        });
    });
    $(function () {
        $('#djSpin').click(function (e) {
            e.stopPropagation();
            $("#djSpinsound")[0].play();
        });
    });
    $(function () {
        $('#loop').click(function (e) {
            e.stopPropagation();
            $("#loopsound")[0].play();
        });
    });
    $(function () {
        $('#lumi').click(function (e) {
            e.stopPropagation();
            $("#lumisound")[0].play();
        });
    });
    $(function () {
        $('#narcatics').click(function (e) {
            e.stopPropagation();
            $("#narcaticssound")[0].play();
        });
    });
    $(function () {
        $('#organ').click(function (e) {
            e.stopPropagation();
            $("#organsound")[0].play();
        });
    });
    $(function () {
        $('#pizzi').click(function (e) {
            e.stopPropagation();
            $("#pizzisound")[0].play();
        });
    });
    $(function () {
        $('#sonic').click(function (e) {
            e.stopPropagation();
            $("#sonicsound")[0].play();
        });
    });
    $(function () {
        $('#tubular').click(function (e) {
            e.stopPropagation();
            $("#tubularsound")[0].play();
        });
    });
    $(function () {
        $('#mbtag').click(function (e) {
            e.stopPropagation();
            $("#mbtagsound")[0].play();
        });
    });
    $(function () {
        $('#djesco').click(function (e) {
            e.stopPropagation();
            $("#djescosound")[0].play();
        });
    });
    $(function () {
        $('#djeskimo').click(function (e) {
            e.stopPropagation();
            $("#djeskimosound")[0].play();
        });
    });
    $(function () {
        $('#eskimo').click(function (e) {
            e.stopPropagation();
            $("#eskimosound")[0].play();
        });
    });
    $(function () {
        $('#youngmetro').click(function (e) {
            e.stopPropagation();
            $("#youngmetrosound")[0].play();
        });
    });
    $(function () {
        $('#travisscott').click(function (e) {
            e.stopPropagation();
            $("#travisscottsound")[0].play();
        });
    });
    $(function () {
        $('#london').click(function (e) {
            e.stopPropagation();
            $("#londonsound")[0].play();
        });
    });
    $(function () {
        $('#zaytoven').click(function (e) {
            e.stopPropagation();
            $("#zaytovensound")[0].play();
        });
    });
    $(function () {
        $('#drakeyeah').click(function (e) {
            e.stopPropagation();
            $("#drakeyeahsound")[0].play();
        });
    });
    $(function () {
        $('#stephcurry').click(function (e) {
            e.stopPropagation();
            $("#stephcurrysound")[0].play();
        });
    });
    $(function () {
        $('#gucci').click(function (e) {
            e.stopPropagation();
            $("#guccisound")[0].play();
        });
    });
    $(function () {
        $('#ovo').click(function (e) {
            e.stopPropagation();
            $("#ovosound")[0].play();
        });
    });
    $(function () {
        $('#sixdrake').click(function (e) {
            e.stopPropagation();
            $("#sixdrakesound")[0].play();
        });
    });
    $(function () {
        $('#straightup').click(function (e) {
            e.stopPropagation();
            $("#straightupsound")[0].play();
        });
    });


    $("#Piano").click(function (e) {
        e.preventDefault();
        $(".drumSounds>li, .extraSounds>li, .stringSounds>li, .brassSounds>li, .customSounds>li").hide();
        $(".pianoSounds > li").toggle()
    });
    $("#notes").click(function (e) {
        e.preventDefault();
        $("#notes>ul>li").toggle();
    });
    $(function () {
        $('#note001').click(function (e) {
            e.stopPropagation();
            $("#note001sound")[0].play();
        });
    });
    $(function () {
        $('#note002').click(function (e) {
            e.stopPropagation();
            $("#note002sound")[0].play();
        });
    });
    $(function () {
        $('#note003').click(function (e) {
            e.stopPropagation();
            $("#note003sound")[0].play();
        });
    });
    $(function () {
        $('#note004').click(function (e) {
            e.stopPropagation();
            $("#note004sound")[0].play();
        });
    });
    $(function () {
        $('#note005').click(function (e) {
            e.stopPropagation();
            $("#note005sound")[0].play();
        });
    });
    $(function () {
        $('#note006').click(function (e) {
            e.stopPropagation();
            $("#note006sound")[0].play();
        });
    });
    $(function () {
        $('#note007').click(function (e) {
            e.stopPropagation();
            $("#note007sound")[0].play();
        });
    });
    $(function () {
        $('#note008').click(function (e) {
            e.stopPropagation();
            $("#note008sound")[0].play();
        });
    });
    $(function () {
        $('#note009').click(function (e) {
            e.stopPropagation();
            $("#note009sound")[0].play();
        });
    });
    $(function () {
        $('#note010').click(function (e) {
            e.stopPropagation();
            $("#note010sound")[0].play();
        });
    });
    $(function () {
        $('#note011').click(function (e) {
            e.stopPropagation();
            $("#note011sound")[0].play();
        });
    });
    $(function () {
        $('#note012').click(function (e) {
            e.stopPropagation();
            $("#note012sound")[0].play();
        });
    });
    $(function () {
        $('#note013').click(function (e) {
            e.stopPropagation();
            $("#note013sound")[0].play();
        });
    });
    $(function () {
        $('#note014').click(function (e) {
            e.stopPropagation();
            $("#note014sound")[0].play();
        });
    });
    $(function () {
        $('#note015').click(function (e) {
            e.stopPropagation();
            $("#note015sound")[0].play();
        });
    });
    $(function () {
        $('#note016').click(function (e) {
            e.stopPropagation();
            $("#note016sound")[0].play();
        });
    });
    $(function () {
        $('#note017').click(function (e) {
            e.stopPropagation();
            $("#note017sound")[0].play();
        });
    });
    $(function () {
        $('#note018').click(function (e) {
            e.stopPropagation();
            $("#note018sound")[0].play();
        });
    });
    $(function () {
        $('#note019').click(function (e) {
            e.stopPropagation();
            $("#note019sound")[0].play();
        });
    });
    $(function () {
        $('#note020').click(function (e) {
            e.stopPropagation();
            $("#note020sound")[0].play();
        });
    });
    $(function () {
        $('#note021').click(function (e) {
            e.stopPropagation();
            $("#note021sound")[0].play();
        });
    });
    $(function () {
        $('#note022').click(function (e) {
            e.stopPropagation();
            $("#note022sound")[0].play();
        });
    });
    $(function () {
        $('#note023').click(function (e) {
            e.stopPropagation();
            $("#note023sound")[0].play();
        });
    });
    $(function () {
        $('#note024').click(function (e) {
            e.stopPropagation();
            $("#note024sound")[0].play();
        });
    });
    $(function () {
        $('#note025').click(function (e) {
            e.stopPropagation();
            $("#note025sound")[0].play();
        });
    });
    $(function () {
        $('#note026').click(function (e) {
            e.stopPropagation();
            $("#note026sound")[0].play();
        });
    });
    $(function () {
        $('#note027').click(function (e) {
            e.stopPropagation();
            $("#note027sound")[0].play();
        });
    });
    $(function () {
        $('#note028').click(function (e) {
            e.stopPropagation();
            $("#note028sound")[0].play();
        });
    });
    $(function () {
        $('#note029').click(function (e) {
            e.stopPropagation();
            $("#note029sound")[0].play();
        });
    });
    $(function () {
        $('#note030').click(function (e) {
            e.stopPropagation();
            $("#note030sound")[0].play();
        });
    });
    $(function () {
        $('#note031').click(function (e) {
            e.stopPropagation();
            $("#note031sound")[0].play();
        });
    });
    $(function () {
        $('#note032').click(function (e) {
            e.stopPropagation();
            $("#note032sound")[0].play();
        });
    });
    $(function () {
        $('#note033').click(function (e) {
            e.stopPropagation();
            $("#note033sound")[0].play();
        });
    });
    $(function () {
        $('#note034').click(function (e) {
            e.stopPropagation();
            $("#note034sound")[0].play();
        });
    });
    $(function () {
        $('#note035').click(function (e) {
            e.stopPropagation();
            $("#note035sound")[0].play();
        });
    });
    $(function () {
        $('#note036').click(function (e) {
            e.stopPropagation();
            $("#note036sound")[0].play();
        });
    });
    $(function () {
        $('#note037').click(function (e) {
            e.stopPropagation();
            $("#note037sound")[0].play();
        });
    });
    $(function () {
        $('#note038').click(function (e) {
            e.stopPropagation();
            $("#note038sound")[0].play();
        });
    });
    $(function () {
        $('#note039').click(function (e) {
            e.stopPropagation();
            $("#note039sound")[0].play();
        });
    });
    $(function () {
        $('#note040').click(function (e) {
            e.stopPropagation();
            $("#note040sound")[0].play();
        });
    });
    $(function () {
        $('#note041').click(function (e) {
            e.stopPropagation();
            $("#note041sound")[0].play();
        });
    });
    $(function () {
        $('#note042').click(function (e) {
            e.stopPropagation();
            $("#note042sound")[0].play();
        });
    });
    $(function () {
        $('#note043').click(function (e) {
            e.stopPropagation();
            $("#note043sound")[0].play();
        });
    });
    $(function () {
        $('#note044').click(function (e) {
            e.stopPropagation();
            $("#note044sound")[0].play();
        });
    });
    $(function () {
        $('#note045').click(function (e) {
            e.stopPropagation();
            $("#note045sound")[0].play();
        });
    });
    $(function () {
        $('#note046').click(function (e) {
            e.stopPropagation();
            $("#note046sound")[0].play();
        });
    });
    $(function () {
        $('#note047').click(function (e) {
            e.stopPropagation();
            $("#note047sound")[0].play();
        });
    });
    $(function () {
        $('#note048').click(function (e) {
            e.stopPropagation();
            $("#note048sound")[0].play();
        });
    });
    $(function () {
        $('#note049').click(function (e) {
            e.stopPropagation();
            $("#note049sound")[0].play();
        });
    });
    $(function () {
        $('#note050').click(function (e) {
            e.stopPropagation();
            $("#note050sound")[0].play();
        });
    });
    $(function () {
        $('#note051').click(function (e) {
            e.stopPropagation();
            $("#note051sound")[0].play();
        });
    });
    $(function () {
        $('#note052').click(function (e) {
            e.stopPropagation();
            $("#note052sound")[0].play();
        });
    });
    $(function () {
        $('#note053').click(function (e) {
            e.stopPropagation();
            $("#note053sound")[0].play();
        });
    });
    $(function () {
        $('#note054').click(function (e) {
            e.stopPropagation();
            $("#note054sound")[0].play();
        });
    });
    $(function () {
        $('#note055').click(function (e) {
            e.stopPropagation();
            $("#note055sound")[0].play();
        });
    });
    $(function () {
        $('#note056').click(function (e) {
            e.stopPropagation();
            $("#note056sound")[0].play();
        });
    });
    $(function () {
        $('#note057').click(function (e) {
            e.stopPropagation();
            $("#note057sound")[0].play();
        });
    });
    $(function () {
        $('#note058').click(function (e) {
            e.stopPropagation();
            $("#note058sound")[0].play();
        });
    });
    $(function () {
        $('#note059').click(function (e) {
            e.stopPropagation();
            $("#note059sound")[0].play();
        });
    });
    $(function () {
        $('#note060').click(function (e) {
            e.stopPropagation();
            $("#note060sound")[0].play();
        });
    });
    $(function () {
        $('#note061').click(function (e) {
            e.stopPropagation();
            $("#note061sound")[0].play();
        });
    });
    $(function () {
        $('#note062').click(function (e) {
            e.stopPropagation();
            $("#note062sound")[0].play();
        });
    });
    $(function () {
        $('#note063').click(function (e) {
            e.stopPropagation();
            $("#note063sound")[0].play();
        });
    });
    $(function () {
        $('#note064').click(function (e) {
            e.stopPropagation();
            $("#note064sound")[0].play();
        });
    });
    $(function () {
        $('#note065').click(function (e) {
            e.stopPropagation();
            $("#note065sound")[0].play();
        });
    });
    $(function () {
        $('#note066').click(function (e) {
            e.stopPropagation();
            $("#note066sound")[0].play();
        });
    });
    $(function () {
        $('#note067').click(function (e) {
            e.stopPropagation();
            $("#note067sound")[0].play();
        });
    });
    $(function () {
        $('#note068').click(function (e) {
            e.stopPropagation();
            $("#note068sound")[0].play();
        });
    });

    $("#chords").click(function (e) {
        e.preventDefault();
        $("#chords>ul>li").toggle();
    });


    $("#Strings").click(function (e) {
        e.preventDefault();
        $(".pianoSounds>li, .extraSounds>li, .drumSounds>li, .brassSounds>li, .customSounds>li").hide();
        $(".stringSounds>li").toggle()
    });
    $("#violin").click(function (e) {
        e.preventDefault();
        $("#violin>ul>li").toggle();
    });
    $(function () {
        $('#violin1').click(function (e) {
            e.stopPropagation();
            $("#violin1sound")[0].play();
        });
    });
    $(function () {
        $('#violin2').click(function (e) {
            e.stopPropagation();
            $("#violin2sound")[0].play();
        });
    });
    $(function () {
        $('#violin3').click(function (e) {
            e.stopPropagation();
            $("#violin3sound")[0].play();
        });
    });
    $(function () {
        $('#violin4').click(function (e) {
            e.stopPropagation();
            $("#violin4sound")[0].play();
        });
    });
    $(function () {
        $('#violin5').click(function (e) {
            e.stopPropagation();
            $("#violin5sound")[0].play();
        });
    });
    $(function () {
        $('#violin6').click(function (e) {
            e.stopPropagation();
            $("#violin6sound")[0].play();
        });
    });
    $(function () {
        $('#violin7').click(function (e) {
            e.stopPropagation();
            $("#violin7sound")[0].play();
        });
    });
    $(function () {
        $('#violin8').click(function (e) {
            e.stopPropagation();
            $("#violin8sound")[0].play();
        });
    });
    $(function () {
        $('#violin9').click(function (e) {
            e.stopPropagation();
            $("#violin9sound")[0].play();
        });
    });
    $(function () {
        $('#violin10').click(function (e) {
            e.stopPropagation();
            $("#violin10sound")[0].play();
        });
    });
    $(function () {
        $('#violin11').click(function (e) {
            e.stopPropagation();
            $("#violin11sound")[0].play();
        });
    });
    $(function () {
        $('#violin12').click(function (e) {
            e.stopPropagation();
            $("#violin12sound")[0].play();
        });
    });
    $(function () {
        $('#violin13').click(function (e) {
            e.stopPropagation();
            $("#violin13sound")[0].play();
        });
    });


    $("#Brass").click(function (e) {
        e.preventDefault();
        $(".pianoSounds>li, .extraSounds>li, .stringSounds>li, .drumSounds>li, .customSounds>li").hide();
        $(".brassSounds>li").toggle()
    });
    $("#trumpet").click(function (e) {
        e.preventDefault();
        $("#trumpet>ul>li").toggle();
    });
    $(function () {
        $('#trumpet1').click(function (e) {
            e.stopPropagation();
            $("#trumpet1sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet2').click(function (e) {
            e.stopPropagation();
            $("#trumpet2sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet3').click(function (e) {
            e.stopPropagation();
            $("#trumpet3sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet4').click(function (e) {
            e.stopPropagation();
            $("#trumpet4sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet5').click(function (e) {
            e.stopPropagation();
            $("#trumpet5sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet6').click(function (e) {
            e.stopPropagation();
            $("#trumpet6sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet7').click(function (e) {
            e.stopPropagation();
            $("#trumpet7sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet8').click(function (e) {
            e.stopPropagation();
            $("#trumpet8sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet9').click(function (e) {
            e.stopPropagation();
            $("#trumpet9sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet10').click(function (e) {
            e.stopPropagation();
            $("#trumpet10sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet11').click(function (e) {
            e.stopPropagation();
            $("#trumpet11sound")[0].play();
        });
    });
    $(function () {
        $('#trumpet12').click(function (e) {
            e.stopPropagation();
            $("#trumpet12sound")[0].play();
        });
    });
    $("#tuba").click(function (e) {
        e.preventDefault();
        $("#tuba>ul>li").toggle();
    });
    $(function () {
        $('#tuba1').click(function (e) {
            e.stopPropagation();
            $("#tuba1sound")[0].play();
        });
    });
    $(function () {
        $('#tuba2').click(function (e) {
            e.stopPropagation();
            $("#tuba2sound")[0].play();
        });
    });
    $(function () {
        $('#tuba3').click(function (e) {
            e.stopPropagation();
            $("#tuba3sound")[0].play();
        });
    });


    $("#Custom").click(function (e) {
        e.preventDefault();
        $(".pianoSounds>li, .extraSounds>li, .stringSounds>li, .brassSounds>li, .drumSounds>li").hide();
        $(".customSounds>li").toggle()
    });


    $(".soundboard").on('scroll', function () {
        $("#meter").scrollLeft($(this).scrollLeft());
    });


    var soundlist = {};


    $(" #claps .add").click(function (e) {
        e.stopPropagation();
        var soundid = this.id.substring(2) + "sound";
        var clickCount = ($("#claps .add").data("click-count") || 0) + 1;
        $("#claps .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#soundBlock1").show();
        } else if (clickCount == 2) {
            $("#soundBlock2").show();
        } else if (clickCount == 3) {
            $("#soundBlock3").show();
        } else if (clickCount == 4) {
            $("#soundBlock4").show();
        } else if (clickCount == 5) {
            $("#soundBlock5").show();
        } else if (clickCount == 6) {
            $("#soundBlock6").show();
        } else if (clickCount == 7) {
            $("#soundBlock7").show();
        } else if (clickCount == 8) {
            $("#soundBlock8").show();
        } else if (clickCount == 9) {
            $("#soundBlock9").show();
        } else if (clickCount == 10) {
            $("#soundBlock10").show();
        } else if (clickCount == 11) {
            $("#soundBlock11").show();
        } else if (clickCount == 12) {
            $("#soundBlock12").show();
        } else if (clickCount == 13) {
            $("#soundBlock13").show();
        } else if (clickCount == 14) {
            $("#soundBlock14").show();
        } else if (clickCount == 15) {
            $("#soundBlock15").show();
        } else if (clickCount == 16) {
            $("#soundBlock16").show();
        } else if (clickCount == 17) {
            $("#soundBlock17").show();
        }
    });
    $(" #808s .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#808s .add").data("click-count") || 0) + 1;
        $("#808s .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound2Block1").show();
        } else if (clickCount == 2) {
            $("#sound2Block2").show();
        } else if (clickCount == 3) {
            $("#sound2Block3").show();
        } else if (clickCount == 4) {
            $("#sound2Block4").show();
        } else if (clickCount == 5) {
            $("#sound2Block5").show();
        } else if (clickCount == 6) {
            $("#sound2Block6").show();
        } else if (clickCount == 7) {
            $("#sound2Block7").show();
        } else if (clickCount == 8) {
            $("#sound2Block8").show();
        } else if (clickCount == 9) {
            $("#sound2Block9").show();
        } else if (clickCount == 10) {
            $("#sound2Block10").show();
        } else if (clickCount == 11) {
            $("#sound2Block11").show();
        } else if (clickCount == 12) {
            $("#sound2Block12").show();
        } else if (clickCount == 13) {
            $("#sound2Block13").show();
        } else if (clickCount == 14) {
            $("#sound2Block14").show();
        } else if (clickCount == 15) {
            $("#sound2Block15").show();
        } else if (clickCount == 16) {
            $("#sound2Block16").show();
        } else if (clickCount == 17) {
            $("#sound2Block17").show();
        }
    });
    $(" #crashes .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#crashes .add").data("click-count") || 0) + 1;
        $("#crashes .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound3Block1").show();
        } else if (clickCount == 2) {
            $("#sound3Block2").show();
        } else if (clickCount == 3) {
            $("#sound3Block3").show();
        } else if (clickCount == 4) {
            $("#sound3Block4").show();
        } else if (clickCount == 5) {
            $("#sound3Block5").show();
        } else if (clickCount == 6) {
            $("#sound3Block6").show();
        } else if (clickCount == 7) {
            $("#sound3Block7").show();
        } else if (clickCount == 8) {
            $("#sound3Block8").show();
        } else if (clickCount == 9) {
            $("#sound3Block9").show();
        } else if (clickCount == 10) {
            $("#sound3Block10").show();
        } else if (clickCount == 11) {
            $("#sound3Block11").show();
        } else if (clickCount == 12) {
            $("#sound3Block12").show();
        } else if (clickCount == 13) {
            $("#sound3Block13").show();
        } else if (clickCount == 14) {
            $("#sound3Block14").show();
        } else if (clickCount == 15) {
            $("#sound3Block15").show();
        } else if (clickCount == 16) {
            $("#sound3Block16").show();
        } else if (clickCount == 17) {
            $("#sound3Block17").show();
        }
    });
    $(" #FX .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#FX .add").data("click-count") || 0) + 1;
        $("#FX .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound4Block1").show();
        } else if (clickCount == 2) {
            $("#sound4Block2").show();
        } else if (clickCount == 3) {
            $("#sound4Block3").show();
        } else if (clickCount == 4) {
            $("#sound4Block4").show();
        } else if (clickCount == 5) {
            $("#sound4Block5").show();
        } else if (clickCount == 6) {
            $("#sound4Block6").show();
        } else if (clickCount == 7) {
            $("#sound4Block7").show();
        } else if (clickCount == 8) {
            $("#sound4Block8").show();
        } else if (clickCount == 9) {
            $("#sound4Block9").show();
        } else if (clickCount == 10) {
            $("#sound4Block10").show();
        } else if (clickCount == 11) {
            $("#sound4Block11").show();
        } else if (clickCount == 12) {
            $("#sound4Block12").show();
        } else if (clickCount == 13) {
            $("#sound4Block13").show();
        } else if (clickCount == 14) {
            $("#sound4Block14").show();
        } else if (clickCount == 15) {
            $("#sound4Block15").show();
        } else if (clickCount == 16) {
            $("#sound4Block16").show();
        } else if (clickCount == 17) {
            $("#sound4Block17").show();
        }
    });
    $(" #hihats .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#hihats .add").data("click-count") || 0) + 1;
        $("#hihats .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound5Block1").show();
        } else if (clickCount == 2) {
            $("#sound5Block2").show();
        } else if (clickCount == 3) {
            $("#sound5Block3").show();
        } else if (clickCount == 4) {
            $("#sound5Block4").show();
        } else if (clickCount == 5) {
            $("#sound5Block5").show();
        } else if (clickCount == 6) {
            $("#sound5Block6").show();
        } else if (clickCount == 7) {
            $("#sound5Block7").show();
        } else if (clickCount == 8) {
            $("#sound5Block8").show();
        } else if (clickCount == 9) {
            $("#sound5Block9").show();
        } else if (clickCount == 10) {
            $("#sound5Block10").show();
        } else if (clickCount == 11) {
            $("#sound5Block11").show();
        } else if (clickCount == 12) {
            $("#sound5Block12").show();
        } else if (clickCount == 13) {
            $("#sound5Block13").show();
        } else if (clickCount == 14) {
            $("#sound5Block14").show();
        } else if (clickCount == 15) {
            $("#sound5Block15").show();
        } else if (clickCount == 16) {
            $("#sound5Block16").show();
        } else if (clickCount == 17) {
            $("#sound5Block17").show();
        }
    });
    $(" #hits .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#hits .add").data("click-count") || 0) + 1;
        $("#hits .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound6Block1").show();
        } else if (clickCount == 2) {
            $("#sound6Block2").show();
        } else if (clickCount == 3) {
            $("#sound6Block3").show();
        } else if (clickCount == 4) {
            $("#sound6Block4").show();
        } else if (clickCount == 5) {
            $("#sound6Block5").show();
        } else if (clickCount == 6) {
            $("#sound6Block6").show();
        } else if (clickCount == 7) {
            $("#sound6Block7").show();
        } else if (clickCount == 8) {
            $("#sound6Block8").show();
        } else if (clickCount == 9) {
            $("#sound6Block9").show();
        } else if (clickCount == 10) {
            $("#sound6Block10").show();
        } else if (clickCount == 11) {
            $("#sound6Block11").show();
        } else if (clickCount == 12) {
            $("#sound6Block12").show();
        } else if (clickCount == 13) {
            $("#sound6Block13").show();
        } else if (clickCount == 14) {
            $("#sound6Block14").show();
        } else if (clickCount == 15) {
            $("#sound6Block15").show();
        } else if (clickCount == 16) {
            $("#sound6Block16").show();
        } else if (clickCount == 17) {
            $("#sound6Block17").show();
        }
    });
    $(" #kicks .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#kicks .add").data("click-count") || 0) + 1;
        $("#kicks .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound7Block1").show();
        } else if (clickCount == 2) {
            $("#sound7Block2").show();
        } else if (clickCount == 3) {
            $("#sound7Block3").show();
        } else if (clickCount == 4) {
            $("#sound7Block4").show();
        } else if (clickCount == 5) {
            $("#sound7Block5").show();
        } else if (clickCount == 6) {
            $("#sound7Block6").show();
        } else if (clickCount == 7) {
            $("#sound7Block7").show();
        } else if (clickCount == 8) {
            $("#sound7Block8").show();
        } else if (clickCount == 9) {
            $("#sound7Block9").show();
        } else if (clickCount == 10) {
            $("#sound7Block10").show();
        } else if (clickCount == 11) {
            $("#sound7Block11").show();
        } else if (clickCount == 12) {
            $("#sound7Block12").show();
        } else if (clickCount == 13) {
            $("#sound7Block13").show();
        } else if (clickCount == 14) {
            $("#sound7Block14").show();
        } else if (clickCount == 15) {
            $("#sound7Block15").show();
        } else if (clickCount == 16) {
            $("#sound7Block16").show();
        } else if (clickCount == 17) {
            $("#sound7Block17").show();
        }
    });
    $(" #openhats .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#openhats .add").data("click-count") || 0) + 1;
        $("#openhats .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound8Block1").show();
        } else if (clickCount == 2) {
            $("#sound8Block2").show();
        } else if (clickCount == 3) {
            $("#sound8Block3").show();
        } else if (clickCount == 4) {
            $("#sound8Block4").show();
        } else if (clickCount == 5) {
            $("#sound8Block5").show();
        } else if (clickCount == 6) {
            $("#sound8Block6").show();
        } else if (clickCount == 7) {
            $("#sound8Block7").show();
        } else if (clickCount == 8) {
            $("#sound8Block8").show();
        } else if (clickCount == 9) {
            $("#sound8Block9").show();
        } else if (clickCount == 10) {
            $("#sound8Block10").show();
        } else if (clickCount == 11) {
            $("#sound8Block11").show();
        } else if (clickCount == 12) {
            $("#sound8Block12").show();
        } else if (clickCount == 13) {
            $("#sound8Block13").show();
        } else if (clickCount == 14) {
            $("#sound8Block14").show();
        } else if (clickCount == 15) {
            $("#sound8Block15").show();
        } else if (clickCount == 16) {
            $("#sound8Block16").show();
        } else if (clickCount == 17) {
            $("#sound8Block17").show();
        }
    });
    $(" #percs .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#percs .add").data("click-count") || 0) + 1;
        $("#percs .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound9Block1").show();
        } else if (clickCount == 2) {
            $("#sound9Block2").show();
        } else if (clickCount == 3) {
            $("#sound9Block3").show();
        } else if (clickCount == 4) {
            $("#sound9Block4").show();
        } else if (clickCount == 5) {
            $("#sound9Block5").show();
        } else if (clickCount == 6) {
            $("#sound9Block6").show();
        } else if (clickCount == 7) {
            $("#sound9Block7").show();
        } else if (clickCount == 8) {
            $("#sound9Block8").show();
        } else if (clickCount == 9) {
            $("#sound9Block9").show();
        } else if (clickCount == 10) {
            $("#sound9Block10").show();
        } else if (clickCount == 11) {
            $("#sound9Block11").show();
        } else if (clickCount == 12) {
            $("#sound9Block12").show();
        } else if (clickCount == 13) {
            $("#sound9Block13").show();
        } else if (clickCount == 14) {
            $("#sound9Block14").show();
        } else if (clickCount == 15) {
            $("#sound9Block15").show();
        } else if (clickCount == 16) {
            $("#sound9Block16").show();
        } else if (clickCount == 17) {
            $("#sound9Block17").show();
        }
    });
    $(" #snares .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#snares .add").data("click-count") || 0) + 1;
        $("#snares .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound10Block1").show();
        } else if (clickCount == 2) {
            $("#sound10Block2").show();
        } else if (clickCount == 3) {
            $("#sound10Block3").show();
        } else if (clickCount == 4) {
            $("#sound10Block4").show();
        } else if (clickCount == 5) {
            $("#sound10Block5").show();
        } else if (clickCount == 6) {
            $("#sound10Block6").show();
        } else if (clickCount == 7) {
            $("#sound10Block7").show();
        } else if (clickCount == 8) {
            $("#sound10Block8").show();
        } else if (clickCount == 9) {
            $("#sound10Block9").show();
        } else if (clickCount == 10) {
            $("#sound10Block10").show();
        } else if (clickCount == 11) {
            $("#sound10Block11").show();
        } else if (clickCount == 12) {
            $("#sound10Block12").show();
        } else if (clickCount == 13) {
            $("#sound10Block13").show();
        } else if (clickCount == 14) {
            $("#sound10Block14").show();
        } else if (clickCount == 15) {
            $("#sound10Block15").show();
        } else if (clickCount == 16) {
            $("#sound10Block16").show();
        } else if (clickCount == 17) {
            $("#sound10Block17").show();
        }
    });
    $(" #vox .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#vox .add").data("click-count") || 0) + 1;
        $("#vox .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound11Block1").show();
        } else if (clickCount == 2) {
            $("#sound11Block2").show();
        } else if (clickCount == 3) {
            $("#sound11Block3").show();
        } else if (clickCount == 4) {
            $("#sound11Block4").show();
        } else if (clickCount == 5) {
            $("#sound11Block5").show();
        } else if (clickCount == 6) {
            $("#sound11Block6").show();
        } else if (clickCount == 7) {
            $("#sound11Block7").show();
        } else if (clickCount == 8) {
            $("#sound11Block8").show();
        } else if (clickCount == 9) {
            $("#sound11Block9").show();
        } else if (clickCount == 10) {
            $("#sound11Block10").show();
        } else if (clickCount == 11) {
            $("#sound11Block11").show();
        } else if (clickCount == 12) {
            $("#sound11Block12").show();
        } else if (clickCount == 13) {
            $("#sound11Block13").show();
        } else if (clickCount == 14) {
            $("#sound11Block14").show();
        } else if (clickCount == 15) {
            $("#sound11Block15").show();
        } else if (clickCount == 16) {
            $("#sound11Block16").show();
        } else if (clickCount == 17) {
            $("#sound11Block17").show();
        }
    });
    $(" #extraSounds .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#extraSounds .add").data("click-count") || 0) + 1;
        $("#extraSounds .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound12Block1").show();
        } else if (clickCount == 2) {
            $("#sound12Block2").show();
        } else if (clickCount == 3) {
            $("#sound12Block3").show();
        } else if (clickCount == 4) {
            $("#sound12Block4").show();
        } else if (clickCount == 5) {
            $("#sound12Block5").show();
        } else if (clickCount == 6) {
            $("#sound12Block6").show();
        } else if (clickCount == 7) {
            $("#sound12Block7").show();
        } else if (clickCount == 8) {
            $("#sound12Block8").show();
        } else if (clickCount == 9) {
            $("#sound12Block9").show();
        } else if (clickCount == 10) {
            $("#sound12Block10").show();
        } else if (clickCount == 11) {
            $("#sound12Block11").show();
        } else if (clickCount == 12) {
            $("#sound12Block12").show();
        } else if (clickCount == 13) {
            $("#sound12Block13").show();
        } else if (clickCount == 14) {
            $("#sound12Block14").show();
        } else if (clickCount == 15) {
            $("#sound12Block15").show();
        } else if (clickCount == 16) {
            $("#sound12Block16").show();
        } else if (clickCount == 17) {
            $("#sound12Block17").show();
        }
    });
    $(" #notes .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#notes .add").data("click-count") || 0) + 1;
        $("#notes .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound13Block1").show();
        } else if (clickCount == 2) {
            $("#sound13Block2").show();
        } else if (clickCount == 3) {
            $("#sound13Block3").show();
        } else if (clickCount == 4) {
            $("#sound13Block4").show();
        } else if (clickCount == 5) {
            $("#sound13Block5").show();
        } else if (clickCount == 6) {
            $("#sound13Block6").show();
        } else if (clickCount == 7) {
            $("#sound13Block7").show();
        } else if (clickCount == 8) {
            $("#sound13Block8").show();
        } else if (clickCount == 9) {
            $("#sound13Block9").show();
        } else if (clickCount == 10) {
            $("#sound13Block10").show();
        } else if (clickCount == 11) {
            $("#sound13Block11").show();
        } else if (clickCount == 12) {
            $("#sound13Block12").show();
        } else if (clickCount == 13) {
            $("#sound13Block13").show();
        } else if (clickCount == 14) {
            $("#sound13Block14").show();
        } else if (clickCount == 15) {
            $("#sound13Block15").show();
        } else if (clickCount == 16) {
            $("#sound13Block16").show();
        } else if (clickCount == 17) {
            $("#sound13Block17").show();
        }
    });
    $(" #violin .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#violin .add").data("click-count") || 0) + 1;
        $("#violin .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound14Block1").show();
        } else if (clickCount == 2) {
            $("#sound14Block2").show();
        } else if (clickCount == 3) {
            $("#sound14Block3").show();
        } else if (clickCount == 4) {
            $("#sound14Block4").show();
        } else if (clickCount == 5) {
            $("#sound14Block5").show();
        } else if (clickCount == 6) {
            $("#sound14Block6").show();
        } else if (clickCount == 7) {
            $("#sound14Block7").show();
        } else if (clickCount == 8) {
            $("#sound14Block8").show();
        } else if (clickCount == 9) {
            $("#sound14Block9").show();
        } else if (clickCount == 10) {
            $("#sound14Block10").show();
        } else if (clickCount == 11) {
            $("#sound14Block11").show();
        } else if (clickCount == 12) {
            $("#sound14Block12").show();
        } else if (clickCount == 13) {
            $("#sound14Block13").show();
        } else if (clickCount == 14) {
            $("#sound14Block14").show();
        } else if (clickCount == 15) {
            $("#sound14Block15").show();
        } else if (clickCount == 16) {
            $("#sound14Block16").show();
        } else if (clickCount == 17) {
            $("#sound14Block17").show();
        }
    });
    $(" #trumpet .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#trumpet .add").data("click-count") || 0) + 1;
        $("#trumpet .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound15Block1").show();
        } else if (clickCount == 2) {
            $("#sound15Block2").show();
        } else if (clickCount == 3) {
            $("#sound15Block3").show();
        } else if (clickCount == 4) {
            $("#sound15Block4").show();
        } else if (clickCount == 5) {
            $("#sound15Block5").show();
        } else if (clickCount == 6) {
            $("#sound15Block6").show();
        } else if (clickCount == 7) {
            $("#sound15Block7").show();
        } else if (clickCount == 8) {
            $("#sound15Block8").show();
        } else if (clickCount == 9) {
            $("#sound15Block9").show();
        } else if (clickCount == 10) {
            $("#sound15Block10").show();
        } else if (clickCount == 11) {
            $("#sound15Block11").show();
        } else if (clickCount == 12) {
            $("#sound15Block12").show();
        } else if (clickCount == 13) {
            $("#sound15Block13").show();
        } else if (clickCount == 14) {
            $("#sound15Block14").show();
        } else if (clickCount == 15) {
            $("#sound15Block15").show();
        } else if (clickCount == 16) {
            $("#sound15Block16").show();
        } else if (clickCount == 17) {
            $("#sound15Block17").show();
        }
    });
    $(" #tuba .add").click(function (e) {
        e.stopPropagation();
        var clickCount = ($("#tuba .add").data("click-count") || 0) + 1;
        $("#tuba .add").data("click-count", clickCount);
        if (clickCount == 1) {
            $("#sound16Block1").show();
        } else if (clickCount == 2) {
            $("#sound16Block2").show();
        } else if (clickCount == 3) {
            $("#sound16Block3").show();
        } else if (clickCount == 4) {
            $("#sound16Block4").show();
        } else if (clickCount == 5) {
            $("#sound16Block5").show();
        } else if (clickCount == 6) {
            $("#sound16Block6").show();
        } else if (clickCount == 7) {
            $("#sound16Block7").show();
        } else if (clickCount == 8) {
            $("#sound16Block8").show();
        } else if (clickCount == 9) {
            $("#sound16Block9").show();
        } else if (clickCount == 10) {
            $("#sound16Block10").show();
        } else if (clickCount == 11) {
            $("#sound16Block11").show();
        } else if (clickCount == 12) {
            $("#sound16Block12").show();
        } else if (clickCount == 13) {
            $("#sound16Block13").show();
        } else if (clickCount == 14) {
            $("#sound16Block14").show();
        } else if (clickCount == 15) {
            $("#sound16Block15").show();
        } else if (clickCount == 16) {
            $("#sound16Block16").show();
        } else if (clickCount == 17) {
            $("#sound16Block17").show();
        }
    });



    function collision($div1, $div2, sound) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2 || x1 > x2) return false;

        sound[0].play();
    }

    $(function () {
        $("#soundBlock1,#soundBlock2,#soundBlock3,#soundBlock4,#soundBlock5,#soundBlock6,#soundBlock7,#soundBlock8,#soundBlock9,#soundBlock10,#soundBlock11,#soundBlock12,#soundBlock13,#soundBlock14,#soundBlock15,#soundBlock16,#soundBlock17,#sound2Block1,#sound2Block2,#sound2Block3,#sound2Block4,#sound2Block5,#sound2Block6,#sound2Block7,#sound2Block8,#sound2Block9,#sound2Block10,#sound2Block11,#sound2Block12,#sound2Block13,#sound2Block14,#sound2Block15,#sound2Block16,#sound2Block17,#sound3Block1,#sound3Block2,#sound3Block3,#sound3Block4,#sound3Block5,#sound3Block6,#sound3Block7,#sound3Block8,#sound3Block9,#sound3Block10,#sound3Block11,#sound3Block12,#sound3Block13,#sound3Block14,#sound3Block15,#sound3Block16,#sound3Block17,#sound4Block1,#sound4Block2,#sound4Block3,#sound4Block4,#sound4Block5,#sound4Block6,#sound4Block7,#sound4Block8,#sound4Block9,#sound4Block10,#sound4Block11,#sound4Block12,#sound4Block13,#sound4Block14,#sound4Block15,#sound4Block16,#sound4Block17,#sound5Block1,#sound5Block2,#sound5Block3,#sound5Block4,#sound5Block5,#sound5Block6,#sound5Block7,#sound5Block8,#sound5Block9,#sound5Block10,#sound5Block11,#sound5Block12,#sound5Block13,#sound5Block14,#sound5Block15,#sound5Block16,#sound5Block17,#sound6Block1,#sound6Block2,#sound6Block3,#sound6Block4,#sound6Block5,#sound6Block6,#sound6Block7,#sound6Block8,#sound6Block9,#sound6Block10,#sound6Block11,#sound6Block12,#sound6Block13,#sound6Block14,#sound6Block15,#sound6Block16,#sound6Block17,#sound7Block1,#sound7Block2,#sound7Block3,#sound7Block4,#sound7Block5,#sound7Block6,#sound7Block7,#sound7Block8,#sound7Block9,#sound7Block10,#sound7Block11,#sound7Block12,#sound7Block13,#sound7Block14,#sound7Block15,#sound7Block16,#sound7Block17,#sound8Block1,#sound8Block2,#sound8Block3,#sound8Block4,#sound8Block5,#sound8Block6,#sound8Block7,#sound8Block8,#sound8Block9,#sound8Block10,#sound8Block11,#sound8Block12,#sound8Block13,#sound8Block14,#sound8Block15,#sound8Block16,#sound8Block17,#sound9Block1,#sound9Block2,#sound9Block3,#sound9Block4,#sound9Block5,#sound9Block6,#sound9Block7,#sound9Block8,#sound9Block9,#sound9Block10,#sound9Block11,#sound9Block12,#sound9Block13,#sound9Block14,#sound9Block15,#sound9Block16,#sound9Block17,#sound10Block1,#sound10Block2,#sound10Block3,#sound10Block4,#sound10Block5,#sound10Block6,#sound10Block7,#sound10Block8,#sound10Block9,#sound10Block10,#sound10Block11,#sound10Block12,#sound10Block13,#sound10Block14,#sound10Block15,#sound10Block16,#sound10Block17,#sound11Block1,#sound11Block2,#sound11Block3,#sound11Block4,#sound11Block5,#sound11Block6,#sound11Block7,#sound11Block8,#sound11Block9,#sound11Block10,#sound11Block11,#sound11Block12,#sound11Block13,#sound11Block14,#sound11Block15,#sound11Block16,#sound11Block17,#sound12Block1,#sound12Block2,#sound12Block3,#sound12Block4,#sound12Block5,#sound12Block6,#sound12Block7,#sound12Block8,#sound12Block9,#sound12Block10,#sound12Block11,#sound12Block12,#sound12Block13,#sound12Block14,#sound12Block15,#sound12Block16,#sound12Block17,#sound13Block1,#sound13Block2,#sound13Block3,#sound13Block4,#sound13Block5,#sound13Block6,#sound13Block7,#sound13Block8,#sound13Block9,#sound13Block10,#sound13Block11,#sound13Block12,#sound13Block13,#sound13Block14,#sound13Block15,#sound13Block16,#sound13Block17,#sound14Block1,#sound14Block2,#sound14Block3,#sound14Block4,#sound14Block5,#sound14Block6,#sound14Block7,#sound14Block8,#sound14Block9,#sound14Block10,#sound14Block11,#sound14Block12,#sound14Block13,#sound14Block14,#sound14Block15,#sound14Block16,#sound14Block17,#sound15Block1,#sound15Block2,#sound15Block3,#sound15Block4,#sound15Block5,#sound15Block6,#sound15Block7,#sound15Block8,#sound15Block9,#sound15Block10,#sound15Block11,#sound15Block12,#sound15Block13,#sound15Block14,#sound15Block15,#sound15Block16,#sound15Block17,#sound16Block1,#sound16Block2,#sound16Block3,#sound16Block4,#sound16Block5,#sound16Block6,#sound16Block7,#sound16Block8,#sound16Block9,#sound16Block10,#sound16Block11,#sound16Block12,#sound16Block13,#sound16Block14,#sound16Block15,#sound16Block16,#sound16Block17,#sound17Block1,#sound17Block2,#sound17Block3,#sound17Block4,#sound17Block5,#sound17Block6,#sound17Block7,#sound17Block8,#sound17Block9,#sound17Block10,#sound17Block11,#sound17Block12,#sound17Block13,#sound17Block14,#sound17Block15,#sound17Block16,#sound17Block17, #cursor").draggable({
            axis: "x",
            containment: ".soundboard"
        });
    });

    $("#play").click(function () {
        $("#cursor").animate({left: "2520px"}, 88000, "linear");
        window.setInterval(function () {
            collision($("#cursor"), $("#soundBlock1"), $("#clap1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound2Block1"), $("#8081sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound3Block1"), $("#crash1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound4Block1"), $("#drop1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound5Block1"), $("#hh1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound6Block1"), $("#hit1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound7Block1"), $("#kick1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound8Block1"), $("#oh1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound9Block1"), $("#perc1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound10Block1"), $("#snare1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound11Block1"), $("#vox1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound12Block1"), $("#mbtagsound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound13Block1"), $("#note001sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound14Block1"), $("#violin1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound15Block1"), $("#trumpet1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound16Block1"), $("#tuba1sound"))
        }, 200);


        window.setInterval(function () {
            collision($("#cursor"), $("#soundBlock2"), $("#clap2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound2Block2"), $("#8082sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound3Block2"), $("#crash2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound4Block2"), $("#drop2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound5Block2"), $("#hh2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound6Block2"), $("#hit2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound7Block2"), $("#kick2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound8Block2"), $("#oh2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound9Block2"), $("#perc2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound10Block2"), $("#snare2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound11Block2"), $("#vox2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound12Block2"), $("#bombsound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound13Block2"), $("#note002sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound14Block2"), $("#violin2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound15Block2"), $("#trumpet2sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound16Block2"), $("#tuba2sound"))
        }, 200);


        window.setInterval(function () {
            collision($("#cursor"), $("#soundBlock3"), $("#clap3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound2Block3"), $("#8083sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound3Block3"), $("#crash3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound4Block3"), $("#drop3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound5Block3"), $("#hh3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound6Block3"), $("#hit3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound7Block3"), $("#kick3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound8Block3"), $("#oh3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound9Block3"), $("#perc3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound10Block3"), $("#snare3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound11Block3"), $("#vox3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound12Block3"), $("#mbtagsound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound13Block3"), $("#note003sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound14Block3"), $("#violin3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound15Block3"), $("#trumpet3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound16Block3"), $("#tuba3sound"))
        }, 200);

        window.setInterval(function () {
            collision($("#cursor"), $("#soundBlock4"), $("#clap4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound2Block4"), $("#8084sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound3Block4"), $("#crash4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound4Block4"), $("#fx1sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound5Block4"), $("#hh4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound6Block4"), $("#hit4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound7Block4"), $("#kick4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound8Block4"), $("#oh4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound9Block4"), $("#perc4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound10Block4"), $("#snare4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound11Block4"), $("#vox4sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound12Block4"), $("#mbtagsound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound13Block4"), $("#note003sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound14Block4"), $("#violin3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound15Block4"), $("#trumpet3sound"))
        }, 200);
        window.setInterval(function () {
            collision($("#cursor"), $("#sound16Block4"), $("#tuba3sound"))
        }, 200);



    });
    $("#pause").click(function () {
        $("#cursor").stop();
    });

});

