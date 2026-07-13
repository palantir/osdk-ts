import{j as r,M as s}from"./iframe-D-vJADny.js";import{P as p}from"./pdf-viewer-CEbUax9G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BatI2iX0.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DJTbAUAV.js";import"./index-D6zNih19.js";import"./PdfViewer-uXqqGDi2.js";import"./PdfViewer.module.css-CsTTfKdb.js";import"./PdfViewerAnnotationLayer-CLZrdBrY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XTxwH0P1.js";import"./PdfViewerOutlineSidebar-RxZev2J1.js";import"./PdfViewerSidebarHeader-DQ4e_pXt.js";import"./useBaseUiId-BOmqltJu.js";import"./useControlled-6SEEGD6Y.js";import"./CompositeRoot-CLydvs2F.js";import"./CompositeItem-Dj06UvpI.js";import"./ToolbarRootContext-BMrSVW5k.js";import"./composite-BX4tgxEW.js";import"./svgIconContainer-CNVqQtje.js";import"./PdfViewerSearchBar-BRagEs4e.js";import"./chevron-up-C8T6u9od.js";import"./chevron-down-DwypxkGn.js";import"./cross-CQkRXXZl.js";import"./PdfViewerSidebar-DJgbJJqG.js";import"./index-M-7s9Nwy.js";import"./index-CBBofzM5.js";import"./index-Db6_a7US.js";import"./PdfViewerToolbar-C19F9KuI.js";import"./Button-Cc8Xpdrl.js";import"./chevron-right-BjCfPFuu.js";import"./Input-CL5QGsed.js";import"./search-vkRSIpAk.js";import"./spin-B7Leopje.js";import"./error-CTBpOwuu.js";import"./withOsdkMetrics-D95MYznD.js";import"./makeExternalStore-CsmGKW88.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
