import{j as r,M as s}from"./iframe-BQPlFWHf.js";import{P as p}from"./pdf-viewer-BwhOY0N9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1oCMm_Ys.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Btb-hNgg.js";import"./index-q205pHOG.js";import"./PdfViewer-BHoqkVJ0.js";import"./PdfViewer.module.css-BnvZg5Ox.js";import"./PdfViewerAnnotationLayer-D3G9CjAD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVyK8imq.js";import"./PdfViewerOutlineSidebar-BY9gtm2T.js";import"./PdfViewerSidebarHeader-BhttVWXA.js";import"./useBaseUiId-B6CsCbrP.js";import"./useControlled-Toaf_epN.js";import"./CompositeRoot-D6v9bMw1.js";import"./CompositeItem-B2CdhW51.js";import"./ToolbarRootContext-8zXqIDZv.js";import"./composite-Bh217ciX.js";import"./svgIconContainer-C8-_okQk.js";import"./PdfViewerSearchBar-C12o6nGU.js";import"./chevron-up-CTlQ83i1.js";import"./chevron-down-DWmbLMj4.js";import"./cross-CzVegF0f.js";import"./PdfViewerSidebar-i-bYWmDR.js";import"./index-D2UDFObS.js";import"./index-BJiQNw2h.js";import"./index-Bf3E0QSU.js";import"./PdfViewerToolbar-EoBtBFGQ.js";import"./Button-CahJ-_1S.js";import"./chevron-right-p4ywl1oe.js";import"./Input-BYYNMGrr.js";import"./search-CmCSH6Ky.js";import"./spin-CqlheCix.js";import"./error-x00FgWmb.js";import"./withOsdkMetrics-Dm-G2q20.js";import"./makeExternalStore-B5zsuPMy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
