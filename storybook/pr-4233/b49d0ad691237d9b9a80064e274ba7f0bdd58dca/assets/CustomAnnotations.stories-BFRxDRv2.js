import{j as n}from"./iframe-Yi2ClGEq.js";import{B as e}from"./BasePdfViewer-izKfCC1I.js";import"./preload-helper-Bw9P2RvH.js";import"./index-kCKGZ11f.js";import"./BasePdfViewer.module.css-BjG5wlfV.js";import"./PdfViewerAnnotationLayer-DY77ItAy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3cDKITRD.js";import"./PdfViewerOutlineSidebar-BlpwzDza.js";import"./PdfViewerSidebarHeader-CdzGDHS2.js";import"./useBaseUiId-BJvR5yfv.js";import"./useControlled-688Acsw-.js";import"./CompositeRoot-DF6Us1D8.js";import"./CompositeItem-DwrEPXux.js";import"./ToolbarRootContext-erRSrQJW.js";import"./composite-7FUpzlUO.js";import"./svgIconContainer-DLtA5jnz.js";import"./PdfViewerSearchBar-Ds5Nei_7.js";import"./chevron-up-Baq_eNft.js";import"./chevron-down-A6HBtaN4.js";import"./cross-DHxNtUiL.js";import"./PdfViewerSidebar-DURysJaj.js";import"./index-Ccuhm711.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./PdfViewerToolbar-DoBHax9X.js";import"./Button-BhYwxPlJ.js";import"./chevron-right-BDMwOzmn.js";import"./Input-B_VCwPTa.js";import"./search-D88J6TuI.js";import"./spin-BC-aXoiD.js";import"./error-CvXgqfjV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4233/b49d0ad691237d9b9a80064e274ba7f0bdd58dca/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
