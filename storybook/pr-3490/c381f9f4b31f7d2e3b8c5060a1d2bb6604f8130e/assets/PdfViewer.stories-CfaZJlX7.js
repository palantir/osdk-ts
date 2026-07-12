import{j as r,M as s}from"./iframe-CJ1k9s2s.js";import{P as p}from"./pdf-viewer-CaY1m6BU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsvD-4jH.js";import"./preload-helper-xGEu8B2E.js";import"./PdfRenderer-Bd9nQN4C.js";import"./index-BDnFjOlH.js";import"./PdfViewer-8etVZdpG.js";import"./PdfViewer.module.css-BWobtpsl.js";import"./PdfViewerAnnotationLayer-DEOX1kOU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yPDEMHBJ.js";import"./PdfViewerOutlineSidebar-CaxzC2Wd.js";import"./PdfViewerSidebarHeader-BKRdeMCS.js";import"./useBaseUiId-DRFVnBda.js";import"./useControlled-Bq1q_8CB.js";import"./CompositeRoot-Bby3eWOA.js";import"./CompositeItem-Bp61A018.js";import"./ToolbarRootContext-DANNGKFY.js";import"./composite-CyTvAPVt.js";import"./svgIconContainer-ChwrX5Lf.js";import"./PdfViewerSearchBar-DbPpjjXi.js";import"./chevron-up-BCXZDSJW.js";import"./chevron-down-gslDsfHA.js";import"./cross-D470-lej.js";import"./PdfViewerSidebar-BF47PhCk.js";import"./index-B4n_eF_o.js";import"./index-C06RO_Su.js";import"./index-JosqavAX.js";import"./PdfViewerToolbar-DFT7es8Z.js";import"./Button-i-vyX_VJ.js";import"./chevron-right-O07h3rG4.js";import"./Input-DCQ9YCGs.js";import"./search-f2QUDm-t.js";import"./spin-BHz4bacE.js";import"./error-BjfPp1E9.js";import"./withOsdkMetrics-CUAcaiOz.js";import"./makeExternalStore-D_hniRDO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
