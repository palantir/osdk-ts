import{j as r,M as s}from"./iframe-DQr8FaLZ.js";import{P as p}from"./pdf-viewer-DecDGZwi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVjEY8Wi.js";import"./preload-helper-Cs2QajlQ.js";import"./PdfRenderer-C1G_3C3V.js";import"./index-DW3oaSvd.js";import"./PdfViewer-BEJ6ygDK.js";import"./PdfViewer.module.css-JreoKhyg.js";import"./PdfViewerAnnotationLayer-BTc6-ywU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pyGu9Uv2.js";import"./PdfViewerOutlineSidebar-3nloeBIX.js";import"./PdfViewerSidebarHeader-Bkrr3WZ7.js";import"./useBaseUiId-CXbO1gJp.js";import"./useControlled-1wq4hn2G.js";import"./CompositeRoot-3ZJ8MF5y.js";import"./CompositeItem-UfOcdBmP.js";import"./ToolbarRootContext-qRJmAPYx.js";import"./composite-4hoTkEwo.js";import"./svgIconContainer-B_zgM9A6.js";import"./PdfViewerSearchBar-dFiv2TRo.js";import"./chevron-up-DtQ22MBY.js";import"./chevron-down-DcZ9ohaK.js";import"./cross-o_llmjF7.js";import"./PdfViewerSidebar-EjTYqZ4X.js";import"./index-Co-hoRNJ.js";import"./index-CI0cIfYk.js";import"./index-Bix70Ik8.js";import"./PdfViewerToolbar-BYS-Q2Ld.js";import"./Button-BrpUhIDF.js";import"./chevron-right-DJbVoJMy.js";import"./Input-BWDsHnZ9.js";import"./search-qIWQBQhq.js";import"./spin-BalSX6o2.js";import"./error-BNHngFhs.js";import"./withOsdkMetrics-Y1-k--zP.js";import"./makeExternalStore-C3Tf7i_H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
