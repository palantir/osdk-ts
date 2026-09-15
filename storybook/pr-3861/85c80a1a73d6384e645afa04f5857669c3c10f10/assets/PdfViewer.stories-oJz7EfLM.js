import{j as r,M as s}from"./iframe-DxvN0M7K.js";import{P as p}from"./pdf-viewer-COHELRDO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoW9iu1w.js";import"./preload-helper-xzue2qXM.js";import"./PdfViewer-BSyzctbv.js";import"./index-DH5yemLr.js";import"./BasePdfViewer-BF0lqp3e.js";import"./BasePdfViewer.module.css-CVZJeypF.js";import"./PdfViewerAnnotationLayer-BMjBdt0W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CK1hswXd.js";import"./PdfViewerOutlineSidebar-WxVrZmhe.js";import"./PdfViewerSidebarHeader-CfWqzpgb.js";import"./useBaseUiId-6JQrMuoN.js";import"./useControlled-BsKyqVLJ.js";import"./CompositeRoot-B0vxQSqS.js";import"./CompositeItem-BM5p6vye.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./composite-BeC4x7c_.js";import"./svgIconContainer-C1vr-TwX.js";import"./PdfViewerSearchBar-BZr5QL1B.js";import"./chevron-up-C_Q4WwNI.js";import"./chevron-down-B07rpeLd.js";import"./cross-Jl3VvOEN.js";import"./PdfViewerSidebar-C0vr5OeU.js";import"./index-CiwVfYV4.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./PdfViewerToolbar-DYgFB3ZL.js";import"./Button-DeN2HtXI.js";import"./chevron-right-CypSL3x8.js";import"./Input-B5Cdt3Jn.js";import"./search-CWcacXbv.js";import"./spin-CmC4Zr_0.js";import"./error-Cr5iHDkF.js";import"./withOsdkMetrics-BeV-dE9b.js";import"./makeExternalStore-BQakVy-m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
