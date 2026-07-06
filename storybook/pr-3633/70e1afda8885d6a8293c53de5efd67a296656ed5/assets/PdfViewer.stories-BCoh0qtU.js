import{j as r,M as s}from"./iframe-6JVXeTWS.js";import{P as p}from"./pdf-viewer-DEeBEjRY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtyyJV6B.js";import"./preload-helper-Cw1MFz_c.js";import"./PdfRenderer-Bml8Fec-.js";import"./index-CCRcN1k8.js";import"./PdfViewer-1Q6LTSD5.js";import"./PdfViewer.module.css-C3knbogE.js";import"./PdfViewerAnnotationLayer-CNB0gTqk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwglRyvi.js";import"./PdfViewerOutlineSidebar-BuujmCru.js";import"./PdfViewerSidebarHeader-YSAqoiiP.js";import"./useBaseUiId-a7slHkDQ.js";import"./useControlled-BXAX7das.js";import"./CompositeRoot-Dc9BpiW4.js";import"./CompositeItem-Cxv47m7T.js";import"./ToolbarRootContext-DfFG8vJ4.js";import"./composite-DTzkFL_Y.js";import"./svgIconContainer-D_jRBUY4.js";import"./PdfViewerSearchBar-BWuxaVlq.js";import"./chevron-up-DPLfpz2d.js";import"./chevron-down-DxkqjctO.js";import"./cross-5SRrceXd.js";import"./PdfViewerSidebar-Wa_FOrUd.js";import"./index-Bd6rbSg8.js";import"./index-CKLXtTUZ.js";import"./index-akSI5u-L.js";import"./PdfViewerToolbar-BoOl_q56.js";import"./Button-HAvPtIv5.js";import"./chevron-right-B35rIJeB.js";import"./Input-SnHDB1yK.js";import"./search-BvHHgQAn.js";import"./spin-Xgq0HAuN.js";import"./error-dc7Jmoqx.js";import"./withOsdkMetrics-BS6Er7Nk.js";import"./makeExternalStore-DctrMw-f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
