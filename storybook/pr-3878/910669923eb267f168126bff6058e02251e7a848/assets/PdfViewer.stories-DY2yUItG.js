import{j as r,M as s}from"./iframe-BceyKPSs.js";import{P as p}from"./pdf-viewer-CRipipyt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFfdjG4f.js";import"./preload-helper-yl7T0Sh3.js";import"./PdfViewer-BNuyuVR7.js";import"./index-CWhFTZFr.js";import"./BasePdfViewer-DDdMkoHX.js";import"./BasePdfViewer.module.css-BBHfbRrU.js";import"./PdfViewerAnnotationLayer-DevuOc86.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qWjZE-TQ.js";import"./PdfViewerOutlineSidebar-Aj0Y2A2B.js";import"./PdfViewerSidebarHeader-D9H5i51S.js";import"./useBaseUiId-DuopilVp.js";import"./useControlled-B18pPgNn.js";import"./CompositeRoot-BroFcZUq.js";import"./CompositeItem-Birb3K4T.js";import"./ToolbarRootContext-C0EbIhmv.js";import"./composite-G6x_R6vo.js";import"./svgIconContainer-DHBvckaf.js";import"./PdfViewerSearchBar-D5l7JXWj.js";import"./chevron-up-1RiQ41Mu.js";import"./chevron-down-DvCtF5Hi.js";import"./cross-hF_e54Dm.js";import"./PdfViewerSidebar-DGeb3uFX.js";import"./index-CkN3vfzY.js";import"./index-BWoCeqh_.js";import"./index-DKSJHSMW.js";import"./PdfViewerToolbar-YMASWGm1.js";import"./Button-mBgKjA3l.js";import"./chevron-right-DuEYUeYz.js";import"./Input-qZlbTLRL.js";import"./search-DxqUxhlP.js";import"./spin-BXE3Cx7O.js";import"./error-86GovzKd.js";import"./withOsdkMetrics-DHwnoxLF.js";import"./makeExternalStore-DbwWgrB9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
