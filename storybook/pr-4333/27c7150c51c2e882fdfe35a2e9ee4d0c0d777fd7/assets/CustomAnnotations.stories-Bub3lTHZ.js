import{j as n}from"./iframe-DfZQ9M6i.js";import{B as e}from"./BasePdfViewer-DwiDIhzl.js";import"./preload-helper-E2urLAES.js";import"./index-B0k0bEti.js";import"./BasePdfViewer.module.css-_T97HPmn.js";import"./PdfViewerAnnotationLayer-C19JOBTD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4NmbKFS.js";import"./PdfViewerOutlineSidebar-Ba1ENhpH.js";import"./PdfViewerSidebarHeader-DGWstvW6.js";import"./useBaseUiId-Chm1jq62.js";import"./useControlled-CftsWT9B.js";import"./CompositeRoot-HXK9hrzX.js";import"./CompositeItem-Hd7LuzxE.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./composite-C2Pj8gPK.js";import"./svgIconContainer-eylyBn5f.js";import"./PdfViewerSearchBar-CKjLMv4N.js";import"./chevron-up-BLsB_a-Y.js";import"./chevron-down-tsxmIRBn.js";import"./cross-BioDKNkS.js";import"./PdfViewerSidebar-DQmHtHJe.js";import"./index-kN-BpEU5.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./PdfViewerToolbar-C5z42ngJ.js";import"./Button-B2R87CaB.js";import"./chevron-right-Cw9KUj_x.js";import"./Input-CYJZLefv.js";import"./search-g1T2rl--.js";import"./spin-CEqzH1rF.js";import"./error-BTFoLABS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4333/27c7150c51c2e882fdfe35a2e9ee4d0c0d777fd7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
