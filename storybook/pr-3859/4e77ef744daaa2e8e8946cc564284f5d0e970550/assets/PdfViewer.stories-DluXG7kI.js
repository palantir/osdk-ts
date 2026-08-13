import{j as r,M as s}from"./iframe-DzWJ3tJf.js";import{P as p}from"./pdf-viewer-CJOFXkf3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Djy3PzqP.js";import"./preload-helper-D60YPggq.js";import"./PdfRenderer-CwkgcFZT.js";import"./index-jOIP15Dj.js";import"./PdfViewer-xvmHqOee.js";import"./PdfViewer.module.css-CyTQ8mZt.js";import"./PdfViewerAnnotationLayer-D5IJXWMF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtMVTRBx.js";import"./PdfViewerOutlineSidebar-BLcZ-bdM.js";import"./PdfViewerSidebarHeader-fpPl6tme.js";import"./useBaseUiId-B7BFDCom.js";import"./useControlled-Qbs937Ua.js";import"./CompositeRoot-CcCuw1Md.js";import"./CompositeItem-0GMeUwly.js";import"./ToolbarRootContext-RU1iJIsp.js";import"./composite-BZh-eCsQ.js";import"./svgIconContainer-NZX5zwbB.js";import"./PdfViewerSearchBar-sjlyDKa7.js";import"./chevron-up-DVoZVYWs.js";import"./chevron-down-C0NNvCS6.js";import"./cross-CpclAF39.js";import"./PdfViewerSidebar-38B-kipa.js";import"./index-CQvM6UYi.js";import"./index-5-fC0lD_.js";import"./index-CZtqhO_b.js";import"./PdfViewerToolbar-D5UrDGp7.js";import"./Button-CTXwYA6d.js";import"./chevron-right-BX58KFni.js";import"./Input-9_-rD_6K.js";import"./search-GiMpebUt.js";import"./spin-BguraJRZ.js";import"./error-tOl4PAnV.js";import"./withOsdkMetrics-oZAeB24-.js";import"./makeExternalStore-BlWDQNcY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
