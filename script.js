sexto
script.js
 // Verifica se estamos na página de login
if (document.getElementById('login-form')) {
    // Configurações específicas da página de login
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Por favor, insira seu e-mail';
    document.body.appendChild(notification);

    // Função para mostrar notificação
    function showNotification(message, isSuccess = false) {
        notification.textContent = message;
        notification.className = 'notification';
        notification.classList.add(isSuccess ? 'success' : 'error');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Validação do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Resetar mensagens de erro
        emailError.textContent = '';
        passwordError.textContent = '';
        
        // Validar e-mail
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Por favor, insira seu e-mail';
            showNotification('Por favor, insira seu e-mail');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, insira um e-mail válido';
            showNotification('Por favor, insira um e-mail válido');
            isValid = false;
        }
        
        // Validar senha
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Por favor, insira sua senha';
            if (isValid) {
                showNotification('Por favor, insira sua senha');
            }
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres';
            if (isValid) {
                showNotification('A senha deve ter pelo menos 6 caracteres');
            }
            isValid = false;
        }
        
        // Se tudo estiver válido, redireciona para a página principal
        if (isValid) {
            showNotification('Login realizado com sucesso!', true);
            
            // Redireciona após 2 segundos
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
    });
    
    // Função para validar e-mail
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validação em tempo real
    emailInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
            emailError.textContent = 'Por favor, insira seu e-mail';
        } else if (!isValidEmail(this.value.trim())) {
            emailError.textContent = 'Por favor, insira um e-mail válido';
        } else {
            emailError.textContent = '';
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
            passwordError.textContent = 'Por favor, insira sua senha';
        } else if (this.value.trim().length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres';
        } else {
            passwordError.textContent = '';
        }
    });
}

