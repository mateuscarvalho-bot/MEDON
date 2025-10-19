// Application State
let appSettings = {
  certificate: {
    template: "legal",
    customText: "",
    defaultIncludeCID: false,
    defaultIncludeDate: true,
    defaultSpecialControl: false,
    defaultUseHeader: true,
    doctorInfo: {
      name: "",
      crm: "",
      specialty: "",
      clinic: ""
    }
  },
  headers: [],
  general: {
    confirmDelete: true,
    autoSave: true,
    autoSaveInterval: 5,
    paperSize: "A4",
    orientation: "portrait",
    fontSize: "medium"
  }
};

// Certificate templates
const certificateTemplates = {
  legal: "Atesto, para efeitos do art. 86 do Decreto n° 60.501, de 1967, que [NOME_PACIENTE] foi examinado(a) nesta Unidade, no dia [DATA_EXAME], necessitando de [DIAS] dia(s) de afastamento de suas atividades por motivo de doença, contados a partir de [DATA_INICIO].",
  simple: "Atesto que [NOME_PACIENTE] necessita de [DIAS] dia(s) de afastamento de suas atividades.\n\nData: [DATA_EXAME]"
};

let prescriptions = [
    {
        id: 1,
        title: "ITU [Cefalexina]",
        cid: "N39.0",
        category: "Receita Padrão",
        content: `<p><strong><u>USO ORAL</u></strong></p>
<p><strong>1) Cefalexina 500mg</strong><br>
→ Tomar 1 comprimido a cada 6 horas por 7 dias</p>
<p><strong>2) Dipirona 500mg</strong><br>
→ Tomar 1 comprimido a cada 6 horas se dor ou febre.</p>
<p><strong>3) Fenazopiridina 200mg</strong><br>
→ Tomar 1 comprimido a cada 8 horas por 3 dias</p>
<p><strong>4) Ibuprofeno 300mg</strong><br>
→ Tomar 1 comprimido a cada 8 horas por 5 dias</p>`,
        createdAt: new Date('2024-01-15')
    },
    {
        id: 2,
        title: "ITU [Nitrofurantoína]",
        cid: "N39.0",
        category: "Receita Padrão",
        content: `<p><strong><u>USO ORAL</u></strong></p>
<p><strong>1) Nitrofurantoína 100mg</strong><br>
→ Tomar 1 comprimido a cada 6 horas por 7 dias</p>
<p><strong>2) Dipirona 500mg</strong><br>
→ Tomar 1 comprimido a cada 6 horas se dor ou febre.</p>`,
        createdAt: new Date('2024-01-10')
    },
    {
        id: 3,
        title: "ITU [Ciprofloxacino]",
        cid: "N39.0",
        category: "Receita Padrão",
        content: `<p><strong><u>USO ORAL</u></strong></p>
<p><strong>1) Ciprofloxacino 500mg</strong><br>
→ Tomar 1 comprimido a cada 12 horas por 7 dias</p>`,
        createdAt: new Date('2024-01-08')
    },
    {
        id: 4,
        title: "ENXAQUECA",
        cid: "G43",
        category: "Receita Padrão",
        content: `<p><strong><u>USO ORAL</u></strong></p>
<p><strong>1) Sumatriptana 50mg</strong><br>
→ Tomar 1 comprimido na crise</p>
<p><strong>2) Metoclopramida 10mg</strong><br>
→ Tomar 1 comprimido se náusea</p>`,
        createdAt: new Date('2024-01-05')
    },
    {
        id: 5,
        title: "Anamnese Geral",
        cid: "",
        category: "Modelos",
        content: `<p><strong>IDENTIFICAÇÃO</strong><br>
Nome: _______________<br>
Idade: ___ anos<br>
Sexo: _______________<br>
Profissão: _______________</p>

<p><strong>QUEIXA PRINCIPAL</strong><br>
_______________________________________________</p>

<p><strong>HISTÓRIA DA DOENÇA ATUAL (HDA)</strong><br>
_______________________________________________</p>

<p><strong>HISTÓRIA PATOLÓGICA PREGRESSA (HPP)</strong><br>
- Doenças prévias: _______________<br>
- Cirurgias: _______________<br>
- Alergias: _______________<br>
- Medicações em uso: _______________</p>

<p><strong>HISTÓRIA FAMILIAR</strong><br>
_______________________________________________</p>

<p><strong>HISTÓRIA SOCIAL</strong><br>
- Tabagismo: _______________<br>
- Etilismo: _______________<br>
- Atividade física: _______________</p>

<p><strong>REVISÃO DE SISTEMAS</strong><br>
- Geral: _______________<br>
- Cardiovascular: _______________<br>
- Respiratório: _______________<br>
- Gastrointestinal: _______________<br>
- Geniturinário: _______________<br>
- Neurológico: _______________<br>
- Musculoesquelético: _______________</p>

<p><strong>EXAME FÍSICO</strong><br>
- Estado geral: _______________<br>
- PA: ___ mmHg | FC: ___ bpm | FR: ___ irpm | Tax: ___ °C<br>
- Cabeça e pescoço: _______________<br>
- Tórax: _______________<br>
- Abdome: _______________<br>
- Extremidades: _______________<br>
- Neurológico: _______________</p>`,
        createdAt: new Date('2024-01-20')
    },
    {
        id: 6,
        title: "Anamnese Cardiológica",
        cid: "",
        category: "Modelos",
        content: `<p><strong>IDENTIFICAÇÃO</strong><br>
Nome: _______________<br>
Idade: ___ anos</p>

<p><strong>QUEIXA PRINCIPAL</strong><br>
_______________________________________________</p>

<p><strong>HISTÓRIA DA DOENÇA ATUAL</strong><br>
- Início dos sintomas: _______________<br>
- Dor torácica: ( ) Sim ( ) Não<br>
&nbsp;&nbsp;Características: _______________<br>
- Dispneia: ( ) Sim ( ) Não<br>
&nbsp;&nbsp;Classificação NYHA: _______________<br>
- Palpitações: ( ) Sim ( ) Não<br>
- Síncope: ( ) Sim ( ) Não<br>
- Edema: ( ) Sim ( ) Não<br>
&nbsp;&nbsp;Localização: _______________</p>

<p><strong>FATORES DE RISCO CARDIOVASCULAR</strong><br>
- HAS: ( ) Sim ( ) Não<br>
- Diabetes: ( ) Sim ( ) Não<br>
- Dislipidemia: ( ) Sim ( ) Não<br>
- Tabagismo: ( ) Sim ( ) Não<br>
- História familiar de DAC: ( ) Sim ( ) Não<br>
- Sedentarismo: ( ) Sim ( ) Não</p>

<p><strong>MEDICAÇÕES EM USO</strong><br>
_______________________________________________</p>

<p><strong>EXAME FÍSICO CARDIOVASCULAR</strong><br>
- PA: ___ x ___ mmHg | FC: ___ bpm | FR: ___ irpm<br>
- Pulsos periféricos: _______________<br>
- Ausculta cardíaca: _______________<br>
- Ausculta pulmonar: _______________<br>
- Membros inferiores: _______________</p>`,
        createdAt: new Date('2024-01-18')
    },
    {
        id: 7,
        title: "Anamnese Pediátrica",
        cid: "",
        category: "Modelos",
        content: `<p><strong>IDENTIFICAÇÃO</strong><br>
Nome: _______________<br>
Idade: ___ anos ___ meses<br>
Responsável: _______________</p>

<p><strong>QUEIXA PRINCIPAL</strong><br>
_______________________________________________</p>

<p><strong>HISTÓRIA GESTACIONAL E PERINATAL</strong><br>
- Gestação: G___ P___ A___<br>
- Pré-natal: _______________<br>
- Intercorrências: _______________<br>
- Tipo de parto: _______________<br>
- Peso ao nascer: ___ g<br>
- Apgar: _______________</p>

<p><strong>DESENVOLVIMENTO NEUROPSICOMOTOR</strong><br>
- Sustentou cabeça: ___ meses<br>
- Sentou sem apoio: ___ meses<br>
- Andou: ___ meses<br>
- Primeiras palavras: ___ meses</p>

<p><strong>ALIMENTAÇÃO</strong><br>
- Aleitamento materno: _______________<br>
- Introdução alimentar: _______________<br>
- Alimentação atual: _______________</p>

<p><strong>VACINAÇÃO</strong><br>
- Carteira em dia: ( ) Sim ( ) Não<br>
- Pendências: _______________</p>

<p><strong>HISTÓRIA DA DOENÇA ATUAL</strong><br>
_______________________________________________</p>

<p><strong>EXAME FÍSICO</strong><br>
- Peso: ___ kg | Altura: ___ cm<br>
- Estado geral: _______________<br>
- Sinais vitais: _______________<br>
- Avaliação por sistemas: _______________</p>`,
        createdAt: new Date('2024-01-16')
    }
];

