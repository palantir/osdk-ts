import{j as n}from"./iframe-DH1LfSqj.js";import{B as e}from"./BasePdfViewer-CB439jzJ.js";import"./preload-helper-BtNGdpdU.js";import"./index-BwVz3K80.js";import"./BasePdfViewer.module.css-CScGGnRW.js";import"./PdfViewerAnnotationLayer-C1H6ETsZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOhWODYZ.js";import"./PdfViewerOutlineSidebar-8KsXxJec.js";import"./PdfViewerSidebarHeader-C-dY5XMI.js";import"./useBaseUiId-CW3AoQkf.js";import"./useControlled-DAJs0K9A.js";import"./CompositeRoot-wx-Cg1Fn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./composite-DB-jEcsY.js";import"./svgIconContainer-GysfdOnF.js";import"./PdfViewerSearchBar-BosKD4Gv.js";import"./chevron-up-sEvUKmM2.js";import"./chevron-down-BcIj0xVN.js";import"./cross-CVAZ1iFx.js";import"./PdfViewerSidebar-CL3onbAm.js";import"./index-BAF1QDd0.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./PdfViewerToolbar-CXen7ryF.js";import"./Button-CC_D7kUc.js";import"./chevron-right-DQrNUJkA.js";import"./Input-BbVzkVzZ.js";import"./search-Cf7xLzNe.js";import"./spin-BpRxlyw5.js";import"./error-CvpqdC3I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4246/7307c968e7f3a81051377c220ef667890ff0f47a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
