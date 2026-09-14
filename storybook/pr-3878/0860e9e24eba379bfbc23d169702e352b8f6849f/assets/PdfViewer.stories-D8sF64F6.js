import{j as r,M as s}from"./iframe-DLHR6L4Z.js";import{P as p}from"./pdf-viewer-D5bJbPLs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkOPsVn3.js";import"./preload-helper-Dx-zoqBZ.js";import"./PdfViewer-CV8G73jg.js";import"./index-Ci6l6bLg.js";import"./BasePdfViewer-PoWXMK-Y.js";import"./BasePdfViewer.module.css-BTiwvq5r.js";import"./PdfViewerAnnotationLayer-Sa2wkT6X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7NGS4Mg.js";import"./PdfViewerOutlineSidebar-DoS8tIox.js";import"./PdfViewerSidebarHeader-CIjMn2pz.js";import"./useBaseUiId-1yQPi4Ok.js";import"./useControlled-CyfyjGCX.js";import"./CompositeRoot-BlNlniem.js";import"./CompositeItem-Uc_jxWPR.js";import"./ToolbarRootContext-huk_G4xt.js";import"./composite-DufSPfDq.js";import"./svgIconContainer-OFY1tmQv.js";import"./PdfViewerSearchBar-DE5knLXx.js";import"./chevron-up-CDsKfcLT.js";import"./chevron-down-CLyH651g.js";import"./cross-Dr9ey-no.js";import"./PdfViewerSidebar-hSl5bK5E.js";import"./index-DPyGU-iS.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./PdfViewerToolbar-CRS2_zt0.js";import"./Button-Bfsbp0Vn.js";import"./chevron-right-CjHK7AXO.js";import"./Input-DPBWJEz5.js";import"./search-BKzV_clV.js";import"./spin-CXZ8-Dbn.js";import"./error-CPzqX2rB.js";import"./withOsdkMetrics-s0w2F5xR.js";import"./makeExternalStore-CGlrcfR1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
