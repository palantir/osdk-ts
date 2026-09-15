import{j as r,M as s}from"./iframe-CMAdZ-tl.js";import{P as p}from"./pdf-viewer-BT7CRaUC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM6lwaaH.js";import"./preload-helper-BCEvkaTh.js";import"./PdfViewer-C-07BSBw.js";import"./index-uZXDV4-c.js";import"./BasePdfViewer-1dxenqD5.js";import"./BasePdfViewer.module.css-DKxwP3UL.js";import"./PdfViewerAnnotationLayer-D9NRdaf3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DK95keeB.js";import"./PdfViewerOutlineSidebar-J5vonr7X.js";import"./PdfViewerSidebarHeader-YviJqUcb.js";import"./useBaseUiId-C6a-nIiQ.js";import"./useControlled-BNZjX3EY.js";import"./CompositeRoot-DPqOwPLX.js";import"./CompositeItem-WbzOgrFX.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./composite-hUzc6DpG.js";import"./svgIconContainer-BGo4Ffmi.js";import"./PdfViewerSearchBar-CYMY7KZO.js";import"./chevron-up-BOhlPChP.js";import"./chevron-down--0eNTL5v.js";import"./cross-TecNFToN.js";import"./PdfViewerSidebar-Dy6sGZU8.js";import"./index-BkytFj73.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./PdfViewerToolbar-tbwfuquw.js";import"./Button-CMbZ2dfd.js";import"./chevron-right-Bz7D4sOM.js";import"./Input-EDICR5v8.js";import"./search-Bbf0CQIG.js";import"./spin-6bJbRsLH.js";import"./error-CKKGLKp7.js";import"./withOsdkMetrics-XprJI73J.js";import"./makeExternalStore-Y97085jQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
