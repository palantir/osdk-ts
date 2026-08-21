import{j as r,M as s}from"./iframe-BOPH40aM.js";import{P as p}from"./pdf-viewer-DqrKa9fS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1_8hx8X.js";import"./preload-helper-Dk7sOnp6.js";import"./PdfViewer-Av4UU6jV.js";import"./index-C6HCGinX.js";import"./BasePdfViewer-XeQVZjqM.js";import"./BasePdfViewer.module.css-DEyx-zj7.js";import"./PdfViewerAnnotationLayer-DjoRwkXq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Gw9E0BoY.js";import"./PdfViewerOutlineSidebar-CGTgdtAB.js";import"./PdfViewerSidebarHeader-CyzR4CP2.js";import"./useBaseUiId-FmUF_HCn.js";import"./useControlled-D0weT_xr.js";import"./CompositeRoot-DCH8iVrK.js";import"./CompositeItem-BrrSAdxA.js";import"./ToolbarRootContext-BQh3Vmwb.js";import"./composite-D2Y_yGja.js";import"./svgIconContainer-C74jhUFY.js";import"./PdfViewerSearchBar-YtwBaQdO.js";import"./chevron-up-Bgty9sSo.js";import"./chevron-down-BwPY74Fq.js";import"./cross-Dyy1QuxQ.js";import"./PdfViewerSidebar-2RPgrM-x.js";import"./index-DIdLImiR.js";import"./index-BdcQoi5s.js";import"./index-Dn6uDsye.js";import"./PdfViewerToolbar-C0oFMy5w.js";import"./Button-BEu920XA.js";import"./chevron-right-D7uKv8QM.js";import"./Input-IJOIjizp.js";import"./search-CzcjumOg.js";import"./spin-eATeZqAM.js";import"./error-CQh9rOC1.js";import"./withOsdkMetrics-CxsZe37o.js";import"./makeExternalStore-CDJtVkjz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
