import{j as r,M as s}from"./iframe-BAIjVGVk.js";import{P as p}from"./pdf-viewer-CxQ1mZLe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BRPxzNlr.js";import"./preload-helper-DSHh_idH.js";import"./PdfViewer-DAIWYH3d.js";import"./index-DXpX7Amm.js";import"./BasePdfViewer-BNgKsiS9.js";import"./BasePdfViewer.module.css-HFvf4pS8.js";import"./PdfViewerAnnotationLayer-DYLeSf90.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCwbFJmS.js";import"./PdfViewerOutlineSidebar-Cfoyab7W.js";import"./PdfViewerSidebarHeader-BambWdIc.js";import"./useBaseUiId-BWufarWX.js";import"./useControlled-DuNzm9BZ.js";import"./CompositeRoot-CKZPni-t.js";import"./CompositeItem-D_qw6hBc.js";import"./ToolbarRootContext-cyL3JijA.js";import"./composite-QKuz8rbt.js";import"./svgIconContainer-CyAzcMHP.js";import"./PdfViewerSearchBar-BM2Z974A.js";import"./chevron-up-DcGNev_V.js";import"./chevron-down-CI5MTTqT.js";import"./cross-CMTVeRn5.js";import"./PdfViewerSidebar-BK66C5tn.js";import"./index-BI7ItsTy.js";import"./index-ClU-xGz3.js";import"./index-BsrAu5pi.js";import"./PdfViewerToolbar-CYDWfVH5.js";import"./Button-YDlO7Iev.js";import"./chevron-right-BwfP615y.js";import"./Input-fl6Gg72N.js";import"./search-CuXKgBVi.js";import"./spin-o00kGkSn.js";import"./error-BHvGZT3F.js";import"./withOsdkMetrics-bmWg7v3w.js";import"./makeExternalStore-BcjHsE3T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
