import{j as r,M as s}from"./iframe-KleQ2Wf3.js";import{P as p}from"./pdf-viewer-DCsAi1rj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1okeAk6E.js";import"./preload-helper-7Uf-e0eF.js";import"./PdfViewer-D46ORYBZ.js";import"./index-BJGsi2ln.js";import"./BasePdfViewer-aaK6XolQ.js";import"./BasePdfViewer.module.css-Cv-bGQyL.js";import"./PdfViewerAnnotationLayer-DR_LB2JG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Beyy7dH2.js";import"./PdfViewerOutlineSidebar-B2DO0its.js";import"./PdfViewerSidebarHeader-D_1qXw8P.js";import"./useBaseUiId-au1tBZKr.js";import"./useControlled-C5WbbxG6.js";import"./CompositeRoot-DsnqPx4j.js";import"./CompositeItem-CQkoTI-y.js";import"./ToolbarRootContext-o5mBsyGt.js";import"./composite-DXCTc0LD.js";import"./svgIconContainer-BRTcYuz-.js";import"./PdfViewerSearchBar-BnBDkhzP.js";import"./chevron-up-BqjDYOlb.js";import"./chevron-down-jigIVwbX.js";import"./cross-dN9-xF_6.js";import"./PdfViewerSidebar-BkKPm72Z.js";import"./index-C028rklK.js";import"./index-CqzN1gLv.js";import"./index-5raUfGTA.js";import"./PdfViewerToolbar-Dcv9DTfM.js";import"./Button-HfVvjBaX.js";import"./chevron-right-Ik-k9Zlt.js";import"./Input-DYtYd9SI.js";import"./search-DGONQjtR.js";import"./spin-BmBrEOsX.js";import"./error-C4IozNy9.js";import"./withOsdkMetrics-_1QqcoW6.js";import"./makeExternalStore-CdYrFgJd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
