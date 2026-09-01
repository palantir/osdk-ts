import{j as r,M as s}from"./iframe-uWQw-aoo.js";import{P as p}from"./pdf-viewer-CplFZ6pe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CK_nwqtF.js";import"./preload-helper-DVjylv8h.js";import"./PdfViewer-f2Y8EdaK.js";import"./index-00plDTMi.js";import"./BasePdfViewer-P7Pc-wA7.js";import"./BasePdfViewer.module.css-BtFeEswD.js";import"./PdfViewerAnnotationLayer-IC071ogX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1YeoLqr.js";import"./PdfViewerOutlineSidebar-DBPopbyc.js";import"./PdfViewerSidebarHeader-BwxbK-AS.js";import"./useBaseUiId-Ck6WuZAw.js";import"./useControlled-DUIvla77.js";import"./CompositeRoot-9YQeHemU.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./composite-DHcKfgn9.js";import"./svgIconContainer-DmbccLJt.js";import"./PdfViewerSearchBar-B8z5cHMJ.js";import"./chevron-up-CbGYwo0a.js";import"./chevron-down-CbHcQ9sT.js";import"./cross-BoNTQ4Rv.js";import"./PdfViewerSidebar-CEJK55Rj.js";import"./index-DTQn9lDq.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./PdfViewerToolbar-C3Yktp9h.js";import"./Button-BmUOiVqe.js";import"./chevron-right-BAwVY0T8.js";import"./Input--UpB7VqG.js";import"./search-BdK0N4i0.js";import"./spin-DixUlP-t.js";import"./error-GxXvf_3k.js";import"./withOsdkMetrics-YSsi8cLt.js";import"./makeExternalStore-DeeFkPyS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
