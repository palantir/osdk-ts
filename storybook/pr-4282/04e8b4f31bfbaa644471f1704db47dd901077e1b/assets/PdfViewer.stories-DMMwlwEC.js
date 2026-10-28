import{j as r,M as s}from"./iframe-DWrTLUp6.js";import{P as p}from"./pdf-viewer-Dd2Wv9fx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DbrgnCQi.js";import"./preload-helper-G5GldQrR.js";import"./PdfViewer-D7gYJbov.js";import"./index-tEnhVYEp.js";import"./BasePdfViewer-CQGG6Ps_.js";import"./BasePdfViewer.module.css-CGbDwVYN.js";import"./PdfViewerAnnotationLayer-BCxMXsfC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCzHY7j0.js";import"./PdfViewerOutlineSidebar-CgOC2PIB.js";import"./PdfViewerSidebarHeader-b-Zj49OR.js";import"./useBaseUiId-X8UvLlac.js";import"./useControlled-BL4uBJXc.js";import"./CompositeRoot-r3dy_26P.js";import"./CompositeItem-BpSxYl_N.js";import"./ToolbarRootContext-Bh1zwv5x.js";import"./composite-CZ2VobqK.js";import"./svgIconContainer-BsgOYiaE.js";import"./PdfViewerSearchBar-CWBBcaUQ.js";import"./chevron-up-rKTYpzDt.js";import"./chevron-down-BdqS2CCw.js";import"./cross-rPpE888H.js";import"./PdfViewerSidebar-DWn7Z5we.js";import"./index-C7nt3-Ul.js";import"./index-m17_hvWN.js";import"./index-DtPEGSb3.js";import"./PdfViewerToolbar-CpjrM1kn.js";import"./Button-kvP0U3yl.js";import"./chevron-right-DUm10zqS.js";import"./Input-Dd76dU6P.js";import"./search-Cj067yfV.js";import"./spin-DnJxdbqx.js";import"./error-mT38HeTS.js";import"./withOsdkMetrics-DjJmHGOy.js";import"./makeExternalStore-BVTsUjUO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
