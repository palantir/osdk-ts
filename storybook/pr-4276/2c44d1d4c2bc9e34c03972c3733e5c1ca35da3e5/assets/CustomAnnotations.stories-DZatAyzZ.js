import{j as n}from"./iframe-D1LXFBxc.js";import{B as e}from"./BasePdfViewer-Cx9xFV6z.js";import"./preload-helper-BMGLbfqy.js";import"./index-1OI0nGkQ.js";import"./BasePdfViewer.module.css-CT5zd1E2.js";import"./PdfViewerAnnotationLayer-BWYxxa_r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DucLrrp1.js";import"./PdfViewerOutlineSidebar-DL_4sJ0y.js";import"./PdfViewerSidebarHeader-B0awVJCF.js";import"./useBaseUiId-ps7HY4-v.js";import"./useControlled-BkSZr9vP.js";import"./CompositeRoot-987Pw8HT.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./composite-DuREibPe.js";import"./svgIconContainer-bswbKgoA.js";import"./PdfViewerSearchBar-lwzKAd6C.js";import"./chevron-up-B0BFRWG2.js";import"./chevron-down-BcP7YmhL.js";import"./cross-fpuOrCid.js";import"./PdfViewerSidebar-CBQnAHk7.js";import"./index-BilF2CpV.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./PdfViewerToolbar-Do6w6iDk.js";import"./Button-DQBtx8tI.js";import"./chevron-right-ypcfqbWS.js";import"./Input-Dcr7sH0u.js";import"./search-DbOA3UnO.js";import"./spin-CUE-u5-u.js";import"./error-CxJnkhM-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/2c44d1d4c2bc9e34c03972c3733e5c1ca35da3e5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
