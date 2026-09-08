import{j as n}from"./iframe-mgqf8OZi.js";import{B as e}from"./BasePdfViewer-CVmy4ye-.js";import"./preload-helper-C6SQT8UT.js";import"./index-GTfiZUIM.js";import"./BasePdfViewer.module.css-JToXGpJe.js";import"./PdfViewerAnnotationLayer-BEiv6eak.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_F1CyfJ.js";import"./PdfViewerOutlineSidebar-BNCQ1k8D.js";import"./PdfViewerSidebarHeader-vgtL3Tjc.js";import"./useBaseUiId-rjNzDssU.js";import"./useControlled-DnmOZ-e1.js";import"./CompositeRoot-Dg5ciHRi.js";import"./CompositeItem-B5XhVs9k.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./composite-BsXSlU2S.js";import"./svgIconContainer-BQB9e_Z9.js";import"./PdfViewerSearchBar-kbkSde0u.js";import"./chevron-up-B8jvJgmU.js";import"./chevron-down-CvP42XCE.js";import"./cross-B_dcVm8T.js";import"./PdfViewerSidebar-D5E4SAOj.js";import"./index-CWWnTRcQ.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./PdfViewerToolbar-Bc8OHHAG.js";import"./Button-CvdgIKvp.js";import"./chevron-right-LH9iRfMi.js";import"./Input-Cm9G-_vw.js";import"./search-fgyV2px-.js";import"./spin-h-uXSmlS.js";import"./error-5K0NVF3b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3854/afa18227a72cda94eb4aabade9d147682f279680/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
