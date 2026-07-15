import{j as r,M as s}from"./iframe-VqOYBpiT.js";import{P as p}from"./pdf-viewer-CDJnKM4o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CxxjH1kD.js";import"./preload-helper-CatpkaTg.js";import"./PdfRenderer-BNtkRvE_.js";import"./index-qCYDZjxA.js";import"./PdfViewer-DDpQd6mC.js";import"./PdfViewer.module.css-iu4sT4yh.js";import"./PdfViewerAnnotationLayer-D9il8EgJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6iVNZ3V.js";import"./PdfViewerOutlineSidebar-Cw_2cYED.js";import"./PdfViewerSidebarHeader-B5Thn8Qc.js";import"./useBaseUiId-DH1vvoHz.js";import"./useControlled-m_CDe32a.js";import"./CompositeRoot-B4umIqkB.js";import"./CompositeItem-C719kOFT.js";import"./ToolbarRootContext-D4jJY08o.js";import"./composite-387RyXo2.js";import"./svgIconContainer-CzVf3Ft2.js";import"./PdfViewerSearchBar-DFfqhugd.js";import"./chevron-up-D_W5qIoG.js";import"./chevron-down-D7HIqLdr.js";import"./cross-YMZyLxkb.js";import"./PdfViewerSidebar-Cltwd8HV.js";import"./index-CAdcIpuX.js";import"./index-DT_rKFyd.js";import"./index-74MgD2Pp.js";import"./PdfViewerToolbar-IHnR9Das.js";import"./Button-DjBK7AmD.js";import"./chevron-right-DCmEHJPl.js";import"./Input-Br3ESkJT.js";import"./search-DOIgsObl.js";import"./spin-pa9c3T4y.js";import"./error-DFogRlMx.js";import"./withOsdkMetrics-fYlINsqq.js";import"./makeExternalStore-DTyZ-BTP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
