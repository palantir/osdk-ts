import{j as n}from"./iframe-nukQkA9I.js";import{B as e}from"./BasePdfViewer-Bev-_bJz.js";import"./preload-helper-SAYG1EIe.js";import"./index-D-GlitYq.js";import"./BasePdfViewer.module.css-Ds5eGEpb.js";import"./PdfViewerAnnotationLayer-BxZmsYj9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7FecUwJJ.js";import"./PdfViewerOutlineSidebar-Bl4Wj5Tt.js";import"./PdfViewerSidebarHeader-CvcgQVlg.js";import"./useBaseUiId-DDz0NCTS.js";import"./useControlled-CCaNPmgV.js";import"./CompositeRoot-DZYY8Zax.js";import"./CompositeItem-FfzK-6cQ.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./composite-C4ibImfR.js";import"./svgIconContainer-BRLU7q7E.js";import"./PdfViewerSearchBar-BCraiYQM.js";import"./chevron-up-7_oGliCJ.js";import"./chevron-down-A-s4tptO.js";import"./cross-AUKdXd6S.js";import"./PdfViewerSidebar-Ds_QKEEJ.js";import"./index-DHZErGjk.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./PdfViewerToolbar-H-hyXOcN.js";import"./Button-DH7_1I4V.js";import"./chevron-right-_67KYaJa.js";import"./Input-BpkcbvD3.js";import"./search-DU9QOFIa.js";import"./spin-2cX19QXq.js";import"./error-Btym7AAe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4282/53e0d763fb9b01b554bf958954fa1357c95b2c39/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
