import{j as r,M as s}from"./iframe-kN2CD5Qg.js";import{P as p}from"./pdf-viewer-CtsinhZV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTlBGfi5.js";import"./preload-helper-BaVDpoU1.js";import"./PdfRenderer-DC0O03E-.js";import"./index-oBrtIaAG.js";import"./PdfViewer-Dw_VZ2YI.js";import"./PdfViewer.module.css-X_WDuLbj.js";import"./PdfViewerAnnotationLayer-DVwtHr1s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvdEdfdb.js";import"./PdfViewerOutlineSidebar-B6i8bTkm.js";import"./PdfViewerSidebarHeader-rztB5AgC.js";import"./useBaseUiId-B6udq1We.js";import"./useControlled-DL9FSZoX.js";import"./CompositeRoot-BWyPmx7R.js";import"./CompositeItem-BABLNs1C.js";import"./ToolbarRootContext-CUQoRhDS.js";import"./composite-D4cCxMuf.js";import"./svgIconContainer-CxmpMNRa.js";import"./PdfViewerSearchBar-C11dqXWB.js";import"./chevron-up-DrSPBGeQ.js";import"./chevron-down-DBrI4cKi.js";import"./cross-DRmp8dJy.js";import"./PdfViewerSidebar-sKi1m1V_.js";import"./index-BM0_vPDD.js";import"./index-DS_WxjgQ.js";import"./index-FbxXCkto.js";import"./PdfViewerToolbar-Bg0fVE7w.js";import"./Button-D3jhIO28.js";import"./chevron-right-BP1UeT8v.js";import"./Input-ubkYoiwR.js";import"./search-BgBwo5jC.js";import"./spin-ApzHDnHD.js";import"./error-BIXJ4F89.js";import"./withOsdkMetrics-C3QIy4-V.js";import"./makeExternalStore-CqsXbcPR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
