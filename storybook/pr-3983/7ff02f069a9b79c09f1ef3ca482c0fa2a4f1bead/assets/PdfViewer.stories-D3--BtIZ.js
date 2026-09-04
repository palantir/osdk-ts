import{j as r,M as s}from"./iframe-DZC97llC.js";import{P as p}from"./pdf-viewer-CumNt22w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--xi8xVHS.js";import"./preload-helper-BKx802u_.js";import"./PdfViewer-DGczwjwV.js";import"./index-B22k2ynk.js";import"./BasePdfViewer-DmvwNO04.js";import"./BasePdfViewer.module.css-CKsvWYSt.js";import"./PdfViewerAnnotationLayer-MLSRi_NO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pMx0KB0W.js";import"./PdfViewerOutlineSidebar-BvOHHzrx.js";import"./PdfViewerSidebarHeader-BaqIquZG.js";import"./useBaseUiId-C8ARUDoV.js";import"./useControlled-CM4OrEQX.js";import"./CompositeRoot-Y5l8H28P.js";import"./CompositeItem-7MvBWb4V.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./composite-4CN6pmFS.js";import"./svgIconContainer-CHUDLQoK.js";import"./PdfViewerSearchBar-B75NccFF.js";import"./chevron-up--StUrf4v.js";import"./chevron-down-CiXO6Fic.js";import"./cross-C2TZ8jDw.js";import"./PdfViewerSidebar-Cumn3Ehf.js";import"./index-kEMBdBjV.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./PdfViewerToolbar-DUJwvsTV.js";import"./Button-BKAvQm5U.js";import"./chevron-right-BIJ3wYX9.js";import"./Input-CJlK5efb.js";import"./search-D_uWqWVr.js";import"./spin-CPATH6Z2.js";import"./error-CWLyhGEl.js";import"./withOsdkMetrics-CTgXxJzO.js";import"./makeExternalStore-B1reYnYy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
