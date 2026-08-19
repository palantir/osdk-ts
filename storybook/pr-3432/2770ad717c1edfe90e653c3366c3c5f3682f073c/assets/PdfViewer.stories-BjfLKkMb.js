import{j as r,M as s}from"./iframe-q8TqaLH3.js";import{P as p}from"./pdf-viewer-D5b3TuJr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDQD66pk.js";import"./preload-helper-DW1Ev6LV.js";import"./PdfViewer-C8pIJlhU.js";import"./index-BYCDoymk.js";import"./BasePdfViewer-D6JbPV43.js";import"./BasePdfViewer.module.css-Df0ckwN2.js";import"./PdfViewerAnnotationLayer-DcvUCK8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEsVAJQh.js";import"./PdfViewerOutlineSidebar-DK0miSlM.js";import"./PdfViewerSidebarHeader--cqdU55i.js";import"./useBaseUiId-CEQxwZKC.js";import"./useControlled-B4XgETbD.js";import"./CompositeRoot-BQg_p035.js";import"./CompositeItem-BoyD2Qd7.js";import"./ToolbarRootContext-BVkFyPPc.js";import"./composite-DwvjAbMd.js";import"./svgIconContainer-Dw59Q1hS.js";import"./PdfViewerSearchBar-Cn0M4aL0.js";import"./chevron-up-aJYPNfYT.js";import"./chevron-down-DObWy-ia.js";import"./cross-CC6OhIc-.js";import"./PdfViewerSidebar-CRmwXX4K.js";import"./index-BiU-aGVE.js";import"./index-CzfA3f8l.js";import"./index-BA8MKOgZ.js";import"./PdfViewerToolbar-Dup5D52S.js";import"./Button-Cf0RXVA2.js";import"./chevron-right-BGppWzK2.js";import"./Input-DydicY3I.js";import"./search-4HwTJMyt.js";import"./spin-HON5j-I6.js";import"./error-ClxxhlMY.js";import"./withOsdkMetrics-CEeAFO7b.js";import"./makeExternalStore-DCFTRovx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
