import{j as n}from"./iframe-CzZ1CUeI.js";import{B as e}from"./BasePdfViewer-C2ajhLEE.js";import"./preload-helper-CKiwuCze.js";import"./index-CgrT0C-o.js";import"./BasePdfViewer.module.css-DWvqhQDw.js";import"./PdfViewerAnnotationLayer-Bjzvulgb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ9A3J2s.js";import"./PdfViewerOutlineSidebar-ByD3RH8J.js";import"./PdfViewerSidebarHeader-CWeHzN91.js";import"./useBaseUiId-BDfaFxEX.js";import"./useControlled-DsQHF60n.js";import"./CompositeRoot-Byc-6gMS.js";import"./CompositeItem-CIKEUP56.js";import"./ToolbarRootContext-CutVy21d.js";import"./composite-BtIW984D.js";import"./svgIconContainer-tM4UWMZ6.js";import"./PdfViewerSearchBar-DfiAEA9W.js";import"./chevron-up-C_-rE1Kh.js";import"./chevron-down-C3ryHGnx.js";import"./cross-D3n1K_EZ.js";import"./PdfViewerSidebar-CLvaIzt-.js";import"./index-C1_2t6dA.js";import"./index-BbscB5rP.js";import"./index-D9Klgxm6.js";import"./PdfViewerToolbar-CW4kUtRm.js";import"./Button-Dq-U227i.js";import"./chevron-right-WNVLLuQD.js";import"./Input-D_HiSYHG.js";import"./search-CsQMUjFR.js";import"./spin-CW2UQ-HH.js";import"./error-BfspTM5I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4236/1c5e40aa4fcb95707655525c7ab5594d8b80384e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
