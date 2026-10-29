import{j as n}from"./iframe-BJfHzdWS.js";import{B as e}from"./BasePdfViewer-KdeffuTo.js";import"./preload-helper-Be4hJibr.js";import"./index-BSLvxwbk.js";import"./BasePdfViewer.module.css-C75J53X4.js";import"./PdfViewerAnnotationLayer-D1v_ZGgu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqUTEMNT.js";import"./PdfViewerOutlineSidebar-9lGX-Q6c.js";import"./PdfViewerSidebarHeader-Dq1fV2SU.js";import"./useBaseUiId-Xn3MqoRt.js";import"./useControlled-wFQSRpl4.js";import"./CompositeRoot-CglYgtPC.js";import"./CompositeItem-BKpyjtDM.js";import"./ToolbarRootContext-C9Lowhby.js";import"./composite-CrQSucJ3.js";import"./svgIconContainer-BhMqWeRt.js";import"./PdfViewerSearchBar-CJJxKOmT.js";import"./chevron-up-CR-MXKfI.js";import"./chevron-down-DcDfg2mn.js";import"./cross-VeKqoNmu.js";import"./PdfViewerSidebar-DHop_Jw8.js";import"./index-N4ZXm_T-.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./PdfViewerToolbar-CagV8zoW.js";import"./Button-CRGaJZKK.js";import"./chevron-right-DAIckWCd.js";import"./Input-D-4Pcd1I.js";import"./search-BzsA8JvQ.js";import"./spin-C9j1pkXp.js";import"./error-D3R8RgSf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/84d4dd59f13e84cf65053e92df893dd9410ff431/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
