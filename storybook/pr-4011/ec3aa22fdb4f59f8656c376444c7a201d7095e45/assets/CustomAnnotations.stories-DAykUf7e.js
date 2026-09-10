import{j as n}from"./iframe-DdU1btI5.js";import{B as e}from"./BasePdfViewer-LT8Pznj4.js";import"./preload-helper-CJIdcoC_.js";import"./index-Bjdg2prT.js";import"./BasePdfViewer.module.css-BQsdRzqA.js";import"./PdfViewerAnnotationLayer-Cf-jk5wz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEr9xFeR.js";import"./PdfViewerOutlineSidebar-FPmVg8Lz.js";import"./PdfViewerSidebarHeader-BHHOLZsc.js";import"./useBaseUiId-BlXBlP0f.js";import"./useControlled-BwHcuxO_.js";import"./CompositeRoot-Dlc1rXDZ.js";import"./CompositeItem-Dd62h_6-.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./composite-DKrCSbZ1.js";import"./svgIconContainer-CevOR6cS.js";import"./PdfViewerSearchBar-CCIj4TVu.js";import"./chevron-up-8kUjq9o7.js";import"./chevron-down-BBg4HQxv.js";import"./cross-DezMrsVo.js";import"./PdfViewerSidebar-B_uBSxQi.js";import"./index-I-zAiBXy.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./PdfViewerToolbar--tx7r9X7.js";import"./Button-DOSUJ3M5.js";import"./chevron-right-CCecF7hG.js";import"./Input-DBMe1jVC.js";import"./search-DFTmIh4d.js";import"./spin-BHT3hTEr.js";import"./error-NWRP_Q29.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/ec3aa22fdb4f59f8656c376444c7a201d7095e45/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
