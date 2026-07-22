import{j as r,M as s}from"./iframe-DjtcYyzQ.js";import{P as p}from"./pdf-viewer-BX-r55IE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBYsTqWn.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D-0n29IS.js";import"./index-CQV6Rnc6.js";import"./PdfViewer-M7WT5j8i.js";import"./PdfViewer.module.css-C9qLirWB.js";import"./PdfViewerAnnotationLayer-DCgCd24z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgVHqk23.js";import"./PdfViewerOutlineSidebar-_EEvltjz.js";import"./PdfViewerSidebarHeader-CPMAGzLz.js";import"./useBaseUiId-kxFdZqtD.js";import"./useControlled-DggWxDeY.js";import"./CompositeRoot-BFYLX-am.js";import"./CompositeItem-pjHtEKS0.js";import"./ToolbarRootContext-DHGJfn9d.js";import"./composite-B_imHkJV.js";import"./svgIconContainer-JU7cmdzA.js";import"./PdfViewerSearchBar-PM1U7wJp.js";import"./chevron-up-sTAoFg8X.js";import"./chevron-down-E7YHgJne.js";import"./cross-B6N8rLM4.js";import"./PdfViewerSidebar-CGYnCYvN.js";import"./index-BGI_7tkx.js";import"./index-CBxdpb96.js";import"./index-D8ZMhwwx.js";import"./PdfViewerToolbar-CTG0lQw2.js";import"./Button-yoR8DJA2.js";import"./chevron-right-BB0cEf0D.js";import"./Input-eiOZqsyQ.js";import"./search-DFIZPiTI.js";import"./spin-BRQoF1Yk.js";import"./error-DLG18jLw.js";import"./withOsdkMetrics-m3U67gAP.js";import"./makeExternalStore-CDqT4QNq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
