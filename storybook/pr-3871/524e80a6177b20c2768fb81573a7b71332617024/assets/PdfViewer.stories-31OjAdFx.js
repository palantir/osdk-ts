import{j as r,M as s}from"./iframe-C8W_1yJa.js";import{P as p}from"./pdf-viewer-7Zg5Yo4z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrU7l270.js";import"./preload-helper-CTLXhaGl.js";import"./PdfViewer-BnHAS3Oh.js";import"./index-BHosZjWC.js";import"./BasePdfViewer-CN9W40xV.js";import"./BasePdfViewer.module.css-DrYjb3R3.js";import"./PdfViewerAnnotationLayer-By0Fq1M8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRL_r1-5.js";import"./PdfViewerOutlineSidebar-ctLy7PV5.js";import"./PdfViewerSidebarHeader-4o0hIWw2.js";import"./useBaseUiId-D9u19KRt.js";import"./useControlled-BNicjJXr.js";import"./CompositeRoot-9x4_bASx.js";import"./CompositeItem-ksibX-Pt.js";import"./ToolbarRootContext-B64BT2dX.js";import"./composite-D9vkqeMo.js";import"./svgIconContainer-BYaq9C4Y.js";import"./PdfViewerSearchBar-BqjdpA6C.js";import"./chevron-up-CCbtNc6Q.js";import"./chevron-down-CTsGKY-w.js";import"./cross-CZHInJK7.js";import"./PdfViewerSidebar-SzNjCkpk.js";import"./index-BDWszJ74.js";import"./index-A9PJi114.js";import"./index-Ckh3kz80.js";import"./PdfViewerToolbar-VA7teqTS.js";import"./Button-BTdxh1PU.js";import"./chevron-right-C1KBNc18.js";import"./Input-QwDU-OOH.js";import"./search-DN1_1bJo.js";import"./spin-CSR0X0Ri.js";import"./error-DTe2-M69.js";import"./withOsdkMetrics-CU6eTpB7.js";import"./makeExternalStore-Dkf4Frge.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
