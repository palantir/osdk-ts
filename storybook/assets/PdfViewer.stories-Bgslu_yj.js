import{j as r,M as s}from"./iframe-u83eKIrq.js";import{P as p}from"./pdf-viewer-NiUnn7eD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPdrMsX0.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D8t_g4LD.js";import"./index-DAH5uwdU.js";import"./PdfViewer-Cx-oVrgQ.js";import"./PdfViewer.module.css-Pc7ayU83.js";import"./PdfViewerAnnotationLayer-Djk_MqQw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsWc3S2q.js";import"./PdfViewerOutlineSidebar-BhcOFffP.js";import"./PdfViewerSidebarHeader-C04X4O1h.js";import"./useBaseUiId-PA8l4EIZ.js";import"./useControlled-6FyMHK6P.js";import"./CompositeRoot-CRzkjp6L.js";import"./CompositeItem-C9wVVHjV.js";import"./ToolbarRootContext-0AKJJTto.js";import"./composite-3XcAHwyh.js";import"./svgIconContainer-bWBjq6xN.js";import"./PdfViewerSearchBar-Dk3HnHKI.js";import"./chevron-up-DVWhDeG2.js";import"./chevron-down-iwF-GvDx.js";import"./cross-BQtpAbkF.js";import"./PdfViewerSidebar-DUzTJYXY.js";import"./index-jMor5Orb.js";import"./index-Byvi8c4H.js";import"./index-uZ0DL954.js";import"./PdfViewerToolbar-D8LyPRk_.js";import"./Button-CdLpTr9e.js";import"./chevron-right-B7SvdVJF.js";import"./Input-BSdYhVma.js";import"./search-D9liKBNY.js";import"./spin-DgqRvD1h.js";import"./error-ASL9njaz.js";import"./withOsdkMetrics-v2D5VOnL.js";import"./makeExternalStore-C_DSvJXm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
