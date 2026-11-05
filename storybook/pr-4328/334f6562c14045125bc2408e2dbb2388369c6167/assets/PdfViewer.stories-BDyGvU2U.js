import{j as r,M as s}from"./iframe-DxLxeeBD.js";import{P as p}from"./pdf-viewer-B8mL1AJa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQUdJ5Sh.js";import"./preload-helper-B7NNhvj1.js";import"./PdfViewer-BXJHUQ7j.js";import"./index-DSM2Nmta.js";import"./BasePdfViewer-APARYW9v.js";import"./BasePdfViewer.module.css-BIvz0mnJ.js";import"./PdfViewerAnnotationLayer-Cw6vkkJa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QvUbreUn.js";import"./PdfViewerOutlineSidebar-B5a74cWp.js";import"./PdfViewerSidebarHeader-D5h3ldhw.js";import"./useBaseUiId-BEhgV5tS.js";import"./useControlled-DAtmThLw.js";import"./CompositeRoot-jr6_nVtw.js";import"./CompositeItem-IyZEpEpW.js";import"./ToolbarRootContext-D7eywLcy.js";import"./composite-D1h37npl.js";import"./svgIconContainer-B6Cb5ptS.js";import"./PdfViewerSearchBar-BVAmhmWH.js";import"./chevron-up-3YeceyR6.js";import"./chevron-down-DqhD85JK.js";import"./cross-Z_oHrjIu.js";import"./PdfViewerSidebar-lbr_PuHm.js";import"./index-bdK4kZrJ.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./PdfViewerToolbar-CYtoz8iJ.js";import"./Button-BOLOFIFE.js";import"./chevron-right-BpBfxWD3.js";import"./Input-CFINwHSJ.js";import"./search-BuJ4cv5l.js";import"./spin-BmXLOmll.js";import"./error-B99vb4Y2.js";import"./withOsdkMetrics-CJ_tbfj8.js";import"./makeExternalStore--BkPrjsd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
