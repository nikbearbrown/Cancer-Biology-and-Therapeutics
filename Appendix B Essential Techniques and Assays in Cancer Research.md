# Appendix B: Essential Techniques and Assays in Cancer Research

## Introduction: From Models to Measurements

While Appendix A covered the experimental model systems used in cancer research, this appendix focuses on the specific techniques and assays used to measure cancer cell behavior within those models. These methods form the essential toolkit for every cancer researcher, allowing quantification of proliferation, viability, migration, invasion, and other key cellular properties.

**Key Principle**: Different assays measure different aspects of cell behavior. Understanding what each assay truly measures—and its limitations—is critical for accurate data interpretation.

---

## Part 1: Cell Viability and Proliferation Assays

### B.1 Metabolic Activity Assays

**B.1.1 MTT Assay**

The MTT assay is one of the most widely used methods for assessing cell viability and proliferation. "The MTT assay was developed as a non-radioactive alternative to tritiated thymidine incorporation into DNA for measuring cell proliferation."¹

**Principle:**
MTT (3-(4,5-dimethylthiazol-2-yl)-2,5-diphenyltetrazolium bromide) is a yellow tetrazolium salt that is reduced by metabolically active cells to purple formazan crystals.

**Mechanism:**
- "The conversion of MTT to formazan by cells in culture is time dependent"¹
- The reduction occurs through cellular enzymes, primarily in mitochondria
- "For cell populations in log phase growth, the amount of formazan product is generally proportional to the number of metabolically active viable cells"¹

**Key Parameters to Optimize:**
"The amount of signal generated is dependent on several parameters including: the concentration of MTT, the length of the incubation period, the number of viable cells and their metabolic activity."¹

**Protocol Considerations:**
- Standard concentration: 0.5 mg/ml MTT
- Incubation time: 1-4 hours (optimize for your cell line)
- "Longer incubation time will result in accumulation of color and increased sensitivity up to a point; however, the incubation time is limited because of the cytotoxic nature of the detection reagents"¹
- Solubilization required (DMSO or specialized buffers)
- Read absorbance at 570 nm

**Advantages:**
- Simple, inexpensive
- Well-established with extensive literature
- Direct correlation with cell number in optimal conditions

**Limitations and Pitfalls:**
- **Cytotoxicity**: "Reagents to estimate viable cell number (e.g. MTT and resazurin) can be toxic to the population of cells, even during a few hours of exposure"²
- **Metabolic state matters**: "When adherent cells in culture approach confluence and growth becomes contact inhibited, metabolism may slow down and the amount MTT reduction per cell will be lower. That situation will lead to a loss of linearity between absorbance and cell number."¹
- **Chemical interference**: "Chemicals such as ascorbic acid, or sulfhydryl-containing compounds including reduced glutathione, coenzyme A, and dithiothreitol, can reduce tetrazolium salts non-enzymatically"¹
- **Formazan crystals**: Visible crystals can form that are larger than cells themselves

**When to Use:**
- Endpoint cytotoxicity assays
- Drug screening in 96-well plates
- Comparing growth rates between conditions

**When NOT to Use:**
- Real-time monitoring (use non-toxic alternatives)
- With compounds containing reducing agents
- In the presence of interfering chemicals

---

**B.1.2 Alternative Metabolic Assays**

**Resazurin (Alamar Blue):**
- Less toxic than MTT
- Fluorescent readout option
- Can be used for kinetic studies with caution

**WST-1/CCK-8:**
- Water-soluble formazan product
- No solubilization step needed
- Less toxic than MTT

**ATP-Based Luminescence Assays:**
- Measures cellular ATP directly
- Very sensitive
- More expensive but excellent for low cell numbers

---

### B.2 DNA Content-Based Assays

**B.2.1 Flow Cytometry for Cell Cycle Analysis**

Flow cytometry exploits DNA content variation during the cell cycle. "The variation in cellular DNA content during the proliferative cycle can be exploited analytically by a collection of automated methods called flow cytometry."³

