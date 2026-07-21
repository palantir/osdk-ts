import{j as r,M as s}from"./iframe-CpwJPeyh.js";import{P as p}from"./pdf-viewer-lPNVn_43.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqsgXIb_.js";import"./preload-helper-GrGVcR2a.js";import"./PdfRenderer-eLYQjTMj.js";import"./index-DJkA5721.js";import"./PdfViewer-BKMrpHNw.js";import"./PdfViewer.module.css-Deotkrhe.js";import"./PdfViewerAnnotationLayer-NqVzjutH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cwp48NEd.js";import"./PdfViewerOutlineSidebar-B7kbt-jk.js";import"./PdfViewerSidebarHeader-da2kJkRQ.js";import"./useBaseUiId-DihNpFQ5.js";import"./useControlled-DZ9apck0.js";import"./CompositeRoot-DQUIZMLU.js";import"./CompositeItem-BnN8NUKf.js";import"./ToolbarRootContext-C-Uwte3Q.js";import"./composite-C-Beuk3S.js";import"./svgIconContainer-CqkgEI8-.js";import"./PdfViewerSearchBar-BFCIbIIa.js";import"./chevron-up-B4wHElNK.js";import"./chevron-down-DUHALcBs.js";import"./cross-BJntrg2g.js";import"./PdfViewerSidebar-B5hip1Ys.js";import"./index-_j5MOVdN.js";import"./index-tzu8SvT9.js";import"./index-B6xsto9n.js";import"./PdfViewerToolbar-BnbAPhoB.js";import"./Button-Bb-o9PCs.js";import"./chevron-right-CONm62-j.js";import"./Input-YvJt1O2i.js";import"./search-rn4tl3gn.js";import"./spin-DUNSl7eA.js";import"./error-D2J8vF0B.js";import"./withOsdkMetrics-CbwW1UHo.js";import"./makeExternalStore-CC5gBc3G.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
