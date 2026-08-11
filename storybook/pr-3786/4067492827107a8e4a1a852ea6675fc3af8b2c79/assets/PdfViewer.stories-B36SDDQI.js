import{j as r,M as s}from"./iframe-BzPs2xHz.js";import{P as p}from"./pdf-viewer-DZQMTfCv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-91cUsl70.js";import"./preload-helper-Dn3dBWKD.js";import"./PdfRenderer-D2WJa1hH.js";import"./index-lf_bX8Ds.js";import"./PdfViewer-BPF45BQ7.js";import"./PdfViewer.module.css-3t_GUtGT.js";import"./PdfViewerAnnotationLayer-IxaHpkz6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUi78Y5Y.js";import"./PdfViewerOutlineSidebar-30WW3kPD.js";import"./PdfViewerSidebarHeader-C8SmlBAV.js";import"./useBaseUiId-BMa9eygA.js";import"./useControlled-Cj3uSm2N.js";import"./CompositeRoot-DZYk32uO.js";import"./CompositeItem-CVol_ESW.js";import"./ToolbarRootContext-CRZmb0il.js";import"./composite-DpdAhGyH.js";import"./svgIconContainer-DhTEATNC.js";import"./PdfViewerSearchBar-BvL-pMVR.js";import"./chevron-up-BlIrtOj9.js";import"./chevron-down-CrUow07b.js";import"./cross-O7xa3Rso.js";import"./PdfViewerSidebar-3KR3Pm4P.js";import"./index-8MCdg044.js";import"./index-bYLveQI0.js";import"./index-D7e7z0jb.js";import"./PdfViewerToolbar-CddHLxxe.js";import"./Button-CbC3WPW_.js";import"./chevron-right-CCiInLlt.js";import"./Input-DTycr8bw.js";import"./search-CRuJLPg-.js";import"./spin-CIppFxLr.js";import"./error-DW-Bjygh.js";import"./withOsdkMetrics-DED3H3a2.js";import"./makeExternalStore-BjwsBrDG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
