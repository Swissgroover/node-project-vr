var socket = io();
        
var orbs = [{

}, {
    on: true
}, {}, {
    on: true
}, {}];

$(document).ready(function() {

    function populateTemplate(orb, template, i, total) {
        var container = template.find('.container');
        var onclick = 'document.querySelector("#light-orb' + i + '").emit("switch");';

        if (orb.left || orb.right) {
            if (orb.left) {
                onclick += 'clickOrb(' + orb.left + ');';
                container.find('.dep-left').attr('value', orb.left);
            }
            if (orb.right) {
                onclick += 'clickOrb(' + orb.right + ');';
                container.find('.dep-right').attr('value', orb.right);
            }
        } else {
            container.find('.dep-left').remove();
            container.find('.dep-right').remove();
        }

        container.find('.orb-id').attr('value', i);
        container.attr('id', 'container-orb' + i);
        template.find('.orb').attr('id', 'orb' + i);
        template.find('.light-orb').attr('id', 'light-orb' + i);
        template.find('.clickable').attr('data-id', i);

        container.attr('onclick', onclick);
        container.find('lp-sphere').attr('seed', i);
        template.attr('rotation', '0 ' + (360 / total * i) + ' 0');

        if (!orb.on) {
            template.find('.container').attr('scale', '0.5 0.5 0.5').attr('position', '8 0.5 0');
            template.find('.animation-scale').attr('from', '0.5 0.5 0.5').attr('to', '1 1 1');
            template.find('.animation-position').attr('from', '8 0.5 0').attr('to', '8 3 0');
            template.find('.light-orb').attr('intensity', 0);
            template.find('.animation-intensity').attr('from', 0).attr('to', 1)
        }

        return template;
    }

    function remove(selector) {
        var el = document.querySelector(selector);
        el.parentNode.removeChild(el);
    }

    for (var i = 0; i < orbs.length; i++) {
        var orb = orbs[i];
        var template = $('#template').clone();
        template = populateTemplate(orb, template, i, orbs.length);
        $('#carousel').append(template);
    }

    remove('#template');
    setTimeout(transitionOrbs, 10);

    $('.orb').on('click', function() {
        var id = $(this).attr('data-id');
    // if (!allowedToToggle(id)) return false;
       
        socket.emit('toggleOrb', id);
        
    });
    socket.on('orbToggled', id =>{
     
     toggleOrb(id)
  });

})



function transitionOrbs() {
    document.querySelectorAll('.wrapper').forEach(function(el) {
        el.emit('transition');
    });
    document.querySelector('#content').emit('transition');
}

function win() {
    document.querySelector('#content a-text').setAttribute('value', 'Victory');
    transitionOrbs();
}

function getOrbsOn() {
    return orbs.map(orb => orb.on)
}

function toggleOrb(i) {
    console.log(orbs[i].on)
    orbs[i].on = !orbs[i].on;
    if (getOrbsOn().every(x => x)) win();
}

function clickOrb(i) {
    console.log('real click')
    if (!allowedToToggle(i)) return;
    document.querySelector("#container-orb" + i).click();
     socket.emit('toggleOrb', i);
    toggleOrb(i);
}
// socket.emit('hello')
 

function allowedToToggle(id) {
    
    if (current_player_id == 1) {
        return id % 2;
    } else if (current_player_id == 2) {
        return !(id % 2);
    }
    return false;
}