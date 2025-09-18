// ===================== DADOS =====================
const dados = [
  {
    id: 1,
    nomeProduto: "Braço Articulado",
    marca: "B2T",
    modelo: "BM800",
    tipo: "Periféricos",
    descricao: "-",
    loja: "Amazon",
    link: "Link",
    dataCompra: "2022-03-24",
    valor: 66.25,
    frete: 12.9,
    taxa: 0.0,
    custoTotal: 79.15,
    utilizando: false,
  },
  {
    id: 2,
    nomeProduto: "Microfone",
    marca: "Fifine",
    modelo: "A6T",
    tipo: "Periféricos",
    descricao: "Com tripé",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2022-03-24",
    valor: 196.58,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 196.58,
    utilizando: false,
  },
  {
    id: 3,
    nomeProduto: "Cooler",
    marca: "Intel",
    modelo: "QZ-700",
    tipo: "Essenciais",
    descricao: "RGB",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2023-07-07",
    valor: 61.57,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 61.57,
    utilizando: true,
  },
  {
    id: 4,
    nomeProduto: "SSD",
    marca: "XrayDisc",
    modelo: "-",
    tipo: "Essenciais",
    descricao: "256 GB",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2023-07-07",
    valor: 87.43,
    frete: 0.0,
    taxa: 63.82,
    custoTotal: 151.25,
    utilizando: false,
  },
  {
    id: 5,
    nomeProduto: "SSD",
    marca: "KingSpec",
    modelo: "-",
    tipo: "Essenciais",
    descricao: "1TB",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2023-07-07",
    valor: 197.32,
    frete: 0.0,
    taxa: 125.66,
    custoTotal: 322.98,
    utilizando: true,
  },
  {
    id: 6,
    nomeProduto: "KIT",
    marca: "MACHINIST",
    modelo: "INTEL XEON E5-RS9",
    tipo: "Essenciais",
    descricao: "Placa Mãe / CPU / Memória RAM",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2023-07-07",
    valor: 458.97,
    frete: 0.0,
    taxa: 157.01,
    custoTotal: 615.98,
    utilizando: true,
  },
  {
    id: 7,
    nomeProduto: "Fans",
    marca: "Rise Mode",
    modelo: "RM-FRM-02-RGB",
    tipo: "Essenciais",
    descricao: "5 Fans RGB",
    loja: "Kabum",
    link: "Link",
    dataCompra: "2023-09-07",
    valor: 117.6,
    frete: 17.41,
    taxa: 0.0,
    custoTotal: 135.01,
    utilizando: true,
  },
  {
    id: 8,
    nomeProduto: "Gabinete",
    marca: "Gamer Ninja Kotaro",
    modelo: "G-GN-005G",
    tipo: "Essenciais",
    descricao: "-",
    loja: "Terabyte",
    link: "Link",
    dataCompra: "2023-09-07",
    valor: 139.99,
    frete: 49.6,
    taxa: 0.0,
    custoTotal: 189.59,
    utilizando: true,
  },
  {
    id: 9,
    nomeProduto: "Fonte",
    marca: "EVGA",
    modelo: "100-W1-0600-KO",
    tipo: "Essenciais",
    descricao: "600W de Potência",
    loja: "Kabum",
    link: "Link",
    dataCompra: "2023-09-07",
    valor: 435.28,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 435.28,
    utilizando: true,
  },
  {
    id: 10,
    nomeProduto: "Monitor Sec.",
    marca: "LG",
    modelo: "26WQ500",
    tipo: "Periféricos",
    descricao: "UltraWide - IPS - 26 polegadas",
    loja: "Kabum",
    link: "Link",
    dataCompra: "2023-10-19",
    valor: 777.77,
    frete: 43.75,
    taxa: 0.0,
    custoTotal: 821.52,
    utilizando: true,
  },
  {
    id: 11,
    nomeProduto: "Placa de Vídeo",
    marca: "Asrock",
    modelo: "AMD Radeon RX 6600",
    tipo: "Essenciais",
    descricao: "-",
    loja: "Terabyte",
    link: "Link",
    dataCompra: "2023-10-19",
    valor: 1410.59,
    frete: 18.76,
    taxa: 0.0,
    custoTotal: 1429.35,
    utilizando: true,
  },
  {
    id: 12,
    nomeProduto: "Fone",
    marca: "Havit",
    modelo: "H2002d",
    tipo: "Essenciais",
    descricao: "-",
    loja: "Mercado Livre",
    link: "Não disponível",
    dataCompra: "2023-10-20",
    valor: 219.0,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 219.0,
    utilizando: false,
  },
  {
    id: 13,
    nomeProduto: "Teclado",
    marca: "Hyrax",
    modelo: "HCK61 - Thunder",
    tipo: "Periféricos",
    descricao: "ABNT2",
    loja: "Shopee",
    link: "Link",
    dataCompra: "2023-10-20",
    valor: 189.41,
    frete: 33.94,
    taxa: 0.0,
    custoTotal: 223.35,
    utilizando: false,
  },
  {
    id: 14,
    nomeProduto: "Mouse-Pad",
    marca: "Exbom",
    modelo: "MP-LED3080",
    tipo: "Periféricos",
    descricao: "800 mm x 300 mm",
    loja: "Mercado Livre",
    link: "Link",
    dataCompra: "2023-10-31",
    valor: 38.91,
    frete: 15.3,
    taxa: 0.0,
    custoTotal: 54.21,
    utilizando: true,
  },
  {
    id: 15,
    nomeProduto: "Mouse",
    marca: "Redragon",
    modelo: "COBRA M711W",
    tipo: "Periféricos",
    descricao: "10000DPI",
    loja: "Kabum",
    link: "Link",
    dataCompra: "2023-10-31",
    valor: 89.9,
    frete: 17.92,
    taxa: 0.0,
    custoTotal: 107.82,
    utilizando: false,
  },
  {
    id: 16,
    nomeProduto: "Mesa Digitalizadora",
    marca: "Wacom",
    modelo: "CTL472",
    tipo: "Periféricos",
    descricao: "Cor: Vermelho e Preto",
    loja: "Amazon",
    link: "Link",
    dataCompra: "2024-06-08",
    valor: 146.09,
    frete: 13.9,
    taxa: 0.0,
    custoTotal: 159.99,
    utilizando: true,
  },
  {
    id: 17,
    nomeProduto: "Microfone",
    marca: "Fifine",
    modelo: "K688",
    tipo: "Periféricos",
    descricao: "Sem tripé",
    loja: "Mercado Livre",
    link: "Link",
    dataCompra: "2024-07-07",
    valor: 389.0,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 389.0,
    utilizando: true,
  },
  {
    id: 18,
    nomeProduto: "Mouse",
    marca: "Attack Shark",
    modelo: "X11",
    tipo: "Periféricos",
    descricao: "Sem Fio",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2024-07-26",
    valor: 155.79,
    frete: 0.07,
    taxa: 31.93,
    custoTotal: 187.79,
    utilizando: true,
  },
  {
    id: 19,
    nomeProduto: "Teclado",
    marca: "Attack Shark",
    modelo: "K86",
    tipo: "Periféricos",
    descricao: "-",
    loja: "Aliexpress",
    link: "Link",
    dataCompra: "2024-07-26",
    valor: 267.1,
    frete: 0.14,
    taxa: 54.73,
    custoTotal: 321.97,
    utilizando: true,
  },
  {
    id: 20,
    nomeProduto: "Mesa de Escritório",
    marca: "Trevalla",
    modelo: "KUME6150.EP",
    tipo: "Móveis",
    descricao: "Cor: Nogal | 60P x 150L x 75A",
    loja: "Amazon",
    link: "Link",
    dataCompra: "2024-08-04",
    valor: 141.0,
    frete: 88.9,
    taxa: 0.0,
    custoTotal: 229.9,
    utilizando: true,
  },
  {
    id: 21,
    nomeProduto: "Braço Articulado",
    marca: "Zinnia",
    modelo: "ZNO-ZNNBO200-BK01",
    tipo: "Periféricos",
    descricao: "Pistão a gás | Duplo",
    loja: "Pichau",
    link: "Link",
    dataCompra: "2024-08-04",
    valor: 239.99,
    frete: 23.37,
    taxa: 0.0,
    custoTotal: 263.36,
    utilizando: true,
  },
  {
    id: 22,
    nomeProduto: "Cabo de Rede",
    marca: "-",
    modelo: "Categoria 6",
    tipo: "Periféricos",
    descricao: "20 Metros",
    loja: "Shopee",
    link: "Link",
    dataCompra: "2024-11-02",
    valor: 24.07,
    frete: 10.83,
    taxa: 0.0,
    custoTotal: 34.9,
    utilizando: true,
  },
  {
    id: 23,
    nomeProduto: "Monitor Prim.",
    marca: "Samsung",
    modelo: "Odyssey G40",
    tipo: "Periféricos",
    descricao: "27 Polegadas | 240hz",
    loja: "Magalu",
    link: "Link",
    dataCompra: "2024-11-09",
    valor: 1466.1,
    frete: 129.0,
    taxa: 0.0,
    custoTotal: 1595.1,
    utilizando: true,
  },
  {
    id: 24,
    nomeProduto: "SSD",
    marca: "Kingston",
    modelo: "NVME 4.0",
    tipo: "Essenciais",
    descricao: "1TB",
    loja: "Mercado Livre",
    link: "Link",
    dataCompra: "2025-04-03",
    valor: 305.0,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 305.0,
    utilizando: true,
  },
  {
    id: 25,
    nomeProduto: "Webcam",
    marca: "Logitech",
    modelo: "C920s",
    tipo: "Periféricos",
    descricao: "Full HD 1080p | USB",
    loja: "Amazon",
    link: "link",
    dataCompra: "2025-06-28",
    valor: 425.99,
    frete: 0.0,
    taxa: 0.0,
    custoTotal: 425.99,
    utilizando: true,
  },
];

