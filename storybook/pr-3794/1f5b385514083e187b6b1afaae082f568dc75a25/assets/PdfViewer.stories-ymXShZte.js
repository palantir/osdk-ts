import{j as r,M as s}from"./iframe-HIMvOqvp.js";import{P as p}from"./pdf-viewer-DUX3cdYe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOs2QpX5.js";import"./preload-helper-CEnOtJNC.js";import"./PdfRenderer-BOyBO_rU.js";import"./index-BR1U-F-z.js";import"./PdfViewer-y4vEB0ml.js";import"./PdfViewer.module.css-D87wpwkd.js";import"./PdfViewerAnnotationLayer-BuXl6Cvg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DT2Zcyqj.js";import"./PdfViewerOutlineSidebar-DTF5KXjm.js";import"./PdfViewerSidebarHeader-XwQh-Img.js";import"./useBaseUiId-CktUDHnZ.js";import"./useControlled-BEIkGatI.js";import"./CompositeRoot-Cq-rOcaD.js";import"./CompositeItem-_EU9HVH1.js";import"./ToolbarRootContext-CV8VtjXF.js";import"./composite-B18nZLbz.js";import"./svgIconContainer-D1UbEXN0.js";import"./PdfViewerSearchBar-Bq8EXoC_.js";import"./chevron-up-WbbM4KQ9.js";import"./chevron-down-BSoyp3dk.js";import"./cross-CP4Lwknm.js";import"./PdfViewerSidebar-Gfovhno0.js";import"./index-VIT7olFA.js";import"./index-q5lLjySj.js";import"./index-u6B6c4lm.js";import"./PdfViewerToolbar-B5UuqTLY.js";import"./Button-B-j85khL.js";import"./chevron-right-CGHbFhhU.js";import"./Input-8GhwsC7r.js";import"./search-BMnX-ou2.js";import"./spin-kAknzxHd.js";import"./error-D_5Pa8ED.js";import"./withOsdkMetrics-BHF9odaV.js";import"./makeExternalStore-BNFQB0ek.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
