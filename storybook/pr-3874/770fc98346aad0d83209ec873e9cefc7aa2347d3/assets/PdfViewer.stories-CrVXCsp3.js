import{j as r,M as s}from"./iframe-UkB5vgVG.js";import{P as p}from"./pdf-viewer-pbf58_qM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-csINHVLp.js";import"./preload-helper-CVf8llwS.js";import"./PdfViewer-xKOmnpO1.js";import"./index-qp1j7wJC.js";import"./BasePdfViewer-CZMUAAk5.js";import"./BasePdfViewer.module.css-Byvxw-p-.js";import"./PdfViewerAnnotationLayer-CEWpn7y6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwmlVxpD.js";import"./PdfViewerOutlineSidebar-COZDYaH1.js";import"./PdfViewerSidebarHeader-BhFeH8uk.js";import"./useBaseUiId-Dn0EoDTA.js";import"./useControlled-Clgvd4Wq.js";import"./CompositeRoot-3DPHECvR.js";import"./CompositeItem-UlYd9APp.js";import"./ToolbarRootContext-m-lFbgU6.js";import"./composite-BGwzEdrp.js";import"./svgIconContainer-DayxyL3r.js";import"./PdfViewerSearchBar-B5MQHyvm.js";import"./chevron-up-CDwI2-r3.js";import"./chevron-down-CKWbFOWn.js";import"./cross-BdVzNhJI.js";import"./PdfViewerSidebar-BnvXmyNj.js";import"./index-CLbtj4dS.js";import"./index-Bi4xYXRw.js";import"./index-e4diuhxy.js";import"./PdfViewerToolbar-DFFLWd5u.js";import"./Button-C-9R3Dge.js";import"./chevron-right-BLjE5mrs.js";import"./Input-CB29R5Tw.js";import"./search-CsKKjabz.js";import"./spin-SaE0pbcn.js";import"./error-uoew32RU.js";import"./withOsdkMetrics-dDcxjbTR.js";import"./makeExternalStore-B3cxenBa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
