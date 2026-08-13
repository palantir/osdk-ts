import{j as r,M as s}from"./iframe-D4PY-PnJ.js";import{P as p}from"./pdf-viewer-BbIApeqm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Do0_ek2w.js";import"./preload-helper-01voB3Td.js";import"./PdfRenderer-DKsmEs5b.js";import"./index-C3ze-A25.js";import"./PdfViewer-Cic8cT-C.js";import"./PdfViewer.module.css-d1V_b7WX.js";import"./PdfViewerAnnotationLayer-BuvydoVw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgYAEvfP.js";import"./PdfViewerOutlineSidebar-1AHyRCaW.js";import"./PdfViewerSidebarHeader-DuYvNeJs.js";import"./useBaseUiId-CT5Nuzm7.js";import"./useControlled-B0YZSF-a.js";import"./CompositeRoot-Cw8yQO1w.js";import"./CompositeItem-C6S-nciI.js";import"./ToolbarRootContext-Dopp7FRe.js";import"./composite-BW0oHWLe.js";import"./svgIconContainer-BBFbqrO9.js";import"./PdfViewerSearchBar-iKQnaN7A.js";import"./chevron-up-D1GgcjP7.js";import"./chevron-down-D22F0u6Z.js";import"./cross-BCNCJ4zW.js";import"./PdfViewerSidebar-C1e5wtaQ.js";import"./index-1VGocKKR.js";import"./index-BmSitOna.js";import"./index-OJ7CE0nE.js";import"./PdfViewerToolbar-AHIobBob.js";import"./Button-CRplF3wT.js";import"./chevron-right-Cvh61v0W.js";import"./Input-DpVdAlwI.js";import"./search-DhGWTixT.js";import"./spin-9AFoS0lj.js";import"./error-CsEWfIK9.js";import"./withOsdkMetrics-CAIkKNTM.js";import"./makeExternalStore-D4y_vvzd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
