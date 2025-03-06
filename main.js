const matches = [
  {
    homeTeam: "Manchester City",
    awayTeam: "Arsenal",
    matchTime: "2024-02-05T20:00:00",
    backOdds: { home: 2.1, draw: 3.4, away: 3.8 },
    layOdds: { home: 2.2, draw: 3.5, away: 3.9 },
    totalVolume: 1250000,
    matchedAmount: 850000,
    totalBackedAmount: 720000,
    totalLayedAmount: 530000,
    bets: {
      home: { backed: 280000, layed: 210000 },
      draw: { backed: 190000, layed: 150000 },
      away: { backed: 250000, layed: 170000 }
    },
    marketStatus: "open"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "Manchester United",
    matchTime: "2024-02-06T19:45:00",
    backOdds: { home: 1.8, draw: 3.6, away: 4.2 },
    layOdds: { home: 1.9, draw: 3.7, away: 4.3 },
    totalVolume: 2100000,
    matchedAmount: 1450000,
    totalBackedAmount: 1200000,
    totalLayedAmount: 950000,
    bets: {
      home: { backed: 500000, layed: 400000 },
      draw: { backed: 350000, layed: 280000 },
      away: { backed: 350000, layed: 270000 }
    },
    marketStatus: "closed"
  },
  {
    homeTeam: "Chelsea",
    awayTeam: "Tottenham",
    matchTime: "2024-02-07T20:00:00",
    backOdds: { home: 2.3, draw: 3.3, away: 3.2 },
    layOdds: { home: 2.4, draw: 3.4, away: 3.3 },
    totalVolume: 1800000,
    matchedAmount: 950000,
    totalBackedAmount: 800000,
    totalLayedAmount: 600000,
    bets: {
      home: { backed: 320000, layed: 250000 },
      draw: { backed: 200000, layed: 160000 },
      away: { backed: 280000, layed: 190000 }
    },
    marketStatus: "open"
  },
  {
    homeTeam: "Newcastle",
    awayTeam: "Aston Villa",
    matchTime: "2024-02-08T20:00:00",
    backOdds: { home: 1.9, draw: 3.5, away: 4.0 },
    layOdds: { home: 2.0, draw: 3.6, away: 4.1 },
    totalVolume: 980000,
    matchedAmount: 620000,
    totalBackedAmount: 550000,
    totalLayedAmount: 420000,
    bets: {
      home: { backed: 220000, layed: 180000 },
      draw: { backed: 150000, layed: 120000 },
      away: { backed: 180000, layed: 120000 }
    },
    marketStatus: "closed"
  },
  {
    homeTeam: "Brighton",
    awayTeam: "West Ham",
    matchTime: "2024-02-09T19:45:00",
    backOdds: { home: 2.2, draw: 3.4, away: 3.4 },
    layOdds: { home: 2.3, draw: 3.5, away: 3.5 },
    totalVolume: 750000,
    matchedAmount: 480000,
    totalBackedAmount: 420000,
    totalLayedAmount: 320000,
    bets: {
      home: { backed: 180000, layed: 140000 },
      draw: { backed: 120000, layed: 100000 },
      away: { backed: 120000, layed: 80000 }
    },
    marketStatus: "open"
  },
  {
    homeTeam: "Brentford",
    awayTeam: "Crystal Palace",
    matchTime: "2024-02-10T15:00:00",
    backOdds: { home: 2.4, draw: 3.2, away: 3.3 },
    layOdds: { home: 2.5, draw: 3.3, away: 3.4 },
    totalVolume: 650000,
    matchedAmount: 320000,
    totalBackedAmount: 280000,
    totalLayedAmount: 200000,
    bets: {
      home: { backed: 120000, layed: 90000 },
      draw: { backed: 80000, layed: 60000 },
      away: { backed: 80000, layed: 50000 }
    },
    marketStatus: "closed"
  },
  {
    homeTeam: "Everton",
    awayTeam: "Nottingham Forest",
    matchTime: "2024-02-10T17:30:00",
    backOdds: { home: 2.1, draw: 3.3, away: 3.7 },
    layOdds: { home: 2.2, draw: 3.4, away: 3.8 },
    totalVolume: 820000,
    matchedAmount: 540000,
    totalBackedAmount: 450000,
    totalLayedAmount: 350000,
    bets: {
      home: { backed: 200000, layed: 150000 },
      draw: { backed: 120000, layed: 90000 },
      away: { backed: 130000, layed: 100000 }
    },
    marketStatus: "open"
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Wolves",
    matchTime: "2024-02-11T14:00:00",
    backOdds: { home: 2.3, draw: 3.2, away: 3.4 },
    layOdds: { home: 2.4, draw: 3.3, away: 3.5 },
    totalVolume: 580000,
    matchedAmount: 290000,
    totalBackedAmount: 230000,
    totalLayedAmount: 170000,
    bets: {
      home: { backed: 100000, layed: 70000 },
      draw: { backed: 60000, layed: 40000 },
      away: { backed: 70000, layed: 40000 }
    },
    marketStatus: "closed"
  },
  {
    homeTeam: "Burnley",
    awayTeam: "Sheffield United",
    matchTime: "2024-02-11T16:30:00",
    backOdds: { home: 2.0, draw: 3.3, away: 3.9 },
    layOdds: { home: 2.1, draw: 3.4, away: 4.0 },
    totalVolume: 420000,
    matchedAmount: 180000,
    totalBackedAmount: 140000,
    totalLayedAmount: 90000,
    bets: {
      home: { backed: 60000, layed: 40000 },
      draw: { backed: 40000, layed: 20000 },
      away: { backed: 40000, layed: 20000 }
    },
    marketStatus: "open"
  },
  {
    homeTeam: "Luton Town",
    awayTeam: "Bournemouth",
    matchTime: "2024-02-12T20:00:00",
    backOdds: { home: 2.5, draw: 3.3, away: 3.1 },
    layOdds: { home: 2.6, draw: 3.4, away: 3.2 },
    totalVolume: 380000,
    matchedAmount: 150000,
    totalBackedAmount: 100000,
    totalLayedAmount: 60000,
    bets: {
      home: { backed: 40000, layed: 20000 },
      draw: { backed: 30000, layed: 15000 },
      away: { backed: 30000, layed: 15000 }
    },
    marketStatus: "closed"
  }
];

