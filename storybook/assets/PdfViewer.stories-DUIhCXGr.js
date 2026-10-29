import{j as r,M as s}from"./iframe-tf0495v_.js";import{P as p}from"./pdf-viewer-5MxNlEEx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SV7Qqn54.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CfO5Dg7C.js";import"./index-D2AIaBAZ.js";import"./BasePdfViewer-BFcOkZfF.js";import"./BasePdfViewer.module.css-Cb7xlTn5.js";import"./PdfViewerAnnotationLayer-BXTJ9ppF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-83YF0UJv.js";import"./PdfViewerOutlineSidebar-BXFjSuev.js";import"./PdfViewerSidebarHeader-Bw0GFLPb.js";import"./useBaseUiId-CWsIXkuU.js";import"./useControlled-1fYDQt6k.js";import"./CompositeRoot-DGNf-qU4.js";import"./CompositeItem-D--GgbU9.js";import"./ToolbarRootContext-DPqmeZr5.js";import"./composite-Ba9ifDV9.js";import"./svgIconContainer-C-fh6e97.js";import"./PdfViewerSearchBar-BQ2Wvne5.js";import"./chevron-up-BVt43LIw.js";import"./chevron-down-DSCp4Cy5.js";import"./cross--xJKKgee.js";import"./PdfViewerSidebar-DonrP9bf.js";import"./index-DhVg9-FN.js";import"./index-DcxI05po.js";import"./index-BDW4zxbF.js";import"./PdfViewerToolbar-ebSUB4m1.js";import"./Button-6k_Ayrrm.js";import"./chevron-right-Bi6oqlKw.js";import"./Input-DEfwNsC4.js";import"./search-BWQUBjsa.js";import"./spin-Bo_4EQnF.js";import"./error-DLfqe8ag.js";import"./withOsdkMetrics-B9UpkJYI.js";import"./makeExternalStore-C_sk4jS_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