**Cell Cycle Phases and DNA Content:**
- **G0/G1**: 2N DNA content (diploid)
- **S phase**: Between 2N and 4N (DNA synthesis)
- **G2/M**: 4N DNA content (tetraploid)

**Standard Workflow:**
1. Fix cells (ethanol or formaldehyde)
2. Permeabilize cell membrane
3. Treat with RNase to remove RNA
4. Stain DNA with propidium iodide (PI) or DAPI
5. Analyze by flow cytometry

**Key Measurements:**
"The completed histogram graphs the relative proportions of cells with 2N DNA (ie, diploid cells in the G0-G1-phase), 4N DNA (ie, tetraploid cells in the G2-M-phase), and DNA content between 2N and 4N, called the S-phase fraction."³

**Proliferative Index:**
"Another cytometric term in common use is the proliferative index, the fraction of cells that are in the S-, G2-, or M-phase."³

**Advantages:**
- Quantitative assessment of thousands of cells
- Identifies cell cycle distribution
- Can detect apoptotic sub-G1 population

**Limitations:**
- Requires single-cell suspension
- Cannot assess spatial information
- Expensive equipment needed
- "The major disadvantage of such techniques as flow cytometry, in which the cells being analyzed are not visualized, is that normal stromal cells, normal blood cells, and tumor cells of various types" cannot be distinguished³

---

**B.2.2 BrdU/EdU Incorporation**

**Principle:**
These thymidine analogs are incorporated into newly synthesized DNA during S phase.

**BrdU (Bromodeoxyuridine):**
- Requires DNA denaturation for antibody detection
- Well-established protocol
- Can be combined with other markers

