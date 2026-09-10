import{j as n}from"./iframe-DXJ7n1Mt.js";import{B as e}from"./BasePdfViewer-BRCtVRul.js";import"./preload-helper-J-T-Ktwt.js";import"./index-BI3hFpTv.js";import"./BasePdfViewer.module.css-BK0bj1-W.js";import"./PdfViewerAnnotationLayer-BN_q3emr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2WJ5D3J.js";import"./PdfViewerOutlineSidebar-BqtkRaA2.js";import"./PdfViewerSidebarHeader-DeNZYcNC.js";import"./useBaseUiId-CYKekcVM.js";import"./useControlled-DcXpzJX2.js";import"./CompositeRoot--ANGT57v.js";import"./CompositeItem-Btxqtw0m.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./composite-Br3qqN8V.js";import"./svgIconContainer-Cy-yvyP2.js";import"./PdfViewerSearchBar-BHuUo5H4.js";import"./chevron-up-BbxW0_MZ.js";import"./chevron-down-zhZwP9mu.js";import"./cross-DmSTTtGj.js";import"./PdfViewerSidebar-DW-D2bFp.js";import"./index-CP1UTh8c.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./PdfViewerToolbar-0zYcLcKo.js";import"./Button-B1cldSa1.js";import"./chevron-right-CC1T4BaJ.js";import"./Input-Cdu0Ne1b.js";import"./search-CS5luSCI.js";import"./spin-BfGfluxP.js";import"./error-9QZoIHyb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/583f5989cbbda9e085697d9b74498e4c81eceff2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
