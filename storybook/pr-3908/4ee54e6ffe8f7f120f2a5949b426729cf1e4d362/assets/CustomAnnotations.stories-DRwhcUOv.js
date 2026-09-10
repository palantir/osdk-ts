import{j as n}from"./iframe-BM7Q-dMJ.js";import{B as e}from"./BasePdfViewer-CegCZ-_P.js";import"./preload-helper-BWjcCog8.js";import"./index-BybuAuux.js";import"./BasePdfViewer.module.css-nSyCxvl4.js";import"./PdfViewerAnnotationLayer-OgzAtuN2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-l7MApX9z.js";import"./PdfViewerOutlineSidebar-DZpPYfdr.js";import"./PdfViewerSidebarHeader-BZKRkk-F.js";import"./useBaseUiId-CwUHdvwv.js";import"./useControlled-BQdmVz8X.js";import"./CompositeRoot-z0py_T76.js";import"./CompositeItem-DlNVx4-v.js";import"./ToolbarRootContext-DKuunDH_.js";import"./composite-Lv4sNU4L.js";import"./svgIconContainer-Bht8VzUd.js";import"./PdfViewerSearchBar-BGkAjdNY.js";import"./chevron-up-bqyYW2L1.js";import"./chevron-down-DxXNwnvG.js";import"./cross-1-TnP1TT.js";import"./PdfViewerSidebar-BVGtWoik.js";import"./index-D84UhGg8.js";import"./index-SuuHTDz0.js";import"./index-B_WLJNqi.js";import"./PdfViewerToolbar-Ck6gV8Cm.js";import"./Button-DPCu3lFK.js";import"./chevron-right-BkL7OeXE.js";import"./Input-DfRNBHCu.js";import"./search-Ddrt0Hct.js";import"./spin-Cv2geSOs.js";import"./error-o6sSvsT-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3908/4ee54e6ffe8f7f120f2a5949b426729cf1e4d362/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
