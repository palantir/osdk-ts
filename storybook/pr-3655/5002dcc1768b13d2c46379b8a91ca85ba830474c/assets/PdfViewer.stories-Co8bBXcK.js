import{j as r,M as s}from"./iframe-DYDLzeoT.js";import{P as p}from"./pdf-viewer-BGwWwyUF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmTItYl2.js";import"./preload-helper-Dj-3qyaW.js";import"./PdfRenderer-B6s2YbxK.js";import"./index-BWet9nE2.js";import"./PdfViewer-B69JaTiV.js";import"./PdfViewer.module.css-IM9OKVZV.js";import"./PdfViewerAnnotationLayer-CiU3ej4e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzAzN8Nl.js";import"./PdfViewerOutlineSidebar-BfDT6KSq.js";import"./PdfViewerSidebarHeader-FyZp_Fzq.js";import"./useBaseUiId-BHZiOLsQ.js";import"./useControlled-DR3Eb6Ko.js";import"./CompositeRoot-BHrptKSd.js";import"./CompositeItem-C4gOqPUm.js";import"./ToolbarRootContext-BEqSzICa.js";import"./composite-BJJtpUWb.js";import"./svgIconContainer-CeeJvfXj.js";import"./PdfViewerSearchBar-DS0ENMFH.js";import"./chevron-up-CHkv-tca.js";import"./chevron-down-bii-cUY8.js";import"./cross-ChKzqqWp.js";import"./PdfViewerSidebar-Dh1oVkDI.js";import"./index-BfzwJlfw.js";import"./index-BRJKmzk8.js";import"./index-F5ZSuRFQ.js";import"./PdfViewerToolbar-Yf_kgkWE.js";import"./Button-CDOdl8fj.js";import"./chevron-right-B-f4fOUC.js";import"./Input-B6UHg7Cf.js";import"./search-CkUYDIfC.js";import"./spin-Bofudi0c.js";import"./error-ELb8w3lR.js";import"./withOsdkMetrics-CwaAA2NA.js";import"./makeExternalStore-3xX7J05n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
