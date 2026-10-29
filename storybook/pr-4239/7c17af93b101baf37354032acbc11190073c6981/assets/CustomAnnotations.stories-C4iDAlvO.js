import{j as n}from"./iframe-BXMaRU6d.js";import{B as e}from"./BasePdfViewer-CJUdxpvc.js";import"./preload-helper-m1fl9yzx.js";import"./index-D34UCeFi.js";import"./BasePdfViewer.module.css-CI7H9CmE.js";import"./PdfViewerAnnotationLayer-DXYnU5lP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bcw1suXE.js";import"./PdfViewerOutlineSidebar-DBn6Lkaa.js";import"./PdfViewerSidebarHeader-BteUNdLd.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./useControlled-CqKbYNY-.js";import"./CompositeRoot-Di_RzIT3.js";import"./CompositeItem-CxCbcCcw.js";import"./ToolbarRootContext-01ULS3om.js";import"./composite-CTlCsHkl.js";import"./svgIconContainer-M8lsqLmU.js";import"./PdfViewerSearchBar-Ci4cKTxr.js";import"./chevron-up-BO5CjPvB.js";import"./chevron-down-ByBb-_AI.js";import"./cross-MZH7NFlC.js";import"./PdfViewerSidebar-Dd8g1gMp.js";import"./index-CLYhKnEi.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./PdfViewerToolbar-B7KXKCrn.js";import"./Button-DtbuXO0-.js";import"./chevron-right-DbXATbxC.js";import"./Input-B62f65LS.js";import"./search-B6DdGciv.js";import"./spin-CUXjNQsF.js";import"./error-DqaLhFsi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4239/7c17af93b101baf37354032acbc11190073c6981/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
