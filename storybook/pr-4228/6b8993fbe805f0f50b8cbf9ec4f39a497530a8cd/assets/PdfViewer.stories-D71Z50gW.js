import{j as r,M as s}from"./iframe-SdQCyUgp.js";import{P as p}from"./pdf-viewer-BJ9DJSJ7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2GZE2pi.js";import"./preload-helper-CW3K-5XG.js";import"./PdfViewer-Dg5kEJn2.js";import"./index-D3TvMuk-.js";import"./BasePdfViewer-DF7ViBUV.js";import"./BasePdfViewer.module.css-D8TJbQ8K.js";import"./PdfViewerAnnotationLayer-DWcicd7N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6N5H8RK.js";import"./PdfViewerOutlineSidebar-Bq_AYS7U.js";import"./PdfViewerSidebarHeader-BUaWw5yT.js";import"./useBaseUiId-CBeYQDU3.js";import"./useControlled-B_XDx7ZC.js";import"./CompositeRoot-DW0GclMe.js";import"./CompositeItem-DAnhs0Iq.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./composite-DgbmPZb7.js";import"./svgIconContainer-DRjj58Q8.js";import"./PdfViewerSearchBar-BpOhLf97.js";import"./chevron-up-DTKlfGVM.js";import"./chevron-down-Bqf_32Up.js";import"./cross-5HR9Xmh-.js";import"./PdfViewerSidebar-CowJjaVE.js";import"./index-CqaCF-Lj.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./PdfViewerToolbar-DXhmDNlx.js";import"./Button-DVBp1SrV.js";import"./chevron-right-nPrxw0mQ.js";import"./Input-Dx-qEMGm.js";import"./search-DC3bQpgx.js";import"./spin-CroZ0ozD.js";import"./error-CUc6sGqF.js";import"./withOsdkMetrics-WETF-eLM.js";import"./makeExternalStore-BjNlV_-Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
