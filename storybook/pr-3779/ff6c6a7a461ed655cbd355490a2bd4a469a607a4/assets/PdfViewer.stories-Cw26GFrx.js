import{j as r,M as s}from"./iframe-BDk1IBq0.js";import{P as p}from"./pdf-viewer-LT9D0ugz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YDfcfVxz.js";import"./preload-helper-BTKlFRVT.js";import"./PdfRenderer-5tcr204T.js";import"./index-D7NXbx8O.js";import"./PdfViewer-Bl6P-CEw.js";import"./PdfViewer.module.css-JmLv7JYc.js";import"./PdfViewerAnnotationLayer-C6aXwyQZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-KM7sqdID.js";import"./PdfViewerOutlineSidebar-D2q0NNoT.js";import"./PdfViewerSidebarHeader-BYpXahpj.js";import"./useBaseUiId-DMGSqHE1.js";import"./useControlled-DBk8iBgn.js";import"./CompositeRoot-BQZyJrJU.js";import"./CompositeItem-DqtdQCsE.js";import"./ToolbarRootContext-DIhUV_VV.js";import"./composite-DMaSIPCu.js";import"./svgIconContainer-DLmZ_O8B.js";import"./PdfViewerSearchBar-v98aSwOL.js";import"./chevron-up-DFil1Bwf.js";import"./chevron-down-ewV3babK.js";import"./cross-Yxj_6q4K.js";import"./PdfViewerSidebar-Dn94rTaQ.js";import"./index-DBlapOjg.js";import"./index-Cp3LCsCN.js";import"./index-Ck8z4N77.js";import"./PdfViewerToolbar-Bh_p-lLY.js";import"./Button-D-40IJBp.js";import"./chevron-right-Bm6NMZER.js";import"./Input-PeixbVvf.js";import"./search-T09tFGVD.js";import"./spin-duDR_079.js";import"./error-B4CqJvC_.js";import"./withOsdkMetrics-CfKSz8RV.js";import"./makeExternalStore-1Ey3n_is.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
