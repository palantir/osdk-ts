import{j as n}from"./iframe-BwJP8SAz.js";import{B as e}from"./BasePdfViewer-2iOnOT-A.js";import"./preload-helper-C__v2HQV.js";import"./index-B1xmU5ac.js";import"./BasePdfViewer.module.css-DugcaOB3.js";import"./PdfViewerAnnotationLayer-D2pvF38g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8FogAEY.js";import"./PdfViewerOutlineSidebar-6rj0J8gV.js";import"./PdfViewerSidebarHeader-0jwopvMD.js";import"./useBaseUiId-C34DKKh6.js";import"./useControlled-ZLl_p6JX.js";import"./CompositeRoot-DBOoRp9o.js";import"./CompositeItem-BsMyIE9-.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./composite-a2q1QDdA.js";import"./svgIconContainer-DMpafcgu.js";import"./PdfViewerSearchBar-Bx8vU0nW.js";import"./chevron-up-Dd5v-fVE.js";import"./chevron-down-DSU29Yd7.js";import"./cross-DiTZc7QM.js";import"./PdfViewerSidebar-glyoYpTA.js";import"./index-Qo_wZuR8.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./PdfViewerToolbar-KLHJwb51.js";import"./Button-C4Q4ezlI.js";import"./chevron-right-Hj7iLv_b.js";import"./Input-Biv1kBRN.js";import"./search-CesJa2BL.js";import"./spin-B-L7OX9b.js";import"./error-DWAlVBAx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/04087c23686a9c5052a10db1eb6dcbf6f5e8497b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
