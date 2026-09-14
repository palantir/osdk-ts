import{j as n}from"./iframe-KzcVBCRi.js";import{B as e}from"./BasePdfViewer-CpcSYDyX.js";import"./preload-helper-BHEHcaci.js";import"./index-CzXxEHHr.js";import"./BasePdfViewer.module.css-D0awq4Eh.js";import"./PdfViewerAnnotationLayer-BVN_jU9p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hBpwPZv3.js";import"./PdfViewerOutlineSidebar-BR4NwBI6.js";import"./PdfViewerSidebarHeader-9ICHTx5j.js";import"./useBaseUiId-DZF9dUKs.js";import"./useControlled-uli5q6ql.js";import"./CompositeRoot-B2eR39UF.js";import"./CompositeItem-BzuuDXx0.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./composite-5RWCdSN2.js";import"./svgIconContainer-59d154vN.js";import"./PdfViewerSearchBar-CU9vCkxJ.js";import"./chevron-up-BpQ4LsbP.js";import"./chevron-down-DpGps272.js";import"./cross-C3McpADX.js";import"./PdfViewerSidebar-nKjAGog3.js";import"./index-BCuz_Fvw.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./PdfViewerToolbar-C8C6_8-B.js";import"./Button-CBd10Xxd.js";import"./chevron-right-BT9LOvyw.js";import"./Input-Cd7kdMt2.js";import"./search-CflGQf1d.js";import"./spin-BSFQ3NrJ.js";import"./error-BAN-C5Cp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/d1835acc969ac1b2b71a3eae144cc83ff0cc1578/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
