import{j as r,M as s}from"./iframe-DIsuQOn3.js";import{P as p}from"./pdf-viewer-BfwnOqQQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-WZNO0iM8.js";import"./preload-helper-B4-DY1XA.js";import"./PdfViewer-BI2D__6w.js";import"./index-DDUWefxd.js";import"./BasePdfViewer-CVJ_6EZI.js";import"./BasePdfViewer.module.css-CRWIfLxu.js";import"./PdfViewerAnnotationLayer-69c_A5Bt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFoTLudy.js";import"./PdfViewerOutlineSidebar-BuXRjJ73.js";import"./PdfViewerSidebarHeader-rgjR-KtW.js";import"./useBaseUiId-KXmclwOQ.js";import"./useControlled-CNU4MnWQ.js";import"./CompositeRoot-DlzFGTx3.js";import"./CompositeItem-Dk6CpBJD.js";import"./ToolbarRootContext-DPQZSAuV.js";import"./composite-Cieee4Ac.js";import"./svgIconContainer-Dc19E04o.js";import"./PdfViewerSearchBar-CFdmOPUl.js";import"./chevron-up-BhJgkVxf.js";import"./chevron-down-C_9riItt.js";import"./cross-tvYPvXsb.js";import"./PdfViewerSidebar-CfdZgweQ.js";import"./index-DkWi2KH1.js";import"./index-yKKDsrZW.js";import"./index-CHAIk4qd.js";import"./PdfViewerToolbar-BVLeoMcz.js";import"./Button-SgvkStmW.js";import"./chevron-right-CEGD0nC_.js";import"./Input-ChZNHuDE.js";import"./search-BXyxqXsb.js";import"./spin-C9xo102N.js";import"./error-DpfjWw-I.js";import"./withOsdkMetrics-DC7VgxYE.js";import"./makeExternalStore-2cK-X4a7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
