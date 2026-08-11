import{j as r,M as s}from"./iframe-DYVamJ0c.js";import{P as p}from"./pdf-viewer-WZSg_ItR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BD4Mx3-V.js";import"./preload-helper-BKQhuHFM.js";import"./PdfRenderer-DKxmxFim.js";import"./index-DDVzKPeS.js";import"./PdfViewer-CRg2vT2p.js";import"./PdfViewer.module.css-TXoH5SLR.js";import"./PdfViewerAnnotationLayer-BvfjDiRJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8__zEXf.js";import"./PdfViewerOutlineSidebar-OkjBKLCO.js";import"./PdfViewerSidebarHeader-B7Z5W5Wh.js";import"./useBaseUiId-Dp5szWtR.js";import"./useControlled-rbncU9dQ.js";import"./CompositeRoot-7LyrkxBg.js";import"./CompositeItem-BBaNk5MK.js";import"./ToolbarRootContext-1-HwXect.js";import"./composite-DvVYIwpT.js";import"./svgIconContainer-DDKAKQ5N.js";import"./PdfViewerSearchBar-Dpf2ojOf.js";import"./chevron-up-CvZiuQ7n.js";import"./chevron-down-CDvyxAm0.js";import"./cross-ZvvnBvAW.js";import"./PdfViewerSidebar-DiWJFTKu.js";import"./index-ClMUYth_.js";import"./index-CS_faMAq.js";import"./index-4i5nJL9N.js";import"./PdfViewerToolbar-D-cS4FZJ.js";import"./Button-B0mGoHRN.js";import"./chevron-right-CHC4OTv-.js";import"./Input-BJ9fIVV-.js";import"./search-CNj8TXQm.js";import"./spin-BzfmHrg6.js";import"./error-BsbpZONe.js";import"./withOsdkMetrics-DIqDKAks.js";import"./makeExternalStore-Ci8gWGJ6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
