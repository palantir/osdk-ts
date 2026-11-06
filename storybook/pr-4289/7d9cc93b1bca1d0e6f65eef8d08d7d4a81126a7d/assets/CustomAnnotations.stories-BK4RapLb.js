import{j as n}from"./iframe-CYWKmKsr.js";import{B as e}from"./BasePdfViewer-BTxN3Ili.js";import"./preload-helper-CZxqSgr4.js";import"./index-BjhNRAAe.js";import"./BasePdfViewer.module.css-GwSMGg4q.js";import"./PdfViewerAnnotationLayer-CK9OSji4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEPNswki.js";import"./PdfViewerOutlineSidebar-DL_f7s4o.js";import"./PdfViewerSidebarHeader-C5Y13vci.js";import"./useBaseUiId-CUYHUXgP.js";import"./useControlled-Cmfvaful.js";import"./CompositeRoot-QE5K7UBS.js";import"./CompositeItem-DES--d3v.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./composite-BLYmi_ZT.js";import"./svgIconContainer-uvoYHEep.js";import"./PdfViewerSearchBar-CSIB3P7G.js";import"./chevron-up-D0YBQb2g.js";import"./chevron-down-CS2_34kJ.js";import"./cross-DwHZ8wsx.js";import"./PdfViewerSidebar-hUAuntH2.js";import"./index-BAMyMGOv.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./PdfViewerToolbar-CjtuhjC7.js";import"./Button-Dsxz3sQ9.js";import"./chevron-right-Br-MAih9.js";import"./Input-DhtTH-yg.js";import"./search-DEjEejFg.js";import"./spin-DqOZ_nu5.js";import"./error-D0LuxI0-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4289/7d9cc93b1bca1d0e6f65eef8d08d7d4a81126a7d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
