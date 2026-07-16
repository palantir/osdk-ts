import{j as r,M as s}from"./iframe-CrHOx1Q8.js";import{P as p}from"./pdf-viewer-StY-FtBA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ch9mcyOs.js";import"./preload-helper-CXayWngK.js";import"./PdfRenderer-DLJm86fb.js";import"./index-DMCG3xvS.js";import"./PdfViewer-HTL38dhr.js";import"./PdfViewer.module.css-DCmAn4Vl.js";import"./PdfViewerAnnotationLayer-hmf-cyaH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZypxpfz.js";import"./PdfViewerOutlineSidebar-Cb6Rscd3.js";import"./PdfViewerSidebarHeader-poVkXEbm.js";import"./useBaseUiId-DArlA0u-.js";import"./useControlled-B9N8AMtZ.js";import"./CompositeRoot-D8CMOf3c.js";import"./CompositeItem-DspzOklw.js";import"./ToolbarRootContext-DDfVXNE2.js";import"./composite-DFN3xlZh.js";import"./svgIconContainer-BKZ-ijoV.js";import"./PdfViewerSearchBar-Cc1duUme.js";import"./chevron-up-CagCttpi.js";import"./chevron-down-DEWPOpLL.js";import"./cross-uK5bFuWa.js";import"./PdfViewerSidebar-tfb8uPI8.js";import"./index-6M1Fb5iF.js";import"./index-CTyGD713.js";import"./index-4uRgCZRg.js";import"./PdfViewerToolbar-VMcElzlU.js";import"./Button-DaCY62TH.js";import"./chevron-right-CWomVVBi.js";import"./Input-BAmvIJ-v.js";import"./search-qTaTsUfJ.js";import"./spin-tRdp2H9W.js";import"./error-KJx9m7U_.js";import"./withOsdkMetrics-DgOo0yPz.js";import"./makeExternalStore-B-Jy2vDJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
