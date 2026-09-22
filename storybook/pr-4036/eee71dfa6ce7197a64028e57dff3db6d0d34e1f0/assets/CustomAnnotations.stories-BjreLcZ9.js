import{j as n}from"./iframe-DALIkhit.js";import{B as e}from"./BasePdfViewer-De-k1PpK.js";import"./preload-helper-DctxGWdw.js";import"./index-CRXXRxj8.js";import"./BasePdfViewer.module.css-CyY-Yelg.js";import"./PdfViewerAnnotationLayer-CnWWO3vM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yBHUEtJG.js";import"./PdfViewerOutlineSidebar-DAvVonvU.js";import"./PdfViewerSidebarHeader-CtaumDFt.js";import"./useBaseUiId-DYLAsVU1.js";import"./useControlled-D3lOoo5c.js";import"./CompositeRoot-CM2_8tSx.js";import"./CompositeItem-jTsd3S2E.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./composite-DNV43Yqw.js";import"./svgIconContainer-spB4tjSy.js";import"./PdfViewerSearchBar-CAqBxb7s.js";import"./chevron-up-syz8rgro.js";import"./chevron-down-CAkJr31e.js";import"./cross-Lsk0KBg0.js";import"./PdfViewerSidebar-YB_SekNp.js";import"./index-C_CgxuxZ.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./PdfViewerToolbar-BaHEDV_G.js";import"./Button-BsqgxFa7.js";import"./chevron-right-DXFgg_Nl.js";import"./Input-lOkk4Did.js";import"./search-DGhvTCsG.js";import"./spin-BTNwocfy.js";import"./error-D7k6AgT2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/eee71dfa6ce7197a64028e57dff3db6d0d34e1f0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
