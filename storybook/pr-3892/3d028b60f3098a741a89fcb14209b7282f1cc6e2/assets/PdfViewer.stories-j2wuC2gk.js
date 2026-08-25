import{j as r,M as s}from"./iframe-DRjBmUXS.js";import{P as p}from"./pdf-viewer-BPCKI0c0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7TeWtVT.js";import"./preload-helper-DgOWrW9h.js";import"./PdfViewer-wtuBaoKk.js";import"./index-D6qvYW_s.js";import"./BasePdfViewer-DRFjdkQp.js";import"./BasePdfViewer.module.css-DeCSH0za.js";import"./PdfViewerAnnotationLayer-Do3OjFr8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-t3Hh_qvd.js";import"./PdfViewerOutlineSidebar-BYYgHTPf.js";import"./PdfViewerSidebarHeader-y3U6xDHt.js";import"./useBaseUiId-WS17y9nt.js";import"./useControlled-sU745DGU.js";import"./CompositeRoot-Dzbg1Vyt.js";import"./CompositeItem-Do0rCuoU.js";import"./ToolbarRootContext-Br9U1Q2_.js";import"./composite-rGdZym8a.js";import"./svgIconContainer-Bh_w5Xfd.js";import"./PdfViewerSearchBar-wdCcF3_J.js";import"./chevron-up-C_4CV5PM.js";import"./chevron-down-CFfBUDSH.js";import"./cross-3MnbZVbU.js";import"./PdfViewerSidebar-Dy5-Dv4c.js";import"./index-BVJlzR67.js";import"./index-BCESHM1K.js";import"./index-BOS5xdCe.js";import"./PdfViewerToolbar-Bnn2L4hs.js";import"./Button-DE-Hu3dt.js";import"./chevron-right-BSPql0mu.js";import"./Input-CDPW84Vd.js";import"./search-MPXqFORa.js";import"./spin-BQHDA6mn.js";import"./error-NWnnz2CJ.js";import"./withOsdkMetrics-BBE1IHfP.js";import"./makeExternalStore-BkV80SHH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
