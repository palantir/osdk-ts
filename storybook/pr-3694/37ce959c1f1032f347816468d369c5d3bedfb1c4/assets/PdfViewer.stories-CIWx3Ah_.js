import{j as r,M as s}from"./iframe-DkpSGPRQ.js";import{P as p}from"./pdf-viewer-cusf5Xje.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoxqaE6W.js";import"./preload-helper-DLqqYOdZ.js";import"./PdfRenderer-DQZjPR5y.js";import"./index-BhGh3GfC.js";import"./PdfViewer-B7ebAKd7.js";import"./PdfViewer.module.css-bFMWSKvj.js";import"./PdfViewerAnnotationLayer-BSJrfXY4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IitK6wcJ.js";import"./PdfViewerOutlineSidebar-CVSK1yHx.js";import"./PdfViewerSidebarHeader-Crf1Iio9.js";import"./useBaseUiId-B9DlhAqD.js";import"./useControlled-X7oTCMhV.js";import"./CompositeRoot-LE-yxT1L.js";import"./CompositeItem-BQ27p43g.js";import"./ToolbarRootContext-Du1GI0xL.js";import"./composite-DqvvbcbC.js";import"./svgIconContainer-BSSOnUka.js";import"./PdfViewerSearchBar-BIWqTTsO.js";import"./chevron-up-D4PJlLoA.js";import"./chevron-down-CMLdZkkD.js";import"./cross-NGS1eS1H.js";import"./PdfViewerSidebar-B_DhAr_O.js";import"./index-Bh7ePidM.js";import"./index-By0beLJF.js";import"./index-xc_Rbfjf.js";import"./PdfViewerToolbar-D-IpTG5W.js";import"./Button-BNpYQl5H.js";import"./chevron-right-CNTwc32i.js";import"./Input-DwjA5vF5.js";import"./search-C2LoXU-4.js";import"./spin-BJ3qPU9G.js";import"./error-DLwoWCBM.js";import"./withOsdkMetrics-slF_OeSc.js";import"./makeExternalStore-DHc_mvHu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
