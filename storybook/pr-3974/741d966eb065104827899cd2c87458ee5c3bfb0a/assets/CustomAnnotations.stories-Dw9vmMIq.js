import{j as n}from"./iframe-B_oy6e6M.js";import{B as e}from"./BasePdfViewer-B85Y4esi.js";import"./preload-helper-CWVJ8YRK.js";import"./index-DZJD6sDp.js";import"./BasePdfViewer.module.css-BYqHA1fV.js";import"./PdfViewerAnnotationLayer-DzotMZcd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dr0fZAl_.js";import"./PdfViewerOutlineSidebar-BEuzomwX.js";import"./PdfViewerSidebarHeader-BYBFN5ML.js";import"./useBaseUiId-POvatS82.js";import"./useControlled-zA33IEOZ.js";import"./CompositeRoot-CZtVj5nO.js";import"./CompositeItem-C4ZzMkp4.js";import"./ToolbarRootContext-DJgLJnil.js";import"./composite-ZAoedBeg.js";import"./svgIconContainer-C6P8MOfd.js";import"./PdfViewerSearchBar-QoKPEFkb.js";import"./chevron-up-B_wJHEMW.js";import"./chevron-down-rpYvjBzs.js";import"./cross-DSgNe7Mr.js";import"./PdfViewerSidebar-hD5ec8Qp.js";import"./index-BXsPCItr.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./PdfViewerToolbar-CIuoMxtB.js";import"./Button-CrOvgvfA.js";import"./chevron-right-sIMpwAWA.js";import"./Input-DTC7T4Cz.js";import"./search-DCED0BUt.js";import"./spin-XFDzUxCO.js";import"./error-BNXYH_2v.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3974/741d966eb065104827899cd2c87458ee5c3bfb0a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
