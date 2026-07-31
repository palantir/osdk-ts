import{j as r,M as s}from"./iframe-BgoKo-i2.js";import{P as p}from"./pdf-viewer-BSDTC-7m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B--J_uiv.js";import"./preload-helper-DIrScT_n.js";import"./PdfRenderer-DCggRmYx.js";import"./index-3V6CRxOT.js";import"./PdfViewer-DLwpIrCk.js";import"./PdfViewer.module.css-uvV0RXRK.js";import"./PdfViewerAnnotationLayer-FKmie_PE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVNfkRwS.js";import"./PdfViewerOutlineSidebar-CHyI0Q5b.js";import"./PdfViewerSidebarHeader-CWmK1PcB.js";import"./useBaseUiId-DS7J75OO.js";import"./useControlled-DShEq97X.js";import"./CompositeRoot-wrFqqiK-.js";import"./CompositeItem-DXRUm4lR.js";import"./ToolbarRootContext-CNkC_ExZ.js";import"./composite-CMVBbtsk.js";import"./svgIconContainer-Co1wj9K_.js";import"./PdfViewerSearchBar-BgXQvY4S.js";import"./chevron-up-CUk_BVf3.js";import"./chevron-down-BW1Jk0Gy.js";import"./cross-pMkSGJpw.js";import"./PdfViewerSidebar-Cv-VOItf.js";import"./index-CPVhZyIF.js";import"./index-Bdsk4x9T.js";import"./index-B65kqQu_.js";import"./PdfViewerToolbar-DzA4aciC.js";import"./Button-CreK4JWQ.js";import"./chevron-right-BiQ-nqQ2.js";import"./Input-CjhSYZMH.js";import"./search-C9CyrmBD.js";import"./spin-DK-44JMU.js";import"./error-ChPfLHEW.js";import"./withOsdkMetrics-DwfUgwww.js";import"./makeExternalStore-BwEONY5Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