const BETTING_FORM_URL = "https://onematchbettingexchange.formaloo.co/ldbboc";

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  return new Intl.DateTimeFormat('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(date);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ZMW',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function calculateBackReturns(stake, odds) {
  const potentialWin = stake * (odds - 1);
  const commission = potentialWin * 0.10;
  const netWin = potentialWin - commission;
  return {
    potentialWin,
    commission,
    netWin,
    totalReturns: parseFloat(stake) + netWin
  };
}

function calculateLayLiability(stake, odds) {
  const liability = stake * (odds - 1);
  const potentialWin = stake;
  const commission = potentialWin * 0.10;
  const netWin = potentialWin - commission;
  return {
    liability,
    potentialWin,
    commission,
    netWin
  };
}

function showBetModal(match, betType, selection, odds) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  const betExplanation = betType === 'Back' 
    ? "When you place a back bet, you're betting FOR a selection to win. If your selection wins, you'll win your stake multiplied by the odds, minus commission. If your selection loses, you'll lose your stake."
    : "When you place a lay bet, you're betting AGAINST a selection to win. You're effectively acting as the bookmaker. Your liability is the amount you stand to lose if your lay bet loses. If your lay bet wins, you win the backer's stake minus commission.";

  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">Confirm ${betType} Bet</h3>
        <button class="close-modal" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <line x1="1" y1="1" x2="19" y2="19" stroke="currentColor" stroke-width="2"/>
            <line x1="19" y1="1" x2="1" y2="19" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
      <div class="bet-details">
        <div class="bet-explanation">
          <h4>Understanding ${betType} Bets</h4>
          <p>${betExplanation}</p>
        </div>
        <div class="match-details">
          <p>Match: ${match.homeTeam} vs ${match.awayTeam}</p>
          <p>Selection: ${selection}</p>
          <p>Action: <span class="bet-type ${betType.toLowerCase()}">${betType}</span></p>
          <p>Odds: ${odds}</p>
        </div>
        <div class="calculator">
          <h4>Bet Calculator</h4>
          <div class="calculator-inputs">
            <div class="input-group">
              <label>Stake (ZMW):</label>
              <input type="number" class="stake-input" placeholder="Enter stake" min="0" step="0.01">
            </div>
            <div class="input-group">
              <label>Odds:</label>
              <input type="number" class="odds-input" value="${odds}" step="0.01" min="1.01">
            </div>
          </div>
          <div class="calculator-results">
            ${betType === 'Back' ? `
              <p>Potential Win: <span class="potential-win">ZMW0.00</span></p>
              <p>Commission (10%): <span class="commission">ZMW0.00</span></p>
              <p>Net Win: <span class="net-win">ZMW0.00</span></p>
              <p>Total Returns: <span class="total-returns">ZMW0.00</span></p>
            ` : `
              <p>Liability: <span class="liability">ZMW0.00</span></p>
              <p>Potential Win: <span class="potential-win">ZMW0.00</span></p>
              <p>Commission (10%): <span class="commission">ZMW0.00</span></p>
              <p>Net Win: <span class="net-win">ZMW0.00</span></p>
            `}
          </div>
        </div>
        <div class="commission-notice">
          <p>⚠️ Please note: A 10% commission charge applies to all winning bets</p>
        </div>
      </div>
      <div class="modal-actions">
        <button class="modal-btn cancel-btn">Cancel</button>
        <button class="modal-btn confirm-btn">Continue to Betting Form</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = 'block';

  // Calculator functionality
  const stakeInput = modal.querySelector('.stake-input');
  const oddsInput = modal.querySelector('.odds-input');
  const resultElements = {
    potentialWin: modal.querySelector('.potential-win'),
    commission: modal.querySelector('.commission'),
    netWin: modal.querySelector('.net-win'),
    totalReturns: modal.querySelector('.total-returns'),
    liability: modal.querySelector('.liability')
  };

  function updateCalculations() {
    const stake = parseFloat(stakeInput.value) || 0;
    const currentOdds = parseFloat(oddsInput.value) || 0;

    if (betType === 'Back') {
      const results = calculateBackReturns(stake, currentOdds);
      resultElements.potentialWin.textContent = formatCurrency(results.potentialWin);
      resultElements.commission.textContent = formatCurrency(results.commission);
      resultElements.netWin.textContent = formatCurrency(results.netWin);
      resultElements.totalReturns.textContent = formatCurrency(results.totalReturns);
    } else {
      const results = calculateLayLiability(stake, currentOdds);
      resultElements.liability.textContent = formatCurrency(results.liability);
      resultElements.potentialWin.textContent = formatCurrency(results.potentialWin);
      resultElements.commission.textContent = formatCurrency(results.commission);
      resultElements.netWin.textContent = formatCurrency(results.netWin);
    }
  }

  stakeInput.addEventListener('input', updateCalculations);
  oddsInput.addEventListener('input', updateCalculations);

  // Modal control
  const closeBtn = modal.querySelector('.close-modal');
  const cancelBtn = modal.querySelector('.cancel-btn');
  const confirmBtn = modal.querySelector('.confirm-btn');
  
  function closeModal() {
    modal.remove();
  }
  
  function handleConfirm() {
    window.location.href = BETTING_FORM_URL;
  }
  
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  confirmBtn.addEventListener('click', handleConfirm);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function createMarketCard(match) {
  const card = document.createElement('div');
  card.className = 'market-card';
  // Determine and apply individual market status
  const status = match.marketStatus || "open";
  if (status === "closed") {
    card.classList.add("closed");
  }
  
  const cardHTML = `
    <div class="market-status ${status}">
      ${status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
    <div class="match-time">
      <div class="datetime">${formatDateTime(match.matchTime)}</div>
    </div>
    <div class="market-info">
      <div class="volume">
        <span>Total Volume:</span>
        <span class="amount">${formatCurrency(match.totalVolume)}</span>
      </div>
      <div class="matched">
        <span>Matched:</span>
        <span class="amount">${formatCurrency(match.matchedAmount)}</span>
      </div>
    </div>
    <div class="betting-totals">
      <div class="total-backed">
        <span>Total Backed:</span>
        <span class="amount">${formatCurrency(match.totalBackedAmount)}</span>
      </div>
      <div class="total-layed">
        <span>Total Layed:</span>
        <span class="amount">${formatCurrency(match.totalLayedAmount)}</span>
      </div>
    </div>
    <div class="teams">
      <div class="team">${match.homeTeam}</div>
      <div class="vs"><span>vs</span></div>
      <div class="team">${match.awayTeam}</div>
    </div>
    <div class="betting-options">
      <div class="bet-row">
        <span class="team-name">${match.homeTeam}</span>
        <div class="bet-column">
          <a href="#" class="btn back-bet">Back ${match.backOdds.home}</a>
          <span class="bet-amount">${formatCurrency(match.bets.home.backed)}</span>
        </div>
        <div class="bet-column">
          <a href="#" class="btn lay-bet">Lay ${match.layOdds.home}</a>
          <span class="bet-amount">${formatCurrency(match.bets.home.layed)}</span>
        </div>
      </div>
      <div class="bet-row">
        <span class="team-name">Draw</span>
        <div class="bet-column">
          <a href="#" class="btn back-bet">Back ${match.backOdds.draw}</a>
          <span class="bet-amount">${formatCurrency(match.bets.draw.backed)}</span>
        </div>
        <div class="bet-column">
          <a href="#" class="btn lay-bet">Lay ${match.layOdds.draw}</a>
          <span class="bet-amount">${formatCurrency(match.bets.draw.layed)}</span>
        </div>
      </div>
      <div class="bet-row">
        <span class="team-name">${match.awayTeam}</span>
        <div class="bet-column">
          <a href="#" class="btn back-bet">Back ${match.backOdds.away}</a>
          <span class="bet-amount">${formatCurrency(match.bets.away.backed)}</span>
        </div>
        <div class="bet-column">
          <a href="#" class="btn lay-bet">Lay ${match.layOdds.away}</a>
          <span class="bet-amount">${formatCurrency(match.bets.away.layed)}</span>
        </div>
      </div>
      <a href="${BETTING_FORM_URL}" class="btn place-bet" target="_blank">Place Bet</a>
    </div>
  `;
  
  card.innerHTML = cardHTML;
  
  const backButtons = card.querySelectorAll('.back-bet');
  const layButtons = card.querySelectorAll('.lay-bet');
  
  backButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selection = index === 0 ? match.homeTeam : 
                        index === 1 ? 'Draw' : match.awayTeam;
      const odds = index === 0 ? match.backOdds.home :
                   index === 1 ? match.backOdds.draw : match.backOdds.away;
      showBetModal(match, 'Back', selection, odds);
    });
  });
  
  layButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selection = index === 0 ? match.homeTeam :
                        index === 1 ? 'Draw' : match.awayTeam;
      const odds = index === 0 ? match.layOdds.home :
                   index === 1 ? match.layOdds.draw : match.layOdds.away;
      showBetModal(match, 'Lay', selection, odds);
    });
  });
  
  return card;
}

function initializeMarkets() {
  const marketCardsContainer = document.getElementById('market-cards');
  matches.forEach(match => {
    marketCardsContainer.appendChild(createMarketCard(match));
  });
}

document.addEventListener('DOMContentLoaded', initializeMarkets);