import{j as r,M as s}from"./iframe-CpHLFs-j.js";import{P as p}from"./pdf-viewer-b1HybZIt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEJbPPZf.js";import"./preload-helper-Cx-Hj9ji.js";import"./PdfRenderer-rmpxJajW.js";import"./index-CW31sxVo.js";import"./PdfViewer-DzCNf1XO.js";import"./PdfViewer.module.css-DqaaYKVH.js";import"./PdfViewerAnnotationLayer-B-bjY-43.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMD5swVA.js";import"./PdfViewerOutlineSidebar-F2fn8JpT.js";import"./PdfViewerSidebarHeader-CKClIDoH.js";import"./useBaseUiId-BBJe7HZ5.js";import"./useControlled-CU11-enl.js";import"./CompositeRoot-xQpZFsPP.js";import"./CompositeItem-BCOuwNbL.js";import"./ToolbarRootContext-DLyGA8_p.js";import"./composite-Bb9xsxZ2.js";import"./svgIconContainer-DJggAQ_8.js";import"./PdfViewerSearchBar-BQBlJ68D.js";import"./chevron-up-Cn8SmqcI.js";import"./chevron-down-BHWF8sCh.js";import"./cross-BMDhbGFA.js";import"./PdfViewerSidebar-YVM94Vum.js";import"./index-DrQ_7o0H.js";import"./index-BwGfwj9E.js";import"./index-D9rBAzJN.js";import"./PdfViewerToolbar-Bg1auoGD.js";import"./Button-DIETzomk.js";import"./chevron-right-ecwZohdO.js";import"./Input-NmfJ6xcB.js";import"./search-Dk5Mmea1.js";import"./spin-CNihbDQ3.js";import"./error-CJHQsKq8.js";import"./withOsdkMetrics-dGfsU2Pa.js";import"./makeExternalStore-qrCwPWzZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
