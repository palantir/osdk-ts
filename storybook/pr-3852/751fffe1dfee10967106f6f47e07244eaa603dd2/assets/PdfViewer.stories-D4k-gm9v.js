import{j as r,M as s}from"./iframe-CNas8tCV.js";import{P as p}from"./pdf-viewer-CS8KuEtG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cvxcg0T6.js";import"./preload-helper-BrLgTqj6.js";import"./PdfViewer-B1xQ-pI2.js";import"./index-D7Ojgd4V.js";import"./BasePdfViewer-BwzXYhCo.js";import"./BasePdfViewer.module.css-DpSQoVa7.js";import"./PdfViewerAnnotationLayer-BeOi-9hz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqVhxc5n.js";import"./PdfViewerOutlineSidebar-DJhvgC95.js";import"./PdfViewerSidebarHeader-BB6fXjW-.js";import"./useBaseUiId-X471mJCy.js";import"./useControlled-Cjala1q6.js";import"./CompositeRoot-CcAi237s.js";import"./CompositeItem-DXu_k_QL.js";import"./ToolbarRootContext-DOnJZ6Oo.js";import"./composite-CS_tSE92.js";import"./svgIconContainer-Dzsoi_4S.js";import"./PdfViewerSearchBar-Ckoj6L6Y.js";import"./chevron-up-BnGs6whB.js";import"./chevron-down-Bdgupgh4.js";import"./cross-Cv9-zzS9.js";import"./PdfViewerSidebar-BcEiHoXR.js";import"./index-dIUVuF_Q.js";import"./index-BTiHVZ1L.js";import"./index-BtptK3eI.js";import"./PdfViewerToolbar-Dd3a7tYN.js";import"./Button-C6s7oiSJ.js";import"./chevron-right-Bh5pB7gu.js";import"./Input-CU35V2TL.js";import"./search-DUqjPedA.js";import"./spin-6VpY-VaL.js";import"./error-DC-jftfn.js";import"./withOsdkMetrics-DBguGQ7e.js";import"./makeExternalStore-Bw1hiMWb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
