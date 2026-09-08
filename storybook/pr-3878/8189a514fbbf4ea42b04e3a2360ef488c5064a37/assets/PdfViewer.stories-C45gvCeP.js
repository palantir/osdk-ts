import{j as r,M as s}from"./iframe-56aCtkcZ.js";import{P as p}from"./pdf-viewer-BoN5gxZx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aKkuAEPh.js";import"./preload-helper-DP50sY1P.js";import"./PdfViewer-BvQmDsnP.js";import"./index-BM5nCcvA.js";import"./BasePdfViewer-nTTGM5JS.js";import"./BasePdfViewer.module.css-Dwd6TNdR.js";import"./PdfViewerAnnotationLayer-ewTjDuBC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBFpvBS6.js";import"./PdfViewerOutlineSidebar-xAMCsRLL.js";import"./PdfViewerSidebarHeader-BGiTrxKz.js";import"./useBaseUiId-D82-BIAj.js";import"./useControlled-BNAN5oeG.js";import"./CompositeRoot-C2a0nRxC.js";import"./CompositeItem-CtIfORVC.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./composite-Bol_PDWG.js";import"./svgIconContainer-Da40OoQe.js";import"./PdfViewerSearchBar-Bx6Kyvxe.js";import"./chevron-up-DYlu6VWh.js";import"./chevron-down--SGqA3gF.js";import"./cross-BkceNYXb.js";import"./PdfViewerSidebar-BJdpwgLy.js";import"./index-BglOGw85.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./PdfViewerToolbar-CVvVUpVb.js";import"./Button-C0vE2bzb.js";import"./chevron-right-Cyg-V_Ei.js";import"./Input-BUSfhI-b.js";import"./search-Df5_6yBi.js";import"./spin-B9aiQOp4.js";import"./error-t-pHJ0in.js";import"./withOsdkMetrics-BQAZKQ7x.js";import"./makeExternalStore-C8LtB6Bq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
