import{j as n}from"./iframe-ixnzYDJA.js";import{B as e}from"./BasePdfViewer-Bp7e9uk7.js";import"./preload-helper-DTj6niTD.js";import"./index-CeyubrU3.js";import"./BasePdfViewer.module.css-Cz8MYcPv.js";import"./PdfViewerAnnotationLayer-Bl1aHtga.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwWNZppk.js";import"./PdfViewerOutlineSidebar-Ca92hFwf.js";import"./PdfViewerSidebarHeader-Brvyzoo1.js";import"./useBaseUiId-DzzMqJTn.js";import"./useControlled-h88iCaOy.js";import"./CompositeRoot-wRlMjC6K.js";import"./CompositeItem-DpqiGqIY.js";import"./ToolbarRootContext-CnuOChH-.js";import"./composite-CG-xrg6X.js";import"./svgIconContainer-CiY4wot1.js";import"./PdfViewerSearchBar-Cakn_uo6.js";import"./chevron-up-ZQaSaw5s.js";import"./chevron-down-BsEexgTp.js";import"./cross-diJiZoAA.js";import"./PdfViewerSidebar-BD6eUUAd.js";import"./index-DmvJAinh.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./PdfViewerToolbar-DCqrD60K.js";import"./Button-CvHMYUNQ.js";import"./chevron-right-DfQIckyj.js";import"./Input-DVH5-_db.js";import"./search-BrEKKbX6.js";import"./spin-C2_fnFhB.js";import"./error-BPUNwXPy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/8dd1a4b245ab4fad84b623797e9e55c0ff4ca4bf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
