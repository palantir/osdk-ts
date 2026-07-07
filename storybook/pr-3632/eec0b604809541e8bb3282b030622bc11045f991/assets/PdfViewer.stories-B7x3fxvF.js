import{j as r,M as s}from"./iframe-ElIqY0cP.js";import{P as p}from"./pdf-viewer-D7FRGlXl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoxbdxxG.js";import"./preload-helper-D3LENibV.js";import"./PdfRenderer-CMPSaaR8.js";import"./index-CBl-7t68.js";import"./PdfViewer-Y87h6I0i.js";import"./PdfViewer.module.css-DBkmu1pq.js";import"./PdfViewerAnnotationLayer-pb7aFCYB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvzcxlFZ.js";import"./PdfViewerOutlineSidebar-TeMJaYnI.js";import"./PdfViewerSidebarHeader-U9dmZhVV.js";import"./useBaseUiId-BQgOxY9s.js";import"./useControlled-D34dOxey.js";import"./CompositeRoot-CBoGJpe9.js";import"./CompositeItem-Dk1T7wo0.js";import"./ToolbarRootContext-DQir3MKX.js";import"./composite-3jlzYhEl.js";import"./svgIconContainer-gnV_r1h9.js";import"./PdfViewerSearchBar-C7iCT3JF.js";import"./chevron-up-BxJEo9ix.js";import"./chevron-down-BE8ZqU7R.js";import"./cross-NHyDc3_s.js";import"./PdfViewerSidebar-C-nn2jmn.js";import"./index-DhXfPQcM.js";import"./index-B7Xi1qIm.js";import"./index-0Uuv0rr_.js";import"./PdfViewerToolbar-CNXnfbzj.js";import"./Button-BjN_nH7V.js";import"./chevron-right-DRkmGLQq.js";import"./Input-BTWCRvyW.js";import"./search-Cc15fq1P.js";import"./spin-C5-4mnIH.js";import"./error-BhRlw4Nb.js";import"./withOsdkMetrics-DcF-TsBD.js";import"./makeExternalStore-NBxV0LlO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
