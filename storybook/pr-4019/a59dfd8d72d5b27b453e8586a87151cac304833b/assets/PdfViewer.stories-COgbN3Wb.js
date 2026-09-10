import{j as r,M as s}from"./iframe-BP2VUYWC.js";import{P as p}from"./pdf-viewer-14x1N31I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BR43Cc-W.js";import"./preload-helper-BbwyyhLF.js";import"./PdfViewer-DCbXroQA.js";import"./index-B3KCIuhY.js";import"./BasePdfViewer-BazlO8p_.js";import"./BasePdfViewer.module.css-CHWzV0go.js";import"./PdfViewerAnnotationLayer-CUN7qkz3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTNr7_7w.js";import"./PdfViewerOutlineSidebar-CFg_PHzt.js";import"./PdfViewerSidebarHeader-Yercg_bJ.js";import"./useBaseUiId-CYXU-WIp.js";import"./useControlled-CeB8N0Pd.js";import"./CompositeRoot-Bx2Zrm7f.js";import"./CompositeItem-CSy4C5-C.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./composite-DVGPAs_G.js";import"./svgIconContainer-CMKl73gN.js";import"./PdfViewerSearchBar-B5oB8dYJ.js";import"./chevron-up-BgJMdGcr.js";import"./chevron-down-DV6qQJYt.js";import"./cross-DeTD0CpU.js";import"./PdfViewerSidebar-egiUK2UN.js";import"./index-WcLTZ_9n.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./PdfViewerToolbar-_HwnQ7pH.js";import"./Button-pnZeIBQ4.js";import"./chevron-right-CjMRqxum.js";import"./Input-DpmPrvJG.js";import"./search-DINZsCiw.js";import"./spin-5hkN-1vV.js";import"./error-CPXKUEGb.js";import"./withOsdkMetrics-CDKAmrIU.js";import"./makeExternalStore-BtzD4IhM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