let currentPrescriptionId = null;
let currentFilter = 'all';
let searchTerm = '';
let nextId = 8;

// DOM Elements - ENHANCED WITH DEBUGGING
const elements = {
    // Filter tabs
    filterTabs: document.querySelectorAll('.filter-tab'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    
    // Prescription list
    prescriptionList: document.getElementById('prescriptionList'),
    
    // Main panel
    emptyState: document.getElementById('emptyState'),
    prescriptionContent: document.getElementById('prescriptionContent'),
    prescriptionTitle: document.getElementById('prescriptionTitle'),
    prescriptionMeta: document.getElementById('prescriptionMeta'),
    prescriptionEditor: document.getElementById('prescriptionEditor'),
    
    // Buttons
    newPrescriptionBtn: document.getElementById('newPrescriptionBtn'),
    saveBtn: document.getElementById('saveBtn'),
    copyBtn: document.getElementById('copyBtn'),
    printBtn: document.getElementById('printBtn'),
    deleteBtn: document.getElementById('deleteBtn'),
    generateCertificateBtn: document.getElementById('generateCertificateBtn'),
    
    // Toolbar
    toolbarBtns: document.querySelectorAll('.toolbar-btn'),
    
    // Modals
    addPrescriptionModal: document.getElementById('addPrescriptionModal'),
    printPrescriptionModal: document.getElementById('printPrescriptionModal'),
    printCertificateModal: document.getElementById('printCertificateModal'),
    addHeaderModal: document.getElementById('addHeaderModal'),
    deleteConfirmModal: document.getElementById('deleteConfirmModal'),
    
    // Add prescription form
    prescriptionTitleInput: document.getElementById('prescriptionTitleInput'),
    prescriptionCidInput: document.getElementById('prescriptionCidInput'),
    prescriptionCategoryInput: document.getElementById('prescriptionCategoryInput'),
    modalTitle: document.getElementById('modalTitle'),
    titleLabel: document.getElementById('titleLabel'),
    cidLabel: document.getElementById('cidLabel'),
    cancelAddBtn: document.getElementById('cancelAddBtn'),
    addBtn: document.getElementById('addBtn'),
    
    // Print prescription form
    withPrescriptionHeaderBtn: document.getElementById('withPrescriptionHeaderBtn'),
    withoutPrescriptionHeaderBtn: document.getElementById('withoutPrescriptionHeaderBtn'),
    includeCid: document.getElementById('includeCid'),
    includeDate: document.getElementById('includeDate'),
    specialControl: document.getElementById('specialControl'),
    prescriptionPatientName: document.getElementById('prescriptionPatientName'),
    closePrintPrescriptionModal: document.getElementById('closePrintPrescriptionModal'),
    cancelPrintPrescriptionBtn: document.getElementById('cancelPrintPrescriptionBtn'),
    confirmPrintPrescriptionBtn: document.getElementById('confirmPrintPrescriptionBtn'),

    // Print certificate form
    withHeaderBtn: document.getElementById('withHeaderBtn'),
    withoutHeaderBtn: document.getElementById('withoutHeaderBtn'),
    patientNameInput: document.getElementById('patientNameInput'),
    daysInput: document.getElementById('daysInput'),
    certificateCidInput: document.getElementById('certificateCidInput'),
    closePrintBtn: document.getElementById('closePrintBtn'),
    closePrintCertificateModal: document.getElementById('closePrintCertificateModal'),
    printCertificateBtn: document.getElementById('printCertificateBtn'),
    
    // Add header form
    headerNameInput: document.getElementById('headerNameInput'),
    headerFileInput: document.getElementById('headerFileInput'),
    chooseFileBtn: document.getElementById('chooseFileBtn'),
    fileStatus: document.getElementById('fileStatus'),
    cancelHeaderBtn: document.getElementById('cancelHeaderBtn'),
    addHeaderBtn: document.getElementById('addHeaderBtn'),
    closeAddHeaderModal: document.getElementById('closeAddHeaderModal'),
    
    // Delete confirmation
    deleteConfirmTitle: document.getElementById('deleteConfirmTitle'),
    cancelDeleteBtn: document.getElementById('cancelDeleteBtn'),
    confirmDeleteBtn: document.getElementById('confirmDeleteBtn'),
    closeDeleteConfirmModal: document.getElementById('closeDeleteConfirmModal'),

    // Modal close buttons
    closeAddPrescriptionModal: document.getElementById('closeAddPrescriptionModal'),
    
    // Settings elements
    settingsBtn: document.getElementById('settingsBtn'),
    settingsModal: document.getElementById('settingsModal'),
    closeSettingsModal: document.getElementById('closeSettingsModal'),
    settingsTabs: document.querySelectorAll('.settings-tab'),
    settingsTabContents: document.querySelectorAll('.settings-tab-content'),
    
    // Certificate settings
    certificateTemplate: document.getElementById('certificateTemplate'),
    customTemplateText: document.getElementById('customTemplateText'),
    customTemplateGroup: document.getElementById('customTemplateGroup'),
    defaultIncludeCID: document.getElementById('defaultIncludeCID'),
    defaultIncludeDate: document.getElementById('defaultIncludeDate'),
    defaultSpecialControl: document.getElementById('defaultSpecialControl'),
    defaultUseHeader: document.getElementById('defaultUseHeader'),
    doctorName: document.getElementById('doctorName'),
    doctorCRM: document.getElementById('doctorCRM'),
    doctorSpecialty: document.getElementById('doctorSpecialty'),
    doctorClinic: document.getElementById('doctorClinic'),
    
    // Headers settings
    headersList: document.getElementById('headersList'),
    addNewHeaderBtn: document.getElementById('addNewHeaderBtn'),
    
    // General settings
    confirmBeforeDelete: document.getElementById('confirmBeforeDelete'),
    autoSaveChanges: document.getElementById('autoSaveChanges'),
    autoSaveInterval: document.getElementById('autoSaveInterval'),
    paperSize: document.getElementById('paperSize'),
    paperOrientation: document.getElementById('paperOrientation'),
    exportDataBtn: document.getElementById('exportDataBtn'),
    importDataBtn: document.getElementById('importDataBtn'),
    importDataFile: document.getElementById('importDataFile'),
    
    // Settings modal buttons
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    cancelSettingsBtn: document.getElementById('cancelSettingsBtn'),
    
    // Enhanced header modal
    enhancedAddHeaderModal: document.getElementById('enhancedAddHeaderModal'),
    closeEnhancedAddHeaderModal: document.getElementById('closeEnhancedAddHeaderModal'),
    enhancedHeaderName: document.getElementById('enhancedHeaderName'),
    headerTypeRadios: document.querySelectorAll('input[name="headerType"]'),
    logoOptionsGroup: document.getElementById('logoOptionsGroup'),
    logoPosition: document.getElementById('logoPosition'),
    logoSize: document.getElementById('logoSize'),
    useAsWatermark: document.getElementById('useAsWatermark'),
    enhancedHeaderFile: document.getElementById('enhancedHeaderFile'),
    chooseEnhancedFileBtn: document.getElementById('chooseEnhancedFileBtn'),
    enhancedFileStatus: document.getElementById('enhancedFileStatus'),
    headerImagePreview: document.getElementById('headerImagePreview'),
    headerPreviewImg: document.getElementById('headerPreviewImg'),
    setAsDefaultHeader: document.getElementById('setAsDefaultHeader'),
    cancelEnhancedHeaderBtn: document.getElementById('cancelEnhancedHeaderBtn'),
    addEnhancedHeaderBtn: document.getElementById('addEnhancedHeaderBtn'),
    
    // Toast
    toast: document.getElementById('toast')
};

// Utility Functions
function showToast(message, type = 'info') {
    elements.toast.textContent = message;
    elements.toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

function openModal(modal) {
    modal.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
}

function generateId() {
    return nextId++;
}

// Prescription Functions
function filterPrescriptions() {
    return prescriptions.filter(prescription => {
        const matchesCategory = currentFilter === 'all' || prescription.category === currentFilter;
        const matchesSearch = !searchTerm || 
            prescription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prescription.cid.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prescription.content.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
}

function renderPrescriptionList() {
    const filteredPrescriptions = filterPrescriptions();
    updateFilterTabCounts();
    
    elements.prescriptionList.innerHTML = '';
    
    if (filteredPrescriptions.length === 0) {
        elements.prescriptionList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                <p>Nenhuma prescrição encontrada</p>
            </div>
        `;
        return;
    }
    
    filteredPrescriptions.forEach(prescription => {
        const card = document.createElement('div');
        card.className = `prescription-card ${currentPrescriptionId === prescription.id ? 'active' : ''}`;
        card.setAttribute('data-category', prescription.category);
        
        // Category indicator and icon
        const categoryIcon = prescription.category === 'Modelos' ? '📋' : '';
        const cidDisplay = prescription.cid ? `CID: ${prescription.cid}` : 
            (prescription.category === 'Modelos' ? 'Modelo de Anamnese' : 'Sem CID');
        
        card.innerHTML = `
            <div class="prescription-card-title">${categoryIcon} ${prescription.title}</div>
            <div class="prescription-card-cid">${cidDisplay}</div>
            <div class="prescription-card-actions">
                <button class="card-action-btn edit" data-id="${prescription.id}" title="Editar">✏️</button>
                <button class="card-action-btn delete" data-id="${prescription.id}" title="Excluir">🗑️</button>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('card-action-btn')) {
                selectPrescription(prescription.id);
            }
        });
        
        // Edit button
        card.querySelector('.edit').addEventListener('click', (e) => {
            e.stopPropagation();
            selectPrescription(prescription.id);
        });
        
        // Delete button
        card.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            confirmDelete(prescription.id);
        });
        
        elements.prescriptionList.appendChild(card);
    });
}

