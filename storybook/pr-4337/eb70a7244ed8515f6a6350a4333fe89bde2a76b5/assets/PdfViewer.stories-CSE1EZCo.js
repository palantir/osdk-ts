import{j as r,M as s}from"./iframe-CmxH_uLC.js";import{P as p}from"./pdf-viewer-CWCOo7KJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBav3kxZ.js";import"./preload-helper-BeAOyUTZ.js";import"./PdfViewer-JMV5zaN7.js";import"./index-DJsCZSKi.js";import"./BasePdfViewer-CGfcBDno.js";import"./BasePdfViewer.module.css-UpEQRoPJ.js";import"./PdfViewerAnnotationLayer-_PiH-CYd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9nPDhjq.js";import"./PdfViewerOutlineSidebar-k6m2qhO3.js";import"./PdfViewerSidebarHeader-DRm74G5Z.js";import"./useBaseUiId-C0ZMCIGl.js";import"./useControlled-Cmxg5Gb3.js";import"./CompositeRoot-D0jHQ4pR.js";import"./CompositeItem-tCxULoej.js";import"./ToolbarRootContext-D7pkAdai.js";import"./composite-XJfPxJ_X.js";import"./svgIconContainer-B8tcX66C.js";import"./PdfViewerSearchBar-_PjWIEjY.js";import"./chevron-up-D3QI24Rb.js";import"./chevron-down-CyKsjkJ5.js";import"./cross-CyX8lMkj.js";import"./PdfViewerSidebar-Cru_md2Y.js";import"./index-CT0RUWXc.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./PdfViewerToolbar-CjU5eOej.js";import"./Button-LKCq4LKF.js";import"./chevron-right-N5Y2X-0i.js";import"./Input-BKp843TN.js";import"./search-TlKrCqYm.js";import"./spin-CDogQ5Vs.js";import"./error-Dd4yTEqY.js";import"./withOsdkMetrics-087Wob4c.js";import"./makeExternalStore-BlDQytTU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
