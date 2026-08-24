import{j as r,M as s}from"./iframe-DCaGj3l0.js";import{P as p}from"./pdf-viewer-OFKqd7Gd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9Ri_A6-.js";import"./preload-helper-gC7fLLdU.js";import"./PdfViewer-BLJ9fHRK.js";import"./index-DHJOctOT.js";import"./BasePdfViewer-CiGRO3BV.js";import"./BasePdfViewer.module.css-D8lwesKQ.js";import"./PdfViewerAnnotationLayer-nyy7V_o0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9jrgiBv.js";import"./PdfViewerOutlineSidebar-DA_1cweZ.js";import"./PdfViewerSidebarHeader-Iqz9o4sn.js";import"./useBaseUiId-DGrKf2Eo.js";import"./useControlled-CmhVbQER.js";import"./CompositeRoot-DO52rdeS.js";import"./CompositeItem-BD31eM2W.js";import"./ToolbarRootContext-DYMdUcY2.js";import"./composite-BmlfmHXv.js";import"./svgIconContainer-BdchtLLj.js";import"./PdfViewerSearchBar-C72vfJAI.js";import"./chevron-up-BaspNr_5.js";import"./chevron-down-DD_PJCyI.js";import"./cross-BpMnC369.js";import"./PdfViewerSidebar-CYt_7pGL.js";import"./index-C1b2qvva.js";import"./index-lxz2Q88D.js";import"./index-CqOnqOgj.js";import"./PdfViewerToolbar-8a_xuNzj.js";import"./Button-BwAz3h5J.js";import"./chevron-right-0KMZp5-Y.js";import"./Input-ndPiwRRZ.js";import"./search-Bhwoz9oz.js";import"./spin-Cltfu5_D.js";import"./error-BT5-tKwD.js";import"./withOsdkMetrics-IcI5BvBR.js";import"./makeExternalStore-DJQIf4q1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
