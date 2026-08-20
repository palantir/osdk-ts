import{j as r,M as s}from"./iframe-BdrRBIvD.js";import{P as p}from"./pdf-viewer-BOYm8aSh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-m8HHhL8t.js";import"./preload-helper-N4H8PUoz.js";import"./PdfViewer-I51qriKN.js";import"./index-CyGaVN4-.js";import"./BasePdfViewer-Dw0m_QJt.js";import"./BasePdfViewer.module.css-BxAe3jM2.js";import"./PdfViewerAnnotationLayer-CUqFr9OS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4XVl7sL.js";import"./PdfViewerOutlineSidebar-D0fe7_4y.js";import"./PdfViewerSidebarHeader-DSPU6Szl.js";import"./useBaseUiId-CaVqH5La.js";import"./useControlled-jNQesOqe.js";import"./CompositeRoot-BR1Q-2ia.js";import"./CompositeItem-DukmHiA_.js";import"./ToolbarRootContext-DgRaA1gf.js";import"./composite-AHJSpspS.js";import"./svgIconContainer-BaNqItXx.js";import"./PdfViewerSearchBar-CuWJb-05.js";import"./chevron-up-DgKv7sAg.js";import"./chevron-down-JT0IhlWE.js";import"./cross-D7w2_wJU.js";import"./PdfViewerSidebar-seIPZcz0.js";import"./index-CyfjPVR_.js";import"./index-CeaTfT0R.js";import"./index-CKJSQvSH.js";import"./PdfViewerToolbar-DKeO9Af3.js";import"./Button-C9phC2y1.js";import"./chevron-right-BMaBtiwR.js";import"./Input-Crry490_.js";import"./search-P7WA0n-i.js";import"./spin-BfDQkMmg.js";import"./error-DWKLqXS9.js";import"./withOsdkMetrics-BJXn2F5H.js";import"./makeExternalStore--cYtEdhQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
