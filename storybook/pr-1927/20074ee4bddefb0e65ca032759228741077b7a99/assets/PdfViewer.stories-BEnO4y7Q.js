import{j as r,M as s}from"./iframe-B-Vichjj.js";import{P as p}from"./pdf-viewer-C8uEzEPb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bwekq4pF.js";import"./preload-helper-Cti1Qb3M.js";import"./PdfViewer-BehbkHJd.js";import"./index-BrQCMcFI.js";import"./BasePdfViewer-B_oTA1ZY.js";import"./BasePdfViewer.module.css-DMLMJPI4.js";import"./PdfViewerAnnotationLayer-BC6CRDMI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bc_ewtXn.js";import"./PdfViewerOutlineSidebar-C-KNIhFG.js";import"./PdfViewerSidebarHeader-DZ7Kp49z.js";import"./useBaseUiId-BbqzJTxC.js";import"./useControlled-CyehoLEN.js";import"./CompositeRoot-YMHOwtxM.js";import"./CompositeItem-nXpoZPrc.js";import"./ToolbarRootContext-Gi45tW71.js";import"./composite-Disga3Gv.js";import"./svgIconContainer-DKifyIgl.js";import"./PdfViewerSearchBar-D8t5rctd.js";import"./chevron-up-BQ6t7FBd.js";import"./chevron-down-BnTGK2z6.js";import"./cross-DLbo6j99.js";import"./PdfViewerSidebar-BJOnuKRr.js";import"./index-p0g_0z-Q.js";import"./index-CXmDZCit.js";import"./index-roXzNt2R.js";import"./PdfViewerToolbar-wbwRJ7a5.js";import"./Button-DhB4QIGX.js";import"./chevron-right-C8FhUMDR.js";import"./Input-Dd8GNXSA.js";import"./search-DODYwrTJ.js";import"./spin-BL1RPhPQ.js";import"./error-F0thqKPJ.js";import"./withOsdkMetrics-CNKwevxI.js";import"./makeExternalStore-CZ3SFYVb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