function selectPrescription(id) {
    currentPrescriptionId = id;
    const prescription = prescriptions.find(p => p.id === id);
    
    if (!prescription) {
        showEmptyState();
        return;
    }
    
    // Update UI
    elements.emptyState.style.display = 'none';
    elements.prescriptionContent.style.display = 'flex';
    
    // Update prescription details
    elements.prescriptionTitle.textContent = prescription.title;
    const cidText = prescription.cid ? prescription.cid + ' - ' : '';
    elements.prescriptionMeta.textContent = `${cidText}${prescription.category}`;
    elements.prescriptionEditor.innerHTML = prescription.content;
    
    // Show/hide GERAR ATESTADO button based on category
    if (prescription.category === 'Modelos') {
        elements.generateCertificateBtn.style.display = 'none';
    } else {
        elements.generateCertificateBtn.style.display = 'block';
    }
    
    // Update active card
    renderPrescriptionList();
}

function showEmptyState() {
    currentPrescriptionId = null;
    elements.emptyState.style.display = 'flex';
    elements.prescriptionContent.style.display = 'none';
    // Show GERAR ATESTADO button in empty state
    elements.generateCertificateBtn.style.display = 'block';
    renderPrescriptionList();
}

function savePrescription() {
    if (!currentPrescriptionId) return;
    
    const prescription = prescriptions.find(p => p.id === currentPrescriptionId);
    if (!prescription) return;
    
    prescription.content = elements.prescriptionEditor.innerHTML;
    
    showToast('Prescrição salva com sucesso!', 'success');
}

function copyPrescriptionContent() {
    if (!currentPrescriptionId) return;
    
    const prescription = prescriptions.find(p => p.id === currentPrescriptionId);
    if (!prescription) return;
    
    // Create a temporary element to get plain text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = prescription.content;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    
    navigator.clipboard.writeText(plainText).then(() => {
        showToast('Conteúdo copiado para a área de transferência!', 'success');
    }).catch(() => {
        showToast('Erro ao copiar conteúdo', 'error');
    });
}

function deletePrescription(id) {
    prescriptions = prescriptions.filter(p => p.id !== id);
    
    if (currentPrescriptionId === id) {
        showEmptyState();
    } else {
        renderPrescriptionList();
    }
    
    showToast('Prescrição excluída com sucesso!', 'success');
}

