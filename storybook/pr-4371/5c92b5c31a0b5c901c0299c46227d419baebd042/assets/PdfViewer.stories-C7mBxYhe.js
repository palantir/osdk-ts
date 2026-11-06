import{j as r,M as s}from"./iframe-BTjo4hoa.js";import{P as p}from"./pdf-viewer-h3J0XmkS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0XeeiVtx.js";import"./preload-helper-GDbQ32hR.js";import"./PdfViewer-BB0adblB.js";import"./index-DzoGtTYW.js";import"./BasePdfViewer-CKZxxxIR.js";import"./BasePdfViewer.module.css-RtbjwyYL.js";import"./PdfViewerAnnotationLayer-ctTTp3rY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FJPijIwR.js";import"./PdfViewerOutlineSidebar-WBEV-s-P.js";import"./PdfViewerSidebarHeader-BjuU4x5j.js";import"./useBaseUiId-DiKKztfj.js";import"./useControlled-DrQ-vlJr.js";import"./CompositeRoot-CKEaTo9L.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./composite-DnWT1pj_.js";import"./svgIconContainer-Ci_Sec47.js";import"./PdfViewerSearchBar-BLaVTkeN.js";import"./chevron-up-B3FYNOj0.js";import"./chevron-down-Ca_e0izc.js";import"./cross-C7uzIn7X.js";import"./PdfViewerSidebar-CPvH3EcB.js";import"./index-Dnr1AQ4b.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./PdfViewerToolbar-DrVdNHEv.js";import"./Button-BcNFr6aW.js";import"./chevron-right-B5DLyBjh.js";import"./Input-C7imWp_z.js";import"./search-CK191Oob.js";import"./spin-B2gFy7N6.js";import"./error-D2oiLEA6.js";import"./withOsdkMetrics-DsZGAGfW.js";import"./makeExternalStore-Ch7iFOMP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
