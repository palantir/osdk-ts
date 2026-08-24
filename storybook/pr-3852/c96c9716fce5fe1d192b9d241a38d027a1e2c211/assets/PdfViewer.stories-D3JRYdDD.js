import{j as r,M as s}from"./iframe-DzT5j6tC.js";import{P as p}from"./pdf-viewer-CbLeRrE8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYcFIBQ7.js";import"./preload-helper-B-8AR-WS.js";import"./PdfViewer-Cv-Vb1fq.js";import"./index-Du12mPUJ.js";import"./BasePdfViewer-MY1VZpeQ.js";import"./BasePdfViewer.module.css-BXOV65qj.js";import"./PdfViewerAnnotationLayer-Y-iEvuBF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xFJxrFz5.js";import"./PdfViewerOutlineSidebar-B9yBQAlA.js";import"./PdfViewerSidebarHeader-QkZ-0p5j.js";import"./useBaseUiId-CpQ8jfP-.js";import"./useControlled-dRwpZLWP.js";import"./CompositeRoot-DYB05LcS.js";import"./CompositeItem-BHaHERWU.js";import"./ToolbarRootContext-BTqh8qKL.js";import"./composite-BCA7ssjy.js";import"./svgIconContainer-Bzq4qT7m.js";import"./PdfViewerSearchBar-BMo2eGdy.js";import"./chevron-up-PDN6Ssdf.js";import"./chevron-down-DCGqt8p6.js";import"./cross-D85Hg8OP.js";import"./PdfViewerSidebar-D60Jl98A.js";import"./index-DVvQaOMD.js";import"./index-DAVqPwR5.js";import"./index-CTNdmRCH.js";import"./PdfViewerToolbar-4FOWKz1S.js";import"./Button-CbXsMpDo.js";import"./chevron-right-XANhwun8.js";import"./Input-MtWlDuZi.js";import"./search-DpfM7OJ3.js";import"./spin-RTD8RTns.js";import"./error-DhCIc3En.js";import"./withOsdkMetrics-BwVYFtll.js";import"./makeExternalStore-B9-sDT_L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
