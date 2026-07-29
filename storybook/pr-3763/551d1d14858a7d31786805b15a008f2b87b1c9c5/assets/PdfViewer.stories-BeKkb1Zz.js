import{j as r,M as s}from"./iframe-B_Qcr1FE.js";import{P as p}from"./pdf-viewer-CscPlHad.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Pjk7I-Ks.js";import"./preload-helper-ByylHqff.js";import"./PdfRenderer-BH-mGg7z.js";import"./index-CuAfhbdX.js";import"./PdfViewer-BuEpIV7j.js";import"./PdfViewer.module.css-C65_awQK.js";import"./PdfViewerAnnotationLayer-C6-buEcp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnL8Wd5H.js";import"./PdfViewerOutlineSidebar-D7xjSC9H.js";import"./PdfViewerSidebarHeader-_ZGLyBG2.js";import"./useBaseUiId-BT7nsgc0.js";import"./useControlled-i58fxNEc.js";import"./CompositeRoot-BEChzOJv.js";import"./CompositeItem-IwhuMT6y.js";import"./ToolbarRootContext-IZR9f2eY.js";import"./composite-CK1N4h6C.js";import"./svgIconContainer-HOxgQzaL.js";import"./PdfViewerSearchBar-BYnWB9bf.js";import"./chevron-up-DkzQWI1F.js";import"./chevron-down-DmIABeew.js";import"./cross-B_bL67RS.js";import"./PdfViewerSidebar-R03ZG3I_.js";import"./index-CtHaTe0V.js";import"./index-DDNYXikC.js";import"./index-D-jbiCY8.js";import"./PdfViewerToolbar-0m-K2xEq.js";import"./Button-Cn245j1w.js";import"./chevron-right-DyYrMOCz.js";import"./Input-CnRDzw12.js";import"./search-Cnc343lq.js";import"./spin-BiAoU-f8.js";import"./error-i48OCe6N.js";import"./withOsdkMetrics-8G_3-O2s.js";import"./makeExternalStore-CzaoHCck.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
