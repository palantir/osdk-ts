import{j as r,M as s}from"./iframe-B3k6St_T.js";import{P as p}from"./pdf-viewer-Dx6V85dT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9_MT-nY.js";import"./preload-helper-Bz3dVFdp.js";import"./PdfRenderer-CH_HudgU.js";import"./index-BvHXh5hH.js";import"./PdfViewer-ChXQhPvV.js";import"./PdfViewer.module.css-DjHJPhPk.js";import"./PdfViewerAnnotationLayer-VacEXx5S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSfDLoWZ.js";import"./PdfViewerOutlineSidebar-CHCHv2Is.js";import"./PdfViewerSidebarHeader-BMQl58ZY.js";import"./useBaseUiId-CN4YGlgk.js";import"./useControlled-DKV39VDG.js";import"./CompositeRoot-Bvd3W7Bk.js";import"./CompositeItem-C1S6KcsA.js";import"./ToolbarRootContext-C9TgeQ7l.js";import"./composite-C_maXQ4a.js";import"./svgIconContainer-CiJvVYR1.js";import"./PdfViewerSearchBar-D5tlZ2Tv.js";import"./chevron-up-Bpfxd7EO.js";import"./chevron-down-C7A59tL6.js";import"./cross-DkN_e3qa.js";import"./PdfViewerSidebar-CpdCI0D8.js";import"./index-D6Y2Irns.js";import"./index-BOMAFt6Z.js";import"./index-DvV5NBUk.js";import"./PdfViewerToolbar-DHakie3s.js";import"./Button-CvyOEKt-.js";import"./chevron-right-h4RU5bK5.js";import"./Input-CGzs6Mm3.js";import"./search-D1gWWYJX.js";import"./spin-9161q3W0.js";import"./error-D0JClcHo.js";import"./withOsdkMetrics-Da-HTJgY.js";import"./makeExternalStore-CH1rZ3vr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
