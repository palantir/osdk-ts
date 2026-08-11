import{j as r,M as s}from"./iframe-DSmQkahV.js";import{P as p}from"./pdf-viewer-jDUFSPnl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZgp-Bak.js";import"./preload-helper-Dze2_dsn.js";import"./PdfRenderer-VmoJedCK.js";import"./index-BnRpZ-OB.js";import"./PdfViewer-B-GIfRD2.js";import"./PdfViewer.module.css-BJsb8Ol3.js";import"./PdfViewerAnnotationLayer-bBTYvGEr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DH3kT1ia.js";import"./PdfViewerOutlineSidebar-CtG1Rx6R.js";import"./PdfViewerSidebarHeader-CLUfSCVS.js";import"./useBaseUiId-DZaeVOmY.js";import"./useControlled-Bc_9AmK8.js";import"./CompositeRoot-Dyzii6sd.js";import"./CompositeItem-L3IbO9d7.js";import"./ToolbarRootContext-CEbwg7y3.js";import"./composite-C0wZ3IJL.js";import"./svgIconContainer-C1VMrcU6.js";import"./PdfViewerSearchBar-CJPKTmQJ.js";import"./chevron-up-BzUQqIAh.js";import"./chevron-down-CfDyW5wu.js";import"./cross-DONTzq6t.js";import"./PdfViewerSidebar-BDaOstPh.js";import"./index-DO2tVBOL.js";import"./index-DWtoRZwW.js";import"./index-CVy6K8lz.js";import"./PdfViewerToolbar-C5lQqwed.js";import"./Button-Hhcevu4O.js";import"./chevron-right-ByMjmrkE.js";import"./Input-HL00VtIO.js";import"./search-Dk49NEuy.js";import"./spin-QFM519Bv.js";import"./error-gQAP2laG.js";import"./withOsdkMetrics-ChMVQwAE.js";import"./makeExternalStore-C1pJ6Rb4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
