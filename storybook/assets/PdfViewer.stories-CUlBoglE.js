import{j as r,M as s}from"./iframe-DrnKYwzt.js";import{P as p}from"./pdf-viewer-CaXd8JNW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIt2eq41.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-vbKFVWhW.js";import"./index-DPIZfSwK.js";import"./BasePdfViewer-DXU2Bgo_.js";import"./BasePdfViewer.module.css-CoWp3pfV.js";import"./PdfViewerAnnotationLayer-5cPIuhR7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFpr-DVB.js";import"./PdfViewerOutlineSidebar-BRORfpiU.js";import"./PdfViewerSidebarHeader-ChqJKUbI.js";import"./useBaseUiId-CFsS7qRQ.js";import"./useControlled-CTk87t76.js";import"./CompositeRoot-DDzeKKKj.js";import"./CompositeItem-DupeSBp8.js";import"./ToolbarRootContext-D8ABn96Q.js";import"./composite-CCKcLmMF.js";import"./svgIconContainer-DaVnGh9c.js";import"./PdfViewerSearchBar-0Bpvl4IN.js";import"./chevron-up-6e9y6GJp.js";import"./chevron-down-BY9VCrZu.js";import"./cross-DXIDkMuC.js";import"./PdfViewerSidebar-BNa6gxFc.js";import"./index-7JqWaY13.js";import"./index-B5y8rxCa.js";import"./index-CiYDc6_L.js";import"./PdfViewerToolbar-DR8vWit-.js";import"./Button-QrXAKlJD.js";import"./chevron-right-EdEJp9pY.js";import"./Input-Bed63vhv.js";import"./search-CLh-nr8U.js";import"./spin-CeInlnKF.js";import"./error-Cd40ldoN.js";import"./withOsdkMetrics-CulCESkd.js";import"./makeExternalStore-DWwwitH0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
