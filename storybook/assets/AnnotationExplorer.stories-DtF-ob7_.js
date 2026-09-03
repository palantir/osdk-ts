import{r,R as S,j as n}from"./iframe-BjvWEpQn.js";import{u as C,a as M,B as T}from"./BasePdfViewer-DeHraEMk.js";import{E as k}from"./constants-DsXMS3N3.js";import{b as I,a as H}from"./BasePdfViewer.module.css-8Rze9dhp.js";import{P as O}from"./PdfViewerToolbar-DLeVMY2t.js";import{P as V}from"./PdfViewerSearchBar-CC0Fl2OL.js";import{P as N}from"./PdfViewerAnnotationLayer-DVr73j6l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C0GV4moV.js";import"./PdfViewerOutlineSidebar-BWvvXXif.js";import"./PdfViewerSidebarHeader-DPdwzYZV.js";import"./useBaseUiId-CuHKCZXA.js";import"./useControlled-CIGB80Ap.js";import"./CompositeRoot-BZ6CJSg1.js";import"./CompositeItem-CsOj8GEh.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./composite-DOEC86eV.js";import"./svgIconContainer-Bo_QeWGy.js";import"./PdfViewerSidebar-CHMNn_wG.js";import"./index-CpObZ_CB.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./usePdfDocument-CAHt9lLW.js";import"./spin-L2HDbdmG.js";import"./error-0abisA4-.js";import"./Button-D0Bo1X54.js";import"./chevron-right-B1iPWR6H.js";import"./Input-mEIrwYjz.js";import"./search-BShNJex1.js";import"./chevron-up-Bf_ow2U4.js";import"./chevron-down-CIsozBEz.js";import"./cross-B1SVZ_Mp.js";const w=r.createContext(null);function R({value:e,children:t}){return S.createElement(w.Provider,{value:e},t)}function A(){const e=r.useContext(w);if(e==null)throw new Error("usePdfViewerContext must be used within a PdfViewerProvider");return e}function E(e){const t=C({src:e.src,defaultPage:e.defaultPage,initialPage:e.initialPage,defaultScale:e.defaultScale,initialScale:e.initialScale,defaultAutoSize:e.defaultAutoSize,initialAutoSize:e.initialAutoSize,defaultSidebarOpen:e.defaultSidebarOpen,initialSidebarOpen:e.initialSidebarOpen,sidebarMode:e.sidebarMode,onDownload:e.onDownload}),{highlightModeActive:o,toggleHighlightMode:a}=M({pdfViewerRef:t.pdfViewerRef,document:t.document,enabled:e.enableHighlight??e.highlightEnabled??!1,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),{hasFormFields:l,submitFormData:d}=I({pdfViewerRef:t.pdfViewerRef,eventBusRef:t.eventBusRef,document:t.document,formData:e.formData,onFormSubmit:e.onFormSubmit,onFormChange:e.onFormChange}),i=e.annotations??k,c=H(i),u=e.enableHighlight??e.highlightEnabled??!1,g=e.enableDownload??!1,p=e.onFormSubmit!=null&&l,{onAnnotationClick:f,outlineIcons:v}=e;return r.useMemo(()=>({...t,highlightEnabled:u,highlightModeActive:o,toggleHighlightMode:a,hasFormFields:l,submitFormData:d,annotations:i,annotationsByPage:c,onAnnotationClick:f,enableDownload:g,enableFormSave:p,outlineIcons:v}),[t,u,o,a,l,d,i,c,f,g,p,v])}const z="./compressed.tracemonkey-pldi-09.pdf",P=[],j={width:"100%",height:"100%",border:"2px solid rgba(41, 101, 204, 0.7)",borderRadius:"2px",backgroundColor:"rgba(41, 101, 204, 0.12)",boxSizing:"border-box"};function L(e){return n.jsx("div",{style:j})}function s(e){return n.jsx(L,{...e})}const m=[{id:"a1",type:"custom",page:1,rect:{x:108,y:700,width:380,height:14},label:"Trace-based compilation",render:s},{id:"a2",type:"custom",page:1,rect:{x:88,y:614,width:440,height:12},label:"Abstract section",render:s},{id:"a3",type:"custom",page:2,rect:{x:86,y:710,width:220,height:12},label:"Introduction paragraph",render:s},{id:"a4",type:"custom",page:3,rect:{x:86,y:680,width:220,height:12},label:"Trace tree concept",render:s},{id:"a5",type:"custom",page:5,rect:{x:86,y:600,width:220,height:12},label:"Type specialization",render:s},{id:"a6",type:"custom",page:8,rect:{x:86,y:650,width:220,height:12},label:"Benchmarks overview",render:s},{id:"a7",type:"custom",page:10,rect:{x:86,y:700,width:220,height:12},label:"Related work",render:s},{id:"a8",type:"custom",page:14,rect:{x:86,y:700,width:220,height:12},label:"Conclusions",render:s}],D={display:"flex",height:"100%"},B={flex:1,minWidth:0,display:"flex",flexDirection:"column",height:"100%"},F={flex:1,overflow:"hidden",display:"flex",position:"relative"},_={flex:1,position:"relative",overflow:"hidden"},Y={overflow:"auto",position:"absolute",top:0,left:0,right:0,bottom:0},q={width:"280px",borderLeft:"1px solid var(--osdk-surface-border-color, #e0e0e0)",overflowY:"auto",fontFamily:"var(--osdk-typography-family-default)",fontSize:"var(--osdk-typography-size-body-small, 13px)"},Q={padding:"12px 16px",fontWeight:600,fontSize:"var(--osdk-typography-size-body-medium, 14px)",borderBottom:"1px solid var(--osdk-surface-border-color, #e0e0e0)"},Z={padding:"10px 16px",cursor:"pointer",borderBottom:"1px solid var(--osdk-surface-border-color, #e0e0e0)",transition:"background-color 150ms ease"},W={fontWeight:500},U={marginTop:"4px",color:"var(--osdk-typography-color-muted, #666)",fontSize:"var(--osdk-typography-size-body-small, 12px)"};function $(){const e=A(),t=r.useCallback(()=>e.download(),[e]);return n.jsxs("div",{style:B,children:[n.jsx(O,{currentPage:e.currentPage,numPages:e.numPages,scale:e.scale,autoSize:e.autoSize,sidebarOpen:e.sidebarOpen,onPageChange:e.scrollToPage,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut,onAutoSizeToggle:e.toggleAutoSize,onSearchOpen:e.search.openSearch,onSidebarToggle:e.toggleSidebar,onDownload:t,enableDownload:e.enableDownload,onRotateLeft:e.rotateLeft,onRotateRight:e.rotateRight,enableHighlight:e.highlightEnabled,highlightModeActive:e.highlightModeActive,onHighlightToggle:e.toggleHighlightMode,enableFormSave:e.enableFormSave,onFormSave:e.submitFormData}),e.search.isSearchOpen&&n.jsx(V,{query:e.search.query,totalMatches:e.search.totalMatches,currentMatchIndex:e.search.currentMatchIndex,onQueryChange:e.search.setQuery,onNext:e.search.nextMatch,onPrev:e.search.prevMatch,onClose:e.search.closeSearch}),n.jsx("div",{style:F,children:n.jsx("div",{style:_,children:n.jsxs("div",{ref:e.containerRef,style:Y,children:[n.jsx("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(o=>{const a=e.annotationsByPage[o.pageNumber]??P;return a.length===0?null:n.jsx("div",{style:{position:"absolute",left:o.left,top:o.top,width:o.width,height:o.height,pointerEvents:"none",zIndex:1},children:n.jsx(N,{annotations:a,pageHeight:o.pageHeight,scale:o.scale,transform:o.transform,onAnnotationClick:e.onAnnotationClick})},o.pageNumber)})]})})})]})}function G({annotation:e,isHovered:t,onHover:o}){const{scrollToPage:a}=A(),l=r.useCallback(()=>{a(e.page)},[a,e.page]),d=r.useCallback(()=>o(e.id),[o,e.id]),i=r.useCallback(()=>o(null),[o]),c=r.useMemo(()=>({...Z,backgroundColor:t?"var(--osdk-palette-blue-100, #e3f2fd)":"transparent"}),[t]);return n.jsxs("div",{style:c,onClick:l,onMouseEnter:d,onMouseLeave:i,role:"button",tabIndex:0,children:[n.jsx("div",{style:W,children:e.label??e.id}),n.jsxs("div",{style:U,children:["Page ",e.page]})]})}function J({annotations:e,onAnnotationHover:t,hoveredAnnotationId:o}){return n.jsxs("div",{style:q,children:[n.jsx("div",{style:Q,children:"Annotations"}),e.map(a=>n.jsx(G,{annotation:a,isHovered:a.id===o,onHover:t},a.id))]})}function K({src:e}){const[t,o]=r.useState(null),a=r.useMemo(()=>t==null?P:m.filter(i=>i.id===t),[t]),l=E({src:e,annotations:a}),d=r.useCallback(i=>{o(i)},[]);return n.jsx(R,{value:l,children:n.jsxs("div",{style:D,children:[n.jsx($,{}),n.jsx(J,{annotations:m,onAnnotationHover:d,hoveredAnnotationId:t})]})})}const Oe={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:T,tags:["beta"]},h={render:()=>n.jsx("div",{style:{height:"600px"},children:n.jsx(K,{src:z})}),parameters:{docs:{source:{code:`// Stable reference — a fresh [] each render would re-trigger the viewer
const EMPTY_ANNOTATIONS: PdfAnnotation[] = [];

// Composing the viewer by hand, instead of using BasePdfViewer, is what lets
// the sidebar live outside the scroll container while still driving it.
function ConnectedPdfView() {
  const ctx = usePdfViewerContext();

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <PdfViewerToolbar
        currentPage={ctx.currentPage}
        numPages={ctx.numPages}
        scale={ctx.scale}
        autoSize={ctx.autoSize}
        sidebarOpen={ctx.sidebarOpen}
        onPageChange={ctx.scrollToPage}
        onZoomIn={ctx.zoomIn}
        onZoomOut={ctx.zoomOut}
        onAutoSizeToggle={ctx.toggleAutoSize}
        onSearchOpen={ctx.search.openSearch}
        onSidebarToggle={ctx.toggleSidebar}
        onRotateLeft={ctx.rotateLeft}
        onRotateRight={ctx.rotateRight}
      />
      {ctx.search.isSearchOpen && (
        <PdfViewerSearchBar
          query={ctx.search.query}
          totalMatches={ctx.search.totalMatches}
          currentMatchIndex={ctx.search.currentMatchIndex}
          onQueryChange={ctx.search.setQuery}
          onNext={ctx.search.nextMatch}
          onPrev={ctx.search.prevMatch}
          onClose={ctx.search.closeSearch}
        />
      )}
      <div style={{ position: "relative", flex: 1, overflow: "auto" }}>
        <div ref={ctx.containerRef} style={{ height: "100%" }}>
          <div ref={ctx.viewerRef} className="pdfViewer" />
          {/* One absolutely positioned layer per rendered page. portalTargets
              carries the geometry and transform each page currently needs. */}
          {ctx.portalTargets.map((target) => {
            const pageAnnotations = ctx.annotationsByPage[target.pageNumber] ?? EMPTY_ANNOTATIONS;
            if (pageAnnotations.length === 0) return null;
            return (
              <div
                key={target.pageNumber}
                style={{
                  position: "absolute",
                  left: target.left,
                  top: target.top,
                  width: target.width,
                  height: target.height,
                  pointerEvents: "none",
                }}
              >
                <PdfViewerAnnotationLayer
                  annotations={pageAnnotations}
                  pageHeight={target.pageHeight}
                  scale={target.scale}
                  transform={target.transform}
                  onAnnotationClick={ctx.onAnnotationClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AnnotationSidebarItem({ annotation, isHovered, onHover }) {
  // Reaching the viewer through context rather than a ref keeps the sidebar
  // decoupled from where the viewer is mounted
  const { scrollToPage } = usePdfViewerContext();
  const handleClick = useCallback(() => {
    scrollToPage(annotation.page);
  }, [annotation.page, scrollToPage]);
  const handleMouseEnter = useCallback(() => {
    onHover(annotation.id);
  }, [annotation.id, onHover]);
  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? "#e3f2fd" : "transparent" }}
    >
      <div>{annotation.label ?? annotation.id}</div>
      <div>Page {annotation.page}</div>
    </div>
  );
}

function MyAnnotationExplorer({ src, allAnnotations }: { src: string; allAnnotations: PdfCustomAnnotation[] }) {
  const [hoveredAnnotationId, setHoveredAnnotationId] = useState<string | null>(null);

  // The sidebar always lists every annotation, but only the hovered one is
  // handed to the viewer — so the page stays clean until you point at an entry
  const visibleAnnotations = useMemo(() => {
    if (hoveredAnnotationId == null) return EMPTY_ANNOTATIONS;
    return allAnnotations.filter((a) => a.id === hoveredAnnotationId);
  }, [hoveredAnnotationId, allAnnotations]);

  const viewer = usePdfViewerInstance({ src, annotations: visibleAnnotations });

  const handleHover = useCallback((id: string | null) => setHoveredAnnotationId(id), []);

  return (
    <PdfViewerProvider value={viewer}>
      <div style={{ display: "flex", height: "600px" }}>
        <ConnectedPdfView />
        <div style={{ width: 260, overflowY: "auto" }}>
          {allAnnotations.map((annotation) => (
            <AnnotationSidebarItem
              key={annotation.id}
              annotation={annotation}
              isHovered={annotation.id === hoveredAnnotationId}
              onHover={handleHover}
            />
          ))}
        </div>
      </div>
    </PdfViewerProvider>
  );
}`}}}};var x,b,y;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "600px"
  }}>
      <AnnotationExplorerDemo src={SAMPLE_PDF_URL} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// Stable reference — a fresh [] each render would re-trigger the viewer
const EMPTY_ANNOTATIONS: PdfAnnotation[] = [];

// Composing the viewer by hand, instead of using BasePdfViewer, is what lets
// the sidebar live outside the scroll container while still driving it.
function ConnectedPdfView() {
  const ctx = usePdfViewerContext();

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <PdfViewerToolbar
        currentPage={ctx.currentPage}
        numPages={ctx.numPages}
        scale={ctx.scale}
        autoSize={ctx.autoSize}
        sidebarOpen={ctx.sidebarOpen}
        onPageChange={ctx.scrollToPage}
        onZoomIn={ctx.zoomIn}
        onZoomOut={ctx.zoomOut}
        onAutoSizeToggle={ctx.toggleAutoSize}
        onSearchOpen={ctx.search.openSearch}
        onSidebarToggle={ctx.toggleSidebar}
        onRotateLeft={ctx.rotateLeft}
        onRotateRight={ctx.rotateRight}
      />
      {ctx.search.isSearchOpen && (
        <PdfViewerSearchBar
          query={ctx.search.query}
          totalMatches={ctx.search.totalMatches}
          currentMatchIndex={ctx.search.currentMatchIndex}
          onQueryChange={ctx.search.setQuery}
          onNext={ctx.search.nextMatch}
          onPrev={ctx.search.prevMatch}
          onClose={ctx.search.closeSearch}
        />
      )}
      <div style={{ position: "relative", flex: 1, overflow: "auto" }}>
        <div ref={ctx.containerRef} style={{ height: "100%" }}>
          <div ref={ctx.viewerRef} className="pdfViewer" />
          {/* One absolutely positioned layer per rendered page. portalTargets
              carries the geometry and transform each page currently needs. */}
          {ctx.portalTargets.map((target) => {
            const pageAnnotations = ctx.annotationsByPage[target.pageNumber] ?? EMPTY_ANNOTATIONS;
            if (pageAnnotations.length === 0) return null;
            return (
              <div
                key={target.pageNumber}
                style={{
                  position: "absolute",
                  left: target.left,
                  top: target.top,
                  width: target.width,
                  height: target.height,
                  pointerEvents: "none",
                }}
              >
                <PdfViewerAnnotationLayer
                  annotations={pageAnnotations}
                  pageHeight={target.pageHeight}
                  scale={target.scale}
                  transform={target.transform}
                  onAnnotationClick={ctx.onAnnotationClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AnnotationSidebarItem({ annotation, isHovered, onHover }) {
  // Reaching the viewer through context rather than a ref keeps the sidebar
  // decoupled from where the viewer is mounted
  const { scrollToPage } = usePdfViewerContext();
  const handleClick = useCallback(() => {
    scrollToPage(annotation.page);
  }, [annotation.page, scrollToPage]);
  const handleMouseEnter = useCallback(() => {
    onHover(annotation.id);
  }, [annotation.id, onHover]);
  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? "#e3f2fd" : "transparent" }}
    >
      <div>{annotation.label ?? annotation.id}</div>
      <div>Page {annotation.page}</div>
    </div>
  );
}

function MyAnnotationExplorer({ src, allAnnotations }: { src: string; allAnnotations: PdfCustomAnnotation[] }) {
  const [hoveredAnnotationId, setHoveredAnnotationId] = useState<string | null>(null);

  // The sidebar always lists every annotation, but only the hovered one is
  // handed to the viewer — so the page stays clean until you point at an entry
  const visibleAnnotations = useMemo(() => {
    if (hoveredAnnotationId == null) return EMPTY_ANNOTATIONS;
    return allAnnotations.filter((a) => a.id === hoveredAnnotationId);
  }, [hoveredAnnotationId, allAnnotations]);

  const viewer = usePdfViewerInstance({ src, annotations: visibleAnnotations });

  const handleHover = useCallback((id: string | null) => setHoveredAnnotationId(id), []);

  return (
    <PdfViewerProvider value={viewer}>
      <div style={{ display: "flex", height: "600px" }}>
        <ConnectedPdfView />
        <div style={{ width: 260, overflowY: "auto" }}>
          {allAnnotations.map((annotation) => (
            <AnnotationSidebarItem
              key={annotation.id}
              annotation={annotation}
              isHovered={annotation.id === hoveredAnnotationId}
              onHover={handleHover}
            />
          ))}
        </div>
      </div>
    </PdfViewerProvider>
  );
}\`
      }
    }
  }
}`,...(y=(b=h.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Ve=["AnnotationExplorer"];export{h as AnnotationExplorer,Ve as __namedExportsOrder,Oe as default};
