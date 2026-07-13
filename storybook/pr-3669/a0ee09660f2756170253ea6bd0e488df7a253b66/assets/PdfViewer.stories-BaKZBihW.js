import{j as r,M as s}from"./iframe-Bd5lXcK-.js";import{P as p}from"./pdf-viewer-BRlaWvkU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JdC2nHlX.js";import"./preload-helper-B40_CvDk.js";import"./PdfRenderer-D5rF-jvR.js";import"./index-BwIezaLT.js";import"./PdfViewer-CAzpX354.js";import"./PdfViewer.module.css-CQXuua7Z.js";import"./PdfViewerAnnotationLayer-m9j9TG66.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtBWft60.js";import"./PdfViewerOutlineSidebar-CgUkD3-0.js";import"./PdfViewerSidebarHeader-C9c1WgXG.js";import"./useBaseUiId-iFREST2G.js";import"./useControlled-DwGxm4YP.js";import"./CompositeRoot-DWDY9WZu.js";import"./CompositeItem-9LzBwTqs.js";import"./ToolbarRootContext-D7PUXliD.js";import"./composite-gHOL1u2z.js";import"./svgIconContainer-DkEYOti2.js";import"./PdfViewerSearchBar-BKagE1OG.js";import"./chevron-up-CFzwzMap.js";import"./chevron-down-wTBIRPdb.js";import"./cross-DhHLcr1o.js";import"./PdfViewerSidebar-DOpVz6pw.js";import"./index-BlFnoMt0.js";import"./index-4lineNoM.js";import"./index-COBYsO2C.js";import"./PdfViewerToolbar-BCaTzhUf.js";import"./Button-BInWzPHC.js";import"./chevron-right-gIJjTGsr.js";import"./Input-BVbj5hXB.js";import"./search-V68UyHJf.js";import"./spin-CkLx_8bS.js";import"./error-Bx7kxHM8.js";import"./withOsdkMetrics-BDY538Ko.js";import"./makeExternalStore-kFBYkqGe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
