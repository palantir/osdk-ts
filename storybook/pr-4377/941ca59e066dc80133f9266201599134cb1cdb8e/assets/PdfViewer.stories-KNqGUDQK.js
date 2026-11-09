import{j as r,M as s}from"./iframe-C3GSLy5o.js";import{P as p}from"./pdf-viewer-CY4W7gN9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWbR5NmG.js";import"./preload-helper-D1pMQ95h.js";import"./PdfViewer-CXRDhuu3.js";import"./index-BqbG7XLm.js";import"./BasePdfViewer-DHxmmHRH.js";import"./BasePdfViewer.module.css-B2rYcfH2.js";import"./PdfViewerAnnotationLayer-B_58Oil1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_g0wdie.js";import"./PdfViewerOutlineSidebar-DLKI9lAL.js";import"./PdfViewerSidebarHeader-D3K-F2PG.js";import"./useBaseUiId-BAyO3Mf6.js";import"./useControlled-Byp-7XUM.js";import"./CompositeRoot-CSTc0dWf.js";import"./CompositeItem-BdOQd8fF.js";import"./ToolbarRootContext-DHSDX_M4.js";import"./composite-BVI_0hxc.js";import"./svgIconContainer-F6eoLrGz.js";import"./PdfViewerSearchBar-CigJitRf.js";import"./chevron-up-CjxQMRRY.js";import"./chevron-down-CZCskiqb.js";import"./cross-dj-R22cu.js";import"./PdfViewerSidebar-DcOE60Ue.js";import"./index-bCW6YcNg.js";import"./index-BwMTOFIg.js";import"./index-DXO-Swuq.js";import"./PdfViewerToolbar-SM_B8OI1.js";import"./Button-BYai770H.js";import"./chevron-right-Bv3Xvjq0.js";import"./Input-C6r5AvcX.js";import"./search-DVQaImB8.js";import"./spin-M5qTWxy3.js";import"./error-73rgwKrP.js";import"./withOsdkMetrics-BcmXRm6y.js";import"./makeExternalStore-BkjVxrjL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
