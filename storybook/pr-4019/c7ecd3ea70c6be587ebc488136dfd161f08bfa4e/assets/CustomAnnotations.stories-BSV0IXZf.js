import{j as n}from"./iframe-1Dw8hxFb.js";import{B as e}from"./BasePdfViewer-B44iBfKb.js";import"./preload-helper-CV62D7uV.js";import"./index-BA__U3Gv.js";import"./BasePdfViewer.module.css-DJe1C-pP.js";import"./PdfViewerAnnotationLayer-hbhe-V5A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEv9qqZ2.js";import"./PdfViewerOutlineSidebar-DQFIEel6.js";import"./PdfViewerSidebarHeader-Clpy3u5l.js";import"./useBaseUiId-D9Uc1gUI.js";import"./useControlled-BPQdQUzw.js";import"./CompositeRoot-Td0rk9fp.js";import"./CompositeItem-wJjKayF5.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./composite-DMMpwO4Y.js";import"./svgIconContainer-D7jaIK1U.js";import"./PdfViewerSearchBar-Cd-97TFa.js";import"./chevron-up-TnAUDv3K.js";import"./chevron-down-CctmHm9l.js";import"./cross-D8760vWj.js";import"./PdfViewerSidebar-jzYGply_.js";import"./index-C6j9YUgP.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./PdfViewerToolbar-D10U-t-G.js";import"./Button-Dz_i3O8s.js";import"./chevron-right-3aiC4Bh2.js";import"./Input-DAIYzExG.js";import"./search-D_WMSsbB.js";import"./spin-C3lvdvM-.js";import"./error-CQRvTwte.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/c7ecd3ea70c6be587ebc488136dfd161f08bfa4e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
