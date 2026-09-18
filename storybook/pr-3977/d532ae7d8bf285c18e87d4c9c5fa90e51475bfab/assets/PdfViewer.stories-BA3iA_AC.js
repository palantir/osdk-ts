import{j as r,M as s}from"./iframe-TxXxbmz5.js";import{P as p}from"./pdf-viewer-D-34vTIP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0WodXpd.js";import"./preload-helper-CpxRQbhd.js";import"./PdfViewer-CMBZHmcJ.js";import"./index-CN0gJRJO.js";import"./BasePdfViewer-CRzlqHP1.js";import"./BasePdfViewer.module.css-D6pUrtsQ.js";import"./PdfViewerAnnotationLayer-PwtmbgB_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuQj_R5k.js";import"./PdfViewerOutlineSidebar-CNOQIiDa.js";import"./PdfViewerSidebarHeader-DpV0rIOF.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./useControlled-DruZmDs3.js";import"./CompositeRoot-DKXv_0uM.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./composite-DOASapxT.js";import"./svgIconContainer-CELXinHy.js";import"./PdfViewerSearchBar-DLoEtSc9.js";import"./chevron-up-CZfIwrNs.js";import"./chevron-down-BclEY4pC.js";import"./cross-VXN4aiwS.js";import"./PdfViewerSidebar-4IHjFJ4T.js";import"./index-CRtDM6bX.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./PdfViewerToolbar-KzDwNHAN.js";import"./Button-LZRzEtLJ.js";import"./chevron-right-C5pE9j-q.js";import"./Input-B4WkyavH.js";import"./search-BC9yKYZ2.js";import"./spin-xb55Z2-j.js";import"./error-DK4Y1HxX.js";import"./withOsdkMetrics-BEHPBM8E.js";import"./makeExternalStore-Da0z5igE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
