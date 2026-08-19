import{j as r,M as s}from"./iframe-BD-LWr1p.js";import{P as p}from"./pdf-viewer-BgzfWb_S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-iKXpB2Kr.js";import"./preload-helper-dmgTD7Sy.js";import"./PdfViewer-BQk8Xlfn.js";import"./index-C4WNdzjX.js";import"./BasePdfViewer-DCpWZeD9.js";import"./BasePdfViewer.module.css-CNGywDIl.js";import"./PdfViewerAnnotationLayer-BsbBj6K6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cqf-AImM.js";import"./PdfViewerOutlineSidebar-CEAB_YSh.js";import"./PdfViewerSidebarHeader-C5MwVsCb.js";import"./useBaseUiId-wrsAqB_t.js";import"./useControlled-S-BenCcy.js";import"./CompositeRoot-6ydpKo_0.js";import"./CompositeItem-BT4SOs7q.js";import"./ToolbarRootContext-W9Cyg5bT.js";import"./composite-BuDBmEPr.js";import"./svgIconContainer-CIg5fwF3.js";import"./PdfViewerSearchBar-CYrJx1cz.js";import"./chevron-up-Bskudv3k.js";import"./chevron-down-DZyBBtLC.js";import"./cross-ek8KuXfH.js";import"./PdfViewerSidebar-DJzy2PKN.js";import"./index-qpSIk4b9.js";import"./index-YTdZ8qtU.js";import"./index-DrMY-03p.js";import"./PdfViewerToolbar-Dh_fvFo_.js";import"./Button-DYW0znBH.js";import"./chevron-right-COrJxnnz.js";import"./Input-H0p-Kdle.js";import"./search-Cesj0Sn1.js";import"./spin-DV6Lv_1R.js";import"./error-CGXE3NEO.js";import"./withOsdkMetrics-CbPUGjlt.js";import"./makeExternalStore-BglmpTlj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
