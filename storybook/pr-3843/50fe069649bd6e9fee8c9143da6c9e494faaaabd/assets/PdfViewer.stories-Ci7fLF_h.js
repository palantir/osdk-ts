import{j as r,M as s}from"./iframe-0M63JHCf.js";import{P as p}from"./pdf-viewer-DR8pf6Cn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PIt8gXDb.js";import"./preload-helper-yRY4DJID.js";import"./PdfRenderer-CKwH1kIP.js";import"./index-DCLstkM0.js";import"./PdfViewer-BHr2qgyH.js";import"./PdfViewer.module.css-h-C7ykbS.js";import"./PdfViewerAnnotationLayer-DDpJMihX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8ow5UcE.js";import"./PdfViewerOutlineSidebar-Blcj1TDC.js";import"./PdfViewerSidebarHeader-BtegmvbX.js";import"./useBaseUiId-C4hkh7ZQ.js";import"./useControlled-Bfcb3jbt.js";import"./CompositeRoot-DqqqpHIv.js";import"./CompositeItem-DykB-jR3.js";import"./ToolbarRootContext-4caIMlji.js";import"./composite-BGTmrBgq.js";import"./svgIconContainer-Ba-VjDLq.js";import"./PdfViewerSearchBar-Cd8qpz3v.js";import"./chevron-up-zhsAFE7D.js";import"./chevron-down-CJX5oFSg.js";import"./cross-Dx7TBNdy.js";import"./PdfViewerSidebar-DWHZkeSw.js";import"./index-BhO_dAvP.js";import"./index-DfbbdQ9g.js";import"./index-BN_1v8m8.js";import"./PdfViewerToolbar-BzC2vlGk.js";import"./Button-yHWtoMo0.js";import"./chevron-right-Cv76fItF.js";import"./Input-BySgS7sE.js";import"./search-BHMf8zxq.js";import"./spin-nsZOaYCD.js";import"./error-DtkpoifS.js";import"./withOsdkMetrics-DCNaRoie.js";import"./makeExternalStore-BOJmpgSR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
