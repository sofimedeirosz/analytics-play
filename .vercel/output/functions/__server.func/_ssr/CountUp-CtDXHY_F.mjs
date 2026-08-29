import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function AreaChart({ data, color = "primary" }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 320, h = 100;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => [i * step, h - (v - min) / range * (h - 10) - 5]);
  const line = points.map((p, i) => i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  const stroke = color === "lime" ? "oklch(0.88 0.22 130)" : color === "orange" ? "oklch(0.72 0.20 50)" : "oklch(0.62 0.20 255)";
  const gid = `g-${color}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${w} ${h}`, className: "w-full", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: stroke, stopOpacity: "0.45" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: stroke, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: area, fill: `url(#${gid})` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: line, fill: "none", stroke, strokeWidth: "2", strokeLinecap: "round" }),
    points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p[0], cy: p[1], r: "2", fill: stroke }, i))
  ] });
}
function BarChart({ data, color = "lime" }) {
  const max = Math.max(...data.map((d) => d.value));
  const fill = color === "lime" ? "bg-lime" : color === "orange" ? "bg-orange" : "bg-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 items-end gap-3", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full rounded-t-lg ${fill} transition-all`,
        style: { height: `${d.value / max * 100}%` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: d.label })
  ] }, d.label)) });
}
function Donut({ value, max = 100, color = "primary" }) {
  const r = 38, c = 2 * Math.PI * r;
  const pct = value / max * c;
  const stroke = color === "lime" ? "oklch(0.88 0.22 130)" : color === "orange" ? "oklch(0.72 0.20 50)" : "oklch(0.62 0.20 255)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "h-28 w-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r, fill: "none", stroke: "oklch(0.30 0.030 250)", strokeWidth: "10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: "50",
        cy: "50",
        r,
        fill: "none",
        stroke,
        strokeWidth: "10",
        strokeLinecap: "round",
        strokeDasharray: `${pct} ${c}`,
        transform: "rotate(-90 50 50)"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "50", y: "55", textAnchor: "middle", className: "fill-foreground font-display text-[18px] font-bold", children: [
      value,
      "%"
    ] })
  ] });
}
function CountUp({ end, suffix = "", duration = 1600 }) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    v.toLocaleString("pt-BR"),
    suffix
  ] });
}
export {
  AreaChart as A,
  BarChart as B,
  CountUp as C,
  Donut as D
};
