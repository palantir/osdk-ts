import{j as r,M as s}from"./iframe-CCC2PHCs.js";import{P as p}from"./pdf-viewer-DHCnz8oD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRDZAVXO.js";import"./preload-helper-BFAjaxlT.js";import"./PdfRenderer-DdViYKi7.js";import"./index-CsHmWOuW.js";import"./PdfViewer-P4x_JFr6.js";import"./PdfViewer.module.css-B_zXqx4O.js";import"./PdfViewerAnnotationLayer-42ewGZZD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgnCU24h.js";import"./PdfViewerOutlineSidebar-Cjb9XlWa.js";import"./PdfViewerSidebarHeader-D6tO3qdf.js";import"./useBaseUiId-BFMlM2-S.js";import"./useControlled-DAuImFbI.js";import"./CompositeRoot-DZPpSbyG.js";import"./CompositeItem-D0KbA8wb.js";import"./ToolbarRootContext-BEIRwfim.js";import"./composite-BG85D_QD.js";import"./svgIconContainer-Ba3v3a21.js";import"./PdfViewerSearchBar-CIFXBSF4.js";import"./chevron-up-C4hWf1_f.js";import"./chevron-down-DUX5MQ0Z.js";import"./cross-lgZ_UxXM.js";import"./PdfViewerSidebar-r83RIXXm.js";import"./index-2S7gRbbX.js";import"./index-BoDdy69P.js";import"./index-64uZX6qw.js";import"./PdfViewerToolbar-CRC2sYZa.js";import"./Button-FRBaRdpx.js";import"./chevron-right-Cp-dzL7g.js";import"./Input-DjnHunMe.js";import"./search-BST7YF_6.js";import"./spin-BYRXRVJd.js";import"./error-DJg-nO-Y.js";import"./withOsdkMetrics-sn1hY-b7.js";import"./makeExternalStore-BFrjPQ7J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
