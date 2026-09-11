import{j as r,M as s}from"./iframe-uvdRxhm4.js";import{P as p}from"./pdf-viewer-ufw2uy4P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-hccH5G34.js";import"./preload-helper-ByxB1amM.js";import"./PdfViewer-CmqSmp9P.js";import"./index-Co_pmQht.js";import"./BasePdfViewer-DUGITGk9.js";import"./BasePdfViewer.module.css-e16Zv2Eh.js";import"./PdfViewerAnnotationLayer-DB2KIGR8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CV6yoxE6.js";import"./PdfViewerOutlineSidebar-CIIdxZLK.js";import"./PdfViewerSidebarHeader-YBrMGGr1.js";import"./useBaseUiId-BxI9rYKQ.js";import"./useControlled-BumCnOkf.js";import"./CompositeRoot-BDL24NQf.js";import"./CompositeItem-B-Ruk_4Z.js";import"./ToolbarRootContext-BdEFWnMH.js";import"./composite-BG1x_r8M.js";import"./svgIconContainer-BrEtjUlS.js";import"./PdfViewerSearchBar-CkBxDiUx.js";import"./chevron-up-CgyNZWWy.js";import"./chevron-down-S5HS9Wt5.js";import"./cross-CVk2zvc8.js";import"./PdfViewerSidebar-CCgtoNre.js";import"./index-BZDxYY65.js";import"./index-lOYDDVZK.js";import"./index-3i2S2NsZ.js";import"./PdfViewerToolbar-CDrsS0R9.js";import"./Button-Bo9SA5iL.js";import"./chevron-right-CeSNBixA.js";import"./Input-DsPKjuvY.js";import"./search-C_3VgOnT.js";import"./spin-BwIxubSp.js";import"./error-coR5DdC1.js";import"./withOsdkMetrics-BYNBs9jS.js";import"./makeExternalStore-BamzP3ZM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
