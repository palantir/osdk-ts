import{j as r,M as s}from"./iframe-CBr1o5iR.js";import{P as p}from"./pdf-viewer-80nM-194.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDLJaqhd.js";import"./preload-helper-C74Zs9Qj.js";import"./PdfRenderer-DeHsOMef.js";import"./index-BUnoFm4T.js";import"./PdfViewer-DtNpdRV2.js";import"./PdfViewer.module.css-25E_GBo0.js";import"./PdfViewerAnnotationLayer-BO_YWl1h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_tO8ZJ6.js";import"./PdfViewerOutlineSidebar-amN9v0TW.js";import"./PdfViewerSidebarHeader-Dv7hloAY.js";import"./useBaseUiId-B-WY1xvV.js";import"./useControlled-BvEl2Zx8.js";import"./CompositeRoot-BxxE1LqB.js";import"./CompositeItem-Bzks3A9T.js";import"./ToolbarRootContext-CAjQ8J-W.js";import"./composite-CjSMUHiF.js";import"./svgIconContainer-BfpQZBbK.js";import"./PdfViewerSearchBar-CHZJd7I9.js";import"./chevron-up-DEu3DhNG.js";import"./chevron-down-CeEcx8XI.js";import"./cross-COUmmIjR.js";import"./PdfViewerSidebar-Cg2V2NXN.js";import"./index-QEFR3hOZ.js";import"./index-Bl6CdKL7.js";import"./index-D63as4vf.js";import"./PdfViewerToolbar--BsVFpP9.js";import"./Button-BATNsIkC.js";import"./chevron-right-BA6W8_yx.js";import"./Input-80YhWUbK.js";import"./search-DiTFA1qk.js";import"./spin-CJ8_n9Fm.js";import"./error-BUZq3IDN.js";import"./withOsdkMetrics-BvV4fjpx.js";import"./makeExternalStore-B8_1tONR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
