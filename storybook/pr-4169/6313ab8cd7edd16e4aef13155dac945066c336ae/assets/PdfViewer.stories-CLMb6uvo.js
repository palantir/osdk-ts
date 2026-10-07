import{j as r,M as s}from"./iframe-Cwq9LQgh.js";import{P as p}from"./pdf-viewer-DWm6nKNC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCAPLd8j.js";import"./preload-helper-BwR6Pfp9.js";import"./PdfViewer-D6qxKzq1.js";import"./index-CtMIqXL_.js";import"./BasePdfViewer-DirbXKjs.js";import"./BasePdfViewer.module.css-BOTfT3bg.js";import"./PdfViewerAnnotationLayer-B4PRRZib.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D06wChfJ.js";import"./PdfViewerOutlineSidebar-GYnwSdK0.js";import"./PdfViewerSidebarHeader-_D7CJO_K.js";import"./useBaseUiId-D-o9ssMY.js";import"./useControlled-BO63cc37.js";import"./CompositeRoot-VOT1Yqu2.js";import"./CompositeItem-B62zciM4.js";import"./ToolbarRootContext-nSskdiih.js";import"./composite-CN6FxDtP.js";import"./svgIconContainer-Dbb1xWM-.js";import"./PdfViewerSearchBar-CbNgI_kV.js";import"./chevron-up-CEljhweK.js";import"./chevron-down-Cm38Y6L5.js";import"./cross-Dfvafrcv.js";import"./PdfViewerSidebar-C8oHbc6U.js";import"./index-C9VhUtVl.js";import"./index-DWCgAU1r.js";import"./index-BEyE-4n9.js";import"./PdfViewerToolbar-2ntj69Y9.js";import"./Button-C7rjw-Q7.js";import"./chevron-right-CnhiIQol.js";import"./Input-COyT4omE.js";import"./search-DyrwlR15.js";import"./spin-DOBMFjrk.js";import"./error-DXeSegvi.js";import"./withOsdkMetrics-CKuskwhT.js";import"./makeExternalStore-DDN6NSWJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
