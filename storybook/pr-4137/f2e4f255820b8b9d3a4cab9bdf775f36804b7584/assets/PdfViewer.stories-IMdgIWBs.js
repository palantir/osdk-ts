import{j as r,M as s}from"./iframe-CuEAZ9dr.js";import{P as p}from"./pdf-viewer-B7qvw8D7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkUk3Q5x.js";import"./preload-helper-BGz8wZQR.js";import"./PdfViewer-D4KYwqj6.js";import"./index-DxIg76dX.js";import"./BasePdfViewer-BPblg-6L.js";import"./BasePdfViewer.module.css-BtTn1vuv.js";import"./PdfViewerAnnotationLayer-L_Q2dRey.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SNtpJtI5.js";import"./PdfViewerOutlineSidebar-D0S-mEtq.js";import"./PdfViewerSidebarHeader-DzMJgMSM.js";import"./useBaseUiId-BeONGSYl.js";import"./useControlled-DvKAwvsQ.js";import"./CompositeRoot-CGT6QJrs.js";import"./CompositeItem-BaOcY-5M.js";import"./ToolbarRootContext-D1XcDui9.js";import"./composite-Cuvx7hIz.js";import"./svgIconContainer-BvlE_9W9.js";import"./PdfViewerSearchBar-DKPvfQcX.js";import"./chevron-up-C4Txc0Rz.js";import"./chevron-down-CU80jHGh.js";import"./cross-WWifeHY9.js";import"./PdfViewerSidebar-VW1KS227.js";import"./index-DQjcUOKb.js";import"./index-Dvn68MG5.js";import"./index-CZP_mOC4.js";import"./PdfViewerToolbar-PfSGCGob.js";import"./Button-D_a0PtrD.js";import"./chevron-right-CUESYRTv.js";import"./Input-CVHctVKc.js";import"./search-DwLfbIUw.js";import"./spin-B1pnmS1c.js";import"./error-IRs09aCG.js";import"./withOsdkMetrics-BPCuw1K8.js";import"./makeExternalStore-C8vIUtyz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
