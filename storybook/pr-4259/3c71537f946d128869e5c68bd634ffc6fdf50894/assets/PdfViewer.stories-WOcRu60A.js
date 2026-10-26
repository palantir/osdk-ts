import{j as r,M as s}from"./iframe-C_udlJU4.js";import{P as p}from"./pdf-viewer-mkrr2E3O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrIWGHsA.js";import"./preload-helper-D7A5VPqB.js";import"./PdfViewer-Dd4fuGyK.js";import"./index-D5Td05wZ.js";import"./BasePdfViewer-BTekqEXn.js";import"./BasePdfViewer.module.css-Bu4x_uiP.js";import"./PdfViewerAnnotationLayer-B_ajse8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EKScposx.js";import"./PdfViewerOutlineSidebar-DS1xAoRF.js";import"./PdfViewerSidebarHeader-BmqYVLQn.js";import"./useBaseUiId-D9eSz4SE.js";import"./useControlled-BScpaCoT.js";import"./CompositeRoot-MDMXsagZ.js";import"./CompositeItem-D9nRDYX0.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./composite-0__3ht0j.js";import"./svgIconContainer-YTE10dOj.js";import"./PdfViewerSearchBar-Di_Ghe1V.js";import"./chevron-up-CxhBgQK8.js";import"./chevron-down-BaUNK2Yk.js";import"./cross-aLVt525v.js";import"./PdfViewerSidebar-TCPNYdnL.js";import"./index-CzIBiuyR.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./PdfViewerToolbar-CXvFRZY5.js";import"./Button-DMGSDF9f.js";import"./chevron-right-C2llO5QK.js";import"./Input-DnhGyrNk.js";import"./search-BeZJ_QRn.js";import"./spin-4WbF8C0F.js";import"./error-DvqmoNGN.js";import"./withOsdkMetrics-Bs3JzGD4.js";import"./makeExternalStore-DSU-MzRu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
