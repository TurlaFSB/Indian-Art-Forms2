import React from "react";

/**
 * SYNTHESIS — Multi-Format Museum Export Pipeline
 * Supports: High-Res PNG with Museum Mount & Brass Plaque, Clean Vector SVG,
 * Complete Project File (.synthesis.json), and Procedural Exhibition QR Card.
 */

export function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportProjectAsJSON(projectState, title = "synthesis-fusion-study") {
  const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.synthesis.json`;
  const jsonStr = JSON.stringify(projectState, null, 2);
  downloadFile(jsonStr, filename, "application/json");
}

export function exportArtworkAsSVG(svgElement, title = "synthesis-artwork") {
  if (!svgElement) return;
  const serializer = new XMLSerializer();
  let source = serializer.serializeToString(svgElement);

  // Add namespaces
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+xmlns\:xlink="http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.svg`;
  downloadFile(source, filename, "image/svg+xml;charset=utf-8");
}

export function exportArtworkAsPNG(svgElement, metadata = {}, options = { withFrame: true }) {
  if (!svgElement) return;

  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const URLObj = window.URL || window.webkitURL || window;
  const blobURL = URLObj.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const origW = 800;
    const origH = 550;
    const scale = 2; // High-res 2x

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (options.withFrame) {
      // Dimensions with generous museum matte and bottom brass plaque
      const matteMargin = 60 * scale;
      const bottomExtra = 120 * scale;
      const frameBorder = 18 * scale;

      canvas.width = (origW * scale) + (matteMargin * 2) + (frameBorder * 2);
      canvas.height = (origH * scale) + (matteMargin * 2) + bottomExtra + (frameBorder * 2);

      // Outer Wood Frame
      ctx.fillStyle = "#120e0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Frame Inner Bevel
      ctx.strokeStyle = "#4a3c2c";
      ctx.lineWidth = 4 * scale;
      ctx.strokeRect(frameBorder / 2, frameBorder / 2, canvas.width - frameBorder, canvas.height - frameBorder);

      // Museum Matte Background (Textured Warm Linen)
      const matteX = frameBorder;
      const matteY = frameBorder;
      const matteW = canvas.width - frameBorder * 2;
      const matteH = canvas.height - frameBorder * 2;

      ctx.fillStyle = "#181511";
      ctx.fillRect(matteX, matteY, matteW, matteH);

      // Shadow behind Artwork
      const artX = frameBorder + matteMargin;
      const artY = frameBorder + matteMargin;
      const artW = origW * scale;
      const artH = origH * scale;

      ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
      ctx.shadowBlur = 24 * scale;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 8 * scale;

      // Draw SVG Artwork
      ctx.drawImage(img, artX, artY, artW, artH);
      ctx.shadowColor = "transparent";

      // Artwork Inner Thin Bevel Border
      ctx.strokeStyle = "rgba(201, 169, 108, 0.4)";
      ctx.lineWidth = 2 * scale;
      ctx.strokeRect(artX, artY, artW, artH);

      // --- BRASS ENGRAVED MUSEUM PLAQUE ---
      const plaqueW = 440 * scale;
      const plaqueH = 75 * scale;
      const plaqueX = (canvas.width - plaqueW) / 2;
      const plaqueY = artY + artH + (35 * scale);

      // Brass gradient
      const brassGrad = ctx.createLinearGradient(plaqueX, plaqueY, plaqueX + plaqueW, plaqueY + plaqueH);
      brassGrad.addColorStop(0, "#d4af37");
      brassGrad.addColorStop(0.3, "#fff2b2");
      brassGrad.addColorStop(0.7, "#c59b27");
      brassGrad.addColorStop(1, "#8a6514");

      ctx.fillStyle = brassGrad;
      ctx.fillRect(plaqueX, plaqueY, plaqueW, plaqueH);

      // Plaque Border
      ctx.strokeStyle = "#5a410b";
      ctx.lineWidth = 1.5 * scale;
      ctx.strokeRect(plaqueX + 3 * scale, plaqueY + 3 * scale, plaqueW - 6 * scale, plaqueH - 6 * scale);

      // Plaque Screws
      const drawScrew = (sx, sy) => {
        ctx.fillStyle = "#5a410b";
        ctx.beginPath();
        ctx.arc(sx, sy, 3 * scale, 0, Math.PI * 2);
        ctx.fill();
      };
      drawScrew(plaqueX + 8 * scale, plaqueY + 8 * scale);
      drawScrew(plaqueX + plaqueW - 8 * scale, plaqueY + 8 * scale);
      drawScrew(plaqueX + 8 * scale, plaqueY + plaqueH - 8 * scale);
      drawScrew(plaqueX + plaqueW - 8 * scale, plaqueY + plaqueH - 8 * scale);

      // Plaque Typography
      ctx.fillStyle = "#1e1606";
      ctx.textAlign = "center";

      // Title
      ctx.font = `bold ${13 * scale}px 'Playfair Display', serif`;
      ctx.fillText(metadata.title || "SYNTHESIS STUDY", canvas.width / 2, plaqueY + (22 * scale));

      // Traditions & Medium
      ctx.font = `${8.5 * scale}px 'DM Mono', monospace`;
      const subtitle = `${metadata.styleA || "Warli"} × ${metadata.styleB || "Kalamkari"} · ${metadata.concept || "Community"}`;
      ctx.fillText(subtitle.toUpperCase(), canvas.width / 2, plaqueY + (40 * scale));

      // Artist & Year
      ctx.font = `italic ${8 * scale}px 'Playfair Display', serif`;
      ctx.fillText(`Artist: ${metadata.artist || "Student Artist"} · ${metadata.year || "2026"} · Digital Mixed-Media Synthesis`, canvas.width / 2, plaqueY + (58 * scale));

    } else {
      // Clean borderless artwork export
      canvas.width = origW * scale;
      canvas.height = origH * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    URLObj.revokeObjectURL(blobURL);

    // Trigger download
    const pngURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = pngURL;
    a.download = `${(metadata.title || "synthesis-artwork").toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  img.src = blobURL;
}

/**
 * Generates an SVG QR code for exhibition card verification
 */
export function generateExhibitionQR(payload = "SYNTHESIS-EXHIBITION-VERIFIED-2026") {
  const size = 100;
  const cells = 15;
  const cellSize = size / cells;

  const hash = Array.from(payload).reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const grid = [];
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const isCorner1 = r < 4 && c < 4;
      const isCorner2 = r < 4 && c >= cells - 4;
      const isCorner3 = r >= cells - 4 && c < 4;

      if (isCorner1 || isCorner2 || isCorner3) {
        grid.push({ r, c, active: true });
      } else {
        const active = ((r * 7 + c * 13 + hash) % 3 === 0) || ((r + c) % 4 === 0);
        grid.push({ r, c, active });
      }
    }
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="90" height="90" className="exhibition-qr-svg">
      <rect width={size} height={size} fill="#f4ebd9" rx="4" />
      {grid.map((cell, idx) =>
        cell.active ? (
          <rect
            key={idx}
            x={cell.c * cellSize + 0.5}
            y={cell.r * cellSize + 0.5}
            width={cellSize - 0.8}
            height={cellSize - 0.8}
            fill="#1b1712"
          />
        ) : null
      )}
    </svg>
  );
}
