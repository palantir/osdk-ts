import{j as r,M as s}from"./iframe-2P5rSZYB.js";import{P as p}from"./pdf-viewer-R7OoCh3Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CgsyTvx1.js";import"./preload-helper-DUMBN1oE.js";import"./PdfRenderer-B06eKWKb.js";import"./index-CAoow5Tc.js";import"./PdfViewer-BrVd52-n.js";import"./PdfViewer.module.css-BegLPJFP.js";import"./PdfViewerAnnotationLayer-B_FOqZVc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFprZPwa.js";import"./PdfViewerOutlineSidebar-CFPN_Tax.js";import"./PdfViewerSidebarHeader-CajkhoCP.js";import"./useBaseUiId-DkVMBaZu.js";import"./useControlled-Cwm3UgkD.js";import"./CompositeRoot-CaoDr4I7.js";import"./CompositeItem-Bwok9D42.js";import"./ToolbarRootContext-D7fp9PDG.js";import"./composite-wSp6B-w9.js";import"./svgIconContainer-BuLz4yUd.js";import"./PdfViewerSearchBar-Crs0jahm.js";import"./chevron-up-CD0ZyFYs.js";import"./chevron-down-DhT9HmUD.js";import"./cross-C8buVPN_.js";import"./PdfViewerSidebar-DvywVHb3.js";import"./index-KpZvxqHP.js";import"./index-Sbnqq9EV.js";import"./index-ZhrmGNEl.js";import"./PdfViewerToolbar-By4xRTYi.js";import"./Button-DgF_AxYC.js";import"./chevron-right-BYdIH7kV.js";import"./Input-DzG-mEdZ.js";import"./search-BlAQj842.js";import"./spin-zJNybsCz.js";import"./error-pihzJHIB.js";import"./withOsdkMetrics-DoJyDwoq.js";import"./makeExternalStore-Bn6vdpUB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
