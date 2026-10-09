import{j as n}from"./iframe-YBx9KFiE.js";import{B as e}from"./BasePdfViewer-BEb8F41H.js";import"./preload-helper-L6jHOpxv.js";import"./index-CgtaO5QM.js";import"./BasePdfViewer.module.css-CFHurV3D.js";import"./PdfViewerAnnotationLayer-ml_zZ_gM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nMCKy3Nr.js";import"./PdfViewerOutlineSidebar-BlIU-Pdo.js";import"./PdfViewerSidebarHeader-pT7uyP3v.js";import"./useBaseUiId-DlhJsTYI.js";import"./useControlled-CH_x4H3X.js";import"./CompositeRoot-CdaQtaZQ.js";import"./CompositeItem-C9bwnjwV.js";import"./ToolbarRootContext-C-_578ut.js";import"./composite-BJEKXzZu.js";import"./svgIconContainer-D6iAjNhU.js";import"./PdfViewerSearchBar-BI0iKxYN.js";import"./chevron-up-ChxRNWPt.js";import"./chevron-down-DfhavGPs.js";import"./cross-C3v-dhLA.js";import"./PdfViewerSidebar-B0Km9CjX.js";import"./index-N3lE_PbF.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./PdfViewerToolbar-Cl0jpE1R.js";import"./Button-CIORHkhd.js";import"./chevron-right-IlLKlaxr.js";import"./Input-YDKKpO0z.js";import"./search-CuFB4Okz.js";import"./spin-Bk8CNTZy.js";import"./error-CI50fd9w.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4178/58d505eb350d561b865fed9a9ec08747dc0b085b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
