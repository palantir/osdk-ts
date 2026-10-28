import{j as n}from"./iframe-Cbj36Vfl.js";import{B as e}from"./BasePdfViewer-CCmJqpdC.js";import"./preload-helper-D9vtqHHo.js";import"./index-CsY1LewD.js";import"./BasePdfViewer.module.css-CGeOBMdH.js";import"./PdfViewerAnnotationLayer-DAWKPJMZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FdKOlrib.js";import"./PdfViewerOutlineSidebar-Bt_R46z8.js";import"./PdfViewerSidebarHeader-j3_6DNtn.js";import"./useBaseUiId-Dm0BFRC6.js";import"./useControlled-BLkU7nYF.js";import"./CompositeRoot-CLbuLNkg.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./composite-BNLz_aLE.js";import"./svgIconContainer-hIUzSHkO.js";import"./PdfViewerSearchBar-CnUZ1coO.js";import"./chevron-up-B3Zo3Xg2.js";import"./chevron-down-b6fjz5-P.js";import"./cross-BMM6M_v0.js";import"./PdfViewerSidebar-CuPGIOoA.js";import"./index-DGMJzfmR.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./PdfViewerToolbar-DW4xNy9I.js";import"./Button-BvKlSQww.js";import"./chevron-right-DAOvUiYr.js";import"./Input-bczR2KJT.js";import"./search-B0cFd55B.js";import"./spin-DQK2RrRd.js";import"./error-B5SQU-7B.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4280/6e876d1f1b16546bc134c20e09f1f49790e063bf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
