import{j as n}from"./iframe-CKrQ01Tw.js";import{B as e}from"./BasePdfViewer-Dyneuzpa.js";import"./preload-helper-ChvNP4Pl.js";import"./index-BIdRQM2S.js";import"./BasePdfViewer.module.css-Cko2grxe.js";import"./PdfViewerAnnotationLayer-D2tmTmWp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJzLjUjS.js";import"./PdfViewerOutlineSidebar-BR42zNcG.js";import"./PdfViewerSidebarHeader-B_DWbWco.js";import"./useBaseUiId-B2KTelTM.js";import"./useControlled-BlU5vlUe.js";import"./CompositeRoot-BKrbmhMz.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./composite-CgNTf1JJ.js";import"./svgIconContainer-BWrjI0N2.js";import"./PdfViewerSearchBar-Cqcj9DcW.js";import"./chevron-up-PQcG-fSL.js";import"./chevron-down-BWfpQhPj.js";import"./cross-Bj1Rnssl.js";import"./PdfViewerSidebar-CaMS1bDS.js";import"./index-BgdQNo10.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./PdfViewerToolbar-BYUWtLhH.js";import"./Button-Cq8nZ_ey.js";import"./chevron-right-DPofkp_z.js";import"./Input-Cq0Ol3YB.js";import"./search-G6EfpRFi.js";import"./spin-DnkroIEf.js";import"./error-BeLhzW1q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/40f40aeaba78bdd7112ebeef2ba8f29c48614691/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
