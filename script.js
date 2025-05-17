function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;
  
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let allChars = "";
    if (useUpper) allChars += upper;
    if (useLower) allChars += lower;
    if (useNumbers) allChars += numbers;
    if (useSymbols) allChars += symbols;
  
    const resultDiv = document.getElementById('result');
  
    if (allChars.length === 0) {
      resultDiv.innerHTML = "❗ Please select at least one character type.";
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    // Strength evaluation
    let strengthCount = 0;
    if (/[A-Z]/.test(password)) strengthCount++;     // Uppercase
    if (/[a-z]/.test(password)) strengthCount++;     // Lowercase
    if (/[0-9]/.test(password)) strengthCount++;     // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strengthCount++; // Symbols
  
    let strengthLabel = "";
    switch (strengthCount) {
      case 4: strengthLabel = "🔐 Strong"; break;
      case 3: strengthLabel = "✅ Moderate"; break;
      case 2: strengthLabel = "⚠️ Weak"; break;
      case 1: strengthLabel = "❌ Poor"; break;
      default: strengthLabel = "Invalid"; break;
    }
  
    resultDiv.innerHTML = `
      <div>Generated Password: <strong>${password}</strong></div>
      <div class="strength">Strength: ${strengthLabel}</div>
      <div style="margin-top:10px; font-size:0.95em; color: #555;">
        A strong password should be at least 12 characters long, containing a mix of:<br>
        1. Uppercase letters<br>
        2. Lowercase letters<br>
        3. Numbers<br>
        4. Symbols
      </div>
    `;
  }
  