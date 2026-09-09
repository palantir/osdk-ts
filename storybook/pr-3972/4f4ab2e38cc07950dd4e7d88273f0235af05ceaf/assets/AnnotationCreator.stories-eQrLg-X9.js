import{j as n,r}from"./iframe-CK77c45c.js";import{B as k}from"./BasePdfViewer-BJiar6Jb.js";import"./preload-helper-DbNEja4W.js";import"./index-C442JOIH.js";import"./BasePdfViewer.module.css-BYIk-yYd.js";import"./PdfViewerAnnotationLayer-DU3KVDM8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcdTV5zF.js";import"./PdfViewerOutlineSidebar-L7AKW-QA.js";import"./PdfViewerSidebarHeader-Cnvjpxso.js";import"./useBaseUiId-dVZqGFlU.js";import"./useControlled-jnmU5UAL.js";import"./CompositeRoot-DzPqxPrx.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./composite-Dh-nFKNO.js";import"./svgIconContainer-L_jjiIf-.js";import"./PdfViewerSearchBar-DycebmGN.js";import"./chevron-up-B2kOBdV2.js";import"./chevron-down-CFkNPRkg.js";import"./cross-CwI5OEk2.js";import"./PdfViewerSidebar-DOZIVkPg.js";import"./index-1zjImjvm.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./PdfViewerToolbar-CtAnoy-e.js";import"./Button-CWY22zau.js";import"./chevron-right-BoGmmrtU.js";import"./Input-DeIqzZkQ.js";import"./search-CV_E7rKM.js";import"./spin-3GRPs9aM.js";import"./error-BvwPFshU.js";const D="/osdk-ts/storybook/pr-3972/4f4ab2e38cc07950dd4e7d88273f0235af05ceaf/compressed.tracemonkey-pldi-09.pdf",E="#fff066";function j(e){const t=e instanceof Element?e:e.parentElement;return(t==null?void 0:t.closest(".page[data-page-number]"))??void 0}function B(e,t,a,o){const l=(e.left-t.left)/o,s=e.width/o,i=e.height/o,v=(e.top-t.top)/o,R=a-v-i;return{x:l,y:R,width:s,height:i}}const U={padding:8,marginBottom:8,backgroundColor:"#fff",border:"1px solid #e0e0e0",borderRadius:4,cursor:"pointer"},O={fontSize:12,color:"#666",marginBottom:4},F={fontSize:13,marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},_={fontSize:12,color:"#c00",background:"none",border:"none",cursor:"pointer",padding:0},z={width:260,borderLeft:"1px solid #e0e0e0",padding:12,overflowY:"auto",backgroundColor:"#fafafa",flexShrink:0},G={margin:"0 0 12px",fontSize:14},V={width:"100%",padding:"8px 12px",marginBottom:12,border:"none",borderRadius:4,cursor:"pointer",fontSize:13,fontWeight:600,color:"white"},N={color:"#888",fontSize:13},W={display:"flex",height:"600px"},$={flex:1,minWidth:0};function Y({annotation:e,onClick:t,onDelete:a}){const o=r.useCallback(()=>{t(e.page)},[t,e.page]),l=r.useCallback(i=>{i.stopPropagation(),a(e.id)},[a,e.id]),s={...U,borderLeft:`3px solid ${e.color??E}`};return n.jsxs("div",{onClick:o,role:"button",tabIndex:0,style:s,children:[n.jsxs("div",{style:O,children:["Page ",e.page]}),n.jsxs("div",{style:F,children:["“",e.selectedText,"”"]}),n.jsx("button",{onClick:l,style:_,children:"Delete"})]})}function q({annotations:e,annotationModeActive:t,onToggleMode:a,onAnnotationClick:o,onDelete:l}){const s={...V,background:t?"#c00":"#2965cc"};return n.jsxs("div",{style:z,children:[n.jsxs("h3",{style:G,children:["Annotations (",e.length,")"]}),n.jsx("button",{onClick:a,type:"button",style:s,children:t?"Stop Annotating":"Start Annotating"}),e.length===0&&n.jsx("p",{style:N,children:t?"Select text on the PDF to create an annotation.":'Click "Start Annotating" then select text on the PDF.'}),e.map(i=>n.jsx(Y,{annotation:i,onClick:o,onDelete:l},i.id))]})}function J({src:e}){const[t,a]=r.useState([]),[o,l]=r.useState(!1),s=r.useRef(null),i=r.useRef(null),v=r.useCallback(d=>{var c;(c=i.current)==null||c.scrollToPage(d)},[]),R=r.useCallback(()=>{l(d=>!d)},[]),H=r.useCallback(d=>{a(c=>c.filter(f=>f.id!==d))},[]);return r.useEffect(function(){if(!o)return;const c=s.current;if(c==null)return;function f(){const p=window.getSelection();if(p==null||p.isCollapsed)return;const b=p.toString().trim();if(b==="")return;const x=p.getRangeAt(0),g=j(x.startContainer);if(g==null)return;const C=Number(g.getAttribute("data-page-number"));if(Number.isNaN(C))return;const y=parseFloat(getComputedStyle(g).getPropertyValue("--scale-factor"))||1,T=g.clientHeight/y,L=g.getBoundingClientRect(),S=x.getClientRects(),m=[];for(let u=0;u<S.length;u++){const A=S[u];A.width===0||A.height===0||m.push(B(A,L,T,y))}if(m.length===0)return;const I={id:crypto.randomUUID(),type:"highlight",page:C,rect:m[0],rects:m,color:E,label:b,selectedText:b};a(u=>[...u,I]),p.removeAllRanges()}return c.addEventListener("mouseup",f),()=>c.removeEventListener("mouseup",f)},[o]),n.jsxs("div",{style:W,children:[n.jsx("div",{ref:s,style:$,children:n.jsx(k,{ref:i,src:e,annotations:t})}),n.jsx(q,{annotations:t,annotationModeActive:o,onToggleMode:R,onAnnotationClick:v,onDelete:H})]})}const ke={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:k,tags:["beta"]},h={render:()=>n.jsx(J,{src:D}),parameters:{docs:{source:{code:`const HIGHLIGHT_COLOR = "#fff066";

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
  
  // Listen for text selection when annotation mode is active
  useEffect(
    function captureTextSelection() {
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
  const toggleAnnotationMode = useCallback(() => {
    setAnnotationModeActive((prev) => !prev);
  }, []);
  const handleAnnotationClick = useCallback((page: number) => {
    viewerRef.current?.scrollToPage(page);
  }, []);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div ref={containerRef} style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer ref={viewerRef} src={src} annotations={annotations} />
      </div>
      <MySidebar
        annotations={annotations}
        annotationModeActive={annotationModeActive}
        onToggleMode={toggleAnnotationMode}
        // The imperative handle drives navigation from outside the viewer
        onAnnotationClick={handleAnnotationClick}
        onDelete={deleteAnnotation}
      />
    </div>
  );
}`}}}};var w,P,M;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <AnnotationCreatorDemo src={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code: \`const HIGHLIGHT_COLOR = "#fff066";

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
  
  // Listen for text selection when annotation mode is active
  useEffect(
    function captureTextSelection() {
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
  const toggleAnnotationMode = useCallback(() => {
    setAnnotationModeActive((prev) => !prev);
  }, []);
  const handleAnnotationClick = useCallback((page: number) => {
    viewerRef.current?.scrollToPage(page);
  }, []);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div ref={containerRef} style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer ref={viewerRef} src={src} annotations={annotations} />
      </div>
      <MySidebar
        annotations={annotations}
        annotationModeActive={annotationModeActive}
        onToggleMode={toggleAnnotationMode}
        // The imperative handle drives navigation from outside the viewer
        onAnnotationClick={handleAnnotationClick}
        onDelete={deleteAnnotation}
      />
    </div>
  );
}\`
      }
    }
  }
}`,...(M=(P=h.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const Ee=["AnnotationCreator"];export{h as AnnotationCreator,Ee as __namedExportsOrder,ke as default};
