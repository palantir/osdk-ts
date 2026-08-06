import{j as r,M as s}from"./iframe-DvFHgo-w.js";import{P as p}from"./pdf-viewer-DhjExYGr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvvLIUui.js";import"./preload-helper-DZBzpRSG.js";import"./PdfRenderer-BQHhxOic.js";import"./index-ChNfdrgg.js";import"./PdfViewer-CW98mMcQ.js";import"./PdfViewer.module.css-B49pwxKL.js";import"./PdfViewerAnnotationLayer-RqMIaYtV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBK3lXa3.js";import"./PdfViewerOutlineSidebar-0Qtbai7z.js";import"./PdfViewerSidebarHeader-C7wyaGX6.js";import"./useBaseUiId-Cihl7qhL.js";import"./useControlled-B1Ceoypd.js";import"./CompositeRoot-mEbi60FB.js";import"./CompositeItem-CRFhwAMt.js";import"./ToolbarRootContext-BYIu0onP.js";import"./composite-btXM50Z8.js";import"./svgIconContainer-DkmBAWI4.js";import"./PdfViewerSearchBar-DOCm_0Tt.js";import"./chevron-up-BWJpmter.js";import"./chevron-down-CQiqre5K.js";import"./cross-DFuwFxaR.js";import"./PdfViewerSidebar-BqZS4po6.js";import"./index-BtbK7qTH.js";import"./index-DmnXV9iA.js";import"./index-CHdUuSLF.js";import"./PdfViewerToolbar-w47Xz9LL.js";import"./Button-KyTimgm1.js";import"./chevron-right-CjUDVjcR.js";import"./Input-Dj67-Kk5.js";import"./search-DGnENIqF.js";import"./spin-DG2dgjQh.js";import"./error-CuZ6e4Lo.js";import"./withOsdkMetrics-B88V5tRU.js";import"./makeExternalStore-N_K02grM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
