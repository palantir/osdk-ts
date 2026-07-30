import{j as r,M as s}from"./iframe-rq8NuSfP.js";import{P as p}from"./pdf-viewer-DVzjNpZJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYMokjCb.js";import"./preload-helper-CvJz_IUe.js";import"./PdfRenderer-Tkl-hWNy.js";import"./index-ysoUH_JH.js";import"./PdfViewer-Iezj92n3.js";import"./PdfViewer.module.css-Ck350EcA.js";import"./PdfViewerAnnotationLayer-BICS68kS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzA6NNOK.js";import"./PdfViewerOutlineSidebar-Cy-vpJuY.js";import"./PdfViewerSidebarHeader-CCq7fs4A.js";import"./useBaseUiId-Bf-Z0IHd.js";import"./useControlled-CkaqNWIl.js";import"./CompositeRoot-CdiC963y.js";import"./CompositeItem-Qabrm8X6.js";import"./ToolbarRootContext-DAlNjZIe.js";import"./composite-sl7bgooi.js";import"./svgIconContainer-DztQZTqt.js";import"./PdfViewerSearchBar-BRZeBfkY.js";import"./chevron-up-BQx6r3UW.js";import"./chevron-down-CfpMyllA.js";import"./cross-BBqhm1p8.js";import"./PdfViewerSidebar-CMacxv8B.js";import"./index-0Ykzd783.js";import"./index-B7xRuMiw.js";import"./index-CsgLYqAh.js";import"./PdfViewerToolbar-BkdG000P.js";import"./Button-DuL44OIq.js";import"./chevron-right--qfDNiMO.js";import"./Input-BIVs6kpr.js";import"./search-DWeYn3Qn.js";import"./spin-LSJsvOt2.js";import"./error-D6eViXnU.js";import"./withOsdkMetrics-DHFbf_VX.js";import"./makeExternalStore-DvD94buu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
