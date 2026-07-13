import{j as r,M as s}from"./iframe-CzmEyu7G.js";import{P as p}from"./pdf-viewer-DFtiV79N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyXnuThm.js";import"./preload-helper-DecrOcLq.js";import"./PdfRenderer-BhHoP9mP.js";import"./index-BbBaxdbV.js";import"./PdfViewer-xlIpxpYZ.js";import"./PdfViewer.module.css-D3uzSlIe.js";import"./PdfViewerAnnotationLayer-Dn1OfmXG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMKeRCh1.js";import"./PdfViewerOutlineSidebar-mSZO124p.js";import"./PdfViewerSidebarHeader-CZs8j0wC.js";import"./useBaseUiId-Bft1ngn8.js";import"./useControlled-CJz5npX-.js";import"./CompositeRoot-tIziPZ4R.js";import"./CompositeItem-CHujYx5L.js";import"./ToolbarRootContext-ydnR1ibb.js";import"./composite-CcStSYJQ.js";import"./svgIconContainer-6eJu9o0G.js";import"./PdfViewerSearchBar-inLgV4oa.js";import"./chevron-up-BSmG8PGW.js";import"./chevron-down-PphKRlo8.js";import"./cross-DrmyAQxN.js";import"./PdfViewerSidebar-BiZ6gky1.js";import"./index-CHsrx0Un.js";import"./index-BkoNt8qx.js";import"./index-15j0Pfyt.js";import"./PdfViewerToolbar-DFjuv3RS.js";import"./Button-BjdaHQGQ.js";import"./chevron-right-BXX7XNCN.js";import"./Input-1boXHLUv.js";import"./search-B0DKZ6GP.js";import"./spin-B3ENfeJp.js";import"./error-B_jnp-Yv.js";import"./withOsdkMetrics-DqWt2DA4.js";import"./makeExternalStore-D4GI9pLL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
