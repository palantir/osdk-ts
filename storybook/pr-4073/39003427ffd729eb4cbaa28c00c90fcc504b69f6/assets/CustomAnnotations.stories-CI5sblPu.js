import{j as n}from"./iframe-CNVlK6B5.js";import{B as e}from"./BasePdfViewer-C27dRsp9.js";import"./preload-helper-D6U9hvSn.js";import"./index-BIcFjsCk.js";import"./BasePdfViewer.module.css-DHruiNe-.js";import"./PdfViewerAnnotationLayer-CkiKjN4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DT7Ksyoo.js";import"./PdfViewerOutlineSidebar-D_yOsdYk.js";import"./PdfViewerSidebarHeader-DdTn3oBw.js";import"./useBaseUiId-oIpQHClg.js";import"./useControlled-CIn-ajlC.js";import"./CompositeRoot-CWbC-1lW.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./composite-9AJkVSIl.js";import"./svgIconContainer-CkEgUKYH.js";import"./PdfViewerSearchBar-BI8-SC6n.js";import"./chevron-up-BZUKeeD1.js";import"./chevron-down-D3H5NEc0.js";import"./cross-Cd5yBkhc.js";import"./PdfViewerSidebar-e73kpo-U.js";import"./index-_ZOs9p_u.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./PdfViewerToolbar-C0zjhhSB.js";import"./Button-BTD6ABzp.js";import"./chevron-right-C0sZ9H1C.js";import"./Input-BcMyy9hm.js";import"./search-CqRM5I4x.js";import"./spin-h6VKveWy.js";import"./error-Cf_L3Bxv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4073/39003427ffd729eb4cbaa28c00c90fcc504b69f6/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
