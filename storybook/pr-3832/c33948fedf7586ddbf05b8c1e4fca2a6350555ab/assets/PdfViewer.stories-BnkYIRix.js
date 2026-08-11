import{j as r,M as s}from"./iframe-DQJhsGVr.js";import{P as p}from"./pdf-viewer-DekbQJFz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-W2DJt1zQ.js";import"./preload-helper-BYPnNrHf.js";import"./PdfRenderer-Cb3L1vqZ.js";import"./index-1_EsOKwE.js";import"./PdfViewer-CYQQpuAq.js";import"./PdfViewer.module.css-CeAOKGtV.js";import"./PdfViewerAnnotationLayer-DxVeXqCY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDpqUHVv.js";import"./PdfViewerOutlineSidebar-B9iBmd7O.js";import"./PdfViewerSidebarHeader-11ZTorxQ.js";import"./useBaseUiId-EuR0djcZ.js";import"./useControlled-CavIZvRH.js";import"./CompositeRoot-B2tvY0fU.js";import"./CompositeItem-BHa5W7al.js";import"./ToolbarRootContext-DPrCQgAj.js";import"./composite-DvpYcJ4q.js";import"./svgIconContainer-HMv0MEad.js";import"./PdfViewerSearchBar-B18T-4L6.js";import"./chevron-up-CHdn6sP4.js";import"./chevron-down-Mkun0WwY.js";import"./cross-RNHwHsza.js";import"./PdfViewerSidebar-D8-ezzOw.js";import"./index-mkeG7rQI.js";import"./index-CbwbPLuB.js";import"./index-d5GOwTqG.js";import"./PdfViewerToolbar-DHXhpx0g.js";import"./Button-DoThKF3_.js";import"./chevron-right-BqXFJRLz.js";import"./Input-DLTHdalW.js";import"./search-DJW6FQCH.js";import"./spin-D8S_RCin.js";import"./error-OGxYpfA4.js";import"./withOsdkMetrics-Do5HPYid.js";import"./makeExternalStore-pYvmGBhQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
