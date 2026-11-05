import{j as n}from"./iframe-BPE8geBj.js";import{B as e}from"./BasePdfViewer-oKaoV2Th.js";import"./preload-helper-fxHDaWWz.js";import"./index-BSCIcc2m.js";import"./BasePdfViewer.module.css-XPxFJ_o4.js";import"./PdfViewerAnnotationLayer-BMDBvbpv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzKsfrXd.js";import"./PdfViewerOutlineSidebar-hwC1a5dd.js";import"./PdfViewerSidebarHeader-X0eN1OKM.js";import"./useBaseUiId-S4ycFjYQ.js";import"./useControlled-C86FBi_K.js";import"./CompositeRoot-DkePixyg.js";import"./CompositeItem-DoL9OBNh.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./composite-CvIKG9hN.js";import"./svgIconContainer-Ch3CgPVe.js";import"./PdfViewerSearchBar-9AsB9ndO.js";import"./chevron-up-DpZv0J-z.js";import"./chevron-down-CqglXqG-.js";import"./cross-BmJ5axqh.js";import"./PdfViewerSidebar-DupVlFR2.js";import"./index-Da6xMdfJ.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./PdfViewerToolbar-D4ymNTJv.js";import"./Button-DB75dhIR.js";import"./chevron-right-BGu9yViC.js";import"./Input-RElBojM0.js";import"./search-D5bB9k-q.js";import"./spin-38S3LygU.js";import"./error-BXvIUBOQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4329/4280a2fbad6ecce585a9d5374582dcfc074fc388/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
