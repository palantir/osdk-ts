import{j as n}from"./iframe-DDCC62mw.js";import{B as e}from"./BasePdfViewer-B2S6oBD0.js";import"./preload-helper-TbI6pun2.js";import"./index-z6zT66iy.js";import"./BasePdfViewer.module.css-D5U1gmzD.js";import"./PdfViewerAnnotationLayer-DstBWtB9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BT1Sp9IS.js";import"./PdfViewerOutlineSidebar-BZbVPPOj.js";import"./PdfViewerSidebarHeader-8PdRon1u.js";import"./useBaseUiId-Cx54uMSy.js";import"./useControlled-CHZ6ZiHg.js";import"./CompositeRoot-kIU4WUa6.js";import"./CompositeItem-EdV_vQTm.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./composite-oUxuVDiC.js";import"./svgIconContainer-8NI9Pceg.js";import"./PdfViewerSearchBar-DyWXmv1l.js";import"./chevron-up-ekw48iP7.js";import"./chevron-down-CKdPMFgU.js";import"./cross-CFNkWks7.js";import"./PdfViewerSidebar-MrPlJorM.js";import"./index-DNvyrcf-.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./PdfViewerToolbar-BDyhmE_7.js";import"./Button-DreRcsv2.js";import"./chevron-right-D_ybSs2m.js";import"./Input-L9q-qGHh.js";import"./search-BJP-HOO5.js";import"./spin-BwVqUDtC.js";import"./error-B0SCddV6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4207/8f87b39af12411e63b1f53633ec77591f717a030/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
