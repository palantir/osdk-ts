import{j as r,M as s}from"./iframe-CsKQ3MiN.js";import{P as p}from"./pdf-viewer-BsU-DJIi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzbCvMhb.js";import"./preload-helper-DGKcnXHD.js";import"./PdfViewer-CVkeWB9c.js";import"./index-Dr6q-Sfz.js";import"./BasePdfViewer-C5sSMfUr.js";import"./BasePdfViewer.module.css-C8Ai8lmz.js";import"./PdfViewerAnnotationLayer-CQoGwt3w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qmHT4nPy.js";import"./PdfViewerOutlineSidebar-BU1wuvxY.js";import"./PdfViewerSidebarHeader-C19Cu23G.js";import"./useBaseUiId-BzoXUnOl.js";import"./useControlled-Cob_C-Qn.js";import"./CompositeRoot-BlXaoSVk.js";import"./CompositeItem-DZkfIwKg.js";import"./ToolbarRootContext-BNxut5tp.js";import"./composite-CoD6tMpx.js";import"./svgIconContainer-CEz_OqiJ.js";import"./PdfViewerSearchBar-CNP1T5zG.js";import"./chevron-up-hsl77dP2.js";import"./chevron-down-BCi4kbBt.js";import"./cross-D0wLRLht.js";import"./PdfViewerSidebar-DcpHIFqf.js";import"./index-DoTKq459.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./PdfViewerToolbar-BcvPA9jh.js";import"./Button-BEOltIVE.js";import"./chevron-right-B7SCPUE6.js";import"./Input-D9JW6ixL.js";import"./search-cTPZqcQC.js";import"./spin-BALcuib0.js";import"./error-C-bxu3dO.js";import"./withOsdkMetrics-z1U7tMx_.js";import"./makeExternalStore-Czb1TAUA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
