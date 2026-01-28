# IMPROVED VERSION: Better Markdown Parsing, Content Injection, and REDACTION Engine

$rootDir = "d:\Ortiz_v_Victoria_County_Master"
$strategyDir = "$rootDir\11_Case_Strategy"
$outputDir = "$strategyDir\16_Digital_Beacon_Site"
$templatePath = "$outputDir\template_cyberpunk.html"
$outputFile = "$outputDir\index.html"

# 1. Define the Source Files (The "Payload")
$sourceFiles = @(
    "$strategyDir\DHS_OIG_Strike_Package\FILE_1_FORENSIC_ANCHOR.md",
    "$strategyDir\DHS_OIG_Strike_Package\FILE_5_OCTOBER_BETRAYAL.md",
    "$strategyDir\RICO_Expansion\01_Operation_Total_Grid_Matrix.md",
    "$strategyDir\Federal_Oversight_Status_Report_Jan9.md",
    "$strategyDir\15_Public_Advocacy_Swarm\06_Victim_Unity_Manifesto.md"
)

# 2. REDACTION ENGINE (Scrub PII)
function Protect-Content {
    param ($text)
    
    # 1. Personal Names
    $text = $text -replace "Emilio Ortiz", "[REDACTED_WHISTLEBLOWER]"
    $text = $text -replace "Emilio", "[REDACTED]"
    $text = $text -replace "Ortiz", "[REDACTED]"
    
    # 2. Case Numbers (Masking the specific user link for now)
    $text = $text -replace "6:25-cv-00075", "SDTX FEDERAL CASE [REDACTED]"
    $text = $text -replace "25-12-36421-A", "STATE CASE [REDACTED]"
    
    # 3. Pronouns (First Person -> Third Person / Passive)
    $text = $text -replace "My name is", "Identity:"
    $text = $text -replace "I am", "The Whistleblower is"
    $text = $text -replace "(?i)My truck", "The Vehicle"
    $text = $text -replace "(?i)I stopped", "The Driver stopped"
    $text = $text -replace "(?i)I have filed", "Federal Complaints have been filed"
    $text = $text -replace "(?i)I found", "Analysis found"
    
    return $text
}

# 3. Function to Convert specialized Markdown to HTML
function Convert-MdToHtml {
    param ($mdContent)
    
    $html = $mdContent

    # Escape HTML special characters first (basic)
    # $html = $html -replace "&", "&amp;" -replace "<", "&lt;" -replace ">", "&gt;" # Skipping for now to allow simple HTML injection if needed

    # Headers
    $html = $html -replace '(?m)^# (.*)$', '<h2>$1</h2>'
    $html = $html -replace '(?m)^## (.*)$', '<h3>$1</h3>'
    $html = $html -replace '(?m)^### (.*)$', '<h4>$1</h4>'

    # Bold
    $html = $html -replace '\*\*(.*?)\*\*', '<strong>$1</strong>'
    
    # Lists (Simple)
    $html = $html -replace '(?m)^\* (.*)$', '<li>$1</li>'
    # Wrap lists (Naïve approach: just wrap adjacent lis? Or just let them act as block elements)
    # For this simple script, we'll leave lis as block items or wrap locally if we wanted strict logic. 
    # Let's just wrap the whole list block if possible, but regex is hard.
    # We will simulate lists by just styling li elements in CSS.

    # Blockquotes
    $html = $html -replace '(?m)^> (.*)$', '<div class="highlight">$1</div>'

    # Line Breaks (Double newline to paragraph)
    # $html = $html -replace '(?m)\n\n', '<br><br>'
    
    return $html
}

# 4. Aggregate Content & Build Navigation
$finalHtmlContent = ""
$navLinksHtml = ""

# Map filenames to "Friendly Names" for the Nav Bar
$navMap = @{
    "FILE_1_FORENSIC_ANCHOR"               = "THE PHYSICS";
    "FILE_5_OCTOBER_BETRAYAL"              = "THE POISON";
    "01_Operation_Total_Grid_Matrix"       = "THE CARTEL";
    "Federal_Oversight_Status_Report_Jan9" = "THE AUDIT";
    "06_Victim_Unity_Manifesto"            = "THE SWARM"
}

foreach ($file in $sourceFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $filename = [System.IO.Path]::GetFileNameWithoutExtension($file)
        
        # REDACT FIRST
        $redactedContent = Protect-Content -text $content

        # Convert
        $converted = Convert-MdToHtml -mdContent $redactedContent
        
        # Wrap in Card
        $finalHtmlContent += "<div class='evidence-card' id='$filename'>"
        $finalHtmlContent += $converted
        $finalHtmlContent += "</div>`n"

        # Add to Nav
        if ($navMap.ContainsKey($filename)) {
            $friendlyName = $navMap[$filename]
            $navLinksHtml += "<a href='#$filename'>$friendlyName</a>`n"
        }
    }
    else {
        Write-Host "Warning: File not found - $file"
    }
}

# 5. Inject into Template
$template = Get-Content $templatePath -Raw
# Template itself might have the Case Number in header, let's scrub that too just in case
$template = $template -replace "6:25-cv-00075", "SDTX FEDERAL CASE [REDACTED]"

$finalSite = $template -replace "{{CONTENT_PLACEHOLDER}}", $finalHtmlContent
$finalSite = $finalSite -replace "{{NAV_LINKS_PLACEHOLDER}}", $navLinksHtml

# 6. Save
Set-Content -Path $outputFile -Value $finalSite
Write-Host "Digital Beacon Built (Sanitized + Nav V3): $outputFile"
