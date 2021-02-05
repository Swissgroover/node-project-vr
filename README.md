
## Table of contents
* [Technologies](#Technologies)
* [Our Team](#Our-Team)
* [Idea of Creating Vr online game](#Idea-of-Creating-Vr-online-game)
* [Prototype](#Prototype)
* [Screenshot](#Screenshot)
* [Code snaps](#Code-snaps)
* [How to run](#How-to-run)

## Technologies
Node JS / JS / npm
- Express (Node JS framework)
- Socket.io
- Redis
- Html
- Javascript
- A-frame

# Our Team

* Project manager: Karl Gregor Rauniste

* Members: Karl Gregor Rauniste, Robin Kukk, Tiiu Tuhkanen, Joonas Hendrik, Kadri Maripuu, Johanna Avik, Rainis Tiirik,

# Idea of Creating Vr online game


# Prototype

https://ta19rauniste.itmajakas.ee/

# Screenshot

![Screenshot](https://github.com/Swissgroover/node-project-vr/blob/main/Screenshot%20at%20Feb%2003%2022-37-04.png)
![Screenshot](https://github.com/Swissgroover/node-project-vr/blob/main/Screenshot%20at%20Feb%2003%2022-37-15.png)

# Code snaps

Theme
```
    <a-scene fog="type: linear; color: #111; near:10; far:15">
```
Lights
```
        <a-light type="directional" castShadow="true" intensity="0.5" color="#FFF" position="2 5 0"></a-light>
        <a-light intensity="0.1" type="ambient" position="1 1 1" color="#FFF"></a-light>
```
Camera
```
        <a-entity id="rig" position="0 3 0">
            <a-camera wasd-controls look-controls>
                <a-entity cursor="fuse: true; fuseTimeout: 250" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04" material="color: white; shader: flat; opacity: 0.5" scale="0.5 0.5 0.5" raycaster="far: 20; interval: 1000; objects: .clickable">
                    <a-circle radius="0.01" color="#FFF" opacity="0.5" material="shader: flat"></a-circle>
                    <a-animation begin="fusing" easing="ease-in" attribute="scale" fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="250"></a-animation>
                </a-entity>
            </a-camera>
        </a-entity>
 ```


## Küsitluse Vastused
# Küsimused:
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas
- Üks pehme oskus, mida õppisin ja endas arendasin
- Üks tehniline oskus, mida õppisin ja endas arendasin
		
Tiiu:
- Kas ma oleks tahtnud mingit muud ülesannet täita - Juhul, kui me poleks otsustanud VR projekti kasuks vaid läinud nn klassikalisemat rada pidi (Figma - HTML/CSS - JS + muu müstika), siis ma oleksin olnud päris õnnetu. Aga kuna me tegime VR-i ja klassikaline rada ei realiseerunud, siis ma olin enda rollis päris õnnelik. Projekt oli huvitav ja müstiline ja teostatamatuma näiv, aga valmis sai. Kommitädi ja kohvipiimatädi oli päris hea tunne olla.
Pehme oskus, mida õppisin - see projekt oli pehmete oskuste projekt minu jaoks. Projektiga liitus omaette alamprojekt, kellega oli päris huvitav tööd teha teisel päeval. Sain teada, et motivatsioonikoolitus kulub nii mõnelegi ära...
Tehniline oskus - A-frame'st ma tõesti polnud varem kuulnud ka, kuid projekti lõpuks sain ja ise enda virtuaalreaalse kuubiku loomisega hakkama. Päris hea tunne on ja tahaks edasi tegutseda. Google Tilt Brush oli ka uus ja põnev asi, millest varem kuulnudki polnud. Tahaks katsetada. 

Johanna:
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas?

Ma ei olnud väga rahul selle ülesandega mis mulle anti. Tundisin enaste natuke halvasti ja kasutult, sest enamus tööd tegid ainult kaks inimest selles gruppis. Minu arvates oleks võinud nii teha, et teise kursuse õpetajad juhendavad esimeses kuruse omasid ning kõrval abistavad neid.  Meil läks ka palju aega sellele, et mida me lõpuks tahaksime teha. Aga lõpuks saime ka natukene pinged maha võtta ja lihtsalt motiveerimisest ja koolist rääkida. Seekord oli minu jaoks projekt väga teistsugune, mis on väga hea pluss.
	
- Üks pehme oskus, mida õppisin ja endas arendasin?:
Sain tiimi kaaslaste käest rohkem teada, mis on A-Frame mida see endast kujutab ning kuidas sellega tööd tehakse. Väga täpselt ei Oskar defineerida sochetit ja node. Väga palju aitasid ka meid õpetajad, sain rohkem iseseisvalt uurida/lahendad A-Frameì ga teha virtuaalreaalset kuubikut luua. 
	
- Üks tehniline oskus, mida õppisin ja endas arendasin.:
Tehniline oskus mida ma sain põhjalikumalt uurida ja teada  sain oli A-Frame. Sain ka aimu kuidas tehakse VR mänge ning mida selle jaoks läheb vaja.
	
	
Joonas:
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas - Kui ma oleksin võimeline seda teha, oleks küll tahtnud kuna ma nii palju ei teinud aga aitasin ikkagi.
Üks pehme oskus, mida õppisin ja endas arendasin - Õppisin et VR mängud kasutavad sama programmeerimiskeelt mis tavalised mängud.
Üks tehniline oskus, mida õppisin ja endas arendasin - Õppisin, et VR pole eriti NII raske programmeerida kui sa tead mida sa teed.

Rainis-Ross Tiirik:

-Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas-VR projekt oli minu jaoks huvitav,kuid ma oleks tahtnud rohkem kaasa aidata,aga mul on hea meel,et kohal käisin.

-Üks pehme oskus, mida õppisin ja endas arendasin-Sain teada, et A-frame abil  saab teha VR rakendusi.

-Üks tehniline oskus, mida õppisin ja endas arendasin-Jõudsin natuke õppida,kuidas A-frame kasutada ja jõudsin ka teha ühe kuubiku.   


Karl Gregor:
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas:
 Ilmselt mitte. VR alati huvi pakkunud, ning seekord see multiplayer versioon teha, oli huvitav. Kahju oli,et ei suutnud tervele meedkonnale konkreetseid üleasndeid jagada. Loodan, et körvalt vaadates öppisid ikkagi virtuaal reaalsuse kohta juurde, ning dokumentatsiooni põhjal arendasid end.
- Üks pehme oskus, mida õppisin ja endas arendasin
Kahjuks ei suutnud selles osas end seekord arendada.

- Üks tehniline oskus, mida õppisin ja endas arendasin
Soket.io juurde õppisin palju, toimingust ja funktsioonidest sain palju teada.

Robin Kukk:
- Kas oleksid tahtnud täita mingit muud ülesannet selles meeskonnas:
Ei, mulle minu ülesanded meeldisid.
- Üks pehme oskus, mida õppisin ja endas arendasin:
Sain meeskonnatööd arendada.
- Üks tehniline oskus, mida õppisin ja endas arendasin:
Tunnen ennast socket.io kasutamisel palju kindlamalt ning sain A-Frameiga tutvuda.

 
## How to run

**How to run**
# Windows version

This how to explains how to run this project on Ubuntu server.

1. Update your system
```
sudo apt update && sudo apt -y upgrade
```
2. Install the most recent version of Nodejs and npm (node packet manager). We use this repository because the normal Ubuntu repository has very old version.
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Test Nodejs
```
node -v
```
4. Test npm
```
npm -v
```
5. Install nodemon globally
```
sudo npm install -g nodemon
```
6. Install Redis
```
sudo apt install redis-server
```
7. Update redis.conf file. Find `supervised no` line and change to `supervised systemd` since Ubuntu uses the systemd init system.
```
sudo nano /etc/redis/redis.conf
```
8. Start Redis
```
sudo service redis-server start
```
9. Clone the repository
```
git clone https://github.com/kuressaareametikool/node-project
```
10. Change directory to project folder
```
cd node-project
```
11. Install modules
```
npm install
```
12. Run server
```
nodemon server.js
```

# iOS version

1. Update your system
```
brew upgrade
```
2. Install the most recent version of Nodejs and npm (node packet manager). 
```
brew install nodejs
```
3. Test Nodejs
```
node -v
```
4. Test npm
```
npm -v
```
5. Install nodemon globally
```
brew install -g nodemon
```
6. Install Redis
```
brew install redis-server
```
7. Start Redis
```
brew service start redis
```
8. Clone the repository
```
git clone https://github.com/kuressaareametikool/node-project
```
9. Change directory to project folder
```
cd node-project
```
10. Install modules
```
npm install
```
11. Run server
```
npm nodemon server.js
```
