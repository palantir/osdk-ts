import{j as r,M as s}from"./iframe-D6LppXIC.js";import{P as p}from"./pdf-viewer-RACACGSQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmGe3Vim.js";import"./preload-helper-Xw5BUKDS.js";import"./PdfRenderer-5UrHKPm6.js";import"./index-DsZIuXhx.js";import"./PdfViewer-BAk7Fns4.js";import"./PdfViewer.module.css-BnbeIrVQ.js";import"./PdfViewerAnnotationLayer-BQSK9Lid.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-89YkB-wD.js";import"./PdfViewerOutlineSidebar-acRT57b5.js";import"./PdfViewerSidebarHeader-Cxgv0seA.js";import"./useBaseUiId-VCJRl6vY.js";import"./useControlled--zDJdgut.js";import"./CompositeRoot-B-xOR2Yq.js";import"./CompositeItem-ClT8pN5y.js";import"./ToolbarRootContext-B7s4OP0L.js";import"./composite-7hwSNArh.js";import"./svgIconContainer-MqRZ09_V.js";import"./PdfViewerSearchBar-BN3MmBhA.js";import"./chevron-up-NX6awh7q.js";import"./chevron-down-CfICpT21.js";import"./cross-BJkqWy7f.js";import"./PdfViewerSidebar-Q6vk65D0.js";import"./index-fZ0re5SP.js";import"./index-BG5fCpyp.js";import"./index-CXm4l1ly.js";import"./PdfViewerToolbar-DSAnQTFR.js";import"./Button-07HtfNIy.js";import"./chevron-right-DDIVd5u9.js";import"./Input-CDpmfVIE.js";import"./search-VSqqU_nb.js";import"./spin-D_cpgmyV.js";import"./error-CUJPO0AP.js";import"./withOsdkMetrics-7qFi5qLQ.js";import"./makeExternalStore-DDp9HQ5i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