let dadosFiltrados = [...dados];

// --- Formata Moeda ---
function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// --- Formata Data sem alterar fuso horário ---
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

// Normaliza tipo (remove acentos e lower)
function normalizeTipo(tipo) {
  return String(tipo || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// --- Badge por Tipo ---
function gettipoColor(tipo) {
  switch (normalizeTipo(tipo)) {
    case "perifericos":
    case "periféricos":
      return "badge-perifericos";
    case "essenciais":
      return "badge-essenciais";
    case "moveis":
    case "móveis":
      return "badge-moveis";
    case "audio":
      return "badge-audio";
    case "aliexpress":
      return "badge-aliexpress";
    case "kabum":
      return "badge-kabum";
    case "terabyte":
      return "badge-terabyte";
    case "mercado livre":
      return "badge-mercadolivre";
    case "shopee":
      return "badge-shopee";
    case "magalu":
      return "badge-magalu";
    case "amazon":
      return "badge-amazon";
    default:
      return "badge-perifericos";
  }
}

// ===================== GALERIA =====================
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = item.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ===================== CARDS DE RESUMO =====================
function CalcularCards(data) {
  const custoTotal = data.reduce(
    (acc, item) => acc + Number(item.custoTotal || 0),
    0
  );
  const custoUtilizando = data
    .filter((item) => item.utilizando)
    .reduce((acc, item) => acc + Number(item.custoTotal || 0), 0);
  return {
    custoTotal,
    custoUtilizando,
  };
}

function RenderizarResumo() {
  const summary = CalcularCards(dadosFiltrados);
  const totalProdutos = dadosFiltrados.length;
  const activeItems = dadosFiltrados.filter((item) => item.utilizando).length;
  const porcentagemUtilizacao =
    totalProdutos > 0 ? Math.round((activeItems / totalProdutos) * 100) : 0;

  document.getElementById("total-expenses").textContent = formatCurrency(
    summary.custoTotal
  );
  document.getElementById(
    "total-items"
  ).textContent = `Total de Produtos: ${totalProdutos}`;
  document.getElementById("used-expenses").textContent = formatCurrency(
    summary.custoUtilizando
  );
  document.getElementById(
    "active-items"
  ).textContent = `${activeItems} itens em uso`;
  document.getElementById(
    "utilization"
  ).textContent = `${porcentagemUtilizacao}%`;
}

// ===================== GRÁFICO =====================
let chart = null;

function RenderizarGrafico() {
  const ctx = document.getElementById("expenseChart").getContext("2d");
  const chartData = [...dadosFiltrados]
    .sort((a, b) => b.custoTotal - a.custoTotal)
    .slice(0, 5);
  const labels = chartData.map((item) => item.nomeProduto);
  const costs = chartData.map((item) => item.custoTotal);
  const colors = chartData.map((item) =>
    item.utilizando ? "hsl(263,70%,50%)" : "hsl(215,25%,27%)"
  );

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Custo Total",
          data: costs,
          backgroundColor: colors,
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => [
              `Custo Total: ${formatCurrency(context.parsed.y)}`,
              `Status: ${
                chartData[context.dataIndex].utilizando
                  ? "Em uso"
                  : "Não está sendo utilizado"
              }`,
            ],
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#999",
          },
          grid: {
            color: "#ccc",
          },
        },
        y: {
          ticks: {
            color: "#999",
            callback: (v) => formatCurrency(v),
          },
          grid: {
            color: "#ccc",
          },
        },
      },
    },
  });
}

