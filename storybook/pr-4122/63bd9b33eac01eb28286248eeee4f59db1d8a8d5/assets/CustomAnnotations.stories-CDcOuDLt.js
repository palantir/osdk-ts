import{j as n}from"./iframe-CUZRoNNv.js";import{B as e}from"./BasePdfViewer-rGqYI2dR.js";import"./preload-helper-CrAnAkNd.js";import"./index-DyJF2RgL.js";import"./BasePdfViewer.module.css-Fu-8o0Nk.js";import"./PdfViewerAnnotationLayer-DlEn8HF-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5FVWnIx.js";import"./PdfViewerOutlineSidebar-Cz6-c-J3.js";import"./PdfViewerSidebarHeader-0uIY3q_O.js";import"./useBaseUiId-BjYXt-Y8.js";import"./useControlled-SgSnNk_-.js";import"./CompositeRoot-CGLJgUzA.js";import"./CompositeItem-BcoPKNgT.js";import"./ToolbarRootContext-8UU7wnms.js";import"./composite-LGakJTZC.js";import"./svgIconContainer-grpv7WkD.js";import"./PdfViewerSearchBar-ZlYp6hW0.js";import"./chevron-up-B7QWA6ZV.js";import"./chevron-down-GCVDTzTT.js";import"./cross-CSe3kma4.js";import"./PdfViewerSidebar-Dpf1CuHX.js";import"./index-DGzm9vGw.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./PdfViewerToolbar-BaoXhlBD.js";import"./Button-C0zF-FQF.js";import"./chevron-right-BNV0nUq1.js";import"./Input-Db-zmbeF.js";import"./search-XLYepbmJ.js";import"./spin-CMVnFUvs.js";import"./error-DiHuZvPy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4122/63bd9b33eac01eb28286248eeee4f59db1d8a8d5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
