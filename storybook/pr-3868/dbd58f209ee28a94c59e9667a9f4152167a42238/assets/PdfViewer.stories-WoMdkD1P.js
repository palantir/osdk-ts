import{j as r,M as s}from"./iframe-CVjWJMmF.js";import{P as p}from"./pdf-viewer-DHxpcGUH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4oX_55B.js";import"./preload-helper-DW9TanSD.js";import"./PdfViewer-BfcUULAp.js";import"./index-DkPpZQEy.js";import"./BasePdfViewer-LezRJD5F.js";import"./BasePdfViewer.module.css-DexqG_Cg.js";import"./PdfViewerAnnotationLayer-CQXKXKJ9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cd0ZBZYr.js";import"./PdfViewerOutlineSidebar-BzNSN3RZ.js";import"./PdfViewerSidebarHeader-D6CvxjYq.js";import"./useBaseUiId-OuEDX3TX.js";import"./useControlled-Cb41SkUR.js";import"./CompositeRoot-BU1zeJyU.js";import"./CompositeItem-U33_rWfO.js";import"./ToolbarRootContext-n7CVeFta.js";import"./composite-BCNmB505.js";import"./svgIconContainer-DkRHhgAa.js";import"./PdfViewerSearchBar-PlLt1oOu.js";import"./chevron-up-DCSeS-oC.js";import"./chevron-down-CJH6CLnR.js";import"./cross-Dl2vOulJ.js";import"./PdfViewerSidebar-ayVyVk0t.js";import"./index-gTNpBnbn.js";import"./index-D4WXG5sY.js";import"./index-w6zbUUyx.js";import"./PdfViewerToolbar-COYEH3I-.js";import"./Button-Dhayy-gQ.js";import"./chevron-right-Dhld411n.js";import"./Input-Bt-eNbkA.js";import"./search-Cenk5EYj.js";import"./spin-CZ48MMc8.js";import"./error-w9z2sjwy.js";import"./withOsdkMetrics-D-WikLGs.js";import"./makeExternalStore-CpmQogqA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
