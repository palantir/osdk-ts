import{j as r,M as s}from"./iframe-CyaLwNeN.js";import{P as p}from"./pdf-viewer-BXatk3lq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-A8ZhCMsA.js";import"./preload-helper-C59wXJGm.js";import"./PdfRenderer-Deh3vgtX.js";import"./index-ClYCFxLc.js";import"./PdfViewer-C4aUr4zm.js";import"./PdfViewer.module.css-BTGajwVm.js";import"./PdfViewerAnnotationLayer-DouBM7wO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlbVDP4Q.js";import"./PdfViewerOutlineSidebar-BFFWapcH.js";import"./PdfViewerSidebarHeader-DmMKD5KA.js";import"./useBaseUiId-DvZ_p5uK.js";import"./useControlled-CVWFOP-m.js";import"./CompositeRoot-CsRGaAel.js";import"./CompositeItem-BlMJ0-sW.js";import"./ToolbarRootContext-n2aK4s4L.js";import"./composite-DI16xt5E.js";import"./svgIconContainer-DENCU-Gn.js";import"./PdfViewerSearchBar-CLzDTuql.js";import"./chevron-up-Bqp_hxDK.js";import"./chevron-down-aw0xFEGn.js";import"./cross-YnSfoWry.js";import"./PdfViewerSidebar-B3VNNy2C.js";import"./index-fLqOInXO.js";import"./index-Cn-2cn1s.js";import"./index-DCVzVXAO.js";import"./PdfViewerToolbar-Bsdc0t2R.js";import"./Button-Bpm9V69u.js";import"./chevron-right-QBgXdyx2.js";import"./Input-ejD1PUHf.js";import"./search-BZwB1dD8.js";import"./spin-C8bTOcJ4.js";import"./error-CDsS4DUR.js";import"./withOsdkMetrics-C1chW5-0.js";import"./makeExternalStore-C6mAl8IT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
