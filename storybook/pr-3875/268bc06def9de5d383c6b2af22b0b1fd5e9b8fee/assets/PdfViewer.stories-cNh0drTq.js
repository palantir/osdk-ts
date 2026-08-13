import{j as r,M as s}from"./iframe-5bssl6VS.js";import{P as p}from"./pdf-viewer-XTVJam55.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2xzTJnBY.js";import"./preload-helper-BHXvjcwa.js";import"./PdfViewer-CEzt1Ac6.js";import"./index-B13HoCGw.js";import"./BasePdfViewer-Bk5uOFax.js";import"./BasePdfViewer.module.css-03RTUp8d.js";import"./PdfViewerAnnotationLayer-Bb8FoQ4V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7BkCO7UY.js";import"./PdfViewerOutlineSidebar-Y4J70uar.js";import"./PdfViewerSidebarHeader-Di12BkMq.js";import"./useBaseUiId-Dh4eINWl.js";import"./useControlled-DiYZsjSM.js";import"./CompositeRoot-CqgeswSw.js";import"./CompositeItem-BARyggcS.js";import"./ToolbarRootContext-BS1iuPdd.js";import"./composite-Btg8TS6e.js";import"./svgIconContainer-DrtwtWvp.js";import"./PdfViewerSearchBar-B0izX7Ej.js";import"./chevron-up-Blfl3NKb.js";import"./chevron-down-CFvJBTG-.js";import"./cross-DxgHVtzX.js";import"./PdfViewerSidebar-d5XUoJwr.js";import"./index-BLEwjvAg.js";import"./index-BOy4EylD.js";import"./index-nZ8SppMu.js";import"./PdfViewerToolbar-rT1E3hgb.js";import"./Button-DlzEigHK.js";import"./chevron-right-B36pS_VE.js";import"./Input-Cn-NeA9g.js";import"./search-VkpzhyZf.js";import"./spin-CNX3JY02.js";import"./error-BGrVIj_t.js";import"./withOsdkMetrics-CZkoO3-I.js";import"./makeExternalStore-BheM4fhK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
