import{j as r,M as s}from"./iframe-tKy6APGZ.js";import{P as p}from"./pdf-viewer-WdSd8PrH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCTIO9eO.js";import"./preload-helper-TkRVYpGj.js";import"./PdfViewer-Dd8-vwvM.js";import"./index-xL2dF_iL.js";import"./BasePdfViewer-DFfmg4W7.js";import"./BasePdfViewer.module.css-lTW_uLO0.js";import"./PdfViewerAnnotationLayer-BhC6G6og.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oKtw9uoe.js";import"./PdfViewerOutlineSidebar-DVdT-KRN.js";import"./PdfViewerSidebarHeader-Bvc1qXdP.js";import"./useBaseUiId-D4LRJH62.js";import"./useControlled-DKIul1JY.js";import"./CompositeRoot-uElYup3C.js";import"./CompositeItem-CPH8rcqG.js";import"./ToolbarRootContext-BNp90vCd.js";import"./composite-CQXmhBC2.js";import"./svgIconContainer-Fm0Itt8L.js";import"./PdfViewerSearchBar-CRSb_jcj.js";import"./chevron-up-DRKjBGsN.js";import"./chevron-down-Dz9066r5.js";import"./cross-CZNxjxTb.js";import"./PdfViewerSidebar-CG_T2YDa.js";import"./index-BY_Q76g3.js";import"./index-tz8HT03m.js";import"./index-DPumkzsB.js";import"./PdfViewerToolbar-O3Zq6DWx.js";import"./Button-CO7TuWo7.js";import"./chevron-right-XsuZRESf.js";import"./Input-CNh3fqAG.js";import"./search-D28QZpbg.js";import"./spin-DsamTbbj.js";import"./error-DeDVZ0qI.js";import"./withOsdkMetrics-D45euEFz.js";import"./makeExternalStore-C4vMnOBy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
