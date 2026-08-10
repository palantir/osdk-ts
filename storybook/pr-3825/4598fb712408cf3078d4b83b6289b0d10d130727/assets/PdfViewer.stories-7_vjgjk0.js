import{j as r,M as s}from"./iframe-CC79wy_g.js";import{P as p}from"./pdf-viewer-BtMz1sXi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CezHGn7c.js";import"./preload-helper-z3GLkGAP.js";import"./PdfRenderer-CAr8T1Ss.js";import"./index-C33jCrCz.js";import"./PdfViewer-DwV8Yo4G.js";import"./PdfViewer.module.css-CGyXn5kx.js";import"./PdfViewerAnnotationLayer-Df90lwn8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-W7PFRqlj.js";import"./PdfViewerOutlineSidebar-91D5y4O6.js";import"./PdfViewerSidebarHeader-D4JfQVE2.js";import"./useBaseUiId-DAg5RdyV.js";import"./useControlled-B01nKra1.js";import"./CompositeRoot-dX2CavjC.js";import"./CompositeItem-DFHw5T7g.js";import"./ToolbarRootContext-DHil5fps.js";import"./composite-C0Vu5t_m.js";import"./svgIconContainer-BP6BFAr1.js";import"./PdfViewerSearchBar-032ExICT.js";import"./chevron-up-NpYL-pRo.js";import"./chevron-down-v3_iAZgR.js";import"./cross-ipWBqB8R.js";import"./PdfViewerSidebar-Cj1JJYDH.js";import"./index-HMtgFW0K.js";import"./index-BlLuABy0.js";import"./index-D3F-m5eM.js";import"./PdfViewerToolbar-9G9YOnxg.js";import"./Button-DuivO10i.js";import"./chevron-right-D5ChuJTS.js";import"./Input-rDYGL68X.js";import"./search-C23-bZ6_.js";import"./spin-CpNFk0Eo.js";import"./error-wnTyEN9d.js";import"./withOsdkMetrics-EoR7xkLR.js";import"./makeExternalStore-CkX2v-LN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
