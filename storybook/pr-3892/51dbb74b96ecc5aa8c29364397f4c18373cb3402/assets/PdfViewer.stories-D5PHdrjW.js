import{j as r,M as s}from"./iframe-B6AjvOVJ.js";import{P as p}from"./pdf-viewer-DIQLrSXt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCtVOxC4.js";import"./preload-helper-CgjhIKiB.js";import"./PdfViewer-J10NLekQ.js";import"./index-DLHnDDYV.js";import"./BasePdfViewer-BSP6PYPe.js";import"./BasePdfViewer.module.css-Czcz43px.js";import"./PdfViewerAnnotationLayer-DYUb0ELt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QCp8VeLm.js";import"./PdfViewerOutlineSidebar-C4PC4y9S.js";import"./PdfViewerSidebarHeader-BB_iD465.js";import"./useBaseUiId-BduiX7-m.js";import"./useControlled-D_wxWQiO.js";import"./CompositeRoot-F3c8_cpg.js";import"./CompositeItem-D9TRpIPa.js";import"./ToolbarRootContext-DmnnlMoA.js";import"./composite-DnmLy1Yk.js";import"./svgIconContainer-DL0f4zVF.js";import"./PdfViewerSearchBar-BTY521tx.js";import"./chevron-up-BlLnsIT0.js";import"./chevron-down-Defp8KA-.js";import"./cross-W_gu-k5J.js";import"./PdfViewerSidebar-fWu9rwpd.js";import"./index-oQs3Ep3f.js";import"./index-Czlm1Cio.js";import"./index-DmwPHze2.js";import"./PdfViewerToolbar-bustpC3w.js";import"./Button-BGD9VvG8.js";import"./chevron-right-CMe-GrOM.js";import"./Input-m4NvHU99.js";import"./search-Dfb92URe.js";import"./spin-B_XjGmQT.js";import"./error-r1aNeJUF.js";import"./withOsdkMetrics-D8uoMkfq.js";import"./makeExternalStore-CQVb-Jjn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
