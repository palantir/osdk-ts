import{j as r,M as s}from"./iframe-weo2ftOt.js";import{P as p}from"./pdf-viewer-DNvpaoN2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLEN3A8M.js";import"./preload-helper-CccATkyg.js";import"./PdfViewer-CaUH8pb1.js";import"./index-BzFNlzeA.js";import"./BasePdfViewer-C0Q096J-.js";import"./BasePdfViewer.module.css-DgL-2ejP.js";import"./PdfViewerAnnotationLayer-DZtijym2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVV0EfW1.js";import"./PdfViewerOutlineSidebar-MLXbYtYo.js";import"./PdfViewerSidebarHeader-L2nHSg8r.js";import"./useBaseUiId-Ca9MSPeN.js";import"./useControlled-BR3V1Gxk.js";import"./CompositeRoot-BVmunixJ.js";import"./CompositeItem-tLUZG1Hv.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./composite-CXbXQTWA.js";import"./svgIconContainer-4wqza-Yn.js";import"./PdfViewerSearchBar-CV9YOY8r.js";import"./chevron-up-DOxm5O-b.js";import"./chevron-down-BqDjxAzh.js";import"./cross-DFxtUTH2.js";import"./PdfViewerSidebar-BWvzhsrL.js";import"./index-jbXLVEma.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./PdfViewerToolbar-B-Zd-K3T.js";import"./Button-DTZufqgI.js";import"./chevron-right-DC6VViLN.js";import"./Input-DDH0znUE.js";import"./search-D7AcF35x.js";import"./spin-BJpN6P-g.js";import"./error-LA7kedRF.js";import"./withOsdkMetrics-td22ADns.js";import"./makeExternalStore-CGRq4C4C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
