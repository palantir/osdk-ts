import{j as n}from"./iframe-DbTMqywr.js";import{B as e}from"./BasePdfViewer-DByyz56r.js";import"./preload-helper-CplCMsOq.js";import"./index-DrdNpw1u.js";import"./BasePdfViewer.module.css-DonH-4Z4.js";import"./PdfViewerAnnotationLayer-BHa_U0zJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tsweMhcC.js";import"./PdfViewerOutlineSidebar-ClrCSk3z.js";import"./PdfViewerSidebarHeader-HVCSLePL.js";import"./useBaseUiId-kPb3HUGs.js";import"./useControlled-DbEVD0lO.js";import"./CompositeRoot-B-w8dHhW.js";import"./CompositeItem-hF1oPeOK.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./composite-EoFmCbIV.js";import"./svgIconContainer-1kdK0av6.js";import"./PdfViewerSearchBar-BCsEzTk8.js";import"./chevron-up-B7W8AI3f.js";import"./chevron-down-Bh3KWvIp.js";import"./cross-D4suWXRq.js";import"./PdfViewerSidebar-DdEpaFEk.js";import"./index-BioKUlDZ.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./PdfViewerToolbar-B5GOiMP_.js";import"./Button-B7bNBfe0.js";import"./chevron-right-BD0wG6k8.js";import"./Input-BLknSyNo.js";import"./search-CUcR83Lr.js";import"./spin-ClhlEgd8.js";import"./error-Du92aaZX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4031/f34c7e377c28c3f1c5a447e3ee26243aeead0dd6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
