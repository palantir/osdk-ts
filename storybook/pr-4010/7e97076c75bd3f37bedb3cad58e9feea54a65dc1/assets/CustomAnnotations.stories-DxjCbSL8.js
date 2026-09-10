import{j as n}from"./iframe-DieBzf9y.js";import{B as e}from"./BasePdfViewer-Iz-9LG9n.js";import"./preload-helper-nfOhyenq.js";import"./index-CueLTBHP.js";import"./BasePdfViewer.module.css-84SeadFa.js";import"./PdfViewerAnnotationLayer-C4qyG7bg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cej82hnQ.js";import"./PdfViewerOutlineSidebar-AKNm_4IQ.js";import"./PdfViewerSidebarHeader-NP9aOrX2.js";import"./useBaseUiId-Bxe_lFSq.js";import"./useControlled-D4dAPTSV.js";import"./CompositeRoot-j7SquUIt.js";import"./CompositeItem-Bk12yzpP.js";import"./ToolbarRootContext-SW8tVZST.js";import"./composite-BvpzVpYi.js";import"./svgIconContainer-C4rlmgrB.js";import"./PdfViewerSearchBar-DXP2Kssy.js";import"./chevron-up-t1l06puB.js";import"./chevron-down-MpT91KZy.js";import"./cross-t6O5j7uz.js";import"./PdfViewerSidebar-AwQNkgZo.js";import"./index-BvOU7Oie.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./PdfViewerToolbar-BC1LhlQv.js";import"./Button-C1caW-IN.js";import"./chevron-right-BymnhBEj.js";import"./Input-Ckaolz8l.js";import"./search-LxBHfv5l.js";import"./spin-BE-UiMl4.js";import"./error-BL3TgcOC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4010/7e97076c75bd3f37bedb3cad58e9feea54a65dc1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