// ===================== BARRA DE PESQUISA =====================
function AplicarFiltro(termo) {
  const q = String(termo || "")
    .trim()
    .toLowerCase();
  dadosFiltrados = !q
    ? [...dados]
    : dados.filter((item) =>
        [
          item.nomeProduto,
          item.marca,
          item.modelo,
          item.tipo,
          item.descricao,
          item.loja,
        ].some((f) => (f || "").toString().toLowerCase().includes(q))
      );
  AtualizarInterface();
}

// ===================== TABELA =====================
const tableBody = document.getElementById("tableBody");
const tableNoResults = document.getElementById("tableNoResults");

function RenderizarTabela(lista) {
  tableBody.innerHTML = "";

  if (lista.length === 0) {
    tableNoResults.classList.remove("hidden");
    return;
  } else {
    tableNoResults.classList.add("hidden");
  }

  [...dadosFiltrados]
    .sort((a, b) => {
      const dateA = new Date(a.dataCompra);
      const dateB = new Date(b.dataCompra);
      return dateB - dateA || b.id - a.id;
    })
    .forEach((item) => {
      const row = document.createElement("tr");
      row.className = item.utilizando ? "tr-active" : "";

      row.innerHTML = `
        <td class="font-mono">${item.id}</td>
        <td class="font-bold">${item.nomeProduto}</td>
        <td class="text-muted">${item.marca}</td>
        <td>${item.modelo}</td>
        <td><span class="badge ${gettipoColor(item.tipo)}">${
        item.tipo
      }</span></td>
        <td><div class="truncate" title="${item.descricao}">${
        item.descricao
      }</div></td>
        <td><span class="badge ${gettipoColor(item.loja)}">${
          item.loja
      }<span></td>
        <td>
          <button class="btn btn-ghost btn-icon" onclick="if('${
            item.link
          }' !== 'Link' && '${item.link}' !== 'Não disponível') window.open('${
        item.link
      }', '_blank')">
            <i class='bx  bx-link'  ></i> 
          </button>
        </td>
        <td class="font-mono">${formatDate(item.dataCompra)}</td>
        <td class="font-mono">${formatCurrency(item.valor)}</td>
        <td class="font-mono ${
          item.frete > 0 ? "text-danger font-bold" : ""
        }"">${formatCurrency(item.frete)}</td>
        <td class="font-mono ${
          item.taxa > 0 ? "text-danger font-bold" : ""
        }">${formatCurrency(item.taxa)}</td>
        <td class="font-mono font-bold text-info">${formatCurrency(
          item.custoTotal
        )}</td>
        <td>${
          item.utilizando
            ? "<i class='bx  bx-check-circle text-success'></i>"
            : "<i class='bx  bx-x icon text-muted'></i> "
        }</td>
      `;

      tableBody.appendChild(row);
    });
}

function AtualizarInterface() {
  RenderizarResumo();
  RenderizarGrafico();
  RenderizarTabela(dadosFiltrados);
}

// ===================== INICIALIZAÇÃO =====================
document.addEventListener("DOMContentLoaded", () => {
  AtualizarInterface();
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => AplicarFiltro(e.target.value));
});