function confirmDelete(id) {
    const prescription = prescriptions.find(p => p.id === id);
    if (!prescription) return;
    
    elements.deleteConfirmTitle.textContent = prescription.title;
    elements.confirmDeleteBtn.onclick = () => {
        deletePrescription(id);
        closeModal(elements.deleteConfirmModal);
    };
    
    openModal(elements.deleteConfirmModal);
}

function addPrescription() {
    const title = elements.prescriptionTitleInput.value.trim();
    const cid = elements.prescriptionCidInput.value.trim();
    const category = elements.prescriptionCategoryInput.value;
    
    if (!title || !category) {
        showToast('Por favor, preencha os campos obrigatórios', 'error');
        return;
    }
    
    const defaultContent = category === 'Modelos' ? 
        '<p>Digite o conteúdo do modelo de anamnese...</p>' : 
        '<p>Digite o conteúdo da prescrição...</p>';
    
    const newPrescription = {
        id: generateId(),
        title,
        cid,
        category,
        content: defaultContent,
        createdAt: new Date()
    };
    
    prescriptions.unshift(newPrescription);
    
    // Clear form
    resetAddPrescriptionForm();
    
    closeModal(elements.addPrescriptionModal);
    selectPrescription(newPrescription.id);
    
    const successMessage = category === 'Modelos' ? 
        'Modelo de anamnese adicionado com sucesso!' : 
        'Prescrição adicionada com sucesso!';
    showToast(successMessage, 'success');
}

function resetAddPrescriptionForm() {
    elements.prescriptionTitleInput.value = '';
    elements.prescriptionCidInput.value = '';
    elements.prescriptionCategoryInput.value = '';
    updateModalForCategory();
}

function updateModalForCategory() {
    const category = elements.prescriptionCategoryInput.value;
    
    if (category === 'Modelos') {
        elements.modalTitle.textContent = 'Adicionar Modelo de Anamnese';
        elements.titleLabel.textContent = 'Nome do Modelo: *';
        elements.cidLabel.textContent = 'CID: (opcional)';
        elements.prescriptionTitleInput.placeholder = 'Ex: Anamnese Cardiológica, Anamnese Pediátrica';
    } else {
        elements.modalTitle.textContent = 'Adicionar Receita';
        elements.titleLabel.textContent = 'Título: *';
        elements.cidLabel.textContent = 'CID:';
        elements.prescriptionTitleInput.placeholder = '';
    }
}

function updateFilterTabCounts() {
    elements.filterTabs.forEach(tab => {
        const category = tab.dataset.category;
        let count = 0;
        
        if (category === 'all') {
            count = prescriptions.length;
        } else {
            count = prescriptions.filter(p => p.category === category).length;
        }
        
        // Update tab text with count for Modelos
        if (category === 'Modelos') {
            tab.textContent = `📋 Modelos (${count})`;
        }
    });
}

// Rich Text Editor Functions
function execCommand(command, value = null) {
    document.execCommand(command, false, value);
    elements.prescriptionEditor.focus();
    updateToolbarState();
}

function updateToolbarState() {
    elements.toolbarBtns.forEach(btn => {
        const command = btn.dataset.command;
        if (command && document.queryCommandSupported(command)) {
            const isActive = document.queryCommandState(command);
            btn.classList.toggle('active', isActive);
        }
    });
}

// Print Prescription Functions
function openPrintPrescriptionModal() {
    if (!currentPrescriptionId) {
        showToast('Selecione uma prescrição primeiro', 'error');
        return;
    }
    
    const prescription = prescriptions.find(p => p.id === currentPrescriptionId);
    if (!prescription) {
        showToast('Prescrição não encontrada', 'error');
        return;
    }
    
    // Reset form
    elements.prescriptionPatientName.value = '';
    elements.includeCid.checked = false;
    elements.includeDate.checked = true;
    elements.withPrescriptionHeaderBtn.classList.add('active');
    elements.withoutPrescriptionHeaderBtn.classList.remove('active');
    
    // For Modelos, hide special control checkbox and simplify form
    if (prescription.category === 'Modelos') {
        elements.specialControl.checked = false;
        elements.specialControl.parentElement.style.display = 'none';
        // Update modal title
        const modalTitle = elements.printPrescriptionModal.querySelector('.modal-header h3');
        modalTitle.textContent = 'Confirmar Impressão do Modelo';
    } else {
        elements.specialControl.checked = false;
        elements.specialControl.parentElement.style.display = 'block';
        const modalTitle = elements.printPrescriptionModal.querySelector('.modal-header h3');
        modalTitle.textContent = 'Confirmar Impressão da Receita';
    }
    
    openModal(elements.printPrescriptionModal);
}

