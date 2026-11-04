import{j as n}from"./iframe-Dhbpz2gi.js";import{B as e}from"./BasePdfViewer-BSW1mATC.js";import"./preload-helper-pmClhyIA.js";import"./index-DSV0RL80.js";import"./BasePdfViewer.module.css-Do5UEvzl.js";import"./PdfViewerAnnotationLayer-eAk7FRIK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtMKjIBR.js";import"./PdfViewerOutlineSidebar-Dp4yj9lc.js";import"./PdfViewerSidebarHeader-DKvdUcpJ.js";import"./useBaseUiId-CACE2Sja.js";import"./useControlled-VMxlV8-z.js";import"./CompositeRoot-B8-0DYhw.js";import"./CompositeItem-lexcaFgm.js";import"./ToolbarRootContext-Bg810oqs.js";import"./composite-DOBXXfvc.js";import"./svgIconContainer-D2dXNiPy.js";import"./PdfViewerSearchBar-BxduJ_YS.js";import"./chevron-up-x9brra2q.js";import"./chevron-down-CiaZa2yM.js";import"./cross-CFyO1iLs.js";import"./PdfViewerSidebar-DKJQo5_T.js";import"./index-DXREmQu7.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./PdfViewerToolbar-6YPHAE9j.js";import"./Button-BBeJRgfu.js";import"./chevron-right-B3OBkkd8.js";import"./Input-BnzP7kbL.js";import"./search-u8YFrvlf.js";import"./spin-SSSjErG-.js";import"./error-BXnEUtGZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-2570/42f541fd803e247e787779eb5e4ada7f456c4d50/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
