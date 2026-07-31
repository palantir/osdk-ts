import{j as r,M as s}from"./iframe-CVbJrMx7.js";import{P as p}from"./pdf-viewer-uH-KvMVa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BakY_uiu.js";import"./preload-helper-Bi2CkPaH.js";import"./PdfRenderer-BsU5eVY2.js";import"./index-4zqcjDaD.js";import"./PdfViewer-KKedoPLf.js";import"./PdfViewer.module.css-Ce58WRei.js";import"./PdfViewerAnnotationLayer-Ehrg-W7M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cc4hDV3e.js";import"./PdfViewerOutlineSidebar-CNCY4lrv.js";import"./PdfViewerSidebarHeader-CdJO4xN1.js";import"./useBaseUiId-6l5ZMBvp.js";import"./useControlled-BjiYNtSn.js";import"./CompositeRoot-4pltyL66.js";import"./CompositeItem-DgkAeX91.js";import"./ToolbarRootContext-BQ1Os6dU.js";import"./composite-DU8HRqMQ.js";import"./svgIconContainer-CSuEqcx2.js";import"./PdfViewerSearchBar-BHBPYnSd.js";import"./chevron-up-DDZEbVE0.js";import"./chevron-down-B7HicDSz.js";import"./cross-CMD59SEE.js";import"./PdfViewerSidebar-CfxTI9Ci.js";import"./index-DNvASVW6.js";import"./index-ByBvz6yB.js";import"./index-BBjaT9-B.js";import"./PdfViewerToolbar-B7LrBiyZ.js";import"./Button-BRR8MBDs.js";import"./chevron-right-DZtNVLEB.js";import"./Input-CCWoJTpA.js";import"./search-BIKIgIOT.js";import"./spin-B-35bkSC.js";import"./error-CnlAvsn-.js";import"./withOsdkMetrics-DuX2Gvrb.js";import"./makeExternalStore-vLSrVJKb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
