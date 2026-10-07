import{j as r,M as s}from"./iframe-B0BeHSW3.js";import{P as p}from"./pdf-viewer-BhjSfAlP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BFTaAHt_.js";import"./preload-helper-DAJqEBqZ.js";import"./PdfViewer-CacwN1g0.js";import"./index-fkdnmgoB.js";import"./BasePdfViewer-DssJ2vff.js";import"./BasePdfViewer.module.css-EorVSxkt.js";import"./PdfViewerAnnotationLayer-DGXwUTtq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQmYQnSa.js";import"./PdfViewerOutlineSidebar-CQ7AbdYN.js";import"./PdfViewerSidebarHeader-BrirlFKX.js";import"./useBaseUiId-CFx2OXwB.js";import"./useControlled-Y2VvyFT1.js";import"./CompositeRoot-CGGtDIvD.js";import"./CompositeItem-CCwjGTNJ.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./composite-BKG8TgZ7.js";import"./svgIconContainer-3LirYjxc.js";import"./PdfViewerSearchBar-BYKv7wkc.js";import"./chevron-up-CMUh9_HD.js";import"./chevron-down-CIEyD1Re.js";import"./cross-ChIXxlFh.js";import"./PdfViewerSidebar-CaKZY71K.js";import"./index-Dbl4MtyX.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./PdfViewerToolbar-CzimHNTt.js";import"./Button-CUzfzg16.js";import"./chevron-right-k95gyM0W.js";import"./Input-BhPQq-YU.js";import"./search-Eov1ZRug.js";import"./spin-DyT0CKnN.js";import"./error-LXXuPtJW.js";import"./withOsdkMetrics-CRG9AD3M.js";import"./makeExternalStore-CLIh_9sw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