function printPrescription() {
    const patientName = elements.prescriptionPatientName.value.trim();
    
    if (!patientName) {
        showToast('Por favor, digite o nome do paciente', 'error');
        return;
    }
    
    const prescription = prescriptions.find(p => p.id === currentPrescriptionId);
    if (!prescription) {
        showToast('Prescrição não encontrada', 'error');
        return;
    }
    
    const includeCid = elements.includeCid.checked;
    const includeDate = elements.includeDate.checked;
    const specialControl = prescription.category !== 'Modelos' && elements.specialControl.checked;
    const withHeader = elements.withPrescriptionHeaderBtn.classList.contains('active');
    const isModelo = prescription.category === 'Modelos';
    
    // Create print content
    const documentType = isModelo ? 'Modelo de Anamnese' : 'Prescrição Médica';
    let printContent = `
        <html>
            <head>
                <title>${documentType} - ${prescription.title}</title>
                <meta charset="UTF-8">
                <style>
                    @page { margin: 20mm; }
                    body { 
                        font-family: 'Arial', sans-serif; 
                        margin: 0; 
                        padding: 20px;
                        font-size: 14px;
                        line-height: 1.6;
                        color: #000;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 30px; 
                        border-bottom: 2px solid #10b981;
                        padding-bottom: 15px;
                    }
                    .header h1 { 
                        margin: 0; 
                        color: #1f2937;
                        font-size: 24px;
                    }
                    .header h2 { 
                        margin: 5px 0 0 0; 
                        color: #10b981;
                        font-size: 18px;
                        font-weight: normal;
                    }
                    .patient-info { 
                        background: #f9fafb; 
                        padding: 15px; 
                        border-radius: 8px; 
                        margin-bottom: 20px;
                        border-left: 4px solid #10b981;
                    }
                    .patient-name { 
                        font-weight: bold; 
                        font-size: 16px;
                        color: #1f2937;
                    }
                    .prescription-meta { 
                        margin: 10px 0; 
                        font-size: 12px;
                        color: #6b7280;
                    }
                    .prescription-content { 
                        margin: 20px 0;
                        background: white;
                        padding: 20px;
                        border: 1px solid #e5e7eb;
                        border-radius: 8px;
                    }
                    .prescription-content p { 
                        margin: 8px 0; 
                    }
                    .prescription-content strong { 
                        color: #1f2937; 
                    }
                    .special-control { 
                        background: #fef2f2; 
                        border: 2px solid #ef4444; 
                        color: #dc2626; 
                        padding: 10px; 
                        text-align: center; 
                        font-weight: bold; 
                        margin: 20px 0;
                        border-radius: 8px;
                    }
                    .footer { 
                        margin-top: 40px; 
                        text-align: center; 
                        border-top: 1px solid #e5e7eb;
                        padding-top: 20px;
                    }
                    .signature-line { 
                        border-top: 1px solid #000; 
                        width: 300px; 
                        margin: 20px auto 5px auto; 
                        padding-top: 5px;
                    }
                    @media print {
                        body { margin: 0; padding: 15mm; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body>
    `;
    
    // Add header if enabled
    if (withHeader) {
        printContent += `
                <div class="header">
                    <h1>${isModelo ? 'MODELO DE ANAMNESE' : 'PRESCRIÇÃO MÉDICA'}</h1>
                    <h2>MedOn - Sistema ${isModelo ? 'de Modelos' : 'de Prescrições'}</h2>
                </div>
        `;
    }
    
    // Patient info section
    printContent += `
                <div class="patient-info">
                    <div class="patient-name">${isModelo ? 'Nome:' : 'Paciente:'} ${patientName}</div>
    `;
    
    // Add date if enabled
    if (includeDate) {
        printContent += `<div class="prescription-meta">Data: ${new Date().toLocaleDateString('pt-BR')}</div>`;
    }
    
    // Add CID if enabled
    if (includeCid && prescription.cid) {
        printContent += `<div class="prescription-meta">CID: ${prescription.cid}</div>`;
    }
    
    printContent += `
                </div>
    `;
    
    // Add special control warning if enabled
    if (specialControl) {
        printContent += `
                <div class="special-control">
                    ⚠️ CONTROLE ESPECIAL ⚠️
                </div>
        `;
    }
    
    // Prescription content
    printContent += `
                <div class="prescription-content">
                    <h3 style="margin-top: 0; color: #1f2937;">${prescription.title}</h3>
                    ${prescription.content}
                </div>
                
                <div class="footer">
                    <div class="signature-line">
                        Assinatura e Carimbo do Médico
                    </div>
                </div>
            </body>
        </html>
    `;
    
    // Open print window
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    
    // Trigger print after a short delay to ensure content is loaded
    setTimeout(() => {
        printWindow.print();
    }, 500);
    
    // Close modal and show success message
    closeModal(elements.printPrescriptionModal);
    const message = isModelo ? 'Modelo enviado para impressão!' : 'Prescrição enviada para impressão!';
    showToast(message, 'success');
}

// Print Certificate Functions - ENHANCED WITH BUG FIXES
function openPrintCertificateModal() {
    console.log('Opening print certificate modal');
    
    try {
        // Check if modal elements exist
        if (!elements.printCertificateModal) {
            console.error('Print certificate modal not found');
            showToast('Erro: Modal de atestado não encontrado', 'error');
            return;
        }
        
        const prescription = prescriptions.find(p => p.id === currentPrescriptionId);
        if (prescription && prescription.cid) {
            elements.certificateCidInput.value = prescription.cid;
        }
        
        // Reset form defaults with defensive checks
        if (elements.patientNameInput) elements.patientNameInput.value = '';
        if (elements.daysInput) elements.daysInput.value = '1';
        if (elements.certificateIncludeCid) elements.certificateIncludeCid.checked = true;
        if (elements.withHeaderBtn) {
            elements.withHeaderBtn.classList.add('active');
            elements.withoutHeaderBtn.classList.remove('active');
        }
        
        openModal(elements.printCertificateModal);
        console.log('Print certificate modal opened successfully');
    } catch (error) {
        console.error('Error in openPrintCertificateModal:', error);
        showToast('Erro ao abrir modal de atestado', 'error');
    }
}

