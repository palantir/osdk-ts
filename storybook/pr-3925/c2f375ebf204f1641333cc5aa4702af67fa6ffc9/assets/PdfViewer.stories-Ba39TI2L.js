import{j as r,M as s}from"./iframe-D7uYHMK5.js";import{P as p}from"./pdf-viewer-Bmu3UX8e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZ8zaNr9.js";import"./preload-helper-DiAZcfZm.js";import"./PdfViewer-1hOnIO4K.js";import"./index-BzC45Lga.js";import"./BasePdfViewer-CWxzm5z-.js";import"./BasePdfViewer.module.css-BmfBEeZt.js";import"./PdfViewerAnnotationLayer-BOkL3do2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOmlCwLx.js";import"./PdfViewerOutlineSidebar-DFF7MxI0.js";import"./PdfViewerSidebarHeader-BNSeETtT.js";import"./useBaseUiId-Us591avB.js";import"./useControlled-D3BSP16K.js";import"./CompositeRoot-BZ0Gs8W6.js";import"./CompositeItem-DjaEdGcQ.js";import"./ToolbarRootContext-D0EWy9dk.js";import"./composite-BcyVLOSD.js";import"./svgIconContainer-BznKxTlt.js";import"./PdfViewerSearchBar--B3rvA0V.js";import"./chevron-up-B9VFT-k8.js";import"./chevron-down-BFTm3R8X.js";import"./cross-CD_5zqBE.js";import"./PdfViewerSidebar-BOVQctf9.js";import"./index-BMEwLPMF.js";import"./index-I4_6oK98.js";import"./index-Cjfc9eRI.js";import"./PdfViewerToolbar-Cte2povE.js";import"./Button-erxxrJMI.js";import"./chevron-right-BFHzqwtp.js";import"./Input-BabOhAfz.js";import"./search-DRrcfgZe.js";import"./spin-aA3fmfjy.js";import"./error-DJXRLU5K.js";import"./withOsdkMetrics-D9_ognri.js";import"./makeExternalStore-DmFz2z1W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
