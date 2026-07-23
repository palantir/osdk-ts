import{j as r,M as s}from"./iframe-oormcqx9.js";import{P as p}from"./pdf-viewer-CdXZbwDj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgJ2FJey.js";import"./preload-helper-CeHU7rtX.js";import"./PdfRenderer-CSxIXUkk.js";import"./index-DCXq5JH0.js";import"./PdfViewer-D6mJ7mOr.js";import"./PdfViewer.module.css-DLtOjwjH.js";import"./PdfViewerAnnotationLayer-DKo7oB5r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zg5sj7LF.js";import"./PdfViewerOutlineSidebar-CJouOVde.js";import"./PdfViewerSidebarHeader-DdSASXb7.js";import"./useBaseUiId-BcGNqjed.js";import"./useControlled-DWm7-ZpP.js";import"./CompositeRoot-70kAFpmS.js";import"./CompositeItem-D5MBeLAi.js";import"./ToolbarRootContext-Bo-Cqcm4.js";import"./composite-BHe_EgOO.js";import"./svgIconContainer-CyP2LCr5.js";import"./PdfViewerSearchBar-BkinjhL9.js";import"./chevron-up-Doxsxhf4.js";import"./chevron-down-DcIDMGw-.js";import"./cross-H7XCkeCD.js";import"./PdfViewerSidebar-hhAzLxoF.js";import"./index-D7-W961b.js";import"./index-COGZ48XL.js";import"./index-DogEXY-D.js";import"./PdfViewerToolbar-BD9Ip4uS.js";import"./Button-DU1T6ytp.js";import"./chevron-right-xL6wDGgh.js";import"./Input-DMGdYTGk.js";import"./search-CZYIhkOA.js";import"./spin-B8CjoZEB.js";import"./error-BAesG39E.js";import"./withOsdkMetrics-SBAUy0ec.js";import"./makeExternalStore-DyXOF0Nw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
