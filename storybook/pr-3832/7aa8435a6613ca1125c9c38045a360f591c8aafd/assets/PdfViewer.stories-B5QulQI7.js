import{j as r,M as s}from"./iframe-BxC0rnVf.js";import{P as p}from"./pdf-viewer-Cwg5urLV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5gNMPPM.js";import"./preload-helper-CsqKNXT4.js";import"./PdfRenderer-CaBj4JFB.js";import"./index-CB930e5x.js";import"./PdfViewer-W3aAS8iN.js";import"./PdfViewer.module.css-eQkjajqW.js";import"./PdfViewerAnnotationLayer-DqiWGzf3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNDHukws.js";import"./PdfViewerOutlineSidebar-DsbMo5H4.js";import"./PdfViewerSidebarHeader-Ds5tkcdx.js";import"./useBaseUiId-BRpjjaal.js";import"./useControlled-DC01SbDU.js";import"./CompositeRoot-BinkbxFg.js";import"./CompositeItem-DAic8xZX.js";import"./ToolbarRootContext-CX0irP5X.js";import"./composite-sAiFlK1Y.js";import"./svgIconContainer-BuuNAr0U.js";import"./PdfViewerSearchBar-BKHuSOkC.js";import"./chevron-up-DYEDl8Gc.js";import"./chevron-down-BU_rocIF.js";import"./cross-BpFLUEKb.js";import"./PdfViewerSidebar-Z65eak_f.js";import"./index-UDAhzYMP.js";import"./index-Bdkgurn2.js";import"./index-FGHPo6lI.js";import"./PdfViewerToolbar-Bl5qHC15.js";import"./Button-BNu5fBU0.js";import"./chevron-right-CNG6UsEL.js";import"./Input-BynHcsMQ.js";import"./search-BeNbtvpq.js";import"./spin-D_L50VjX.js";import"./error-CKn6N_jF.js";import"./withOsdkMetrics-CS2XIluR.js";import"./makeExternalStore-DurDWx8y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
