import{j as r,M as s}from"./iframe-DtoP6UZw.js";import{P as p}from"./pdf-viewer-DpFlN79F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCuNYiwA.js";import"./preload-helper-CFHJtsfx.js";import"./PdfViewer-D1-95kY9.js";import"./index-By2xjehZ.js";import"./BasePdfViewer-CKtJCZuz.js";import"./BasePdfViewer.module.css-CtZ50Qz7.js";import"./PdfViewerAnnotationLayer-RkLifyJQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jaBdgr64.js";import"./PdfViewerOutlineSidebar-KWyKxRUO.js";import"./PdfViewerSidebarHeader-B0gzm_sM.js";import"./useBaseUiId-C9myCpxn.js";import"./useControlled-CLD2ZIzN.js";import"./CompositeRoot-aZVuHxv1.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./composite-ZO42S3vI.js";import"./svgIconContainer-DfGYICSx.js";import"./PdfViewerSearchBar-IxA47AUy.js";import"./chevron-up-DuX0xyRv.js";import"./chevron-down-Cp3kMwRT.js";import"./cross-Bz8JPJRT.js";import"./PdfViewerSidebar-Die6ihSM.js";import"./index-D-jbKgqf.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./PdfViewerToolbar-BZCow3sc.js";import"./Button-MPweKG2u.js";import"./chevron-right-DXBhYb6y.js";import"./Input-Cj3lDoEk.js";import"./search-BGmMu9uk.js";import"./spin-BA1DCrXF.js";import"./error-BgO9vMGd.js";import"./withOsdkMetrics-BylLLJIu.js";import"./makeExternalStore-CFHh14tM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
