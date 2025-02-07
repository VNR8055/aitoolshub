const aiTools = [
    { name: "ChatGPT", link: "https://chatgpt.com",img:"https://today.indstate.edu/wp-content/uploads/2023/01/chatgpt-logo-freelogovectors.net_.png" },
    { name: "Canva", link: "https://canva.com",img:"https://th.bing.com/th/id/OIP.28mp9BmEAiRHzWenp-evDwAAAA?rs=1&pid=ImgDetMain" },
    { name: "DeepL", link: "https://deepl.com",img:"https://th.bing.com/th/id/OIP._E5l00fmgc93_8v7FLKd0gHaEN?rs=1&pid=ImgDetMain" },
    { name: "Google Gemini", link: "https://google.com/gemini",img:"https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/02/google-gemini-ai-icon.png" },
    { name: "Character AI", link: "https://character.ai",img:"https://characterai.io/static/logo512.png" },
    { name: "Jasper AI", link: "https://jasper.ai",img:"https://forgeglobal.com/site/assets/files/13044/jasper-ai-logo-500w-1.png" },
    { name: "DALL-E", link: "https://dall-e.com",img:"https://today.indstate.edu/wp-content/uploads/2023/01/chatgpt-logo-freelogovectors.net_.png" },
    { name: "Replika", link: "https://replika.ai",img:"https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b2/53/fd/b253fd3c-f2bf-8a11-55a1-702b9128e6af/AppIcon-Replika-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" },
    { name: "Copy.ai", link: "https://copy.ai",img:"https://res.cloudinary.com/dvzkzccvn/images/f_auto,q_auto/v1693467589/Copy-AI/Copy-AI.jpg?_i=AA" },
    { name: "Scribe AI", link: "https://scribe.ai",img:"https://store-images.s-microsoft.com/image/apps.25553.39a90179-22c3-4384-95b8-46f0dc76f05e.3778be59-9cc9-4a6c-b9b8-f373b2129ee1.973aff23-71a8-4b3b-8b1e-ed056ae4c69e" },
    // { name: "Synthesia", link: "https://synthesia.io" },
    // { name: "MidJourney", link: "https://midjourney.com" },
    // { name: "RunwayML", link: "https://runwayml.com" },
    // { name: "Lumen5", link: "https://lumen5.com" },
    // { name: "Frase", link: "https://frase.io" },
    // { name: "Cognitivescale", link: "https://cognitivescale.com" },
    // { name: "Cortexica", link: "https://cortexica.com" },
    // { name: "BigML", link: "https://bigml.com" },
    // { name: "Clarifai", link: "https://clarifai.com" },
    // { name: "Inbenta", link: "https://inbenta.com" },
    // { name: "KAI", link: "https://kore.ai" },
    // { name: "Narrative Science", link: "https://narrativescience.com" },
    // { name: "Olivia", link: "https://olivia.ai" },
    // { name: "Persado", link: "https://persado.com" },
    // { name: "Qlik", link: "https://qlik.com" },
    // { name: "Rasa", link: "https://rasa.com" },
    // { name: "SAS", link: "https://sas.com" },
    // { name: "Tamr", link: "https://tamr.com" },
    // { name: "UiPath", link: "https://uipath.com" },
    // { name: "Vicarious", link: "https://vicarious.com" },
    // { name: "Wit.ai", link: "https://wit.ai" },
    // { name: "X.ai", link: "https://x.ai" },
    // { name: "Yseop", link: "https://yseop.com" },
    // { name: "Zest", link: "https://zest.ai" },
    // { name: "Adobe Sensei", link: "https://adobe.com/sensei" },
    // { name: "AIBrain", link: "https://aibrain.com" },
    // { name: "Ayasdi", link: "https://ayasdi.com" },
    // { name: "Evolv", link: "https://evolv.ai" },
    // { name: "Exceed.ai", link: "https://exceed.ai" },
    // { name: "Freenome", link: "https://freenome.com" },
    // { name: "Graphcore", link: "https://graphcore.ai" },
    // { name: "HyperScience", link: "https://hyperscience.com" },
    // { name: "Jukin Media", link: "https://jukinmedia.com" },
    // { name: "Kindred", link: "https://kindred.ai" },
    // { name: "LeafLink", link: "https://leaflink.com" },
    // { name: "MindMeld", link: "https://mindmeld.com" },
    // { name: "Orbital Insight", link: "https://orbitalinsight.com" },
    // { name: "Primer", link: "https://primer.ai" },
    // { name: "Quantiphi", link: "https://quantiphi.com" },
    // { name: "Rivian", link: "https://rivian.com" },
    // { name: "SkyMind", link: "https://skymind.global" },
    // { name: "Tact.ai", link: "https://tact.ai" },
    // { name: "Textio", link: "https://textio.com" },
    // { name: "Ubiquity6", link: "https://ubiquity6.com" },
    // { name: "Veritone", link: "https://veritone.com" },
    // { name: "Wobot.ai", link: "https://wobot.ai" },
    // { name: "Xilinx", link: "https://xilinx.com" },
    // { name: "Yellow.ai", link: "https://yellow.ai" },
    // { name: "Zebra Medical Vision", link: "https://zebra-med.com" },
    // { name: "Zemanta", link: "https://zemanta.com" },
    // { name: "AlphaSense", link: "https://alphasense.com" },
    // { name: "BigID", link: "https://bigid.com" },
    // { name: "C3.ai", link: "https://c3.ai" },
    // { name: "DataRobot", link: "https://datarobot.com" },
    // { name: "Einstein Analytics", link: "https://salesforce.com/einstein" },
    // { name: "Fathom", link: "https://fathomhealth.com" },
    // { name: "Gong", link: "https://gong.io" },
    // { name: "H2O.ai", link: "https://h2o.ai" },
    // { name: "InsideSales", link: "https://insidesales.com" },
    // { name: "Jina AI", link: "https://jina.ai" },
    // { name: "Kensho", link: "https://kensho.com" },
    // { name: "Labelbox", link: "https://labelbox.com" },
    // { name: "Meltwater", link: "https://meltwater.com" },
    // { name: "Nexar", link: "https://getnexar.com" },
    // { name: "Omilia", link: "https://omilia.com" },
    // { name: "PathAI", link: "https://pathai.com" },
    // { name: "Quantifind", link: "https://quantifind.com" },
    // { name: "Reonomy", link: "https://reonomy.com" },
    // { name: "SambaNova", link: "https://sambanova.ai" },
    // { name: "Tractable", link: "https://tractable.ai" },
    // { name: "Uizard", link: "https://uizard.io" },
    // { name: "Vewd", link: "https://vewd.com" },
    // { name: "Weka.io", link: "https://weka.io" },
    // { name: "Xnor.ai", link: "https://xnor.ai" },
    // { name: "Yieldmo", link: "https://yieldmo.com" },
    // { name: "Zapier", link: "https://zapier.com" }
    ];

const header=document.createElement('div');
header.className="header";
const h1=document.createElement('h1');
h1.innerHTML="AI Tools Hub";
header.appendChild(h1);

const body=document.createElement('div');
body.className="body";

aiTools.forEach((obj)=>{
    const div=document.createElement('div');
    div.className="card";

    const div2=document.createElement('div');
    div2.className="part";
    const img=document.createElement('img');
    img.src=obj.img;
    div2.appendChild(img);

    const but=document.createElement('div');
    but.className="but";
    const a=document.createElement('a');
    a.href=obj.link;
    a.innerHTML=obj.name;
    but.appendChild(a);
    div.appendChild(div2);
    div.appendChild(but);
    body.appendChild(div);
})

document.getElementById('root').append(header,body);




































































































