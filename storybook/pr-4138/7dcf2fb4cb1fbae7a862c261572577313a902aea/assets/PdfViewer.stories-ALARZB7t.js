import{j as r,M as s}from"./iframe-E4YUsTVF.js";import{P as p}from"./pdf-viewer-Cbx1vr-t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dk2biW74.js";import"./preload-helper-DS93hH50.js";import"./PdfViewer-Wm3EyJ6M.js";import"./index-33WajHAP.js";import"./BasePdfViewer-CJ1V3ELo.js";import"./BasePdfViewer.module.css-YxXprP-n.js";import"./PdfViewerAnnotationLayer-CotyW7jH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M820CJZi.js";import"./PdfViewerOutlineSidebar-d7PGJUr2.js";import"./PdfViewerSidebarHeader-uhChsGtA.js";import"./useBaseUiId-Cmr5xOLR.js";import"./useControlled-DcS_dYjp.js";import"./CompositeRoot-4xM_8XM2.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./composite-BPb4GIr2.js";import"./svgIconContainer-BpDOXtMt.js";import"./PdfViewerSearchBar-KaaaN_Ex.js";import"./chevron-up-DH8kTr-f.js";import"./chevron-down-BXAN807d.js";import"./cross-B0teiHtj.js";import"./PdfViewerSidebar-BPXmWYOz.js";import"./index-C0oG0k9r.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./PdfViewerToolbar-Cz-iE9zq.js";import"./Button-D8Hq8qlo.js";import"./chevron-right-D67OEFAA.js";import"./Input-DzBskEWR.js";import"./search-C6TyODke.js";import"./spin-D7FckdA0.js";import"./error-C7OFda1X.js";import"./withOsdkMetrics-BjBJAZAm.js";import"./makeExternalStore-BPwvobNb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
