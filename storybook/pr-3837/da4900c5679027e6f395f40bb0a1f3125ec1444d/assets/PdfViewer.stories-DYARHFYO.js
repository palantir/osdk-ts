import{j as r,M as s}from"./iframe-waVwnd8z.js";import{P as p}from"./pdf-viewer-DRaLarSy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEBd6lXA.js";import"./preload-helper-_DI9v3Ms.js";import"./PdfRenderer-BM6SOl2-.js";import"./index-BtVM0B8b.js";import"./PdfViewer-KCTeWS2S.js";import"./PdfViewer.module.css-LIgMvJ_x.js";import"./PdfViewerAnnotationLayer-Qt3N5rxM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bSErDkZd.js";import"./PdfViewerOutlineSidebar-DQ7bTBtq.js";import"./PdfViewerSidebarHeader-9dL6yrrA.js";import"./useBaseUiId-ngJP8Egc.js";import"./useControlled-DTkfeOVI.js";import"./CompositeRoot-D61RdPTp.js";import"./CompositeItem-EoJb-xq2.js";import"./ToolbarRootContext-D1H6jriz.js";import"./composite-BKQDvwIx.js";import"./svgIconContainer-DBjtKq0D.js";import"./PdfViewerSearchBar-BIFRYnfH.js";import"./chevron-up-DkP-vy-B.js";import"./chevron-down-y5ucr_FJ.js";import"./cross--4_91Uz1.js";import"./PdfViewerSidebar-KENMeFsi.js";import"./index-BznGz8cd.js";import"./index-DlxZMsTY.js";import"./index-DTckBnCv.js";import"./PdfViewerToolbar-BJdtcKmT.js";import"./Button-D0ROykH0.js";import"./chevron-right-BBBshD0X.js";import"./Input-D9kz7Dq-.js";import"./search-gNfwsCxG.js";import"./spin-DORsq_td.js";import"./error-BD6fdJql.js";import"./withOsdkMetrics-Cy2NuPJb.js";import"./makeExternalStore-Bu7BQiVo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
