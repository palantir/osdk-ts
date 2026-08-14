import{j as r,M as s}from"./iframe-Tb86ZRmF.js";import{P as p}from"./pdf-viewer-CzPRpReB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4PVFSKs.js";import"./preload-helper-DfbZGOZ6.js";import"./PdfViewer-CkMG0e7C.js";import"./index-Dnqd7J8g.js";import"./BasePdfViewer-P2k4b9mX.js";import"./BasePdfViewer.module.css-BhZ89xFd.js";import"./PdfViewerAnnotationLayer-AyoVNAYN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHI7TCUM.js";import"./PdfViewerOutlineSidebar-H0tVPnLT.js";import"./PdfViewerSidebarHeader-QWzF2Bbi.js";import"./useBaseUiId-DEBuPtLc.js";import"./useControlled-B1TwbK1C.js";import"./CompositeRoot-CTcUpopd.js";import"./CompositeItem-m28j8eMj.js";import"./ToolbarRootContext-BZOu2fTP.js";import"./composite-DV_gLhz3.js";import"./svgIconContainer-DJKDb-5p.js";import"./PdfViewerSearchBar-Cc8oASr5.js";import"./chevron-up-Dhompoe9.js";import"./chevron-down-Cc6F0Nf0.js";import"./cross-CCAZO53q.js";import"./PdfViewerSidebar-Ne8yEQYI.js";import"./index-BU-9JmZp.js";import"./index-sYybngkU.js";import"./index-CmiZFNOU.js";import"./PdfViewerToolbar-5xqbhvQL.js";import"./Button-CLo15qID.js";import"./chevron-right-DVjxbjs5.js";import"./Input-Khmtvi3_.js";import"./search-L-ymspTn.js";import"./spin-D2eZZTHO.js";import"./error-Bv1qHWgX.js";import"./withOsdkMetrics-C3T6RJD2.js";import"./makeExternalStore-BlPRehW9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
