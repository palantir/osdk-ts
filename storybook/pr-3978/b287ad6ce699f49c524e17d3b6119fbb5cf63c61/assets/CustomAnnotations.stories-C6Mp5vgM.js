import{j as n}from"./iframe-Ce1nas-A.js";import{B as e}from"./BasePdfViewer-BkpCIN2U.js";import"./preload-helper-DcZRzKsw.js";import"./index-DxkusUp0.js";import"./BasePdfViewer.module.css-By9OlJZz.js";import"./PdfViewerAnnotationLayer-Bii2mYOO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gIOyHZoo.js";import"./PdfViewerOutlineSidebar-Cv7Z8TQa.js";import"./PdfViewerSidebarHeader-BXOLMll0.js";import"./useBaseUiId-DjCVaNnh.js";import"./useControlled-HDcnxMGz.js";import"./CompositeRoot-DdpiDHhx.js";import"./CompositeItem-Ci-C3Qdf.js";import"./ToolbarRootContext-DETOyxOk.js";import"./composite-DmeYZGjI.js";import"./svgIconContainer-C2K9KBka.js";import"./PdfViewerSearchBar-u-Jsc2QA.js";import"./chevron-up-BJ3NCprr.js";import"./chevron-down-BWpGIUiv.js";import"./cross-BfauTbl-.js";import"./PdfViewerSidebar-awgcLuYe.js";import"./index-Cz6vrhk3.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./PdfViewerToolbar-YT-nEzNS.js";import"./Button-Dug6UdNF.js";import"./chevron-right-Behw_hqn.js";import"./Input-BkD6sM5Z.js";import"./search-CeMBlWp8.js";import"./spin-DOQkIage.js";import"./error-C2DVXeGz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3978/b287ad6ce699f49c524e17d3b6119fbb5cf63c61/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