// Configurações específicas da página principal
if (document.getElementById('jobs-container')) {
    // Dados de exemplo das vagas
const jobsData = [
    {
        id: 1,
        title: "Desenvolvedor Front-end",
        company: "Tech Solutions Inc.",
        location: "São Paulo, SP",
        description: "Estamos buscando um desenvolvedor front-end com experiência em React.js para se juntar ao nosso time.",
        type: "CLT",
        area: "TI",
        salary: "R$ 6.000 - R$ 8.000",
        posted: "2 dias atrás"
    },
    {
        id: 2,
        title: "Analista de Marketing Digital",
        company: "Digital Agency",
        location: "Remoto",
        description: "Vaga para analista de marketing com conhecimento em Google Ads e SEO.",
        type: "PJ",
        area: "Marketing",
        salary: "R$ 4.500 - R$ 5.500",
        posted: "5 dias atrás"
    },
    {
        id: 3,
        title: "Vendedor Externo",
        company: "Comércio Ltda",
        location: "Rio de Janeiro, RJ",
        description: "Procuramos vendedores com experiência no ramo de autopeças.",
        type: "CLT",
        area: "Vendas",
        salary: "R$ 2.500 + comissão",
        posted: "1 semana atrás"
    },
    {
        id: 4,
        title: "Enfermeiro Plantonista",
        company: "Hospital Saúde Total",
        location: "Belo Horizonte, MG",
        description: "Vaga para enfermeiro com experiência em UTIs.",
        type: "CLT",
        area: "Saúde",
        salary: "R$ 5.200 - R$ 6.800",
        posted: "3 dias atrás"
    },
    {
        id: 5,
        title: "Estagiário em TI",
        company: "Startup Inovação",
        location: "Curitiba, PR",
        description: "Estágio para estudantes de TI com conhecimento básico em programação.",
        type: "Estágio",
        area: "TI",
        salary: "R$ 1.500 + benefícios",
        posted: "1 dia atrás"
    },
    {
        id: 6,
        title: "Designer Gráfico",
        company: "Agência Criativa",
        location: "Recife, PE",
        description: "Estamos procurando um designer com domínio do pacote Adobe e experiência em redes sociais.",
        type: "CLT",
        area: "Design",
        salary: "R$ 3.000 - R$ 4.200",
        posted: "4 dias atrás"
    },
    {
        id: 7,
        title: "Auxiliar Administrativo",
        company: "Grupo Empresarial Brasil",
        location: "Brasília, DF",
        description: "Atendimento telefônico, controle de documentos e suporte ao setor financeiro.",
        type: "CLT",
        area: "Administrativo",
        salary: "R$ 2.000 - R$ 2.800",
        posted: "2 dias atrás"
    },
    {
        id: 8,
        title: "Engenheiro Civil",
        company: "Construtora Nacional",
        location: "Fortaleza, CE",
        description: "Vaga para engenheiro com experiência em obras residenciais de grande porte.",
        type: "PJ",
        area: "Engenharia",
        salary: "R$ 10.000 - R$ 13.000",
        posted: "6 dias atrás"
    },
    {
        id: 9,
        title: "Psicólogo Clínico",
        company: "Clínica Equilíbrio",
        location: "Porto Alegre, RS",
        description: "Atendimento clínico a adultos e adolescentes. CRP ativo obrigatório.",
        type: "CLT",
        area: "Psicologia",
        salary: "R$ 4.800 - R$ 6.000",
        posted: "3 dias atrás"
    },
    {
        id: 10,
        title: "Assistente de Suporte Técnico",
        company: "InfoTech Suporte",
        location: "Salvador, BA",
        description: "Suporte a usuários, manutenção de computadores e redes.",
        type: "CLT",
        area: "TI",
        salary: "R$ 2.200 - R$ 3.000",
        posted: "1 semana atrás"
    },
    {
        id: 11,
        title: "Recepcionista Bilíngue",
        company: "Hotel Internacional",
        location: "Foz do Iguaçu, PR",
        description: "Recepção de hóspedes estrangeiros, inglês fluente obrigatório.",
        type: "CLT",
        area: "Atendimento",
        salary: "R$ 2.300 - R$ 3.000",
        posted: "2 dias atrás"
    },
    {
        id: 12,
        title: "Desenvolvedor Back-end",
        company: "Soluções Web",
        location: "São Paulo, SP",
        description: "Desenvolvimento de APIs RESTful em Node.js e MongoDB.",
        type: "PJ",
        area: "TI",
        salary: "R$ 7.000 - R$ 9.000",
        posted: "5 dias atrás"
    },
    {
        id: 13,
        title: "Nutricionista",
        company: "Clínica Vida Saudável",
        location: "Campinas, SP",
        description: "Atendimento nutricional individual e em grupos. CRN ativo.",
        type: "CLT",
        area: "Saúde",
        salary: "R$ 3.500 - R$ 4.500",
        posted: "1 semana atrás"
    },
    {
        id: 14,
        title: "Motorista de Entrega",
        company: "Logística Rápida",
        location: "Manaus, AM",
        description: "Entregas urbanas, CNH categoria B e experiência mínima de 1 ano.",
        type: "CLT",
        area: "Logística",
        salary: "R$ 2.000 - R$ 2.500",
        posted: "4 dias atrás"
    },
    {
        id: 15,
        title: "Auxiliar de Limpeza",
        company: "Serviços Gerais RJ",
        location: "Rio de Janeiro, RJ",
        description: "Limpeza e organização de ambientes comerciais.",
        type: "CLT",
        area: "Serviços Gerais",
        salary: "R$ 1.450 - R$ 1.700",
        posted: "3 dias atrás"
    },
    {
        id: 16,
        title: "Professor de Matemática",
        company: "Colégio Futuro",
        location: "São Luís, MA",
        description: "Ensino fundamental e médio. Licenciatura obrigatória.",
        type: "CLT",
        area: "Educação",
        salary: "R$ 3.800 - R$ 4.600",
        posted: "2 dias atrás"
    },
    {
        id: 17,
        title: "Consultor de Vendas",
        company: "Loja Tech",
        location: "Florianópolis, SC",
        description: "Venda de eletrônicos e atendimento ao cliente no varejo.",
        type: "CLT",
        area: "Vendas",
        salary: "R$ 2.200 + comissão",
        posted: "6 dias atrás"
    },
    {
        id: 18,
        title: "Técnico de Enfermagem",
        company: "Casa de Repouso Luz",
        location: "Natal, RN",
        description: "Assistência a idosos, administração de medicamentos e cuidados diários.",
        type: "CLT",
        area: "Saúde",
        salary: "R$ 2.600 - R$ 3.200",
        posted: "1 semana atrás"
    },
    {
        id: 19,
        title: "Desenvolvedor Full Stack",
        company: "Dev Pro Systems",
        location: "Remoto",
        description: "Trabalho remoto com Node.js, React e bancos SQL/NoSQL.",
        type: "PJ",
        area: "TI",
        salary: "R$ 9.000 - R$ 12.000",
        posted: "1 dia atrás"
    },
    {
        id: 20,
        title: "Estagiário de Direito",
        company: "Escritório Jurídico Brasil",
        location: "São Paulo, SP",
        description: "Suporte em processos jurídicos, elaboração de petições e diligências.",
        type: "Estágio",
        area: "Direito",
        salary: "R$ 1.200 + VT",
        posted: "3 dias atrás"
    }
];



    // Variáveis globais
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

    // DOM Elements
    const jobsContainer = document.getElementById('jobs-container');
    const searchInput = document.getElementById('search-input');
    const locationInput = document.getElementById('location-input');
    const searchBtn = document.getElementById('search-btn');
    const applyFiltersBtn = document.getElementById('apply-filters');

    // Inicializa a página
    document.addEventListener('DOMContentLoaded', () => {
        renderJobs(jobsData);
        updateSavedJobs();
    });

    // Renderiza as vagas
    function renderJobs(jobs) {
        jobsContainer.innerHTML = '';
        
        if (jobs.length === 0) {
            jobsContainer.innerHTML = '<p class="no-results">Nenhuma vaga encontrada com os critérios selecionados.</p>';
            return;
        }
        
        jobs.forEach(job => {
            const isSaved = savedJobs.includes(job.id);
            
            const jobElement = document.createElement('div');
            jobElement.className = 'job-card';
            jobElement.innerHTML = `
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
                <p class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                <p class="job-description">${job.description}</p>
                <div class="job-meta">
                    <span class="job-type">${job.type}</span>
                    <span class="job-salary">${job.salary}</span>
                </div>
                <div class="job-meta">
                    <span class="job-posted">${job.posted}</span>
                    <button class="save-job ${isSaved ? 'saved' : ''}" data-id="${job.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            `;
            
            jobsContainer.appendChild(jobElement);
        });
        
        // Adiciona event listeners aos botões de salvar
        document.querySelectorAll('.save-job').forEach(button => {
            button.addEventListener('click', toggleSaveJob);
        });
    }

    // Alternar entre salvar/remover vaga
    function toggleSaveJob(e) {
        const jobId = parseInt(e.currentTarget.getAttribute('data-id'));
        
        if (savedJobs.includes(jobId)) {
            savedJobs = savedJobs.filter(id => id !== jobId);
            e.currentTarget.classList.remove('saved');
        } else {
            savedJobs.push(jobId);
            e.currentTarget.classList.add('saved');
        }
        
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }

    // Atualiza a lista de trabalhos salvos
    function updateSavedJobs() {
        const savedJobsElements = document.querySelectorAll('.save-job');
        
        savedJobsElements.forEach(button => {
            const jobId = parseInt(button.getAttribute('data-id'));
            
            if (savedJobs.includes(jobId)) {
                button.classList.add('saved');
            } else {
                button.classList.remove('saved');
            }
        });
    }

    // Filtra as vagas
    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const locationTerm = locationInput.value.toLowerCase();
        
        const typeCheckboxes = document.querySelectorAll('.job-type:checked');
        const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value);
        
        const areaCheckboxes = document.querySelectorAll('.job-area:checked');
        const selectedAreas = Array.from(areaCheckboxes).map(cb => cb.value);
        
        const filteredJobs = jobsData.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                                 job.company.toLowerCase().includes(searchTerm) ||
                                 job.description.toLowerCase().includes(searchTerm);
            
            const matchesLocation = job.location.toLowerCase().includes(locationTerm);
            
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
            
            const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(job.area);
            
            return matchesSearch && matchesLocation && matchesType && matchesArea;
        });
        
        renderJobs(filteredJobs);
    }

    // Event Listeners
    searchBtn.addEventListener('click', filterJobs);
    applyFiltersBtn.addEventListener('click', filterJobs);

    // Permite buscar pressionando Enter
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterJobs();
    });

    locationInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterJobs();
    });
    
    // Configurações específicas da página de currículo
if (document.querySelector('.resume-container')) {
    // O código de edição do currículo já está todo no HTML
    // para manter tudo em um único arquivo e facilitar a manutenção
}
}