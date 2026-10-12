import{j as n}from"./iframe-DgffzXcd.js";import{B as e}from"./BasePdfViewer-q7L74BtV.js";import"./preload-helper-cnms5IGS.js";import"./index-BBLuu-Hq.js";import"./BasePdfViewer.module.css-DwQCBHJ7.js";import"./PdfViewerAnnotationLayer-zWSIdBYZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeIjSh3k.js";import"./PdfViewerOutlineSidebar-CviT4aGe.js";import"./PdfViewerSidebarHeader-Ch7peDuZ.js";import"./useBaseUiId-D8q2NPVv.js";import"./useControlled-BV_EXpzJ.js";import"./CompositeRoot-CEvtoOHV.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./composite-CF6w6iAh.js";import"./svgIconContainer-Blhk3Pl5.js";import"./PdfViewerSearchBar-DzrXcZJh.js";import"./chevron-up-CRoF2lK9.js";import"./chevron-down-B-BBWbod.js";import"./cross-BSsj-b40.js";import"./PdfViewerSidebar-1KgQVJs9.js";import"./index-AOiW_Fy4.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./PdfViewerToolbar-2sDj-KBW.js";import"./Button-UP0puh42.js";import"./chevron-right-BQyyoCBJ.js";import"./Input-c6SLv_Xy.js";import"./search-CJlxOI-X.js";import"./spin-CDHi3mjn.js";import"./error-C62WbJ6c.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/147dfbea11f7aebb9f92eb08eb9825e5a2cabf26/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
