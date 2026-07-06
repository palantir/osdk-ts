import{j as r,M as s}from"./iframe-BsVCqvLq.js";import{P as p}from"./pdf-viewer-W8gd5nWG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-k7wLL22I.js";import"./preload-helper-C1nWkUX6.js";import"./PdfRenderer-NnFv-NUS.js";import"./index-BjbM9Rza.js";import"./PdfViewer-f2BcxtKZ.js";import"./PdfViewer.module.css-C44F8_qW.js";import"./PdfViewerAnnotationLayer-Dl4UClmc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cau3I7S6.js";import"./PdfViewerOutlineSidebar-C7PbWnac.js";import"./PdfViewerSidebarHeader-v71GKQL-.js";import"./useBaseUiId-B9G5TU1Q.js";import"./useControlled-DWywZDs6.js";import"./CompositeRoot-BosIA3Tx.js";import"./CompositeItem-DbI3tt0U.js";import"./ToolbarRootContext-C5CZq3bt.js";import"./composite-DWTuY8D6.js";import"./svgIconContainer-Cwh5koZd.js";import"./PdfViewerSearchBar-CI9d-rPs.js";import"./chevron-up-UhCjN-kR.js";import"./chevron-down-Cdxeetkh.js";import"./cross-DqGk6Inb.js";import"./PdfViewerSidebar-Vb2IIp3n.js";import"./index-4hkLauYd.js";import"./index-B252it2I.js";import"./index-mACLY2Aq.js";import"./PdfViewerToolbar-BghufCYN.js";import"./Button-CRH3v-NA.js";import"./chevron-right-BH1m6l1i.js";import"./Input-CqC0Q6KM.js";import"./search-D7o2UnQe.js";import"./spin-CQMedGcX.js";import"./error-JcLHrbb4.js";import"./withOsdkMetrics-6M5vHXdx.js";import"./makeExternalStore-B8GBWsQY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
