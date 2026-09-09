import{j as n}from"./iframe-YaS06hyW.js";import{B as e}from"./BasePdfViewer-D5GZeZpM.js";import"./preload-helper-CHXu7ylM.js";import"./index-B-cO8d-Q.js";import"./BasePdfViewer.module.css-ejxCFDLO.js";import"./PdfViewerAnnotationLayer-dYNsCkeR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjLkQrKh.js";import"./PdfViewerOutlineSidebar-bl_woK6Y.js";import"./PdfViewerSidebarHeader-1po0jWuC.js";import"./useBaseUiId-CjvUa8cY.js";import"./useControlled-Bm5M3oKq.js";import"./CompositeRoot-DvtlH5aJ.js";import"./CompositeItem-ClG1U4EV.js";import"./ToolbarRootContext-D-k46Imi.js";import"./composite-BkFZzr2I.js";import"./svgIconContainer-DLa4OU0n.js";import"./PdfViewerSearchBar-CI16L5G7.js";import"./chevron-up-kJrzu3TE.js";import"./chevron-down-CxKB5IcW.js";import"./cross-AobcYagI.js";import"./PdfViewerSidebar-BLXPlYfw.js";import"./index-D6PE6Ffo.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./PdfViewerToolbar-iJsYaDOZ.js";import"./Button-BEru0DpJ.js";import"./chevron-right-CE5dFICK.js";import"./Input-Dql0qM-e.js";import"./search-DaYARQRb.js";import"./spin-YRjSVpXC.js";import"./error-irND_epE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4009/1f8d5cdc1b7de0899ba53636dbf414b883ae2597/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
