import{j as r,M as s}from"./iframe-4yYB2ECu.js";import{P as p}from"./pdf-viewer-DIYzhMfk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0qbMyKn.js";import"./preload-helper-C93dm6Ya.js";import"./PdfViewer-DnQeyl9o.js";import"./index-DSqbAlFE.js";import"./BasePdfViewer-Dopjy04b.js";import"./BasePdfViewer.module.css-ZZnTsTH8.js";import"./PdfViewerAnnotationLayer-6LeA7tSz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5cEgBJl.js";import"./PdfViewerOutlineSidebar-DviRtbHt.js";import"./PdfViewerSidebarHeader-Dp5y_-yK.js";import"./useBaseUiId-CU_4DgXR.js";import"./useControlled-Dpm9HPQO.js";import"./CompositeRoot-BQRuzAGb.js";import"./CompositeItem-BGzjXJQa.js";import"./ToolbarRootContext-D87nWH30.js";import"./composite-Ds40WlWo.js";import"./svgIconContainer-JfwEPNa6.js";import"./PdfViewerSearchBar-BpDwRazy.js";import"./chevron-up-Xmny5K-6.js";import"./chevron-down-xdKSBTdG.js";import"./cross-LcX80p3m.js";import"./PdfViewerSidebar-DCUKomLb.js";import"./index-BpSvWq5I.js";import"./index-Yem3TUar.js";import"./index-BWrySZaR.js";import"./PdfViewerToolbar-b1sVd_1G.js";import"./Button-CUx6dso9.js";import"./chevron-right-CXADij7S.js";import"./Input-Co-1aNP1.js";import"./search-CC-mClCy.js";import"./spin-DnU3gJ-v.js";import"./error-Dn6Wt_DI.js";import"./withOsdkMetrics-DFTVZPh6.js";import"./makeExternalStore-d8KP81yZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
