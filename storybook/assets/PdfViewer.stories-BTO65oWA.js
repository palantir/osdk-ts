import{j as r,M as s}from"./iframe-BqbigeuD.js";import{P as p}from"./pdf-viewer-Dn9rvEcO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dntpt-Zz.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-5pP6bPoI.js";import"./index-D7s1vZwA.js";import"./BasePdfViewer-Bfd-k2mk.js";import"./BasePdfViewer.module.css-CEDad00Y.js";import"./PdfViewerAnnotationLayer-V4uEafP6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzVXcOua.js";import"./PdfViewerOutlineSidebar-CYeYLjnY.js";import"./PdfViewerSidebarHeader-SxnQ4Zkk.js";import"./useBaseUiId-BrUQ1lUA.js";import"./useControlled-BkV9XWg4.js";import"./CompositeRoot-3RwUr3nK.js";import"./CompositeItem-dQj9Bt62.js";import"./ToolbarRootContext-B_mJM9-f.js";import"./composite-DOjpwy0F.js";import"./svgIconContainer-CNyNUipw.js";import"./PdfViewerSearchBar-DiByZsQS.js";import"./chevron-up-C4-mRqiG.js";import"./chevron-down-GBaXIHW1.js";import"./cross-CLJqu8dR.js";import"./PdfViewerSidebar-DLB5bDYA.js";import"./index-BfjKC9iU.js";import"./index-CLCCLTRM.js";import"./index-KjJeD42o.js";import"./PdfViewerToolbar-Cf7Qai_A.js";import"./Button-Bs_AcwvG.js";import"./chevron-right-kCLxBi9a.js";import"./Input-w6FfiWMZ.js";import"./search-BkoZ-p7h.js";import"./spin-8VDMHnLe.js";import"./error-BChOvziS.js";import"./withOsdkMetrics-rp-esplT.js";import"./makeExternalStore-kAlj8eNH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
