import{j as r,M as s}from"./iframe-BNkEWG9a.js";import{P as p}from"./pdf-viewer-B21JuZVf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bp-draW1.js";import"./preload-helper-COpsNFvL.js";import"./PdfRenderer-DkhdpVPx.js";import"./index-72yVnFn9.js";import"./PdfViewer-MIzFGnfT.js";import"./PdfViewer.module.css-BWdyDQTp.js";import"./PdfViewerAnnotationLayer-BEVBcefJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BTn9VOrZ.js";import"./PdfViewerOutlineSidebar-ppaiSD3x.js";import"./PdfViewerSidebarHeader-BC4tTO7A.js";import"./useBaseUiId-C2SIyrP4.js";import"./useControlled-DvYSYpF5.js";import"./CompositeRoot-wv43NZuv.js";import"./CompositeItem-DeRlHXsU.js";import"./ToolbarRootContext-BBdWlzqo.js";import"./composite-av1GhyDs.js";import"./svgIconContainer-CP_7SCsh.js";import"./PdfViewerSearchBar-D1Pgc1KW.js";import"./chevron-up-C_241gNR.js";import"./chevron-down-7Toxqoqn.js";import"./cross-DtXpSNop.js";import"./PdfViewerSidebar-D4sQ9Sfy.js";import"./index-wuM_JjP7.js";import"./index-Cggvd78O.js";import"./index-DEfY7O8R.js";import"./PdfViewerToolbar-ciwi9QRp.js";import"./Button-DgpDNDJ9.js";import"./chevron-right-CPhT3kFW.js";import"./Input-DWIMVPa2.js";import"./search-C5-ZQPA-.js";import"./spin-BPR97xiS.js";import"./error-DiVMU7Ev.js";import"./withOsdkMetrics-CR8laU5K.js";import"./makeExternalStore-ByHargtT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
