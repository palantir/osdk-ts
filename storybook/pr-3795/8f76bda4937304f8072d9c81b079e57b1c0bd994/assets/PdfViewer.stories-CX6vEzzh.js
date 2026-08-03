import{j as r,M as s}from"./iframe-DyXeoGwO.js";import{P as p}from"./pdf-viewer-LhfC5A4j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1doNnHeE.js";import"./preload-helper-D0PKvm90.js";import"./PdfRenderer-D3qDh8F7.js";import"./index-4Nqwzpvt.js";import"./PdfViewer-DGVu-48h.js";import"./PdfViewer.module.css--CY9zSvO.js";import"./PdfViewerAnnotationLayer-BRZRFecR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4WyG4OY.js";import"./PdfViewerOutlineSidebar-D1Ez5UwX.js";import"./PdfViewerSidebarHeader-CZDMhnLX.js";import"./useBaseUiId-9gwfWVJK.js";import"./useControlled-bhCIZURY.js";import"./CompositeRoot-Bf9xMsA0.js";import"./CompositeItem-D5uWMXLy.js";import"./ToolbarRootContext-NSuMsQk4.js";import"./composite-Yz-mnVT0.js";import"./svgIconContainer-CCZ_a6ls.js";import"./PdfViewerSearchBar-CqRbo9k1.js";import"./chevron-up-CHEthlS9.js";import"./chevron-down-DlMyCTIX.js";import"./cross-DTaTjAMm.js";import"./PdfViewerSidebar-1ENLBc1A.js";import"./index-Btsx4sMw.js";import"./index-CmKnfhTb.js";import"./index-Cxn1_saB.js";import"./PdfViewerToolbar-PtU5Po_4.js";import"./Button-XiNhMhnD.js";import"./chevron-right-Kw86vcFE.js";import"./Input-Co_ozBSv.js";import"./search-Bb8GWAj-.js";import"./spin-Btldt6qB.js";import"./error-lrLb-CbY.js";import"./withOsdkMetrics-DX8ITSGp.js";import"./makeExternalStore-DcczwIex.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
