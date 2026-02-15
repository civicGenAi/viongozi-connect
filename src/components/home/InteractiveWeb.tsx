import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  ox: number;
  oy: number;
}

const InteractiveWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initPoints();
    };

    const COLS = 18;
    const ROWS = 10;
    const INFLUENCE = 120;

    const initPoints = () => {
      const pts: Point[] = [];
      const gapX = canvas.width / (COLS - 1);
      const gapY = canvas.height / (ROWS - 1);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * gapX;
          const y = r * gapY;
          pts.push({ x, y, ox: x, oy: y });
        }
      }
      pointsRef.current = pts;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = pointsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Displace points near mouse
      for (const p of pts) {
        const dx = p.ox - mx;
        const dy = p.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < INFLUENCE) {
          const force = (1 - dist / INFLUENCE) * 18;
          p.x = p.ox + (dx / dist) * force;
          p.y = p.oy + (dy / dist) * force;
        } else {
          p.x += (p.ox - p.x) * 0.08;
          p.y += (p.oy - p.y) * 0.08;
        }
      }

      // Draw lines
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = r * COLS + c;
          const p = pts[idx];

          // Right neighbor
          if (c < COLS - 1) {
            const right = pts[idx + 1];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }

          // Bottom neighbor
          if (r < ROWS - 1) {
            const bottom = pts[idx + COLS];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }

          // Diagonal
          if (c < COLS - 1 && r < ROWS - 1) {
            const diag = pts[idx + COLS + 1];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(diag.x, diag.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots at intersections
      for (const p of pts) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = dist < INFLUENCE ? 0.25 : 0.08;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[2] pointer-events-auto"
    />
  );
};

export default InteractiveWeb;
