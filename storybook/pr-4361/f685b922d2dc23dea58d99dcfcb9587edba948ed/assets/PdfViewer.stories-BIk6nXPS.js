import{j as r,M as s}from"./iframe-BVSi64oE.js";import{P as p}from"./pdf-viewer-Boxr_09L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RVfjd8If.js";import"./preload-helper-BU1z3h6W.js";import"./PdfViewer-9Qec4nQt.js";import"./index-CuytY3fR.js";import"./BasePdfViewer-CeaTf_QP.js";import"./BasePdfViewer.module.css-BhepCwBb.js";import"./PdfViewerAnnotationLayer-C6W7rLHP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbXsqhBi.js";import"./PdfViewerOutlineSidebar-BV5sCOI1.js";import"./PdfViewerSidebarHeader-CFfEQxCB.js";import"./useBaseUiId-CqqBN_pD.js";import"./useControlled-oPybVTav.js";import"./CompositeRoot-dG33d86E.js";import"./CompositeItem-D9Lav6h_.js";import"./ToolbarRootContext-nMjJNdxo.js";import"./composite-iCAL7ZoF.js";import"./svgIconContainer-DOaF4Z7d.js";import"./PdfViewerSearchBar-C5RANqkk.js";import"./chevron-up-723EvyDD.js";import"./chevron-down-B1I3Tews.js";import"./cross-BSD5cpOi.js";import"./PdfViewerSidebar-BCm_Jzel.js";import"./index-DhvfxU91.js";import"./index-XyA3IOnM.js";import"./index-De4RyO4Q.js";import"./PdfViewerToolbar-C6HIIa1D.js";import"./Button-BWzl1MwA.js";import"./chevron-right-CCd_ILGg.js";import"./Input-9e4VYX3J.js";import"./search-DCcotSfq.js";import"./spin-BCClI34K.js";import"./error-DNoXedqp.js";import"./withOsdkMetrics-DG2TDFRU.js";import"./makeExternalStore-BZP7re_5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
