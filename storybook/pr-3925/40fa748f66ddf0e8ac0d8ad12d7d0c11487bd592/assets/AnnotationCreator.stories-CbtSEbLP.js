import{j as n,r as i}from"./iframe-uWQw-aoo.js";import{B as k}from"./BasePdfViewer-P7Pc-wA7.js";import"./preload-helper-DVjylv8h.js";import"./index-00plDTMi.js";import"./BasePdfViewer.module.css-BtFeEswD.js";import"./PdfViewerAnnotationLayer-IC071ogX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1YeoLqr.js";import"./PdfViewerOutlineSidebar-DBPopbyc.js";import"./PdfViewerSidebarHeader-BwxbK-AS.js";import"./useBaseUiId-Ck6WuZAw.js";import"./useControlled-DUIvla77.js";import"./CompositeRoot-9YQeHemU.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./composite-DHcKfgn9.js";import"./svgIconContainer-DmbccLJt.js";import"./PdfViewerSearchBar-B8z5cHMJ.js";import"./chevron-up-CbGYwo0a.js";import"./chevron-down-CbHcQ9sT.js";import"./cross-BoNTQ4Rv.js";import"./PdfViewerSidebar-CEJK55Rj.js";import"./index-DTQn9lDq.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./PdfViewerToolbar-C3Yktp9h.js";import"./Button-BmUOiVqe.js";import"./chevron-right-BAwVY0T8.js";import"./Input--UpB7VqG.js";import"./search-BdK0N4i0.js";import"./spin-DixUlP-t.js";import"./error-GxXvf_3k.js";const B="/osdk-ts/storybook/pr-3925/40fa748f66ddf0e8ac0d8ad12d7d0c11487bd592/compressed.tracemonkey-pldi-09.pdf",H="#fff066";function D(e){const t=e instanceof Element?e:e.parentElement;return(t==null?void 0:t.closest(".page[data-page-number]"))??void 0}function j(e,t,a,o){const l=(e.left-t.left)/o,s=e.width/o,r=e.height/o,v=(e.top-t.top)/o,R=a-v-r;return{x:l,y:R,width:s,height:r}}const U={padding:8,marginBottom:8,backgroundColor:"#fff",border:"1px solid #e0e0e0",borderRadius:4,cursor:"pointer"},V={fontSize:12,color:"#666",marginBottom:4},O={fontSize:13,marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},F={fontSize:12,color:"#c00",background:"none",border:"none",cursor:"pointer",padding:0},_={width:260,borderLeft:"1px solid #e0e0e0",padding:12,overflowY:"auto",backgroundColor:"#fafafa",flexShrink:0},z={margin:"0 0 12px",fontSize:14},G={width:"100%",padding:"8px 12px",marginBottom:12,border:"none",borderRadius:4,cursor:"pointer",fontSize:13,fontWeight:600,color:"white"},N={color:"#888",fontSize:13},W={display:"flex",height:"600px"},$={flex:1,minWidth:0};function Y({annotation:e,onClick:t,onDelete:a}){const o=i.useCallback(()=>{t(e.page)},[t,e.page]),l=i.useCallback(r=>{r.stopPropagation(),a(e.id)},[a,e.id]),s={...U,borderLeft:`3px solid ${e.color??H}`};return n.jsxs("div",{onClick:o,role:"button",tabIndex:0,style:s,children:[n.jsxs("div",{style:V,children:["Page ",e.page]}),n.jsxs("div",{style:O,children:["“",e.selectedText,"”"]}),n.jsx("button",{onClick:l,style:F,children:"Delete"})]})}function q({annotations:e,annotationModeActive:t,onToggleMode:a,onAnnotationClick:o,onDelete:l}){const s={...G,background:t?"#c00":"#2965cc"};return n.jsxs("div",{style:_,children:[n.jsxs("h3",{style:z,children:["Annotations (",e.length,")"]}),n.jsx("button",{onClick:a,type:"button",style:s,children:t?"Stop Annotating":"Start Annotating"}),e.length===0&&n.jsx("p",{style:N,children:t?"Select text on the PDF to create an annotation.":'Click "Start Annotating" then select text on the PDF.'}),e.map(r=>n.jsx(Y,{annotation:r,onClick:o,onDelete:l},r.id))]})}function J({src:e}){const[t,a]=i.useState([]),[o,l]=i.useState(!1),s=i.useRef(null),r=i.useRef(null),v=i.useCallback(d=>{var c;(c=r.current)==null||c.scrollToPage(d)},[]),R=i.useCallback(()=>{l(d=>!d)},[]),M=i.useCallback(d=>{a(c=>c.filter(u=>u.id!==d))},[]);return i.useEffect(function(){if(!o)return;const c=s.current;if(c==null)return;function u(){const p=window.getSelection();if(p==null||p.isCollapsed)return;const b=p.toString().trim();if(b==="")return;const y=p.getRangeAt(0),g=D(y.startContainer);if(g==null)return;const x=Number(g.getAttribute("data-page-number"));if(Number.isNaN(x))return;const w=parseFloat(getComputedStyle(g).getPropertyValue("--scale-factor"))||1,T=g.clientHeight/w,L=g.getBoundingClientRect(),C=y.getClientRects(),m=[];for(let f=0;f<C.length;f++){const A=C[f];A.width===0||A.height===0||m.push(j(A,L,T,w))}if(m.length===0)return;const I={id:crypto.randomUUID(),type:"highlight",page:x,rect:m[0],rects:m,color:H,label:b,selectedText:b};a(f=>[...f,I]),p.removeAllRanges()}return c.addEventListener("mouseup",u),()=>c.removeEventListener("mouseup",u)},[o]),n.jsxs("div",{style:W,children:[n.jsx("div",{ref:s,style:$,children:n.jsx(k,{ref:r,src:e,annotations:t})}),n.jsx(q,{annotations:t,annotationModeActive:o,onToggleMode:R,onAnnotationClick:v,onDelete:M})]})}const ke={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:k,tags:["beta"]},h={render:()=>n.jsx(J,{src:B}),parameters:{docs:{source:{code:`import { useCallback, useEffect, useRef, useState } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfRect, PdfViewerHandle } from "@osdk/react-components/experimental/pdf-viewer";

const HIGHLIGHT_COLOR = "#fff066";

// Browser rects are viewport-relative with a top-left origin; PDF rects are
// page-relative with a bottom-left origin. Both need dividing by the zoom
// scale to get back to unscaled PDF units.
function domRectToPdfRect(clientRect, pageRect, pageHeight, scale): PdfRect {
  const topInPdfUnits = (clientRect.top - pageRect.top) / scale;
  const height = clientRect.height / scale;
  return {
    x: (clientRect.left - pageRect.left) / scale,
    y: pageHeight - topInPdfUnits - height,
    width: clientRect.width / scale,
    height,
  };
}

function MyAnnotationCreator({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);
  const [annotationModeActive, setAnnotationModeActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PdfViewerHandle>(null);

  useEffect(() => {
    if (!annotationModeActive) return;
    const container = containerRef.current;
    if (container == null) return;

    function handleMouseUp() {
      const selection = window.getSelection();
      if (selection == null || selection.isCollapsed) return;

      const selectedText = selection.toString().trim();
      if (selectedText === "") return;

      const range = selection.getRangeAt(0);
      // pdf.js renders each page as .page[data-page-number]
      const pageEl = range.startContainer.parentElement?.closest(".page[data-page-number]");
      if (pageEl == null) return;

      // pdf.js publishes the current zoom as a CSS variable on the page
      const scale = parseFloat(getComputedStyle(pageEl).getPropertyValue("--scale-factor")) || 1;
      const pageHeight = pageEl.clientHeight / scale;
      const pageRect = pageEl.getBoundingClientRect();

      // A selection spanning multiple lines produces one rect per line
      const rects = Array.from(range.getClientRects())
        .filter((r) => r.width > 0 && r.height > 0)
        .map((r) => domRectToPdfRect(r, pageRect, pageHeight, scale));
      if (rects.length === 0) return;

      setAnnotations((prev) => [...prev, {
        id: crypto.randomUUID(),
        type: "highlight",
        page: Number(pageEl.getAttribute("data-page-number")),
        rect: rects[0],
        rects,
        color: HIGHLIGHT_COLOR,
        label: selectedText,
      }]);
      selection.removeAllRanges();
    }

    container.addEventListener("mouseup", handleMouseUp);
    return () => container.removeEventListener("mouseup", handleMouseUp);
  }, [annotationModeActive]);

  const deleteAnnotation = useCallback((id: string) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div ref={containerRef} style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer ref={viewerRef} src={src} annotations={annotations} />
      </div>
      <MySidebar
        annotations={annotations}
        annotationModeActive={annotationModeActive}
        onToggleMode={() => setAnnotationModeActive((prev) => !prev)}
        // The imperative handle drives navigation from outside the viewer
        onAnnotationClick={(page) => viewerRef.current?.scrollToPage(page)}
        onDelete={deleteAnnotation}
      />
    </div>
  );
}`}}}};var S,P,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AnnotationCreatorDemo src={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code: \`import { useCallback, useEffect, useRef, useState } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfRect, PdfViewerHandle } from "@osdk/react-components/experimental/pdf-viewer";

const HIGHLIGHT_COLOR = "#fff066";

// Browser rects are viewport-relative with a top-left origin; PDF rects are
// page-relative with a bottom-left origin. Both need dividing by the zoom
// scale to get back to unscaled PDF units.
function domRectToPdfRect(clientRect, pageRect, pageHeight, scale): PdfRect {
  const topInPdfUnits = (clientRect.top - pageRect.top) / scale;
  const height = clientRect.height / scale;
  return {
    x: (clientRect.left - pageRect.left) / scale,
    y: pageHeight - topInPdfUnits - height,
    width: clientRect.width / scale,
    height,
  };
}

function MyAnnotationCreator({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);
  const [annotationModeActive, setAnnotationModeActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PdfViewerHandle>(null);

  useEffect(() => {
    if (!annotationModeActive) return;
    const container = containerRef.current;
    if (container == null) return;

    function handleMouseUp() {
      const selection = window.getSelection();
      if (selection == null || selection.isCollapsed) return;

      const selectedText = selection.toString().trim();
      if (selectedText === "") return;

      const range = selection.getRangeAt(0);
      // pdf.js renders each page as .page[data-page-number]
      const pageEl = range.startContainer.parentElement?.closest(".page[data-page-number]");
      if (pageEl == null) return;

      // pdf.js publishes the current zoom as a CSS variable on the page
      const scale = parseFloat(getComputedStyle(pageEl).getPropertyValue("--scale-factor")) || 1;
      const pageHeight = pageEl.clientHeight / scale;
      const pageRect = pageEl.getBoundingClientRect();

      // A selection spanning multiple lines produces one rect per line
      const rects = Array.from(range.getClientRects())
        .filter((r) => r.width > 0 && r.height > 0)
        .map((r) => domRectToPdfRect(r, pageRect, pageHeight, scale));
      if (rects.length === 0) return;

      setAnnotations((prev) => [...prev, {
        id: crypto.randomUUID(),
        type: "highlight",
        page: Number(pageEl.getAttribute("data-page-number")),
        rect: rects[0],
        rects,
        color: HIGHLIGHT_COLOR,
        label: selectedText,
      }]);
      selection.removeAllRanges();
    }

    container.addEventListener("mouseup", handleMouseUp);
    return () => container.removeEventListener("mouseup", handleMouseUp);
  }, [annotationModeActive]);

  const deleteAnnotation = useCallback((id: string) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div ref={containerRef} style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer ref={viewerRef} src={src} annotations={annotations} />
      </div>
      <MySidebar
        annotations={annotations}
        annotationModeActive={annotationModeActive}
        onToggleMode={() => setAnnotationModeActive((prev) => !prev)}
        // The imperative handle drives navigation from outside the viewer
        onAnnotationClick={(page) => viewerRef.current?.scrollToPage(page)}
        onDelete={deleteAnnotation}
      />
    </div>
  );
}\`
      }
    }
  }
}`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const He=["AnnotationCreator"];export{h as AnnotationCreator,He as __namedExportsOrder,ke as default};
