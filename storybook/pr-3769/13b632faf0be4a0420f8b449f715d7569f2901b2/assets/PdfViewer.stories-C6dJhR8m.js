import{j as r,M as s}from"./iframe-CSumVy5B.js";import{P as p}from"./pdf-viewer-B91sU7UR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsouRB4M.js";import"./preload-helper-CBombYiI.js";import"./PdfRenderer-DS_RbnCg.js";import"./index-DQ45Rr9-.js";import"./PdfViewer-8k6MQ31x.js";import"./PdfViewer.module.css-Bto8X6oS.js";import"./PdfViewerAnnotationLayer-B0g86FYx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3Xj4odL.js";import"./PdfViewerOutlineSidebar-CYlnea-k.js";import"./PdfViewerSidebarHeader-B_TEGapZ.js";import"./useBaseUiId-DRFCB_IR.js";import"./useControlled-CG83hz7Q.js";import"./CompositeRoot-C6YZ8MPW.js";import"./CompositeItem-Dn5e_dwj.js";import"./ToolbarRootContext-ByQ5hSPJ.js";import"./composite-Dw2E63KR.js";import"./svgIconContainer-CtPAyXoD.js";import"./PdfViewerSearchBar-BmQBUWb5.js";import"./chevron-up-4mFwAJtO.js";import"./chevron-down-DgqRz-6y.js";import"./cross-Db0Tmz8n.js";import"./PdfViewerSidebar-V23oac7p.js";import"./index-DKCFta18.js";import"./index-ClUgQiOR.js";import"./index-Cqhmw3j4.js";import"./PdfViewerToolbar-CDBxIT8e.js";import"./Button-bqCpVfIv.js";import"./chevron-right-9IdUXyk9.js";import"./Input-BDuVWvkz.js";import"./search-CdDv8eEf.js";import"./spin-Bgig9_Hf.js";import"./error-YEXOSncq.js";import"./withOsdkMetrics-D03-ZDAS.js";import"./makeExternalStore-CSPbLBzs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
