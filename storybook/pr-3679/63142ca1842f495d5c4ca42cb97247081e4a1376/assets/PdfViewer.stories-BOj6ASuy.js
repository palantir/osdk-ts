import{j as r,M as s}from"./iframe-CQwY6mO4.js";import{P as p}from"./pdf-viewer-B3ZCn4B3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2Ffsirp.js";import"./preload-helper-CG_nRBE5.js";import"./PdfRenderer-AtShagO6.js";import"./index-wtEpLbyR.js";import"./PdfViewer-BgzWZwOk.js";import"./PdfViewer.module.css-B4w-RvJu.js";import"./PdfViewerAnnotationLayer-3uouLcEF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSJ41PHz.js";import"./PdfViewerOutlineSidebar-DMbfwXLW.js";import"./PdfViewerSidebarHeader-lUav_pdP.js";import"./useBaseUiId-CHDIn64B.js";import"./useControlled-CJq6D1v1.js";import"./CompositeRoot-Cnsrj79S.js";import"./CompositeItem-4f9J1wU9.js";import"./ToolbarRootContext-De19NDdj.js";import"./composite-DyRwYDBq.js";import"./svgIconContainer-uS1_fq8T.js";import"./PdfViewerSearchBar-CBOJomlc.js";import"./chevron-up-D43dZxU2.js";import"./chevron-down-Dml-bxcm.js";import"./cross-BwbamFqn.js";import"./PdfViewerSidebar-Bo0EkbcY.js";import"./index-Cd4rZEU7.js";import"./index-Dmoy23Ww.js";import"./index-D_1Blimg.js";import"./PdfViewerToolbar-BqLihJuU.js";import"./Button-kJ1MHZUd.js";import"./chevron-right-ls1-VFMb.js";import"./Input-DVkCs8b8.js";import"./search-GVl2c2Dm.js";import"./spin-CcwQbYTM.js";import"./error-zMG-nmVh.js";import"./withOsdkMetrics-DTJ-q1xq.js";import"./makeExternalStore-D84SWLxJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