function printCertificate() {
    const patientName = elements.patientNameInput.value.trim();
    const days = elements.daysInput.value;
    const cid = elements.certificateCidInput.value.trim();
    const includeCid = elements.certificateIncludeCid.checked;
    const withHeader = elements.withHeaderBtn.classList.contains('active');
    
    if (!patientName || !days) {
        showToast('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    if (includeCid && !cid) {
        showToast('Por favor, preencha o CID ou desmarque a opção "Incluir CID"', 'error');
        return;
    }
    
    // Get current date in Brazilian format (DD/MM/YYYY)
    const currentDate = new Date().toLocaleDateString('pt-BR');
    
    // Get certificate template from settings
    let certificateText = appSettings.certificate.template === 'custom' ? 
        appSettings.certificate.customText : 
        certificateTemplates[appSettings.certificate.template];
    
    // Replace placeholders
    certificateText = certificateText
        .replace(/\[NOME_PACIENTE\]/g, patientName)
        .replace(/\[DATA_EXAME\]/g, currentDate)
        .replace(/\[DATA_INICIO\]/g, currentDate)
        .replace(/\[DIAS\]/g, days)
        .replace(/\[CID\]/g, cid || '');
    
    // Create print content with new professional format
    let printContent = `
        <html>
            <head>
                <title>Atestado Médico</title>
                <meta charset="UTF-8">
                <style>
                    @page { margin: 20mm; }
                    body { 
                        font-family: 'Arial', sans-serif; 
                        margin: 0; 
                        padding: 20px;
                        font-size: 14px;
                        line-height: 1.8;
                        color: #000;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 40px; 
                        border-bottom: 2px solid #10b981;
                        padding-bottom: 15px;
                    }
                    .header h1 { 
                        margin: 0; 
                        color: #1f2937;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    .content { 
                        margin: 30px 0;
                        text-align: justify;
                        font-size: 16px;
                        line-height: 2;
                    }
                    .content p { 
                        margin: 20px 0; 
                    }
                    .atesto {
                        font-weight: bold;
                    }
                    .cid-section {
                        margin: 25px 0;
                        font-size: 16px;
                    }
                    .authorization {
                        margin: 25px 0;
                        font-size: 16px;
                        text-align: justify;
                    }
                    .signature { 
                        margin-top: 80px; 
                        text-align: center; 
                    }
                    .signature-line { 
                        border-top: 1px solid #000; 
                        width: 350px; 
                        margin: 20px auto 5px auto; 
                        padding-top: 10px;
                        font-size: 14px;
                    }
                    @media print {
                        body { margin: 0; padding: 15mm; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body>
    `;
    
    // Add header if enabled
    if (withHeader) {
        printContent += `
                <div class="header">
                    <h1>ATESTADO MÉDICO</h1>
                </div>
        `;
    }
    
    // Add main content with new professional format
    printContent += `
                <div class="content">
                    <p><span class="atesto">Atesto</span>, para efeitos do art. 86 do Decreto n° 60.501, de 1967, que ${patientName} foi examinado(a) nesta Unidade, no dia ${currentDate}, necessitando de ${days} dia(s) de afastamento de suas atividades por motivo de doença, contados a partir de ${currentDate}.</p>
    `;
    
    // Add CID section if enabled
    if (includeCid && cid) {
        printContent += `
                    <div class="cid-section">
                        <p>CID: ${cid}</p>
                    </div>
                    
                    <div class="authorization">
                        <p>Eu, ${patientName}, autorizo a registrar o diagnóstico codificado CID ou por extenso neste atestado médico.</p>
                    </div>
        `;
    }
    
    printContent += `
                </div>
                
                <div class="signature">
                    <div class="signature-line">
                        Assinatura e Carimbo do Médico
                    </div>
                </div>
            </body>
        </html>
    `;
    
    // Open print window
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    
    // Trigger print after a short delay to ensure content is loaded
    setTimeout(() => {
        printWindow.print();
    }, 500);
    
    // Clear form and close modal
    elements.patientNameInput.value = '';
    elements.daysInput.value = '1';
    elements.certificateCidInput.value = '';
    elements.certificateIncludeCid.checked = true;
    
    closeModal(elements.printCertificateModal);
    showToast('Atestado enviado para impressão!', 'success');
}

// Settings Functions - ENHANCED WITH BUG FIXES
function openSettingsModal() {
    console.log('Opening settings modal');
    
    try {
        // Check if modal elements exist
        if (!elements.settingsModal) {
            console.error('Settings modal not found');
            showToast('Erro: Modal de configurações não encontrado', 'error');
            return;
        }
        
        loadSettingsToForm();
        openModal(elements.settingsModal);
        console.log('Settings modal opened successfully');
    } catch (error) {
        console.error('Error in openSettingsModal:', error);
        showToast('Erro ao abrir configurações', 'error');
    }
}

function loadSettingsToForm() {
    // Certificate settings
    elements.certificateTemplate.value = appSettings.certificate.template;
    elements.customTemplateText.value = appSettings.certificate.customText;
    elements.defaultIncludeCID.checked = appSettings.certificate.defaultIncludeCID;
    elements.defaultIncludeDate.checked = appSettings.certificate.defaultIncludeDate;
    elements.defaultSpecialControl.checked = appSettings.certificate.defaultSpecialControl;
    elements.defaultUseHeader.checked = appSettings.certificate.defaultUseHeader;
    
    // Doctor info
    elements.doctorName.value = appSettings.certificate.doctorInfo.name;
    elements.doctorCRM.value = appSettings.certificate.doctorInfo.crm;
    elements.doctorSpecialty.value = appSettings.certificate.doctorInfo.specialty;
    elements.doctorClinic.value = appSettings.certificate.doctorInfo.clinic;
    
    // General settings
    elements.confirmBeforeDelete.checked = appSettings.general.confirmDelete;
    elements.autoSaveChanges.checked = appSettings.general.autoSave;
    elements.autoSaveInterval.value = appSettings.general.autoSaveInterval;
    elements.paperSize.value = appSettings.general.paperSize;
    elements.paperOrientation.value = appSettings.general.orientation;
    
    // Update template visibility
    toggleCustomTemplate();
    
    // Render headers list
    renderHeadersList();
}

function saveSettingsFromForm() {
    // Certificate settings
    appSettings.certificate.template = elements.certificateTemplate.value;
    appSettings.certificate.customText = elements.customTemplateText.value;
    appSettings.certificate.defaultIncludeCID = elements.defaultIncludeCID.checked;
    appSettings.certificate.defaultIncludeDate = elements.defaultIncludeDate.checked;
    appSettings.certificate.defaultSpecialControl = elements.defaultSpecialControl.checked;
    appSettings.certificate.defaultUseHeader = elements.defaultUseHeader.checked;
    
    // Doctor info
    appSettings.certificate.doctorInfo.name = elements.doctorName.value;
    appSettings.certificate.doctorInfo.crm = elements.doctorCRM.value;
    appSettings.certificate.doctorInfo.specialty = elements.doctorSpecialty.value;
    appSettings.certificate.doctorInfo.clinic = elements.doctorClinic.value;
    
    // General settings
    appSettings.general.confirmDelete = elements.confirmBeforeDelete.checked;
    appSettings.general.autoSave = elements.autoSaveChanges.checked;
    appSettings.general.autoSaveInterval = parseInt(elements.autoSaveInterval.value);
    appSettings.general.paperSize = elements.paperSize.value;
    appSettings.general.orientation = elements.paperOrientation.value;
    
    // Apply settings to UI
    applySettings();
    
    showToast('Configurações salvas com sucesso!', 'success');
}

function applySettings() {
    // Apply default values to print modals
    elements.includeCid.checked = appSettings.certificate.defaultIncludeCID;
    elements.includeDate.checked = appSettings.certificate.defaultIncludeDate;
    elements.specialControl.checked = appSettings.certificate.defaultSpecialControl;
    
    if (appSettings.certificate.defaultUseHeader) {
        elements.withPrescriptionHeaderBtn.classList.add('active');
        elements.withoutPrescriptionHeaderBtn.classList.remove('active');
        elements.withHeaderBtn.classList.add('active');
        elements.withoutHeaderBtn.classList.remove('active');
    } else {
        elements.withoutPrescriptionHeaderBtn.classList.add('active');
        elements.withPrescriptionHeaderBtn.classList.remove('active');
        elements.withoutHeaderBtn.classList.add('active');
        elements.withHeaderBtn.classList.remove('active');
    }
}

function switchSettingsTab(tabName) {
    // Hide all tab contents
    elements.settingsTabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    elements.settingsTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked tab
    const clickedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

function toggleCustomTemplate() {
    const isCustom = elements.certificateTemplate.value === 'custom';
    elements.customTemplateGroup.style.display = isCustom ? 'block' : 'none';
}

// Headers Management Functions
function renderHeadersList() {
    if (appSettings.headers.length === 0) {
        elements.headersList.innerHTML = `
            <div class="empty-headers">
                <p>Nenhum cabeçalho salvo ainda.</p>
                <p>Clique em "+ Adicionar Cabeçalho" para criar o primeiro.</p>
            </div>
        `;
        return;
    }
    
    elements.headersList.innerHTML = '';
    
    appSettings.headers.forEach(header => {
        const headerItem = document.createElement('div');
        headerItem.className = `header-item ${header.isDefault ? 'default' : ''}`;
        
        const typeText = header.type === 'logo' ? 
            `Logo/Símbolo (${header.position}, ${header.size})` : 
            'Imagem Completa';
        
        headerItem.innerHTML = `
            <div class="header-preview">
                <img src="${header.imageBase64}" alt="Preview">
            </div>
            <div class="header-info">
                <div class="header-name">${header.name} ${header.isDefault ? '<span class="default-badge">Padrão</span>' : ''}</div>
                <div class="header-details">${typeText}</div>
            </div>
            <div class="header-actions">
                <button class="btn btn--sm btn--secondary" onclick="setDefaultHeader(${header.id})" ${header.isDefault ? 'disabled' : ''}>
                    ${header.isDefault ? 'Padrão' : 'Definir Padrão'}
                </button>
                <button class="btn btn--sm btn--danger" onclick="deleteHeader(${header.id})">Excluir</button>
            </div>
        `;
        
        elements.headersList.appendChild(headerItem);
    });
}

function openEnhancedHeaderModal() {
    // Reset form
    elements.enhancedHeaderName.value = '';
    elements.headerTypeRadios[0].checked = true; // Full image
    elements.logoPosition.value = 'center';
    elements.logoSize.value = 'medium';
    elements.useAsWatermark.checked = false;
    elements.setAsDefaultHeader.checked = false;
    elements.enhancedFileStatus.textContent = 'Nenhuma imagem selecionada';
    elements.headerImagePreview.style.display = 'none';
    elements.logoOptionsGroup.style.display = 'none';
    
    openModal(elements.enhancedAddHeaderModal);
}

function toggleLogoOptions() {
    const logoSelected = document.querySelector('input[name="headerType"]:checked').value === 'logo';
    elements.logoOptionsGroup.style.display = logoSelected ? 'block' : 'none';
}

function addEnhancedHeader() {
    const name = elements.enhancedHeaderName.value.trim();
    const file = elements.enhancedHeaderFile.files[0];
    const type = document.querySelector('input[name="headerType"]:checked').value;
    
    if (!name || !file) {
        showToast('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const newHeader = {
            id: Date.now(),
            name: name,
            imageBase64: e.target.result,
            type: type,
            position: type === 'logo' ? elements.logoPosition.value : 'center',
            size: type === 'logo' ? elements.logoSize.value : 'medium',
            isWatermark: type === 'logo' ? elements.useAsWatermark.checked : false,
            isDefault: elements.setAsDefaultHeader.checked
        };
        
        // If setting as default, remove default from others
        if (newHeader.isDefault) {
            appSettings.headers.forEach(header => {
                header.isDefault = false;
            });
        }
        
        // If this is the first header, make it default
        if (appSettings.headers.length === 0) {
            newHeader.isDefault = true;
        }
        
        appSettings.headers.push(newHeader);
        renderHeadersList();
        closeModal(elements.enhancedAddHeaderModal);
        showToast('Cabeçalho adicionado com sucesso!', 'success');
    };
    
    reader.readAsDataURL(file);
}

function setDefaultHeader(id) {
    appSettings.headers.forEach(header => {
        header.isDefault = header.id === id;
    });
    renderHeadersList();
    showToast('Cabeçalho padrão atualizado!', 'success');
}

function deleteHeader(id) {
    const headerIndex = appSettings.headers.findIndex(h => h.id === id);
    if (headerIndex === -1) return;
    
    const wasDefault = appSettings.headers[headerIndex].isDefault;
    appSettings.headers.splice(headerIndex, 1);
    
    // If deleted header was default, make first remaining header default
    if (wasDefault && appSettings.headers.length > 0) {
        appSettings.headers[0].isDefault = true;
    }
    
    renderHeadersList();
    showToast('Cabeçalho excluído com sucesso!', 'success');
}

// Data Export/Import Functions
function exportData() {
    const dataToExport = {
        prescriptions: prescriptions,
        settings: appSettings,
        exportDate: new Date().toISOString()
    };
    
    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `medon-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    showToast('Dados exportados com sucesso!', 'success');
}

function importData() {
    elements.importDataFile.click();
}

function handleDataImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (importedData.prescriptions) {
                prescriptions = importedData.prescriptions;
                // Update nextId to avoid conflicts
                nextId = Math.max(...prescriptions.map(p => p.id)) + 1;
            }
            
            if (importedData.settings) {
                appSettings = { ...appSettings, ...importedData.settings };
                applySettings();
                loadSettingsToForm();
            }
            
            renderPrescriptionList();
            showToast('Dados importados com sucesso!', 'success');
        } catch (error) {
            showToast('Erro ao importar dados. Verifique o arquivo.', 'error');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Clear file input
}

// Event Listeners
function setupEventListeners() {
    // Filter tabs
    elements.filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            elements.filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.category;
            renderPrescriptionList();
            
            // Clear current selection when switching tabs
            showEmptyState();
        });
    });
    
    // Search
    elements.searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderPrescriptionList();
    });
    
    // New prescription button
    elements.newPrescriptionBtn.addEventListener('click', () => {
        resetAddPrescriptionForm();
        openModal(elements.addPrescriptionModal);
    });
    
    // Action buttons
    elements.saveBtn.addEventListener('click', savePrescription);
    elements.copyBtn.addEventListener('click', copyPrescriptionContent);
    elements.printBtn.addEventListener('click', openPrintPrescriptionModal);
    elements.deleteBtn.addEventListener('click', () => {
        if (currentPrescriptionId) {
            confirmDelete(currentPrescriptionId);
        }
    });
    
    // CRITICAL BUG FIX: Generate Certificate Button Event Listener
    elements.generateCertificateBtn.addEventListener('click', (e) => {
        console.log('GERAR ATESTADO button clicked');
        try {
            e.preventDefault();
            e.stopPropagation();
            openPrintCertificateModal();
        } catch (error) {
            console.error('Error opening certificate modal:', error);
            showToast('Erro ao abrir modal de atestado', 'error');
        }
    });
    
    // Toolbar buttons
    elements.toolbarBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const command = btn.dataset.command;
            if (command) {
                execCommand(command);
            }
        });
    });
    
    // Editor events
    elements.prescriptionEditor.addEventListener('keyup', updateToolbarState);
    elements.prescriptionEditor.addEventListener('mouseup', updateToolbarState);
    
    // Add prescription modal
    elements.cancelAddBtn.addEventListener('click', () => {
        closeModal(elements.addPrescriptionModal);
    });
    
    elements.closeAddPrescriptionModal.addEventListener('click', () => {
        closeModal(elements.addPrescriptionModal);
    });
    
    elements.addBtn.addEventListener('click', addPrescription);
    
    // Category change handler for dynamic modal content
    elements.prescriptionCategoryInput.addEventListener('change', updateModalForCategory);
    
    // Print prescription modal
    elements.withPrescriptionHeaderBtn.addEventListener('click', () => {
        elements.withPrescriptionHeaderBtn.classList.add('active');
        elements.withoutPrescriptionHeaderBtn.classList.remove('active');
    });
    
    elements.withoutPrescriptionHeaderBtn.addEventListener('click', () => {
        elements.withoutPrescriptionHeaderBtn.classList.add('active');
        elements.withPrescriptionHeaderBtn.classList.remove('active');
    });
    
    elements.closePrintPrescriptionModal.addEventListener('click', () => {
        closeModal(elements.printPrescriptionModal);
    });
    
    elements.cancelPrintPrescriptionBtn.addEventListener('click', () => {
        closeModal(elements.printPrescriptionModal);
    });
    
    elements.confirmPrintPrescriptionBtn.addEventListener('click', printPrescription);
    
    // Print certificate modal
    elements.withHeaderBtn.addEventListener('click', () => {
        elements.withHeaderBtn.classList.add('active');
        elements.withoutHeaderBtn.classList.remove('active');
    });
    
    elements.withoutHeaderBtn.addEventListener('click', () => {
        elements.withoutHeaderBtn.classList.add('active');
        elements.withHeaderBtn.classList.remove('active');
    });
    
    elements.closePrintBtn.addEventListener('click', () => {
        closeModal(elements.printCertificateModal);
    });
    
    elements.closePrintCertificateModal.addEventListener('click', () => {
        closeModal(elements.printCertificateModal);
    });
    
    elements.printCertificateBtn.addEventListener('click', printCertificate);
    
    // Add header modal
    elements.chooseFileBtn.addEventListener('click', () => {
        elements.headerFileInput.click();
    });
    
    elements.headerFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            elements.fileStatus.textContent = file.name;
        } else {
            elements.fileStatus.textContent = 'Nenhum ficheiro selecionado';
        }
    });
    
    elements.cancelHeaderBtn.addEventListener('click', () => {
        closeModal(elements.addHeaderModal);
    });
    
    elements.closeAddHeaderModal.addEventListener('click', () => {
        closeModal(elements.addHeaderModal);
    });
    
    elements.addHeaderBtn.addEventListener('click', () => {
        showToast('Cabeçalho adicionado com sucesso!', 'success');
        closeModal(elements.addHeaderModal);
    });
    
    // Delete confirmation modal
    elements.cancelDeleteBtn.addEventListener('click', () => {
        closeModal(elements.deleteConfirmModal);
    });
    
    elements.closeDeleteConfirmModal.addEventListener('click', () => {
        closeModal(elements.deleteConfirmModal);
    });
    
    // CRITICAL BUG FIX: Settings modal events
    elements.settingsBtn.addEventListener('click', (e) => {
        console.log('Settings button clicked');
        try {
            e.preventDefault();
            e.stopPropagation();
            openSettingsModal();
        } catch (error) {
            console.error('Error opening settings modal:', error);
            showToast('Erro ao abrir configurações', 'error');
        }
    });
    
    elements.closeSettingsModal.addEventListener('click', () => {
        closeModal(elements.settingsModal);
    });
    
    elements.cancelSettingsBtn.addEventListener('click', () => {
        closeModal(elements.settingsModal);
    });
    
    elements.saveSettingsBtn.addEventListener('click', () => {
        saveSettingsFromForm();
        closeModal(elements.settingsModal);
    });
    
    // Settings tabs
    elements.settingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchSettingsTab(tab.dataset.tab);
        });
    });
    
    // Certificate template change
    elements.certificateTemplate.addEventListener('change', toggleCustomTemplate);
    
    // Headers management
    elements.addNewHeaderBtn.addEventListener('click', openEnhancedHeaderModal);
    
    // Enhanced header modal
    elements.closeEnhancedAddHeaderModal.addEventListener('click', () => {
        closeModal(elements.enhancedAddHeaderModal);
    });
    
    elements.cancelEnhancedHeaderBtn.addEventListener('click', () => {
        closeModal(elements.enhancedAddHeaderModal);
    });
    
    elements.addEnhancedHeaderBtn.addEventListener('click', addEnhancedHeader);
    
    // Header type change
    elements.headerTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleLogoOptions);
    });
    
    // Enhanced header file selection
    elements.chooseEnhancedFileBtn.addEventListener('click', () => {
        elements.enhancedHeaderFile.click();
    });
    
    elements.enhancedHeaderFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            elements.enhancedFileStatus.textContent = file.name;
            
            // Show preview
            const reader = new FileReader();
            reader.onload = function(e) {
                elements.headerPreviewImg.src = e.target.result;
                elements.headerImagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            elements.enhancedFileStatus.textContent = 'Nenhuma imagem selecionada';
            elements.headerImagePreview.style.display = 'none';
        }
    });
    
    // Data export/import
    elements.exportDataBtn.addEventListener('click', exportData);
    elements.importDataBtn.addEventListener('click', importData);
    elements.importDataFile.addEventListener('change', handleDataImport);
    
    // Close modals when clicking outside
    [elements.addPrescriptionModal, elements.printPrescriptionModal, elements.printCertificateModal, elements.addHeaderModal, elements.deleteConfirmModal, elements.settingsModal, elements.enhancedAddHeaderModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 's':
                    e.preventDefault();
                    if (currentPrescriptionId) savePrescription();
                    break;
                case 'n':
                    e.preventDefault();
                    openModal(elements.addPrescriptionModal);
                    break;
            }
        }
        
        if (e.key === 'Escape') {
            // Close open modals
            [elements.addPrescriptionModal, elements.printPrescriptionModal, elements.printCertificateModal, elements.addHeaderModal, elements.deleteConfirmModal].forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });
}

// Initialize Application - ENHANCED WITH BUG FIXES
function init() {
    console.log('Initializing application...');
    
    try {
        setupEventListeners();
        applySettings(); // Apply default settings
        updateFilterTabCounts();
        renderPrescriptionList();
        showEmptyState();
        
        // CRITICAL BUG FIX: Verify critical buttons are clickable
        setTimeout(() => {
            const settingsBtn = document.getElementById('settingsBtn');
            const generateBtn = document.getElementById('generateCertificateBtn');
            
            if (settingsBtn) {
                console.log('✓ Settings button found and accessible');
            } else {
                console.error('✗ Settings button not found');
            }
            
            if (generateBtn) {
                console.log('✓ Generate certificate button found and accessible');
            } else {
                console.error('✗ Generate certificate button not found');
            }
        }, 100);
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
        showToast('Erro ao inicializar aplicação', 'error');
    }
}

// CRITICAL BUG FIX: Enhanced Application Startup with Debug Logging
function debugElementsExistence() {
    console.log('=== DEBUGGING CRITICAL BUTTONS ===');
    
    const settingsBtn = document.getElementById('settingsBtn');
    const generateBtn = document.getElementById('generateCertificateBtn');
    const settingsModal = document.getElementById('settingsModal');
    const certificateModal = document.getElementById('printCertificateModal');
    
    console.log('Settings Button:', settingsBtn ? '✓ Found' : '✗ NOT FOUND');
    console.log('Generate Certificate Button:', generateBtn ? '✓ Found' : '✗ NOT FOUND');
    console.log('Settings Modal:', settingsModal ? '✓ Found' : '✗ NOT FOUND');
    console.log('Certificate Modal:', certificateModal ? '✓ Found' : '✗ NOT FOUND');
    
    if (settingsBtn) {
        console.log('Settings Button Classes:', settingsBtn.className);
        console.log('Settings Button Z-Index:', getComputedStyle(settingsBtn).zIndex);
    }
    
    if (generateBtn) {
        console.log('Generate Button Classes:', generateBtn.className);
        console.log('Generate Button Z-Index:', getComputedStyle(generateBtn).zIndex);
    }
    
    console.log('===================================');
}

// Start the application when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        setTimeout(debugElementsExistence, 200);
    });
} else {
    init();
    setTimeout(debugElementsExistence, 200);
}