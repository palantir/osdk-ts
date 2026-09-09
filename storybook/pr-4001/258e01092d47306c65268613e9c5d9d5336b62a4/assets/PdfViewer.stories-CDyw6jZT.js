import{j as r,M as s}from"./iframe-B9fWy8hT.js";import{P as p}from"./pdf-viewer-D_xGpfLt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdM9vFq1.js";import"./preload-helper-DWfHVW0p.js";import"./PdfViewer-PJ7j0_F9.js";import"./index-DcqZYHDv.js";import"./BasePdfViewer-BROsZBHP.js";import"./BasePdfViewer.module.css-F8IFWTwR.js";import"./PdfViewerAnnotationLayer-szZtVl1Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXYNFXlH.js";import"./PdfViewerOutlineSidebar-Du8yRIVy.js";import"./PdfViewerSidebarHeader-Bjjposbi.js";import"./useBaseUiId-ck-5-ASN.js";import"./useControlled-1rkkBjfr.js";import"./CompositeRoot-DHNsKFL1.js";import"./CompositeItem-Cqqz-d5o.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./composite-BwwoklsZ.js";import"./svgIconContainer-u2Tnk_oU.js";import"./PdfViewerSearchBar-BGCkld88.js";import"./chevron-up-CNh9yDYr.js";import"./chevron-down-nNmhzWCh.js";import"./cross-boAy6lJm.js";import"./PdfViewerSidebar-CfrRtZ-i.js";import"./index-BEFSCPJo.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./PdfViewerToolbar-BjviYI4N.js";import"./Button-3STy3BF8.js";import"./chevron-right-Bgnju3CU.js";import"./Input-CD0TW00M.js";import"./search-B0RjXvIo.js";import"./spin-Ctdp_hLt.js";import"./error-DVMkH5gx.js";import"./withOsdkMetrics-DwXDV7v7.js";import"./makeExternalStore-QmjWX5TP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
