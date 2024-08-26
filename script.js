window.onload = checkPage;
function redirectTo(page){
    window.location.href=page;
}// Function that directs to given page as argument
function checkPage() {
    const currentUrl = window.location.href;
    //Assigning the value of items to an array based on the webpage chosen
    if (currentUrl.endsWith('chem.html')) {
        const items = [
            "Acid", "Alkaline", "Alloy", "Anion", "Atom", "Base", "Bond", "Buffer", "Catalyst", "Chemical",
            "Compound", "Covalent", "Crystal", "Dilution", "Element", "Electrolyte", "Electron", "Elemental",
            "Empirical", "Endothermic", "Entropy", "Equilibrium", "Ester", "Exothermic", "Fermentation", "Formula",
            "Gas", "Hydrocarbon", "Ion", "Isotope", "Kinetics", "Ligand", "Mole", "Molarity", "Molecule",
            "Neutralization", "pH", "Periodic", "Polymer", "Precipitate", "Proton", "Redox", "Solvent", "Solution",
            "Stoichiometry", "Suspension", "Titration", "Valence", "Vapor", "Viscosity", "Acidity", "Alkalinity",
            "Aromatic", "Avogadro", "Bonding", "Carbohydrate", "Catalysis", "Charge", "Colligative", "Chromatography",
            "Coefficient", "Combustion", "Concentration", "Condensation", "Conduction", "Corrosion", "Covalency",
            "Crystallization", "Decomposition", "Density", "Electronegativity", "Entropy", "Equilibria", "Evaporation",
            "Extraction", "Flame", "Formal Charge", "Frequency", "Functional Group", "Gas Laws", "Gradient", "Halogen",
            "Homogeneous", "Hydrolysis", "Ionization", "Isomer", "Le Chatelier Principle", "Ligand Field Theory",
            "Macromolecule", "Mass Spectrometry", "Molecular Orbital", "Nucleus", "Organic", "Oxidation", "Pathway",
            "Phenol", "Quantum", "Reagent", "Reduction", "Solubility", "Synthesis", "Temperature", "Titrant",
            "Transition Metal", "Valency", "VSEPR", "Wavelength", "Zeolite"
        ];
        op(items);} //Chemistry array
    else if (currentUrl.endsWith('phy.html')) {
        const items=[
            "acceleration", "amplitude", "angular", "anomaly", "atom", "balance", "barometer", "baryon", "beam", "beta", 
            "binary", "blackbody", "buoyancy", "capacitor", "charge", "circuit", "collision", "compressibility", "conduction", 
            "conservation", "constant", "continuum", "convection", "Coulomb", "current", "decay", "density", "diffraction", 
            "dimension", "displacement", "dissipation", "distance", "drag", "dynamics", "efficiency", "elastic", "electricity", 
            "electromagnetism", "electron", "emission", "energy", "entropy", "equilibrium", "expansion", "field", "fluid", 
            "force", "frequency", "friction", "fusion", "gauge", "gravity", "gyroscope", "harmonic", "heat", "impulse", 
            "inertia", "inductance", "insulator", "intensity", "interaction", "ion", "isobaric", "isotope", "joule", "kinetic", 
            "lambda", "laser", "leverage", "lift", "load", "magnetism", "mass", "matter", "mechanics", "medium", "momentum", 
            "motion", "neutron", "node", "noise", "optics", "oscillation", "parallel", "particle", "pendulum", "permeability", 
            "phase", "photon", "plasma", "polarization", "potential", "power", "pressure", "prism", "propagation", "quantum", 
            "radiation", "radius", "rarefaction", "refraction", "relativity", "resistance", "resonance", "rotor", "scalar", 
            "shear", "shockwave", "signal", "solenoid", "solid", "sound", "spectrum", "speed", "spin", "spring", "stability", 
            "static", "strain", "stress", "superconductor", "surface", "symmetry", "system", "temperature", "tension", 
            "terminal", "thermal", "threshold", "torque", "trajectory", "transformer", "transistor", "transmittance", 
            "tribology", "turbulence", "uncertainty", "velocity", "vibration", "viscosity", "voltage", "wave", "wavelength", 
            "weight", "work", "yield", "absorption", "angular", "atomic", "balanced", "beam", "buoyant", "capacitance", 
            "centripetal", "chaos", "coherent", "critical", "crystal", "dielectric", "dipole", "distortion", "elastomer", 
            "electrode", "fluidity", "galvanometer", "gradient", "hydrodynamics", "induction", "laminar", "lens", 
            "luminescence", "magnet", "neutral", "parameter", "resistivity", "rotation", "shear", "stability", "strain", 
            "symmetry", "tension", "turbulence", "vibration", "viscosity", "yield"
        ];
        op(items);} //Physics array
    else if (currentUrl.endsWith('bot.html')) {
        const items= [
            "abiotic", "absorption", "acid", "acorn", "adaptation", "algae", "allelopathy", "anther", "apical", "aquatic", 
            "archegonium", "asexual", "autotroph", "auxin", "bamboo", "bark", "biennial", "biomass", "blade", "blossom", 
            "bloom", "bract", "bud", "bulb", "calyx", "cambium", "canopy", "carpel", "cellulose", "chlorophyll", "chloroplast", 
            "climber", "clone", "compost", "cone", "cotyledon", "creeper", "cuticle", "cytoplasm", "deciduous", "decomposer", 
            "desert", "dichotomous", "dioecious", "dispersal", "dormancy", "ecosystem", "endosperm", "enzyme", "epidermis", 
            "evergreen", "fertilization", "fibrous", "filament", "flower", "foliage", "frond", "fruit", "fungus", "germination", 
            "glucose", "gravitropism", "guard", "gymnosperm", "habitat", "hardwood", "herbaceous", "herbicide", "hibernation", 
            "hormone", "hybrid", "hydrophyte", "hypocotyl", "insectivore", "internode", "invasive", "keystone", "kudzu", 
            "leaflet", "legume", "lichen", "lignin", "limb", "loam", "mesophyll", "microbe", "moss", "mycelium", "mycorrhiza", 
            "nectar", "node", "nonvascular", "nutrient", "omnivore", "ovary", "ovule", "palisade", "parasite", "parenchyma", 
            "peat", "perennial", "petal", "phloem", "photosynthesis", "phytochrome", "phytoplankton", "pistil", "pith", "plasma", 
            "pollination", "pollen", "pollinator", "propagation", "protoplast", "radicle", "rainforest", "rhizome", "root", 
            "rootstock", "sap", "sapling", "seed", "seedling", "sepal", "shoot", "silica", "sorghum", "spadix", "spathe", 
            "spikelet", "sporangium", "spore", "sporophyte", "stamen", "starch", "stem", "stigma", "stomata", "stonecrop", 
            "succulent", "taproot", "taxonomy", "tendril", "thorn", "transpiration", "tuber", "tundra", "vascular", "vegetation", 
            "vessel", "vine", "whorl", "xylem", "zygote", "acacia", "alder", "almond", "angiosperm", "apple", "ash", "asparagus", 
            "aspen", "aster", "azalea", "basil", "beech", "birch", "bitterroot", "blackberry", "bluebell", "blueberry", 
            "bougainvillea", "bramble", "bromeliad", "buckeye", "burr", "buttercup", "cactus", "caladium", "camellia", "carnation", 
            "cedar", "cherry", "chrysanthemum", "clematis", "coconut", "conifer", "cypress", "daffodil", "dahlia", "daisy", 
            "dogwood", "elder", "elm", "eucalyptus", "fern", "fig", "fir", "flax", "gardenia", "geranium", "ginger", "ginkgo", 
            "gladiolus", "goldenrod", "grape", "hawthorn", "hazel", "heather", "hibiscus", "holly", "honeysuckle", "hyacinth", 
            "hydrangea", "iris", "ivy", "jasmine", "juniper", "kale", "lavender", "lilac", "lily", "lotus", "magnolia", "maple", 
            "marigold", "mimosa", "moss", "mulberry", "oak", "olive", "orchid", "palm", "pansy", "peony", "pine", "poplar", 
            "primrose", "rhododendron", "rose", "sage", "sequoia", "sycamore", "tulip", "violet", "willow", "yew"
        ];
        op(items);} //Botany array
    else if (currentUrl.endsWith('zoo.html')) {
        const items= [
            "abdominal", "adaptation", "amphibian", "anatomy", "animal", "arachnid", "arthropod", "asexual", "behavior", 
            "biology", "bivalve", "bird", "blubber", "bone", "brain", "carnivore", "cephalopod", "chordate", "crustacean", 
            "digestive", "echinoderm", "endotherm", "entomology", "evolution", "exoskeleton", "fish", "fleas", "fossil", 
            "gastropod", "genetics", "invertebrate", "jaws", "mammal", "mantis", "marine", "metamorphosis", "mollusk", 
            "monotreme", "mutation", "natural", "nervous", "omnivore", "organism", "oviparous", "paleontology", "parasite", 
            "pedipalp", "phylum", "plankton", "polyp", "prey", "reptile", "respiration", "scent", "sensory", "species", 
            "spine", "spore", "taxonomy", "terrestrial", "thermoregulation", "trait", "vertebrate", "vocabulary", "wings", 
            "zebra", "zoology", "agility", "alveolus", "antler", "aquatic", "arachnida", "arthropoda", "asexuality", 
            "bipedal", "biome", "blubbering", "bovine", "caterpillar", "cetacea", "chelicera", "cnidaria", "colony", 
            "ctenidia", "diapause", "dorsal", "ectotherm", "elegans", "embryo", "endemic", "entomologist", "eptesicus", 
            "eutrophication", "external", "feline", "forage", "gastrulation", "glossa", "gnathostome", "honeybee", 
            "hummingbird", "insect", "invertebrate", "iridescence", "keystone", "keratin", "kingfisher", "larvae", 
            "lateral", "lizard", "mammalian", "mimicry", "molting", "monarch", "morphology", "nacre", "nectar", 
            "octopus", "organ", "ornithology", "osteocyte", "paleoentomology", "parasitoid", "peduncle", "pinniped", 
            "placental", "polymorphism", "proboscis", "pulmonate", "rattlesnake", "reproduction", "salmon", "scavenger", 
            "scorpion", "sensillum", "silkworm", "snail", "sponge", "tarsus", "taxonomy", "tendon", "theropod", 
            "tortoise", "transmission", "trophic", "tube", "urchin", "uterus", "vertebra", "viper", "vocalization", 
            "xenopus", "yolk", "zebra", "zoologist", "zoo", "aberrant", "adrenal", "aorta", "avian", "barb", "bison", 
            "body", "camouflage", "cephalon", "chemoreception", "ciliate", "cladogram", "coelom", "cranium", "dorsum", 
            "eclosion", "entomology", "filter", "fossilization", "gills", "herbivore", "hymenoptera", "insectivorous", 
            "kinetic", "lepidoptera", "molt", "nasal", "neural", "omnivorous", "ostracod", "pedipalps", "predator", 
            "quadrupedal", "reptilian", "rhopalocera", "sac", "spinal", "stinger", "swarm", "tail", "tentacle", "thermoreceptive", 
            "tissue", "venom", "vertebrates", "villi", "web", "whiskers", "xenarthra", "zebrafish"
        ];
        op(items);} //Zoology array
    else if (currentUrl.endsWith('spa.html')) {
        const items= [
            "asteroid", "astronomy", "blackhole", "comet", "constellation", "crater", "eclipse", "galaxy", "gravity", 
            "heliosphere", "hubble", "inertia", "interstellar", "lightyear", "magnitude", "meteor", "nebula", "orbit", 
            "planet", "quasar", "radiation", "satellite", "solar", "star", "supernova", "telescope", "universe", "vacuum", 
            "velocity", "wormhole", "zodiac", "andromeda", "aphelion", "astronaut", "astronomical", "celestial", 
            "darkmatter", "dwarfstar", "ecliptic", "elliptical", "exoplanet", "extraterrestrial", "galactic", "gravitywave", 
            "helium", "horizon", "intergalactic", "juptier", "lunar", "magnetosphere", "meteorite", "milkyway", "neutronstar", 
            "nucleus", "observable", "perigee", "pulsar", "redshift", "scorpius", "solarflare", "spacecraft", "spacetime", 
            "spectroscopy", "stellar", "terrestrial", "transit", "ultraviolet", "vacuumtube", "variable", "venus", 
            "void", "warpdrive", "zenith", "zodiacal", "aberration", "accretion", "alpha", "amplitude", "andromeda", "astral", 
            "astrobiology", "background", "barred", "binary", "blazar", "cosmology", "dust", "dwarf", "elliptical", 
            "eventhorizon", "farther", "flare", "galactica", "galaxies", "gravitational", "hertzsprung", "infared", "ion", 
            "isotopes", "jupiter", "kuiper", "lensing", "lowearth", "mass", "milky", "neutrino", "nova", "observation", 
            "oscillation", "pulsars", "quasars", "redgiant", "reflector", "relic", "rocket", "rotational", "sagittarius", 
            "satellites", "scintillation", "singularity", "spacewalk", "spacestation", "spectra", "starcluster", "sunspot", 
            "tide", "trigonometry", "ultra", "xray", "year", "zenithal", "zeropoint", "absolute", "angular", "astral", 
            "astronomer", "atmosphere", "ballistic", "beacon", "blackhole", "calculation", "celestial", "chirp", "crossover", 
            "darkenergy", "dustcloud", "eccentric", "ephemeris", "equinox", "farthest", "fossils", "galactose", "horizon", 
            "imaging", "interference", "interplanetary", "intersect", "irregular", "kepler", "lightcurve", "magnetic", 
            "magnitude", "neutron", "planetary", "plasma", "probe", "radiant", "refraction", "regolith", "rotation", 
            "satellite", "space", "spectral", "starfield", "starship", "surface", "telescope", "transmission", "ultra", 
            "vanishing", "velocity", "visual", "xenon", "zodiacal", "apogee", "binary", "cosmic", "deep", "ecliptic", 
            "extra", "focus", "galaxy", "infinity", "kronos", "latitude", "nebulous", "orbital", "plutonium", "ray", 
            "relativity", "solarwind", "spaceweather", "starfield", "starlight", "suborbital", "trailing", "universe"
        ];
        op(items);} //Astronomy array
    else if (currentUrl.endsWith('cs.html')) {
        const items= [
            "algorithm", "array", "binary", "boolean", "bug", "cache", "class", "compiler", "complexity", "database", 
            "debugging", "encryption", "exception", "file", "function", "generator", "graph", "hash", "inheritance", 
            "interface", "iteration", "library", "loop", "method", "node", "object", "operator", "optimization", 
            "paradigm", "pointer", "polymorphism", "procedure", "program", "recursion", "repository", "runtime", 
            "sorting", "stack", "structure", "syntax", "thread", "token", "variable", "vector", "version", "web", 
            "accessibility", "algorithm", "analytics", "API", "architecture", "authentication", "automation", "bandwidth", 
            "backend", "bigdata", "blockchain", "cloud", "coding", "data", "datastructure", "debug", "deployment", 
            "device", "digital", "domain", "ethics", "firmware", "framework", "hardware", "hyperlink", "infosec", 
            "integration", "IPaddress", "IT", "java", "javascript", "machinelearning", "malware", "network", "node", 
            "open-source", "packet", "programming", "protocol", "query", "runtime", "server", "software", "syntax", 
            "technology", "token", "UI", "UX", "versioning", "virtualization", "web", "wifi", "XML", "YAML", "algorithm", 
            "API", "application", "architecture", "authentication", "automation", "bandwidth", "blockchain", "cloud", 
            "coding", "data", "debugging", "device", "digital", "domain", "encryption", "firewall", "firmware", 
            "framework", "frontend", "hardware", "hosting", "hyperlink", "interface", "internet", "Java", "JavaScript", 
            "machinelearning", "malware", "network", "node", "open-source", "packet", "protocol", "query", "repository", 
            "runtime", "security", "server", "software", "sourcecode", "SSL", "storage", "techstack", "testing", "UI", 
            "UX", "virtualization", "web", "wifi", "XML", "algorithm", "API", "backend", "blockchain", "cloud", 
            "coding", "data", "debugging", "digital", "encryption", "firewall", "framework", "frontend", "hardware", 
            "interface", "internet", "Java", "machinelearning", "malware", "network", "open-source", "packet", "protocol", 
            "query", "repository", "security", "server", "software", "sourcecode", "storage", "techstack", "testing", 
            "UI", "UX", "virtualization", "web", "wifi", "XML"
        ];
        op(items);} //Computer Science array
}

