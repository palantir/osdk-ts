import{j as r,M as s}from"./iframe-pDATnlNX.js";import{P as p}from"./pdf-viewer-D13L9Lhi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cqdy8cUv.js";import"./preload-helper-CFiVFcjH.js";import"./PdfViewer-CuVmefK5.js";import"./index-B3g0maqG.js";import"./BasePdfViewer-BEaX-Pb1.js";import"./BasePdfViewer.module.css-Cuc188TW.js";import"./PdfViewerAnnotationLayer-BwKm8l_l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfQ_M9rB.js";import"./PdfViewerOutlineSidebar-BA9P0NJr.js";import"./PdfViewerSidebarHeader-D6Ir08cv.js";import"./useBaseUiId-Osovmaps.js";import"./useControlled-DkbNe0Ap.js";import"./CompositeRoot-ViS8ydoo.js";import"./CompositeItem-DltsrA7v.js";import"./ToolbarRootContext-DHRs-5dn.js";import"./composite-DJFOYfnE.js";import"./svgIconContainer-CW38pZFN.js";import"./PdfViewerSearchBar-BiaQ2nDP.js";import"./chevron-up-BPOkktYb.js";import"./chevron-down-CPNZFTe4.js";import"./cross-CyB8xMH6.js";import"./PdfViewerSidebar-VeGMDmi1.js";import"./index-C-XHcvWq.js";import"./index-d3doyVb1.js";import"./index-B-TtPd4_.js";import"./PdfViewerToolbar-CgGe1EWt.js";import"./Button-C4VVgNFo.js";import"./chevron-right-BaZx6IRU.js";import"./Input-B8KO9TSx.js";import"./search-hwnvbWDr.js";import"./spin-hayzMlb5.js";import"./error-LFZeSfYk.js";import"./withOsdkMetrics-Dldtv88a.js";import"./makeExternalStore-DikQbg4p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
