import{j as r,M as s}from"./iframe-CpIscZhw.js";import{P as p}from"./pdf-viewer-CpoIh5ue.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aqn8WLfI.js";import"./preload-helper-CKL1SrJi.js";import"./PdfRenderer-CrQmoHSj.js";import"./index-Bbg2WkYK.js";import"./PdfViewer-DktemRNG.js";import"./PdfViewer.module.css-udMRUBOw.js";import"./PdfViewerAnnotationLayer-DZ_uLOTB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Blh0E_Hy.js";import"./PdfViewerOutlineSidebar-8u4Y6W9k.js";import"./PdfViewerSidebarHeader-Dt5AL2-M.js";import"./useBaseUiId-DKFRz7u_.js";import"./useControlled-CGunv8o7.js";import"./CompositeRoot-nCEM2QBE.js";import"./CompositeItem-Cx9E9PGy.js";import"./ToolbarRootContext-fuyfjlA6.js";import"./composite-BSkicZqF.js";import"./svgIconContainer-Bo0dryoI.js";import"./PdfViewerSearchBar-Bqv00O4W.js";import"./chevron-up-MHT1yb_u.js";import"./chevron-down-BGZmvdK2.js";import"./cross-BiY2PLN4.js";import"./PdfViewerSidebar-B2QBmDA-.js";import"./index-4TzoUCSY.js";import"./index-_k1fg5w-.js";import"./index-BSRo_UIf.js";import"./PdfViewerToolbar-ed2BnN5l.js";import"./Button-ww1sLsLD.js";import"./chevron-right-CvExxxa5.js";import"./Input-DvSM-OUx.js";import"./search-Jceajqon.js";import"./spin-jpHQ-Xqa.js";import"./error-CrZCprMy.js";import"./withOsdkMetrics-9iqcjCiu.js";import"./makeExternalStore-CrqilYoq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
