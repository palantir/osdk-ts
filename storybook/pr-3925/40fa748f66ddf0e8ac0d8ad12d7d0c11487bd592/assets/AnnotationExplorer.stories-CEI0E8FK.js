import{r as a,R as S,j as t}from"./iframe-uWQw-aoo.js";import{u as C,a as T,B as V}from"./BasePdfViewer-P7Pc-wA7.js";import{E as I}from"./constants-DsXMS3N3.js";import{b as M,a as k}from"./BasePdfViewer.module.css-BtFeEswD.js";import{P as O}from"./PdfViewerToolbar-C3Yktp9h.js";import{P as H}from"./PdfViewerSearchBar-B8z5cHMJ.js";import{P as N}from"./PdfViewerAnnotationLayer-IC071ogX.js";import"./preload-helper-DVjylv8h.js";import"./index-00plDTMi.js";import"./PdfViewerOutlineSidebar-DBPopbyc.js";import"./PdfViewerSidebarHeader-BwxbK-AS.js";import"./useBaseUiId-Ck6WuZAw.js";import"./useControlled-DUIvla77.js";import"./CompositeRoot-9YQeHemU.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./composite-DHcKfgn9.js";import"./svgIconContainer-DmbccLJt.js";import"./PdfViewerSidebar-CEJK55Rj.js";import"./index-DTQn9lDq.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./usePdfDocument-C1YeoLqr.js";import"./spin-DixUlP-t.js";import"./error-GxXvf_3k.js";import"./Button-BmUOiVqe.js";import"./chevron-right-BAwVY0T8.js";import"./Input--UpB7VqG.js";import"./search-BdK0N4i0.js";import"./chevron-up-CbGYwo0a.js";import"./chevron-down-CbHcQ9sT.js";import"./cross-BoNTQ4Rv.js";const w=a.createContext(null);function R({value:e,children:n}){return S.createElement(w.Provider,{value:e},n)}function P(){const e=a.useContext(w);if(e==null)throw new Error("usePdfViewerContext must be used within a PdfViewerProvider");return e}function E(e){const n=C({src:e.src,initialPage:e.initialPage,initialScale:e.initialScale,initialAutoSize:e.initialAutoSize,initialSidebarOpen:e.initialSidebarOpen,sidebarMode:e.sidebarMode,onDownload:e.onDownload}),{highlightModeActive:o,toggleHighlightMode:r}=T({pdfViewerRef:n.pdfViewerRef,document:n.document,enabled:e.enableHighlight??e.highlightEnabled??!1,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),{hasFormFields:l,submitFormData:d}=M({pdfViewerRef:n.pdfViewerRef,eventBusRef:n.eventBusRef,document:n.document,formData:e.formData,onFormSubmit:e.onFormSubmit,onFormChange:e.onFormChange}),i=e.annotations??I,c=k(i),u=e.enableHighlight??e.highlightEnabled??!1,g=e.enableDownload??!1,p=e.onFormSubmit!=null&&l,{onAnnotationClick:f,outlineIcons:m}=e;return a.useMemo(()=>({...n,highlightEnabled:u,highlightModeActive:o,toggleHighlightMode:r,hasFormFields:l,submitFormData:d,annotations:i,annotationsByPage:c,onAnnotationClick:f,enableDownload:g,enableFormSave:p,outlineIcons:m}),[n,u,o,r,l,d,i,c,f,g,p,m])}const z="/osdk-ts/storybook/pr-3925/40fa748f66ddf0e8ac0d8ad12d7d0c11487bd592/compressed.tracemonkey-pldi-09.pdf",A=[],j={width:"100%",height:"100%",border:"2px solid rgba(41, 101, 204, 0.7)",borderRadius:"2px",backgroundColor:"rgba(41, 101, 204, 0.12)",boxSizing:"border-box"};function L(e){return t.jsx("div",{style:j})}function s(e){return t.jsx(L,{...e})}const v=[{id:"a1",type:"custom",page:1,rect:{x:108,y:700,width:380,height:14},label:"Trace-based compilation",render:s},{id:"a2",type:"custom",page:1,rect:{x:88,y:614,width:440,height:12},label:"Abstract section",render:s},{id:"a3",type:"custom",page:2,rect:{x:86,y:710,width:220,height:12},label:"Introduction paragraph",render:s},{id:"a4",type:"custom",page:3,rect:{x:86,y:680,width:220,height:12},label:"Trace tree concept",render:s},{id:"a5",type:"custom",page:5,rect:{x:86,y:600,width:220,height:12},label:"Type specialization",render:s},{id:"a6",type:"custom",page:8,rect:{x:86,y:650,width:220,height:12},label:"Benchmarks overview",render:s},{id:"a7",type:"custom",page:10,rect:{x:86,y:700,width:220,height:12},label:"Related work",render:s},{id:"a8",type:"custom",page:14,rect:{x:86,y:700,width:220,height:12},label:"Conclusions",render:s}],D={display:"flex",height:"100%"},B={flex:1,minWidth:0,display:"flex",flexDirection:"column",height:"100%"},F={flex:1,overflow:"hidden",display:"flex",position:"relative"},_={flex:1,position:"relative",overflow:"hidden"},Y={overflow:"auto",position:"absolute",top:0,left:0,right:0,bottom:0},q={width:"280px",borderLeft:"1px solid var(--osdk-surface-border-color, #e0e0e0)",overflowY:"auto",fontFamily:"var(--osdk-typography-family-default)",fontSize:"var(--osdk-typography-size-body-small, 13px)"},Q={padding:"12px 16px",fontWeight:600,fontSize:"var(--osdk-typography-size-body-medium, 14px)",borderBottom:"1px solid var(--osdk-surface-border-color, #e0e0e0)"},Z={padding:"10px 16px",cursor:"pointer",borderBottom:"1px solid var(--osdk-surface-border-color, #e0e0e0)",transition:"background-color 150ms ease"},W={fontWeight:500},U={marginTop:"4px",color:"var(--osdk-typography-color-muted, #666)",fontSize:"var(--osdk-typography-size-body-small, 12px)"};function $(){const e=P(),n=a.useCallback(()=>e.download(),[e]);return t.jsxs("div",{style:B,children:[t.jsx(O,{currentPage:e.currentPage,numPages:e.numPages,scale:e.scale,autoSize:e.autoSize,sidebarOpen:e.sidebarOpen,onPageChange:e.scrollToPage,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut,onAutoSizeToggle:e.toggleAutoSize,onSearchOpen:e.search.openSearch,onSidebarToggle:e.toggleSidebar,onDownload:n,enableDownload:e.enableDownload,onRotateLeft:e.rotateLeft,onRotateRight:e.rotateRight,enableHighlight:e.highlightEnabled,highlightModeActive:e.highlightModeActive,onHighlightToggle:e.toggleHighlightMode,enableFormSave:e.enableFormSave,onFormSave:e.submitFormData}),e.search.isSearchOpen&&t.jsx(H,{query:e.search.query,totalMatches:e.search.totalMatches,currentMatchIndex:e.search.currentMatchIndex,onQueryChange:e.search.setQuery,onNext:e.search.nextMatch,onPrev:e.search.prevMatch,onClose:e.search.closeSearch}),t.jsx("div",{style:F,children:t.jsx("div",{style:_,children:t.jsxs("div",{ref:e.containerRef,style:Y,children:[t.jsx("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(o=>{const r=e.annotationsByPage[o.pageNumber]??A;return r.length===0?null:t.jsx("div",{style:{position:"absolute",left:o.left,top:o.top,width:o.width,height:o.height,pointerEvents:"none",zIndex:1},children:t.jsx(N,{annotations:r,pageHeight:o.pageHeight,scale:o.scale,transform:o.transform,onAnnotationClick:e.onAnnotationClick})},o.pageNumber)})]})})})]})}function G({annotation:e,isHovered:n,onHover:o}){const{scrollToPage:r}=P(),l=a.useCallback(()=>{r(e.page)},[r,e.page]),d=a.useCallback(()=>o(e.id),[o,e.id]),i=a.useCallback(()=>o(null),[o]),c=a.useMemo(()=>({...Z,backgroundColor:n?"var(--osdk-palette-blue-100, #e3f2fd)":"transparent"}),[n]);return t.jsxs("div",{style:c,onClick:l,onMouseEnter:d,onMouseLeave:i,role:"button",tabIndex:0,children:[t.jsx("div",{style:W,children:e.label??e.id}),t.jsxs("div",{style:U,children:["Page ",e.page]})]})}function J({annotations:e,onAnnotationHover:n,hoveredAnnotationId:o}){return t.jsxs("div",{style:q,children:[t.jsx("div",{style:Q,children:"Annotations"}),e.map(r=>t.jsx(G,{annotation:r,isHovered:r.id===o,onHover:n},r.id))]})}function K({src:e}){const[n,o]=a.useState(null),r=a.useMemo(()=>n==null?A:v.filter(i=>i.id===n),[n]),l=E({src:e,annotations:r}),d=a.useCallback(i=>{o(i)},[]);return t.jsx(R,{value:l,children:t.jsxs("div",{style:D,children:[t.jsx($,{}),t.jsx(J,{annotations:v,onAnnotationHover:d,hoveredAnnotationId:n})]})})}const Oe={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:V,tags:["beta"]},h={render:()=>t.jsx("div",{style:{height:"600px"},children:t.jsx(K,{src:z})}),parameters:{docs:{source:{code:`import { useCallback, useMemo, useState } from "react";
import {
  PdfViewerAnnotationLayer,
  PdfViewerProvider,
  PdfViewerSearchBar,
  PdfViewerToolbar,
  usePdfViewerContext,
  usePdfViewerInstance,
} from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfCustomAnnotation } from "@osdk/react-components/experimental/pdf-viewer";

// Stable reference — a fresh [] each render would re-trigger the viewer
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

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => scrollToPage(annotation.page)}
      onMouseEnter={() => onHover(annotation.id)}
      onMouseLeave={() => onHover(null)}
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
        code: \`import { useCallback, useMemo, useState } from "react";
import {
  PdfViewerAnnotationLayer,
  PdfViewerProvider,
  PdfViewerSearchBar,
  PdfViewerToolbar,
  usePdfViewerContext,
  usePdfViewerInstance,
} from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfCustomAnnotation } from "@osdk/react-components/experimental/pdf-viewer";

// Stable reference — a fresh [] each render would re-trigger the viewer
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

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => scrollToPage(annotation.page)}
      onMouseEnter={() => onHover(annotation.id)}
      onMouseLeave={() => onHover(null)}
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
}`,...(y=(b=h.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const He=["AnnotationExplorer"];export{h as AnnotationExplorer,He as __namedExportsOrder,Oe as default};
