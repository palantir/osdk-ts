import{j as r,M as s}from"./iframe-BOYcc0dJ.js";import{P as p}from"./pdf-viewer-B0qe-uWQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dc06N0I2.js";import"./preload-helper-BnWf8j3v.js";import"./PdfViewer-xRhMFq2v.js";import"./index-Yg2EcgVZ.js";import"./BasePdfViewer-CxwzjEu4.js";import"./BasePdfViewer.module.css-DvNboi67.js";import"./PdfViewerAnnotationLayer-DmA5pSvQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-B94AOc.js";import"./PdfViewerOutlineSidebar-AvgFgXlp.js";import"./PdfViewerSidebarHeader-DzvMBYZ1.js";import"./useBaseUiId-DX9ZiXGI.js";import"./useControlled-D-ZDbicW.js";import"./CompositeRoot-DFaADai_.js";import"./CompositeItem-Bx5eT0s8.js";import"./ToolbarRootContext-Do3BrLln.js";import"./composite-D8na-rSh.js";import"./svgIconContainer-dI8qqoMC.js";import"./PdfViewerSearchBar-DD1GRGdd.js";import"./chevron-up-Uw6izt2X.js";import"./chevron-down-DcL5hgyv.js";import"./cross-M1Qm_DTM.js";import"./PdfViewerSidebar-BXX3HVJA.js";import"./index-BDkH7Rg4.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./PdfViewerToolbar-1-r2VkdB.js";import"./Button-hF353HMT.js";import"./chevron-right-CK0nYmDF.js";import"./Input-BJWiKc9C.js";import"./search-BW9zSgLT.js";import"./spin-Bkj3losm.js";import"./error-JJ7_ntNs.js";import"./withOsdkMetrics-BIq6FQjv.js";import"./makeExternalStore-Cl0TwftQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
