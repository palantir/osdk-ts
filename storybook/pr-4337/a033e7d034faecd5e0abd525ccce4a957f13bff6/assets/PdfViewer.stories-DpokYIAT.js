import{j as r,M as s}from"./iframe-CSosjOmv.js";import{P as p}from"./pdf-viewer-Df24JmM4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bu_w-udk.js";import"./preload-helper-C-gjDSXJ.js";import"./PdfViewer-CmZx-Rs5.js";import"./index-DzdecULf.js";import"./BasePdfViewer-BEOAckSq.js";import"./BasePdfViewer.module.css-CqtX9bBu.js";import"./PdfViewerAnnotationLayer-HZ9n3IOy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_VyRDoi.js";import"./PdfViewerOutlineSidebar-Cdi0YcO8.js";import"./PdfViewerSidebarHeader-Dw-sTMb6.js";import"./useBaseUiId-B_aLw92E.js";import"./useControlled-DcuHztpz.js";import"./CompositeRoot-D7F0oeRQ.js";import"./CompositeItem-CDrUmRrI.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./composite-CFm1NNj3.js";import"./svgIconContainer-C8vg2tag.js";import"./PdfViewerSearchBar-CQC8kfgp.js";import"./chevron-up-CVLg-Wwv.js";import"./chevron-down-C05xfaFU.js";import"./cross-CBsOArVe.js";import"./PdfViewerSidebar-CL1DahWV.js";import"./index-qg2om6Py.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./PdfViewerToolbar-CKf2fpv4.js";import"./Button-CXkasH7A.js";import"./chevron-right-DCibbuxG.js";import"./Input-BYDbWdB8.js";import"./search-1vXjOjjG.js";import"./spin-DBbTL3aq.js";import"./error-C8uWSFuO.js";import"./withOsdkMetrics-DObV_URP.js";import"./makeExternalStore-C3SFvB3D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