**EdU (5-ethynyl-2'-deoxyuridine):**
- Click chemistry detection (no denaturation needed)
- Better preservation of protein epitopes
- Brighter signal
- More expensive

**Applications:**
- Measuring DNA synthesis rate
- Identifying proliferating cells in tissues
- Cell cycle kinetics studies

---

**B.2.3 Ki-67 Staining**

Ki-67 is a nuclear protein expressed in all active phases of the cell cycle (G1, S, G2, M) but absent in G0.

**Applications:**
- Identifying proliferating cells
- Prognostic marker in clinical samples
- Assessing growth fraction of tumors

**Methods:**
- Immunohistochemistry
- Flow cytometry
- "Visual procedures, such as mitotic index, TLI, and static Ki-67 staining, are slow, laborious, and subjective"³

---

### B.3 Membrane Integrity Assays

**B.3.1 Principles of Dead Cell Detection**

"Membrane integrity is the feature most often used to detect whether eukaryotic cells cultured in vitro are alive or dead. Cells that have lost membrane integrity and allow movement of otherwise non-permeable molecules are classified as non-viable or dead."²

**B.3.2 Trypan Blue Exclusion**

The simplest viability assay:
- Living cells exclude the dye (intact membrane)
- Dead cells take up dye (compromised membrane)
- Count with hemocytometer
- Quick but subjective

**B.3.3 Propidium Iodide (PI) Staining**

- Fluorescent DNA-binding dye
- Cannot cross intact membranes
- Used in flow cytometry
- Often combined with other viability markers

**B.3.4 Lactate Dehydrogenase (LDH) Release**

"A major class of molecules that serve as indicators of dead cells include markers that exist in the cytoplasm of viable cells, but leak into the surrounding culture medium upon loss of membrane integrity."²

LDH is a stable cytoplasmic enzyme released upon cell lysis:
- Measured in culture supernatant
- Enzymatic assay generates colored product
- Proportional to number of lysed cells

**Advantages:**
- Non-destructive (measure supernatant)
- Quantitative
- Can be kinetic

**Limitations:**
- Background LDH in serum
- Requires standardization
- Cannot distinguish apoptosis from necrosis

---

## Part 2: Cell Death Assays

### B.4 Apoptosis Detection Methods

**B.4.1 Annexin V Staining**

**Principle:**
Early in apoptosis, phosphatidylserine (PS) flips from inner to outer membrane leaflet. Annexin V binds PS with high affinity.

**Standard Protocol:**
- Annexin V-FITC (green fluorescence)
- Combined with PI (red fluorescence)
- Four populations:
  - Annexin V⁻/PI⁻: Viable cells
  - Annexin V⁺/PI⁻: Early apoptotic
  - Annexin V⁺/PI⁺: Late apoptotic/necrotic
  - Annexin V⁻/PI⁺: Necrotic

**Critical Considerations:**
- Must use calcium-containing buffer
- Time-sensitive (PS exposure transient)
- Cannot fix cells before staining

---

**B.4.2 Caspase Activity Assays**

Caspases are proteases activated during apoptosis.

**Methods:**
- **Fluorogenic substrates**: DEVD-AFC for caspase-3
- **Luminogenic substrates**: More sensitive
- **Fluorescent inhibitors**: FLICA reagents, cell-permeable

**Applications:**
- Confirming apoptotic mechanism
- Kinetic studies of apoptosis
- Drug mechanism studies

---

**B.4.3 TUNEL Assay**

Terminal deoxynucleotidyl transferase dUTP nick end labeling (TUNEL) detects DNA fragmentation.

**Principle:**
- Apoptosis creates DNA breaks
- TdT enzyme adds labeled dUTP to 3'-OH ends
- Fluorescent or chromogenic detection

**Applications:**
- Tissue sections
- Cell preparations
- Quantification by flow cytometry or microscopy

**Limitations:**
- Also labels necrotic cells (though less intensely)
- Can have high background
- Requires optimization

---

### B.5 Clonogenic Survival Assay

This gold-standard assay measures reproductive cell death—the most relevant endpoint for radiation and many drug studies.

**Principle:**
"An operational definition of stem capacity is the ability to form colonies in soft agar."⁴

**Protocol:**
1. Plate single cells at low density
2. Allow colony formation (7-14 days)
3. Fix and stain (crystal violet)
4. Count colonies (typically >50 cells = 1 colony)

**Measurements:**
- **Plating efficiency (PE)**: (Colonies formed / Cells plated) × 100
- **Surviving fraction (SF)**: PE treated / PE control

**Applications:**
- Radiation sensitivity
- Drug cytotoxicity
- "The ability to grow cancer cells derived from human tumors to test their sensitivity to chemotherapeutic agents"⁴

**Advantages:**
- Measures reproductive viability
- Clinically relevant endpoint
- Long-standing gold standard

**Limitations:**
- Time-consuming (1-3 weeks)
- Only for adherent cells
- Low throughput
- "Cell culture experiments have found that from 1% to less than 0.1% of the cells in many common tumors have this property"⁴

---

## Part 3: Migration and Invasion Assays

### B.6 Migration Assays

**B.6.1 Scratch/Wound Healing Assay**

"Scratch or wound healing assays refer to the measurement of 2D cell migration into a wound (cell free area) that is created by a central linear scratch across the surface of a tissue culture well containing a confluent monolayer of cells."⁵

**Protocol:**
1. Grow cells to confluence
2. Create scratch with pipette tip or specialized tool
3. Remove detached cells
4. Image immediately (T0)
5. Image at intervals (typically 6-24h)
6. Measure gap closure

**Optimization:**
"To avoid cell turnover influencing the rate of wound closure, cells are often serum starved 8-24 h prior to wounding, and post-scratch media is typically supplemented with non-toxic doses of Mitomycin C to inhibit proliferation."⁵

**Quantification:**
"Migration may be quantitated manually by standard microscope or by using quantitation software such as MetaMorph™ or the IncuCyte™ live-cell imaging software."⁵

**Advantages:**
- Simple and inexpensive
- Real-time imaging possible
- Mimics tissue repair

**Limitations:**
- "This approach is not suitable for chemotaxis measurement or for non-adherent cells"⁵
- Difficult to standardize scratch
- Proliferation can confound results
- Only 2D environment

**Best For:**
"This is ideal for cell types that migrate as a collective such as keratinocytes that typically move as epithelial sheets."⁵

---

**B.6.2 Transwell Migration Assay (Boyden Chamber)**

**Principle:**
Cells migrate through porous membrane (typically 8 μm pores) toward chemoattractant.

**Setup:**
- Upper chamber: Cells in serum-free medium
- Lower chamber: Chemoattractant (serum, growth factors, etc.)
- Porous membrane separates chambers

**Protocol:**
1. Seed cells in upper chamber
2. Add chemoattractant to lower chamber
3. Incubate (typically 4-24h)
4. Remove non-migrated cells from upper surface
5. Fix and stain migrated cells on lower surface
6. Count or extract dye for quantification

**Advantages:**
- Quantitative
- Tests chemotaxis specifically
- Well-established
- Amenable to high-throughput

**Limitations:**
- Endpoint assay only
- Cannot track individual cells
- Fixed time point

---

### B.7 Invasion Assays

**B.7.1 Matrigel Invasion Assay**

Similar to transwell migration but membrane is coated with extracellular matrix (Matrigel).

**Key Difference:**
Cells must degrade matrix AND migrate, thus measuring invasive capacity specifically.

**Protocol:**
1. Coat transwell membrane with Matrigel
2. Seed cells in upper chamber
3. Add chemoattractant to lower chamber
4. Incubate (24-72h, longer than migration)
5. Remove non-invaded cells
6. Quantify invaded cells

**Applications:**
- Assessing metastatic potential
- Testing anti-invasive drugs
- "Several in vitro assays have been developed to investigate the mechanisms regulating cancer cell migration or test the efficacy of potential therapeutic drugs"⁵

**Matrigel Considerations:**
- Batch-to-batch variability
- Concentration affects results
- Must keep on ice before polymerization
- Expensive

---

**B.7.2 3D Invasion Assays**

More physiologically relevant invasion measurements:

**Spheroid Invasion:**
- Embed tumor spheroids in 3D matrix
- Measure cell invasion into matrix over time
- Live imaging possible

**Organotypic Invasion:**
- Cancer cells on tissue slices or engineered tissues
- Maintains tissue architecture
- More complex but more relevant

---

## Part 4: Tumor-Specific Measurements

### B.8 Tumor Volume Measurement in Mice

**B.8.1 Caliper Measurements**

Standard method for subcutaneous tumors:

**Formula:**
Volume = (Length × Width²) / 2

Where:
- Length = longest dimension
- Width = perpendicular to length

**Best Practices:**
- Measure consistently (same person, same time)
- Anesthetize mice for accuracy
- Measure twice weekly minimum
- Define humane endpoints (typically 2000 mm³)

**Limitations:**
- Cannot measure deep/orthotopic tumors
- Assumes ellipsoid shape
- Operator variability

---

**B.8.2 Bioluminescence Imaging**

For cells engineered with luciferase:

**Advantages:**
- Non-invasive
- Quantitative
- Detects orthotopic and metastatic tumors
- Longitudinal tracking in same animal

**Protocol:**
1. Inject luciferin substrate (IP)
2. Wait 10-15 min for distribution
3. Anesthetize mouse
4. Image in IVIS or similar system
5. Quantify photon flux

**Limitations:**
- Requires genetic modification of cells
- Signal attenuation by tissue depth
- Need specialized equipment

---

**B.8.3 MRI and Micro-CT**

Non-invasive imaging for detailed anatomy:
- Excellent soft tissue contrast (MRI)
- Good bone/lung imaging (CT)
- Expensive equipment
- Requires expertise

---

## Part 5: Molecular Biology Techniques

### B.9 CRISPR/Cas9 Gene Editing

**B.9.1 Basic Principles**

CRISPR has revolutionized cancer research. "CRISPR Cas9 is guided by 2 RNAs to the DNA target and operates by creating double-stranded breaks in the DNA and leveraging cellular DNA repair mechanisms."⁶

**Components:**
1. **Cas9 nuclease**: Cuts DNA
2. **Guide RNA (gRNA)**: Directs Cas9 to target sequence
3. **PAM sequence**: Required next to target (NGG for SpCas9)

**Mechanism:**
"A guide ribonucleic acid (RNA) sequence leads the CRISPR-associated nuclease to the target DNA sequence where the cut is made."⁶

---

**B.9.2 Gene Knockout**

**Principle:**
Double-strand break → Non-homologous end joining (NHEJ) → Insertions/deletions → Frameshift → Gene knockout

**Applications:**
- Identify essential genes
- Model tumor suppressor loss
- Create knockout cell lines
- Genome-wide screens

---

**B.9.3 Gene Knock-in**

**Principle:**
Double-strand break + Donor template → Homology-directed repair (HDR) → Precise insertion

**Applications:**
- Insert fluorescent tags
- Introduce specific mutations
- Add regulatory elements

**Challenge:**
HDR is less efficient than NHEJ, requires selection

---

**B.9.4 CRISPR Screens**

**Genome-wide knockout screens:**
- Library of gRNAs targeting all genes
- Transduce cells with library
- Apply selection (drug treatment)
- Sequence surviving cell gRNAs
- Enriched gRNAs = resistance genes
- Depleted gRNAs = sensitivity genes

**Applications:**
- Identify drug targets
- Discover synthetic lethal interactions
- Map genetic dependencies

---

### B.10 RNA Interference (RNAi)

Alternative to CRISPR for gene silencing:

**siRNA (small interfering RNA):**
- Transient knockdown
- Fast (24-72h)
- Good for validation

**shRNA (short hairpin RNA):**
- Stable knockdown
- Requires viral transduction or transfection
- Long-term experiments

**Advantages over CRISPR:**
- Reversible
- Titrable (knockdown vs knockout)
- Faster results

**Limitations:**
- Incomplete knockdown
- Off-target effects
- Variable efficiency

---

## Part 6: Practical Experimental Design

### B.11 Statistical Considerations

**B.11.1 Sample Size and Replication**

**Biological vs Technical Replicates:**
- **Biological replicates**: Independent experiments
- **Technical replicates**: Multiple measurements of same sample

**Both are needed:**
- Technical replicates assess measurement precision
- Biological replicates assess biological variability

**Minimum recommendations:**
- n=3 biological replicates for cell culture
- Power analysis for animal studies
- More replicates for heterogeneous systems

---

**B.11.2 Controls**

**Essential Controls:**
- **Negative control**: No treatment
- **Vehicle control**: Solvent alone (e.g., DMSO)
- **Positive control**: Known effective treatment
- **Blank**: No cells (background)

---

### B.12 Common Pitfalls and How to Avoid Them

**B.12.1 Cell Culture Artifacts**

❌ **Problem**: Confluent cells behave differently
✓ **Solution**: Maintain log-phase growth, passage regularly

❌ **Problem**: Mycoplasma contamination alters results
✓ **Solution**: Test quarterly, quarantine new lines

❌ **Problem**: High passage numbers change phenotype
✓ **Solution**: Use cells <20 passages from original stock

---

**B.12.2 Assay-Specific Issues**

**MTT/Viability Assays:**
- Always run standard curves
- Check for compound interference
- Use appropriate incubation times

**Migration Assays:**
- Control for proliferation (use mitomycin C)
- Standardize scratch width
- Multiple time points better than single endpoint

**Animal Studies:**
- Randomize treatment groups
- Blind measurements when possible
- Define humane endpoints a priori

---

## Part 7: Data Analysis and Presentation

### B.13 Quantification Methods

**B.13.1 Image Analysis**

**Software Options:**
- **ImageJ/FIJI**: Free, powerful, widely used
- **CellProfiler**: Automated quantification
- **Imaris**: 3D analysis (commercial)
- **IncuCyte**: Real-time kinetic analysis

**Best Practices:**
- Use consistent imaging parameters
- Process all images identically
- Report analysis methods completely
- Show representative images

---

**B.13.2 Flow Cytometry Analysis**

**Software:**
- FlowJo (standard)
- FCS Express
- BD FACSDiva

**Gating Strategy:**
- Remove debris (FSC/SSC)
- Singlets (FSC-A vs FSC-H)
- Live cells (viability dye negative)
- Positive population

**Report:**
- Complete gating strategy
- Compensation controls
- Fluorescence minus one (FMO) controls
- Number of events collected

---

### B.14 Statistical Analysis

**Common Tests:**
- **t-test**: Compare two groups
- **ANOVA**: Compare multiple groups
- **Repeated measures**: Same animals/cells over time

**Significance levels:**
- *p < 0.05
- **p < 0.01
- ***p < 0.001

**Report:**
- Mean ± SEM or Mean ± SD
- n values clearly stated
- Test used and why
- Exact p-values when possible

---

## Part 8: Quality Control and Reproducibility

### B.15 Ensuring Reproducible Results

**B.15.1 Documentation**

Keep detailed records:
- Cell passage numbers
- Reagent lot numbers
- Equipment settings
- Exact concentrations and volumes
- Any deviations from protocol

---

**B.15.2 Validation**

Before publishing:
- Validate key findings in independent experiments
- Test findings in multiple cell lines/models if possible
- Confirm antibody specificity
- Include proper controls
- Share protocols and reagents

---

### B.16 Troubleshooting Guide

**Problem**: MTT absorbance too high/too low
→ Adjust cell number or incubation time

**Problem**: Scratch assay scratches too wide/narrow  
→ Use commercial tools or practice technique

**Problem**: Invasion assay no invasion
→ Check Matrigel concentration, increase incubation time, verify cell type

**Problem**: Flow cytometry high background
→ Check antibody concentration, include FMO controls, verify viability dye

**Problem**: Tumors not growing in mice
→ Verify cell viability before injection, check injection technique, increase cell number

---

## Conclusion

This appendix has covered the essential techniques used daily in cancer research laboratories. Key takeaways:

1. **No single assay tells the complete story** - use complementary approaches
2. **Controls are critical** - never skip negative and positive controls
3. **Optimization is essential** - what works for one cell line may not work for another
4. **Document everything** - reproducibility depends on detailed records
5. **Understand what you're measuring** - each assay has assumptions and limitations

"In general, the use of multiple models to address one biological question is optimal as this strategy can overcome the limitations of each individual model."⁷

The same principle applies to techniques: combining multiple complementary assays provides the most robust and reliable data.

---

## Quick Reference: When to Use Which Assay

| **Research Question** | **Recommended Assays** |
|----------------------|------------------------|
| Is my drug killing cells? | MTT/ATP + Annexin V/PI + LDH |
| How does drug affect proliferation? | BrdU/EdU + Ki-67 + cell counting |
| Does drug induce apoptosis? | Annexin V + Caspase activity + TUNEL |
| Are cells migrating? | Scratch assay + Transwell migration |
| Can cells invade? | Matrigel invasion + 3D spheroid invasion |
| What's the mechanism? | CRISPR knockout + RNAi + rescue experiments |
| How effective in vivo? | Tumor volume + survival curves + IHC |

---

## References

1. Riss TL, Moravec RA, Niles AL, et al. Cell Viability Assays. Assay Guidance Manual. NCBI Bookshelf; 2016.
2. Riss T, Niles A, Moravec R, et al. Cytotoxicity Assays: In Vitro Methods to Measure Dead Cells. Assay Guidance Manual. NCBI Bookshelf; 2019.
3. Cell Proliferation. In: Holland-Frei Cancer Medicine. 6th edition. NCBI Bookshelf; 2003.
4. What Makes a Cancer Cell a Cancer Cell? In: Holland-Frei Cancer Medicine. 6th edition. NCBI Bookshelf; 2003.
5. Investigating Metastasis Using In Vitro Platforms. Madame Curie Bioscience Database. NCBI Bookshelf.
6. CRISPR Technologies for In Vivo and Ex Vivo Gene Editing. NCBI Bookshelf; 2024.
7. Experimental Models for Preclinical Research in Hepatocellular Carcinoma. In: Hepatocellular Carcinoma. NCBI Bookshelf; 2019.

---

**End of Appendix B**

For additional protocols and detailed methodologies, refer to:
- protocols.io
- JoVE (Journal of Visualized Experiments)
- Cold Spring Harbor Protocols
- Assay Guidance Manual (NCBI Bookshelf)
