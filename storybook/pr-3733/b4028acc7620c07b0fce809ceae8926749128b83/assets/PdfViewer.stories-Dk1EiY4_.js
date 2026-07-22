import{j as r,M as s}from"./iframe-BTtzWZu6.js";import{P as p}from"./pdf-viewer-Bsls43q3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2yKTFBVe.js";import"./preload-helper-CW1gXID8.js";import"./PdfRenderer-Cl2VSM7-.js";import"./index-CyGMvcn3.js";import"./PdfViewer-BPUR-jhv.js";import"./PdfViewer.module.css-Ci_Ieinm.js";import"./PdfViewerAnnotationLayer-DN_sOGN1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Qp4KE0_G.js";import"./PdfViewerOutlineSidebar-BqtR5H9-.js";import"./PdfViewerSidebarHeader-DPQfaGJ_.js";import"./useBaseUiId-BnTa1Bnl.js";import"./useControlled-Cx6N0n65.js";import"./CompositeRoot-xUIGrTbd.js";import"./CompositeItem-D8Wt2hkZ.js";import"./ToolbarRootContext-CmB9X01m.js";import"./composite-C4r_A0EF.js";import"./svgIconContainer-D272he4K.js";import"./PdfViewerSearchBar-D0vmXJof.js";import"./chevron-up-DT2WARky.js";import"./chevron-down-ZTHlaDsM.js";import"./cross-CPfgu5lR.js";import"./PdfViewerSidebar-BJsAJlbV.js";import"./index-dZArKZlw.js";import"./index-mRCQXlcJ.js";import"./index-BIhwaVmS.js";import"./PdfViewerToolbar-CZle8KM3.js";import"./Button-CwkymPp-.js";import"./chevron-right-CY_9dA0D.js";import"./Input-Cw4l7pni.js";import"./search-BTZla_o7.js";import"./spin-C9wIFe34.js";import"./error-CRr4Qgos.js";import"./withOsdkMetrics-BdrzDzmf.js";import"./makeExternalStore-Df1Cn7Z5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
