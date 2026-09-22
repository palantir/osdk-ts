import{j as r,M as s}from"./iframe-8DMGEq06.js";import{P as p}from"./pdf-viewer-CetOzooN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsoF10dU.js";import"./preload-helper-BjAl-lK2.js";import"./PdfViewer-BhR3JeRQ.js";import"./index-DRq4gjPq.js";import"./BasePdfViewer-ha0M7OJl.js";import"./BasePdfViewer.module.css-duAacylG.js";import"./PdfViewerAnnotationLayer-D5GDtcdD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXb37U3N.js";import"./PdfViewerOutlineSidebar-fhgX0jgG.js";import"./PdfViewerSidebarHeader-iWjaITX0.js";import"./useBaseUiId-B2FWNhGQ.js";import"./useControlled-Khc0ddfA.js";import"./CompositeRoot-CXeDCZsV.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./composite-CY_QXMLo.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./PdfViewerSearchBar-5KsBqz36.js";import"./chevron-up-C862Oldf.js";import"./chevron-down-F_95MoSJ.js";import"./cross-DYaZw4Am.js";import"./PdfViewerSidebar-CD0iapjh.js";import"./index-CsyOcyyy.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./PdfViewerToolbar-D1KGp5eo.js";import"./Button-CraGbNXA.js";import"./chevron-right-DOpfBmKA.js";import"./Input-dydaNapo.js";import"./search-CvifUsIK.js";import"./spin-CqsYyeBS.js";import"./error-CiLZ8SWq.js";import"./withOsdkMetrics-DCPVCTJZ.js";import"./makeExternalStore-NZ3mh5Ti.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
