<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Generator</title>
    <style>
        body, html {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
            height: 100%;
            margin: 0;
            overflow: hidden;
        }
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            perspective: 1000px;
        }
        .content {
            background: linear-gradient(45deg, #000, #001, #002, #003);
            padding: 2rem;
            border-radius: 25px;
            box-shadow: 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff;
            transform: rotateX(5deg) rotateY(5deg);
            transition: transform 0.3s ease;
            max-width: 500px;
            width: 100%;
        }
        .content:hover {
            transform: rotateX(0deg) rotateY(0deg);
        }
        h1 {
            color: #0ff;
            margin-bottom: 1rem;
            text-align: center;
            text-shadow: 0 0 10px #0ff;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-bottom: 0.5rem;
            color: #0ff;
        }
        input, select {
            margin-bottom: 1rem;
            padding: 0.5rem;
            font-size: 1rem;
            background-color: #001;
            color: #fff;
            border: 1px solid #0ff;
            border-radius: 15px;
        }
        button {
            margin-bottom: 1rem;
            padding: 0.5rem;
            font-size: 1rem;
            background-color: #000;
            color: #0ff;
            border: 1px solid #0ff;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 15px;
            position: relative;
            overflow: hidden;
        }
        button:hover {
            background-color: #0ff;
            color: #000;
        }
        .loading-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: #0ff;
            opacity: 0.5;
            transition: width 0.3s ease;
        }
        #result {
            margin-top: 1rem;
            text-align: center;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 0 20px #0ff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Image Generator</h1>
            <form id="imageForm">
                <label for="prompt">Enter your prompt:</label>
                <input type="text" id="prompt" name="prompt" required>
                
                <label for="model">Choose a model:</label>
                <select id="model" name="model">
                    
                    <option value="1">3 Guofeng3 V3.4</option>
                    <option value="2">Absolute Reality V1.6</option>
                    <option value="3">Absolute Reality V1.8.1</option>
                    <option value="4">Am I Real V4.1</option>
                    <option value="5">Analog V1</option>
                    <option value="6">Anything V3</option>
                    <option value="7">Anything V4.5</option>
                    <option value="8">Anything V5</option>
                    <option value="9">AbyssOrangeMix V3</option>
                    <option value="10">Blazing Drive V10g</option>
                    <option value="11">BreakDomain I2428</option>
                    <option value="12">BreakDomain M2150</option>
                    <option value="13">CetusMix Version35</option>
                    <option value="14">Children's Stories V1 3D</option>
                    <option value="15">Children's Stories V1 SemiReal</option>
                    <option value="16">Children's Stories V1 Toon-Anime</option>
                    <option value="17">Counterfeit V3.0</option>
                    <option value="18">CuteYukimix MidChapter3</option>
                    <option value="19">CyberRealistic V3.3</option>
                    <option value="20">Dalcefo V4</option>
                    <option value="21">Deliberate V2</option>
                    <option value="22">Deliberate V3</option>
                    <option value="23">Dreamlike Anime V1</option>
                    <option value="24">Dreamlike Diffusion V1</option>
                    <option value="25">Dreamlike Photoreal V2</option>
                    <option value="26">Dreamshaper 6 baked vae</option>
                    <option value="27">Dreamshaper 7</option>
                    <option value="28">Dreamshaper 8</option>
                    <option value="29">Edge of Realism EOR V2.0</option>
                    <option value="30">Eimis Anime Diffusion V1.0</option>
                    <option value="31">Elldreth's Vivid</option>
                    <option value="32">epiCPhotoGasm X Plus Plus</option>
                    <option value="33">EpiCRealism Natural Sin RC1</option>
                    <option value="34">EpiCRealism Pure Evolution V3</option>
                    <option value="35">I Cant Believe Its Not Photography Seco</option>
                    <option value="36">Indigo Furry Mix V7.5 Hybrid</option>
                    <option value="37">Juggernaut Aftermath</option>
                    <option value="38">Lofi V4</option>
                    <option value="39">Lyriel V1.6</option>
                    <option value="40">MajicMix Realistic V4</option>
                    <option value="41">MechaMix V1.0</option>
                    <option value="42">MeinaMix Meina V9</option>
                    <option value="43">Neverending Dream V1.22</option>
                    <option value="44">MeinaMix Meina V11</option>
                    <option value="45">Openjourney V4</option>
                    <option value="46">Pastel-Mix</option>
                    <option value="47">Portrait+ V1</option>
                    <option value="48">Protogen x3.4</option>
                    <option value="49">Realistic Vision V1.4</option>
                    <option value="50">Realistic Vision V2.0</option>
                    <option value="51">Realistic Vision V4.0</option>
                    <option value="52">Realistic Vision V5.0</option>
                    <option value="53">Redshift Diffusion V1.0</option>
                    <option value="54">ReV Animated V1.2.2</option>
                    <option value="55">RunDiffusion FX 2.5D V1.0</option>
                    <option value="56">RunDiffusion FX Photorealistic V1.0</option>
                    <option value="57">SD V1.4</option>
                    <option value="58">SD V1.5</option>
                    <option value="59">SD V1.5 Inpainting</option>
                    <option value="60">Shonin's Beautiful People V1.0</option>
                    <option value="61">TheAlly's Mix II</option>
                    <option value="62">Timeless V1</option>
                    <option value="63">ToonYou Beta 6</option>
                </select>
                
                <button type="submit">
                    <span class="loading-bar"></span>
                    Generate Image
                </button>
            </form>
            <div id="result"></div>
        </div>
    </div>

    <script>
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.width = `${Math.random() * 5 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 5000);
        }

        setInterval(createParticle, 100);

        
        document.getElementById('imageForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const prompt = document.getElementById('prompt').value;
            const model = document.getElementById('model').value;
              let ratio = '1:1';
       let steps;
       let cfg_scale;
       let loraWeights = {};
            const resultDiv = document.getElementById('result');
            const loadingBar = document.querySelector('.loading-bar');
            const button = document.querySelector('button');
            
            resultDiv.innerHTML = 'Generating image...';
            button.disabled = true;
            loadingBar.style.width = '0%';
            
            try {
                const response = await fetch(`https://zetsdq.onrender.com/generate-image?prompt=${encodeURIComponent(prompt)}&modelIndex=${model}&sampler=Euler%20a&ratio=${ratio}${steps !== undefined ? `&steps=${steps}` : ''}${cfg_scale !== undefined ? `&cfg_scale=${cfg_scale}` : ''}${loraString ? `&loras=${encodeURIComponent(loraString)}`, {
                    method: 'GET',
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const reader = response.body.getReader();
                const contentLength = +response.headers.get('Content-Length');
                let receivedLength = 0;
                const chunks = [];

                while(true) {
                    const {done, value} = await reader.read();
                    if (done) break;
                    chunks.push(value);
                    receivedLength += value.length;
                    loadingBar.style.width = `${(receivedLength / contentLength) * 100}%`;
                }

                const blob = new Blob(chunks);
                const imageUrl = URL.createObjectURL(blob);
                
                resultDiv.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
            } catch (error) {
                resultDiv.innerHTML = `Error: ${error.message}`;
            } finally {
                button.disabled = false;
                loadingBar.style.width = '100%';
                setTimeout(() => {
                    loadingBar.style.width = '0%';
                }, 300);
            }
        });
    </script>
</body>
  </html>
    