let randomItem, underscores, count = 0;

function op(items) {
    // Select a random item from the array and convert it to uppercase
    const randomIndex = Math.floor(Math.random() * items.length);
    randomItem = items[randomIndex].toUpperCase(); 
    underscores = "_ ".repeat(randomItem.length).trim(); 

    // Store the answer in session storage
    sessionStorage.setItem('answer', randomItem);

    // Display the initial underscores
    const displayElement = document.getElementById('word-display');
    displayElement.textContent = underscores;

    const pics = [
        'images/h1.png',
        'images/h2.png',
        'images/h3.png',
        'images/h4.png',
        'images/h5.png',
        'images/h6.png'
    ]; //Create array of images of hangman stages

    const letterInput = document.getElementById('letter');
    const drawing = document.getElementById('drawing');
    let inintems = new Set();

    letterInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action
    
            // Get the input value and convert it to uppercase
            const inletter = letterInput.value.toUpperCase();
            letterInput.value = ''; // Clear the input field
    
            // Check if the input is a single letter
            if (inletter.length === 1 && /^[A-Z]$/.test(inletter)) {
                // Display error message if the letter has already been attempted
                if(inintems.has(inletter)){
                    alert("You have already attempted this letter.");
                    return;
                }
                if (randomItem.includes(inletter)) {
                    // Create an array from underscores, considering spaces
                    let newDisplay = underscores.split(' ');

                    for (let i = 0; i < randomItem.length; i++) {
                        if (randomItem[i] === inletter) {
                            newDisplay[i] = inletter; // Update the correct underscore position
                        }
                    }
                    inintems.add(inletter);
                    // Convert the updated array back to a string
                    underscores = newDisplay.join(' ');
                    displayElement.textContent = underscores;

                    // Check if the word is completely guessed
                    if (!underscores.includes("_")) {
                        setTimeout(() => {
                            window.location.href = "win.html";
                        }, 1000); // Delay before redirecting
                    }
                } else {
                    count++;
                    inintems.add(inletter);
                    // Update the drawing based on the number of wrong guesses
                    if (count <= pics.length) {
                        const img = document.createElement('img');
                        img.src = pics[count - 1];
                        drawing.innerHTML = '';
                        drawing.appendChild(img);
                    }

                    // Check if the user has lost the game
                    if (count === pics.length) {
                        setTimeout(() => {
                            window.location.href = "lose.html";
                        }, 1000); // Delay before redirecting
                    }
                }
            } else {
                // Display error message if input is not a valid letter
                alert('Please enter a single letter.');
            }
        }
    });
}
        