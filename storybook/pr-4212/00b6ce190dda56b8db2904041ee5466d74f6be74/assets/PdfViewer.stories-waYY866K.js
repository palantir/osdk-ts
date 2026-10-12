import{j as r,M as s}from"./iframe-De0JvUDI.js";import{P as p}from"./pdf-viewer-D6TLM1OR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-glZJKnON.js";import"./preload-helper-DW0Viam7.js";import"./PdfViewer-DPVMbAFD.js";import"./index-D2ucVBaK.js";import"./BasePdfViewer-CRwDf22R.js";import"./BasePdfViewer.module.css-CxrgI0ac.js";import"./PdfViewerAnnotationLayer-BrmfjaIu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaMoxxCJ.js";import"./PdfViewerOutlineSidebar-D1zE9DMS.js";import"./PdfViewerSidebarHeader-BSU2d6Z8.js";import"./useBaseUiId-ClfRKfDN.js";import"./useControlled-CRrAgDjk.js";import"./CompositeRoot-B46m9bWT.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./composite-Un7w28gc.js";import"./svgIconContainer-C40TH68P.js";import"./PdfViewerSearchBar-QGrkgU0u.js";import"./chevron-up-jDR939ib.js";import"./chevron-down-Yz9bQ-ge.js";import"./cross-D3NokT3S.js";import"./PdfViewerSidebar-DUsUCzg9.js";import"./index-POBaPims.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./PdfViewerToolbar-B9Xr7r5X.js";import"./Button-Bn-SxZv6.js";import"./chevron-right-C6sc62gp.js";import"./Input-C_CGkTkl.js";import"./search-MoU8b7Yy.js";import"./spin-Dd89WYD9.js";import"./error-D8UWFeng.js";import"./withOsdkMetrics-DlBld6qB.js";import"./makeExternalStore-CvSmdJRq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
