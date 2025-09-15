// Lista de distritos com acentos para exibição
const distritos = [
    "ÁGUA RASA","ALTO DE PINHEIROS","ANHANGUERA","ARICANDUVA","ARTUR ALVIM","BARRA FUNDA","BELA VISTA",
    "BELÉM","BOM RETIRO","BRÁS","BRASILÂNDIA","BUTANTÃ","CACHOEIRINHA","CAMBUCI","CAMPO BELO",
    "CAMPO GRANDE","CAMPO LIMPO","CAPÃO REDONDO","CARRÃO","CASA VERDE","CIDADE ADEMAR","CIDADE DUTRA",
    "CIDADE LÍDER","CIDADE TIRADENTES","CONSOLACAO","CURSINO","ERMELINO MATARAZZO","FREGUESIA DO Ó",
    "GRAJAÚ","GUAIANASES","IGUATEMI","IPIRANGA","ITAIM BIBI","ITAIM PAULISTA","ITAQUERA","JABAQUARA",
    "JAÇANÃ","JAGUARÉ","JARAGUÁ","JARDIM ÂNGELA","JARDIM HELENA","JARDIM PAULISTA","JARDIM SAO LUÍS",
    "JOSE BONIFÁCIO","LAJEADO","LAPA","LIBERDADE","LIMÃO","MANDAQUI","MARSILAC","MOEMA","MOOCA","MORUMBI",
    "PARELHEIROS","PARI","PARQUE DO CARMO","PEDREIRA","PENHA","PERDIZES","PERUS","PINHEIROS","PIRITUBA",
    "PONTE RASA","RAPOSO TAVARES","REPÚBLICA","RIO PEQUENO","SACOMÃ","SANTA CECÍLIA","SANTANA",
    "SANTO AMARO","SÃO DOMINGOS","SÃO LUCAS","SÃO MATEUS","SÃO MIGUEL","SÃO RAFAEL","SAPOPEMBA","SAÚDE",
    "SÉ","SOCORRO","TATUAPÉ","TREMEMBÉ","TUCURUVI","VILA ANDRADE","VILA CURUÇÁ","VILA FORMOSA",
    "VILA GUILHERME","VILA JACUÍ","VILA LEOPOLDINA","VILA MARIA","VILA MARIANA","VILA MATILDE",
    "VILA MEDEIROS","VILA PRUDENTE","VILA SÔNIA"
  ];
  
  const indicadores = [
    "AGUA RASA","ALTO DE PINHEIROS","ANHANGUERA","ARICANDUVA","ARTUR ALVIM","BARRA FUNDA","BELA VISTA",
    "BELEM","BOM RETIRO","BRAS","BRASILANDIA","BUTANTA","CACHOEIRINHA","CAMBUCI","CAMPO BELO",
    "CAMPO GRANDE","CAMPO LIMPO","CAPAO REDONDO","CARRAO","CASA VERDE","CIDADE ADEMAR","CIDADE DUTRA",
    "CIDADE LIDER","CIDADE TIRADENTES","CONSOLACAO","CURSINO","ERMELINO MATARAZZO","FREGUESIA DO O",
    "GRAJAU","GUAIANASES","IGUATEMI","IPIRANGA","ITAIM BIBI","ITAIM PAULISTA","ITAQUERA","JABAQUARA",
    "JACANA","JAGUARE","JARAGUA","JARDIM ANGELA","JARDIM HELENA","JARDIM PAULISTA","JARDIM SAO LUIS",
    "JOSE BONIFACIO","LAJEADO","LAPA","LIBERDADE","LIMAO","MANDAQUI","MARSILAC","MOEMA","MOOCA","MORUMBI",
    "PARELHEIROS","PARI","PARQUE DO CARMO","PEDREIRA","PENHA","PERDIZES","PERUS","PINHEIROS","PIRITUBA",
    "PONTE RASA","RAPOSO TAVARES","REPUBLICA","RIO PEQUENO","SACOMA","SANTA CECILIA","SANTANA",
    "SANTO AMARO","SAO DOMINGOS","SAO LUCAS","SAO MATEUS","SAO MIGUEL","SAO RAFAEL","SAPOPEMBA","SAUDE",
    "SE","SOCORRO","TATUAPE","TREMEMBE","TUCURUVI","VILA ANDRADE","VILA CURUCA","VILA FORMOSA",
    "VILA GUILHERME","VILA JACUI","VILA LEOPOLDINA","VILA MARIA","VILA MARIANA","VILA MATILDE",
    "VILA MEDEIROS","VILA PRUDENTE","VILA SONIA"
  ];
  
  
  let distritoSelecionado = 0;
  
  // Preenche o select dos distritos
  function popularSelectDistritos() {
    const select = document.getElementById('seletor-distrito');
    distritos.forEach((distrito, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      option.textContent = distrito;
      select.appendChild(option);
    });
  }
  
  function atualizarPainelDistrito(idx) {
    distritoSelecionado = idx;
    const distrito = distritos[distritoSelecionado];
    document.getElementById('nome-distrito').textContent = distrito;
    document.getElementById('mapa-sao-paulo').src = `img/Mapas_${distrito}.png`;
    document.getElementById('img-indicador').src = ""; 
    document.getElementById('seletor-distrito').value = distritoSelecionado;
  }
  
  function mostrarIndicador() {
    const nomePasta = "Indicadores/Frequência média nos pontos";
    const arquivo = indicadores[distritoSelecionado] + ".png";
    const caminho = `${nomePasta}/${arquivo}`;
  
    const img = document.getElementById('img-indicador');
    img.onerror = function() {
      img.src = "";
    };
    img.src = caminho;
  }
  
  window.onload = function() {
    popularSelectDistritos();
    atualizarPainelDistrito(distritoSelecionado);
  
    document.getElementById('seletor-distrito').addEventListener('change', function() {
      atualizarPainelDistrito(Number(this.value));
    });
  };