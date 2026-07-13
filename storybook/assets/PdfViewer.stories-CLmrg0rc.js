import{j as r,M as s}from"./iframe-Des8t2Az.js";import{P as p}from"./pdf-viewer-BiU9FWNv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9FI4ujn.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BXo4l9Dr.js";import"./index-Co5a_AvC.js";import"./PdfViewer-BcW-JVDj.js";import"./PdfViewer.module.css-z8aNf6oJ.js";import"./PdfViewerAnnotationLayer-Ow89nnyO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-lW0DJ1se.js";import"./PdfViewerOutlineSidebar-2JOkZ6ZA.js";import"./PdfViewerSidebarHeader-CbvjYEJs.js";import"./useBaseUiId-C3JxYlFf.js";import"./useControlled-CxZXwXUz.js";import"./CompositeRoot-hvX_2Mnv.js";import"./CompositeItem-Cy4qI2E9.js";import"./ToolbarRootContext-BilpdKjJ.js";import"./composite-GBweYFly.js";import"./svgIconContainer-hWb0Fl79.js";import"./PdfViewerSearchBar-DKB1BIf-.js";import"./chevron-up-DTSfhe7A.js";import"./chevron-down-COAlsjLu.js";import"./cross-Coxr0_XI.js";import"./PdfViewerSidebar-cC6NfTqS.js";import"./index-CLt9yKFu.js";import"./index-DrDLy9L6.js";import"./index-BtFpKESY.js";import"./PdfViewerToolbar-CZwhDx8Z.js";import"./Button-D3yQD9f5.js";import"./chevron-right-ByDtqixz.js";import"./Input-DJPIkCHj.js";import"./search-BMIEbG7h.js";import"./spin-CMOg4m5k.js";import"./error-11J-5iGh.js";import"./withOsdkMetrics-QuH2RrzW.js";import"./makeExternalStore-um0-4jo2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
