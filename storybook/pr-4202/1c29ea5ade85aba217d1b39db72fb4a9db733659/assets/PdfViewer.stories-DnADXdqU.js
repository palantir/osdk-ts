import{j as r,M as s}from"./iframe-CIXJ1U8N.js";import{P as p}from"./pdf-viewer-CPYDeaKI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-XH_91sX6.js";import"./preload-helper-CgAbFwMM.js";import"./PdfViewer-BTor0gWE.js";import"./index-2fupTi2T.js";import"./BasePdfViewer-CgTtfcML.js";import"./BasePdfViewer.module.css-DavOsfYL.js";import"./PdfViewerAnnotationLayer-hgvsQcs9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dzsjuir8.js";import"./PdfViewerOutlineSidebar-CFq4A_wY.js";import"./PdfViewerSidebarHeader-4h8QgROj.js";import"./useBaseUiId-CSHKQrix.js";import"./useControlled-Bxgh_fPL.js";import"./CompositeRoot-XC3vNNsu.js";import"./CompositeItem-lWchzb2t.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./composite-CkH4ezLi.js";import"./svgIconContainer-Huhb1Vpv.js";import"./PdfViewerSearchBar-DIRoFi47.js";import"./chevron-up-DpyT9iZI.js";import"./chevron-down-7pDp1Oma.js";import"./cross-C_OpOp6J.js";import"./PdfViewerSidebar-CQaz7R61.js";import"./index-Cy-OTb6Y.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./PdfViewerToolbar-Cp2ovcg8.js";import"./Button-B0yxaPGE.js";import"./chevron-right-Dw3_oKoK.js";import"./Input-BNqEEzus.js";import"./search-C5_KVz48.js";import"./spin-DvM5x9wZ.js";import"./error-DmS7Y91z.js";import"./withOsdkMetrics-D0zzaBUz.js";import"./makeExternalStore-Dq-OkEYB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
