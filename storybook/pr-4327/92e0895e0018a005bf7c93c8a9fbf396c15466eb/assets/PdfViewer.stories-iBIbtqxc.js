import{j as r,M as s}from"./iframe-BJUxpguS.js";import{P as p}from"./pdf-viewer-BmCJQS2Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Chab4cIA.js";import"./preload-helper-CcPnSf_d.js";import"./PdfViewer-DWhnj3Ny.js";import"./index-DaIWjini.js";import"./BasePdfViewer-CPf0O8ft.js";import"./BasePdfViewer.module.css-C8vlzBKh.js";import"./PdfViewerAnnotationLayer-CQmQ_q-A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXbfBAKC.js";import"./PdfViewerOutlineSidebar-Ct4PsFtU.js";import"./PdfViewerSidebarHeader-DknOLfaV.js";import"./useBaseUiId-CUsRHIZ_.js";import"./useControlled-CV2ikSFn.js";import"./CompositeRoot-ml5tECJQ.js";import"./CompositeItem-DC6J7O9B.js";import"./ToolbarRootContext-96Mx370G.js";import"./composite-fRasBjEb.js";import"./svgIconContainer-DFZK57uZ.js";import"./PdfViewerSearchBar-Z7_TEebR.js";import"./chevron-up-C8GjKNPF.js";import"./chevron-down-D_Er5Djl.js";import"./cross-CF3gkRQt.js";import"./PdfViewerSidebar-JQrJiEm5.js";import"./index-DJciXKq6.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./PdfViewerToolbar-BTcxoXiA.js";import"./Button-D6-FRmxX.js";import"./chevron-right-DySMbH0N.js";import"./Input-JPeJu_Ok.js";import"./search-82BfoOmm.js";import"./spin-DsE81IUM.js";import"./error-GeJDXztf.js";import"./withOsdkMetrics-CmE_vyV8.js";import"./makeExternalStore-CsEdzCsV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
