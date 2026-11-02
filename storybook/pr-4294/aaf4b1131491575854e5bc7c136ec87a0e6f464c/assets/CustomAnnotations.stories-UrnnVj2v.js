import{j as n}from"./iframe-bA068ynB.js";import{B as e}from"./BasePdfViewer-Cbzc-JKd.js";import"./preload-helper-C9VsmxhQ.js";import"./index-DBROM1hX.js";import"./BasePdfViewer.module.css-DQoTERHc.js";import"./PdfViewerAnnotationLayer-CFFgrHiC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgTYfGmU.js";import"./PdfViewerOutlineSidebar-CfLDzDEK.js";import"./PdfViewerSidebarHeader-CU6qES80.js";import"./useBaseUiId-BMBSefl3.js";import"./useControlled-Cpl65TMC.js";import"./CompositeRoot-D5PTxJI_.js";import"./CompositeItem-yupHDpkm.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./composite-HNoPL5_Y.js";import"./svgIconContainer-ImDrBsfn.js";import"./PdfViewerSearchBar-DdALxMmd.js";import"./chevron-up-DRbH-VOT.js";import"./chevron-down-C3KFPXv7.js";import"./cross-Bkk1ngCc.js";import"./PdfViewerSidebar-DemO-ViF.js";import"./index-BpjGzWVl.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./PdfViewerToolbar-BtYo3ieG.js";import"./Button-Dqcog7jP.js";import"./chevron-right-LZmlLkz3.js";import"./Input-Ca6oOOwx.js";import"./search-bHymEml7.js";import"./spin-DA1dBU9K.js";import"./error-BWkfH6c5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4294/aaf4b1131491575854e5bc7c136ec87a0e6f464c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
