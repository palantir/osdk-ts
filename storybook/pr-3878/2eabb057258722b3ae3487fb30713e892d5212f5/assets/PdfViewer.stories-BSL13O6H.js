import{j as r,M as s}from"./iframe-BTO3ph4q.js";import{P as p}from"./pdf-viewer-DyaGY9q7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ba9lLnL4.js";import"./preload-helper-CtN9PVAK.js";import"./PdfViewer-Die52Ii6.js";import"./index-x3hFww3S.js";import"./BasePdfViewer-3Psn66fl.js";import"./BasePdfViewer.module.css-BQq2crkN.js";import"./PdfViewerAnnotationLayer-DfGBTsps.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cl0ptyiB.js";import"./PdfViewerOutlineSidebar-QUa2V9ck.js";import"./PdfViewerSidebarHeader-BlSNtt8I.js";import"./useBaseUiId-1MvsnHF0.js";import"./useControlled-D3IlQblQ.js";import"./CompositeRoot-C2E1XpkR.js";import"./CompositeItem-D4n0rGlc.js";import"./ToolbarRootContext-0OHqE9f1.js";import"./composite-7kQ7OmSD.js";import"./svgIconContainer-CevlEVVg.js";import"./PdfViewerSearchBar-JNKJDERv.js";import"./chevron-up-C-PrsNpm.js";import"./chevron-down-BJp9RPDS.js";import"./cross-O3i2QmOd.js";import"./PdfViewerSidebar-CKAluTwZ.js";import"./index-DiCFXBX4.js";import"./index-CyMmgwkh.js";import"./index-BtRkO4nr.js";import"./PdfViewerToolbar-BUyhBfYa.js";import"./Button-CQHuz0SR.js";import"./chevron-right-DkscHkca.js";import"./Input-D7e4vYID.js";import"./search-DuX0harO.js";import"./spin-CLNCI76J.js";import"./error-Z9A5zRFa.js";import"./withOsdkMetrics-B5F2x99w.js";import"./makeExternalStore-D6jtgBE4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
