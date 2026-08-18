import{j as r,M as s}from"./iframe-Co4qWrtI.js";import{P as p}from"./pdf-viewer-D4GuLDkl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSn9O7sP.js";import"./preload-helper-CLLjQro7.js";import"./PdfViewer-CEqrKD0R.js";import"./index-DEzmk0WZ.js";import"./BasePdfViewer-BB7gD46-.js";import"./BasePdfViewer.module.css-Drf9K5cm.js";import"./PdfViewerAnnotationLayer-ClHwi_4t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8lZjVd6U.js";import"./PdfViewerOutlineSidebar-BlyN6GGY.js";import"./PdfViewerSidebarHeader-XAYUoOdr.js";import"./useBaseUiId-BAgt3F1o.js";import"./useControlled-BInZf-2P.js";import"./CompositeRoot-SUhk9ArV.js";import"./CompositeItem-DaLiwHmB.js";import"./ToolbarRootContext-DBPxppp8.js";import"./composite-DHfKBQ5i.js";import"./svgIconContainer-DaajecJ9.js";import"./PdfViewerSearchBar-CV1BmTJy.js";import"./chevron-up-Dj6eoFof.js";import"./chevron-down-CqSMzTaF.js";import"./cross-SEs1k_Kd.js";import"./PdfViewerSidebar-DbDnNPoy.js";import"./index-C0XVZZRD.js";import"./index-C2z4NjHs.js";import"./index-CqKJ3sPz.js";import"./PdfViewerToolbar-BzqK8ROf.js";import"./Button-sQ3dXKZH.js";import"./chevron-right-Ctm3m_oN.js";import"./Input-oSQlsB7a.js";import"./search-DLItUO9A.js";import"./spin-C-wHn4lT.js";import"./error-DAul4oNM.js";import"./withOsdkMetrics-CtjXLxVF.js";import"./makeExternalStore-BVlyj7sn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
