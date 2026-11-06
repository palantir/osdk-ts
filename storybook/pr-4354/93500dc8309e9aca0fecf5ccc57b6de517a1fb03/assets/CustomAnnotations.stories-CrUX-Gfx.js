import{j as n}from"./iframe-BIP88-50.js";import{B as e}from"./BasePdfViewer-D-xrYLgD.js";import"./preload-helper-CJkHOWC7.js";import"./index-CGkdPPI9.js";import"./BasePdfViewer.module.css-Ojemy3Lv.js";import"./PdfViewerAnnotationLayer-BwDP7vk7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjucehTf.js";import"./PdfViewerOutlineSidebar-C7WaoR5i.js";import"./PdfViewerSidebarHeader-CktGKDE3.js";import"./useBaseUiId-Cj-jJj6K.js";import"./useControlled-fuVP_NbG.js";import"./CompositeRoot-BsS1SVMa.js";import"./CompositeItem-CVTunDpb.js";import"./ToolbarRootContext-CRygSzuk.js";import"./composite-BpLHrmIE.js";import"./svgIconContainer-Dz6akIgn.js";import"./PdfViewerSearchBar-BPgw_Lky.js";import"./chevron-up-3UPspuaA.js";import"./chevron-down-BX7qMt__.js";import"./cross-qB-EknTM.js";import"./PdfViewerSidebar-DQX1cKyR.js";import"./index-D59kjkiP.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./PdfViewerToolbar-DRGNPNiN.js";import"./Button-CjK6G0Gi.js";import"./chevron-right-KpiOE5Xm.js";import"./Input-DYBooigU.js";import"./search-DgaGEvbD.js";import"./spin-xXGvYYsw.js";import"./error-y3-k7YV5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4354/93500dc8309e9aca0fecf5ccc57b6de517a1fb03/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
