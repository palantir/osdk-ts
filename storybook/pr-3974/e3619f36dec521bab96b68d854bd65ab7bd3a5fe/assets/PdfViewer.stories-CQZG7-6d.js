import{j as r,M as s}from"./iframe-D3l12Tr-.js";import{P as p}from"./pdf-viewer-BtCuhRno.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bcozqfQm.js";import"./preload-helper-PcHol1Ue.js";import"./PdfViewer-CaDSA4ul.js";import"./index-BPiZlFJR.js";import"./BasePdfViewer-B_mmU8a0.js";import"./BasePdfViewer.module.css-DW5kn4Bx.js";import"./PdfViewerAnnotationLayer-yLOwXfaX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DniL4qo-.js";import"./PdfViewerOutlineSidebar-D0GRTpa0.js";import"./PdfViewerSidebarHeader-Fgeaij5q.js";import"./useBaseUiId-BNJrpCWm.js";import"./useControlled-DWcGrjw6.js";import"./CompositeRoot-Bpga13dn.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./composite-CuNBJcuu.js";import"./svgIconContainer-CrW6rOVr.js";import"./PdfViewerSearchBar-tyB5gES2.js";import"./chevron-up-i5kv5uz7.js";import"./chevron-down-C6Fq88S4.js";import"./cross-C3J0WO3R.js";import"./PdfViewerSidebar-DG-SeE_n.js";import"./index-ChSzKfO9.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./PdfViewerToolbar-CQbI3bQO.js";import"./Button-DSLUEzYm.js";import"./chevron-right-DT_87kdi.js";import"./Input-BOpnVUAt.js";import"./search-CdpCaKTD.js";import"./spin-BtD-p2h1.js";import"./error-CKivbg2c.js";import"./withOsdkMetrics-62C1cNRI.js";import"./makeExternalStore-CvkBuVLJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
