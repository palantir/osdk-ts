import{j as r,M as s}from"./iframe-vrerelee.js";import{P as p}from"./pdf-viewer-Bw1J9Glu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ssSepzqW.js";import"./preload-helper-EWJUa1-K.js";import"./PdfViewer-DTWEUbOI.js";import"./index-CNxP3rjT.js";import"./BasePdfViewer-DD0U2sje.js";import"./BasePdfViewer.module.css-DEd2J0sj.js";import"./PdfViewerAnnotationLayer-CWT6_z-4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtLLVj7Y.js";import"./PdfViewerOutlineSidebar-CNpxAUkL.js";import"./PdfViewerSidebarHeader-Ce_oogCS.js";import"./useBaseUiId-CAROlnX8.js";import"./useControlled-CjkZ0zkX.js";import"./CompositeRoot-D3N39Ugi.js";import"./CompositeItem-B4kVU38_.js";import"./ToolbarRootContext-CcUY96Hu.js";import"./composite-DDTJeHL3.js";import"./svgIconContainer-6n9cb0mN.js";import"./PdfViewerSearchBar-CCq8G5mX.js";import"./chevron-up-DbMr60FN.js";import"./chevron-down-7LzC2ZOe.js";import"./cross-Psx69AyP.js";import"./PdfViewerSidebar-oWBOwX9w.js";import"./index-DyV40wfp.js";import"./index-yOPz6Uw0.js";import"./index-AmaRSzHC.js";import"./PdfViewerToolbar-_Fho68DJ.js";import"./Button-y-WAAif2.js";import"./chevron-right-wxK3yvbt.js";import"./Input-C9Tgfj8O.js";import"./search-Bhqmpp8a.js";import"./spin-BKdIMUq3.js";import"./error-BxHij2Hj.js";import"./withOsdkMetrics-CTLM5X88.js";import"./makeExternalStore-CGm7b8F9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
