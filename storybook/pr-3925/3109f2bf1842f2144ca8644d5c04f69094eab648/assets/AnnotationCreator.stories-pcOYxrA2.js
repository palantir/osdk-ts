import{j as n,r}from"./iframe-CXrz77U6.js";import{B as M}from"./BasePdfViewer-BzNokurD.js";import"./preload-helper-CKbgkQtS.js";import"./index-X106RkLU.js";import"./BasePdfViewer.module.css-lsFasZrY.js";import"./PdfViewerAnnotationLayer-BDaKcDcs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgqTutja.js";import"./PdfViewerOutlineSidebar-BeLhYBTB.js";import"./PdfViewerSidebarHeader-DPRMv6gP.js";import"./useBaseUiId-DEWnkFns.js";import"./useControlled-TnVqlNU3.js";import"./CompositeRoot-YeJPlhey.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./composite-ggnTBoJz.js";import"./svgIconContainer-C1hoWfOl.js";import"./PdfViewerSearchBar-BxXNUWnp.js";import"./chevron-up-ByoBxqju.js";import"./chevron-down-CJJaofKQ.js";import"./cross-C0HgBeNT.js";import"./PdfViewerSidebar-YrlD66Gz.js";import"./index-CIyfLN4v.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./PdfViewerToolbar-B9Fm5zwY.js";import"./Button-p_Ia-Jx9.js";import"./chevron-right-BG4tNyvz.js";import"./Input-BytGuL1G.js";import"./search-x_EEQ8qK.js";import"./spin-CnybUjHn.js";import"./error-CjxcPcQH.js";const D="/osdk-ts/storybook/pr-3925/3109f2bf1842f2144ca8644d5c04f69094eab648/compressed.tracemonkey-pldi-09.pdf",H="#fff066";function j(e){const t=e instanceof Element?e:e.parentElement;return(t==null?void 0:t.closest(".page[data-page-number]"))??void 0}function B(e,t,s,o){const l=(e.left-t.left)/o,a=e.width/o,i=e.height/o,v=(e.top-t.top)/o,R=s-v-i;return{x:l,y:R,width:a,height:i}}const U={padding:8,marginBottom:8,backgroundColor:"#fff",border:"1px solid #e0e0e0",borderRadius:4,cursor:"pointer"},O={fontSize:12,color:"#666",marginBottom:4},F={fontSize:13,marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},_={fontSize:12,color:"#c00",background:"none",border:"none",cursor:"pointer",padding:0},z={width:260,borderLeft:"1px solid #e0e0e0",padding:12,overflowY:"auto",backgroundColor:"#fafafa",flexShrink:0},G={margin:"0 0 12px",fontSize:14},V={width:"100%",padding:"8px 12px",marginBottom:12,border:"none",borderRadius:4,cursor:"pointer",fontSize:13,fontWeight:600,color:"white"},N={color:"#888",fontSize:13},W={display:"flex",height:"600px"},$={flex:1,minWidth:0};function Y({annotation:e,onClick:t,onDelete:s}){const o=r.useCallback(()=>{t(e.page)},[t,e.page]),l=r.useCallback(i=>{i.stopPropagation(),s(e.id)},[s,e.id]),a={...U,borderLeft:`3px solid ${e.color??H}`};return n.jsxs("div",{onClick:o,role:"button",tabIndex:0,style:a,children:[n.jsxs("div",{style:O,children:["Page ",e.page]}),n.jsxs("div",{style:F,children:["“",e.selectedText,"”"]}),n.jsx("button",{onClick:l,style:_,children:"Delete"})]})}function q({annotations:e,annotationModeActive:t,onToggleMode:s,onAnnotationClick:o,onDelete:l}){const a={...V,background:t?"#c00":"#2965cc"};return n.jsxs("div",{style:z,children:[n.jsxs("h3",{style:G,children:["Annotations (",e.length,")"]}),n.jsx("button",{onClick:s,type:"button",style:a,children:t?"Stop Annotating":"Start Annotating"}),e.length===0&&n.jsx("p",{style:N,children:t?"Select text on the PDF to create an annotation.":'Click "Start Annotating" then select text on the PDF.'}),e.map(i=>n.jsx(Y,{annotation:i,onClick:o,onDelete:l},i.id))]})}function J({src:e}){const[t,s]=r.useState([]),[o,l]=r.useState(!1),a=r.useRef(null),i=r.useRef(null),v=r.useCallback(d=>{var c;(c=i.current)==null||c.scrollToPage(d)},[]),R=r.useCallback(()=>{l(d=>!d)},[]),T=r.useCallback(d=>{s(c=>c.filter(f=>f.id!==d))},[]);return r.useEffect(function(){if(!o)return;const c=a.current;if(c==null)return;function f(){const p=window.getSelection();if(p==null||p.isCollapsed)return;const b=p.toString().trim();if(b==="")return;const y=p.getRangeAt(0),g=j(y.startContainer);if(g==null)return;const x=Number(g.getAttribute("data-page-number"));if(Number.isNaN(x))return;const C=parseFloat(getComputedStyle(g).getPropertyValue("--scale-factor"))||1,k=g.clientHeight/C,L=g.getBoundingClientRect(),S=y.getClientRects(),m=[];for(let u=0;u<S.length;u++){const A=S[u];A.width===0||A.height===0||m.push(B(A,L,k,C))}if(m.length===0)return;const I={id:crypto.randomUUID(),type:"highlight",page:x,rect:m[0],rects:m,color:H,label:b,selectedText:b};s(u=>[...u,I]),p.removeAllRanges()}return c.addEventListener("mouseup",f),()=>c.removeEventListener("mouseup",f)},[o]),n.jsxs("div",{style:W,children:[n.jsx("div",{ref:a,style:$,children:n.jsx(M,{ref:i,src:e,annotations:t})}),n.jsx(q,{annotations:t,annotationModeActive:o,onToggleMode:R,onAnnotationClick:v,onDelete:T})]})}const Me={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:M,tags:["beta"]},h={render:()=>n.jsx(J,{src:D}),parameters:{docs:{source:{code:`const HIGHLIGHT_COLOR = "#fff066";

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
}`}}}};var w,P,E;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const He=["AnnotationCreator"];export{h as AnnotationCreator,He as __namedExportsOrder,Me as default};
