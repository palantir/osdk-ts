import{j as r,M as s}from"./iframe-WKt3pp3u.js";import{P as p}from"./pdf-viewer-CUSbqpWH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KP9k0Gc7.js";import"./preload-helper-C-2N1dom.js";import"./PdfViewer-DqH-k9zK.js";import"./index-Cn0NPQc9.js";import"./BasePdfViewer-Bmwd36rK.js";import"./BasePdfViewer.module.css-CXtGAwpK.js";import"./PdfViewerAnnotationLayer-hwXyjbVu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZELayKa.js";import"./PdfViewerOutlineSidebar-DHwVmyII.js";import"./PdfViewerSidebarHeader-qGk5Zx9N.js";import"./useBaseUiId-KSUwx5Md.js";import"./useControlled-CFMpFbMm.js";import"./CompositeRoot-THw1aWyv.js";import"./CompositeItem-Bj3DFZfQ.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./composite-B4lF1Gsb.js";import"./svgIconContainer-Dd6XoJmG.js";import"./PdfViewerSearchBar-BcmGXkCF.js";import"./chevron-up-Ov-XdWcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./cross-4ZdF9rso.js";import"./PdfViewerSidebar-jSYBUh2W.js";import"./index-D0XVpPOf.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./PdfViewerToolbar-D7GVaPrD.js";import"./Button-cNgJCMyB.js";import"./chevron-right-CTrkTFbd.js";import"./Input-Caz2RzvD.js";import"./search-Dn1087-G.js";import"./spin-QDhS7Eyn.js";import"./error-Cfg0wGHf.js";import"./withOsdkMetrics-D4VhY3gv.js";import"./makeExternalStore-S8Y7W4h4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
