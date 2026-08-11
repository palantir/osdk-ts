import{j as r,M as s}from"./iframe-DVYnRpdj.js";import{P as p}from"./pdf-viewer-B3Xo8o8x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VAfDIt1p.js";import"./preload-helper-jWAjn0tL.js";import"./PdfRenderer-Bq9p7VaL.js";import"./index-CH1L1VNU.js";import"./PdfViewer-bgbIbQJV.js";import"./PdfViewer.module.css-Dmcb4Kp4.js";import"./PdfViewerAnnotationLayer-DBWO-CTx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GLj-aguD.js";import"./PdfViewerOutlineSidebar-6EsFztlN.js";import"./PdfViewerSidebarHeader-nrwOIdXr.js";import"./useBaseUiId-BwB1POS7.js";import"./useControlled-BTTM4wRl.js";import"./CompositeRoot-z4LTMEmT.js";import"./CompositeItem-C6n7AP2m.js";import"./ToolbarRootContext-DrMZ4IJS.js";import"./composite-C4ay5osQ.js";import"./svgIconContainer-CTL4p5cf.js";import"./PdfViewerSearchBar-CbAhcOBO.js";import"./chevron-up-D2CWB3nl.js";import"./chevron-down-KrczOSzf.js";import"./cross-B9-dwz-Y.js";import"./PdfViewerSidebar-DTYoUQJw.js";import"./index-CFnWEuFo.js";import"./index-CNxR8hD1.js";import"./index-5JSg7TKC.js";import"./PdfViewerToolbar-BgkRmTWy.js";import"./Button-BvmdrF_3.js";import"./chevron-right-BSeHqQRv.js";import"./Input-qR3cLgNT.js";import"./search--hEGkwmt.js";import"./spin-BSSJKG-z.js";import"./error-IFx71VBh.js";import"./withOsdkMetrics-RqRZ8y66.js";import"./makeExternalStore-Cytkrsbu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
