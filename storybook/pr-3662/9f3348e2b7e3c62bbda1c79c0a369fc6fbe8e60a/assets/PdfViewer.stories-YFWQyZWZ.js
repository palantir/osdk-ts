import{j as r,M as s}from"./iframe-0jwp69p_.js";import{P as p}from"./pdf-viewer-CJQ2ZlK7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgWaDGrO.js";import"./preload-helper-WTuv2Kb1.js";import"./PdfRenderer-S_RKfHkM.js";import"./index-BIq836Qa.js";import"./PdfViewer-C1o7HNgv.js";import"./PdfViewer.module.css-iSZpEOki.js";import"./PdfViewerAnnotationLayer-BV-HHLW_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZZiGtNH.js";import"./PdfViewerOutlineSidebar-Kdv81Yxs.js";import"./PdfViewerSidebarHeader-BPCfy2NZ.js";import"./useBaseUiId-Bo6se0E1.js";import"./useControlled-CylMgmPr.js";import"./CompositeRoot-BnhaL_26.js";import"./CompositeItem-d8Vn9RQ1.js";import"./ToolbarRootContext-Cneog7L7.js";import"./composite-CMnbrV0_.js";import"./svgIconContainer-BJUj5X0X.js";import"./PdfViewerSearchBar-ClbhbcqS.js";import"./chevron-up-CaebV_6p.js";import"./chevron-down-DdqY3p1L.js";import"./cross-BDOJUkQI.js";import"./PdfViewerSidebar-8IgWdl3v.js";import"./index-6BA1MBmk.js";import"./index-iiMtJJe9.js";import"./index-QRMY8fC0.js";import"./PdfViewerToolbar-CCoTT0cX.js";import"./Button-CHNstSBN.js";import"./chevron-right-T24gexTK.js";import"./Input-BCGVW7Yi.js";import"./search-B1DPnb_f.js";import"./spin-CnSzxj4U.js";import"./error-DSLQgLVp.js";import"./withOsdkMetrics-RxDwJXuL.js";import"./makeExternalStore-DOpXnJp2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
