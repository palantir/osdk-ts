import{j as r,M as s}from"./iframe-Cc5_drEC.js";import{P as p}from"./pdf-viewer-DI1IPWEz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TxkgTp4w.js";import"./preload-helper-Bt1W59RD.js";import"./PdfViewer-x532zjvd.js";import"./index-D-UZOeKX.js";import"./BasePdfViewer-DDMFK-IQ.js";import"./BasePdfViewer.module.css-B6E27VI2.js";import"./PdfViewerAnnotationLayer-IFKLAOob.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqPjOksu.js";import"./PdfViewerOutlineSidebar-CkstxQUo.js";import"./PdfViewerSidebarHeader-C60GWnyh.js";import"./useBaseUiId-DZZTvEON.js";import"./useControlled-DzeayCVC.js";import"./CompositeRoot-BTdIImwc.js";import"./CompositeItem-Zf76mXhE.js";import"./ToolbarRootContext-B17vRDJw.js";import"./composite-DTAuCieW.js";import"./svgIconContainer-DUNbWJiK.js";import"./PdfViewerSearchBar-CqJX_S9v.js";import"./chevron-up-CkbtO2kS.js";import"./chevron-down-DaAY8kxc.js";import"./cross-CJA5t11o.js";import"./PdfViewerSidebar-C23SDdzW.js";import"./index-DpTIc79B.js";import"./index-IxLV6xZ7.js";import"./index-fYCa685o.js";import"./PdfViewerToolbar-HMCmriW0.js";import"./Button-CLepS3ZY.js";import"./chevron-right-CG-Slc9B.js";import"./Input-BXNkfVg0.js";import"./search-C_Y495lk.js";import"./spin-CfoXPrBR.js";import"./error-CgtKdKTE.js";import"./withOsdkMetrics-uMhaipzm.js";import"./makeExternalStore-8Ml87JDf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
