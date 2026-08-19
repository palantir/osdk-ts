import{j as r,M as s}from"./iframe-B6AkhtVd.js";import{P as p}from"./pdf-viewer-BbfothVI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSvgfvUV.js";import"./preload-helper-DAEdGq6d.js";import"./PdfViewer-BzthZ0Ad.js";import"./index-C91K9ps7.js";import"./BasePdfViewer-B6sAyAUx.js";import"./BasePdfViewer.module.css-DAJcmLfG.js";import"./PdfViewerAnnotationLayer-B0BuMwjr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmcCa_or.js";import"./PdfViewerOutlineSidebar-Bxsa3hV7.js";import"./PdfViewerSidebarHeader-D6-5gepx.js";import"./useBaseUiId-D6Pj3rgz.js";import"./useControlled-DvrLljgv.js";import"./CompositeRoot-CDUM2-Lp.js";import"./CompositeItem-BWKOk0A1.js";import"./ToolbarRootContext-DQVGsq2j.js";import"./composite-BDhvysYg.js";import"./svgIconContainer-BoSGc56J.js";import"./PdfViewerSearchBar-CBpSOFQm.js";import"./chevron-up-BOIyeuS8.js";import"./chevron-down-CEzkWe0K.js";import"./cross-m6qgDhvT.js";import"./PdfViewerSidebar-Cs06-8qB.js";import"./index-CAFFYM2J.js";import"./index-CveC20hk.js";import"./index-DS-1BAxQ.js";import"./PdfViewerToolbar-A_iv59OX.js";import"./Button-BWxAZ7YP.js";import"./chevron-right-BEIlPNnx.js";import"./Input-DHV2JVjW.js";import"./search-CgNZ6jJc.js";import"./spin-Brfqde_g.js";import"./error-CIE68Eoj.js";import"./withOsdkMetrics-D2EQ2PwQ.js";import"./makeExternalStore-MefWcWhA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
