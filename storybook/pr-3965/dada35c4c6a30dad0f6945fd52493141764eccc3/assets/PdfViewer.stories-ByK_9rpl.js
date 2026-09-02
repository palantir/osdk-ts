import{j as r,M as s}from"./iframe-gxyWVbj2.js";import{P as p}from"./pdf-viewer-BqT4vbWp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwTENrHW.js";import"./preload-helper-DE7utxpQ.js";import"./PdfViewer-D6A0yP6K.js";import"./index-QxbQkIyi.js";import"./BasePdfViewer-B_FvVLZd.js";import"./BasePdfViewer.module.css-Ds_vSyqz.js";import"./PdfViewerAnnotationLayer-BaI5brEP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cs1GmThu.js";import"./PdfViewerOutlineSidebar-ayAsMIEu.js";import"./PdfViewerSidebarHeader-DtA0EfN2.js";import"./useBaseUiId-DviQ__RH.js";import"./useControlled-BNWlhOxQ.js";import"./CompositeRoot-DjPGXDM5.js";import"./CompositeItem-CfmR6sON.js";import"./ToolbarRootContext-BbmcYQfJ.js";import"./composite-iqOIimru.js";import"./svgIconContainer-DKbE6d31.js";import"./PdfViewerSearchBar-BRqHjFzV.js";import"./chevron-up-QzZZvBLm.js";import"./chevron-down-D0C-5aC_.js";import"./cross-VeIfZqt8.js";import"./PdfViewerSidebar-DkFTL2kY.js";import"./index-m96J0xcz.js";import"./index-BTPrH0w0.js";import"./index-NWW1BWCJ.js";import"./PdfViewerToolbar-D-vu3t7i.js";import"./Button-B4AYvQgI.js";import"./chevron-right-B6iBokIR.js";import"./Input-DTxeHNru.js";import"./search-CyP3n12E.js";import"./spin-hi_cnGw5.js";import"./error-Dq3CHQs2.js";import"./withOsdkMetrics-DtZ9khmC.js";import"./makeExternalStore-CU05zhJ7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
