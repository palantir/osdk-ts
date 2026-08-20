import{j as r,M as s}from"./iframe-9DMBWr0q.js";import{P as p}from"./pdf-viewer-CSBipCFt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfzqjwzO.js";import"./preload-helper-DalOHg7w.js";import"./PdfViewer-C2F7uHZl.js";import"./index-DQvdaF-W.js";import"./BasePdfViewer-DnuZ_36A.js";import"./BasePdfViewer.module.css--FvLfGy0.js";import"./PdfViewerAnnotationLayer-C7gtlCSZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-b95KJaHB.js";import"./PdfViewerOutlineSidebar-BHGu6wO8.js";import"./PdfViewerSidebarHeader-So9l4D93.js";import"./useBaseUiId-DsOnJdgo.js";import"./useControlled-DytgQJGV.js";import"./CompositeRoot-ClGxz25x.js";import"./CompositeItem-2UjtZXP3.js";import"./ToolbarRootContext-BPjGDrK2.js";import"./composite-pdHJBClF.js";import"./svgIconContainer-54MNCtA9.js";import"./PdfViewerSearchBar-BSbK-mZY.js";import"./chevron-up-CJuZZpIZ.js";import"./chevron-down-CUeEPhCI.js";import"./cross-D2pRmhty.js";import"./PdfViewerSidebar-uzpGiMQf.js";import"./index-BiO4atOF.js";import"./index-BmdeRFNN.js";import"./index-DHI41pZJ.js";import"./PdfViewerToolbar-D1YSxVSd.js";import"./Button-DUgj0L3T.js";import"./chevron-right-4Qvu1Nke.js";import"./Input-EUcX8Uzk.js";import"./search-D5Zr1HOy.js";import"./spin-CMhXNmVt.js";import"./error-B9BZNthJ.js";import"./withOsdkMetrics-BsCiBcgq.js";import"./makeExternalStore-BHkeYhGJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
