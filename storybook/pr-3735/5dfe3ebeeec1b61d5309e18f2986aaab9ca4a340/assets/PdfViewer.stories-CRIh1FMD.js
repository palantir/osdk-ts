import{j as r,M as s}from"./iframe-DSMWrXPe.js";import{P as p}from"./pdf-viewer-BPKLsF7u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EbYjgyEx.js";import"./preload-helper-BlZGs9G1.js";import"./PdfRenderer-CE9YrhfX.js";import"./index-D6D_nts1.js";import"./PdfViewer-DVCO5IZr.js";import"./PdfViewer.module.css-CyfC1Z48.js";import"./PdfViewerAnnotationLayer-CCz0ztEE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSrm1r-c.js";import"./PdfViewerOutlineSidebar-0TVsAa5x.js";import"./PdfViewerSidebarHeader-DsxXerXY.js";import"./useBaseUiId-Cx1Xrpmr.js";import"./useControlled-2qj00gpi.js";import"./CompositeRoot-CDzeyEMy.js";import"./CompositeItem-B-YTSQE9.js";import"./ToolbarRootContext-CUL72IU0.js";import"./composite-B-A3OnRf.js";import"./svgIconContainer-UJFGmyTn.js";import"./PdfViewerSearchBar-BIAi9UWV.js";import"./chevron-up-Dj8Tz3Hi.js";import"./chevron-down-B5dAgewr.js";import"./cross-mTQyjJ68.js";import"./PdfViewerSidebar-Obyn8rG8.js";import"./index-CDy6IKMN.js";import"./index-CN-8IRxo.js";import"./index-DNaGfyxP.js";import"./PdfViewerToolbar-DWBW3_XD.js";import"./Button-DZHdVHGV.js";import"./chevron-right-DAs-lgoR.js";import"./Input-wgU5PuR4.js";import"./search-Cw6Jc9Ce.js";import"./spin-DHcu8asw.js";import"./error-CoP_lWQF.js";import"./withOsdkMetrics-5xZP9LUJ.js";import"./makeExternalStore-TjOOI6Gz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
