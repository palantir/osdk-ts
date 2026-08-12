import{j as r,M as s}from"./iframe-CASB9tDT.js";import{P as p}from"./pdf-viewer-VZvrd-1T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Z-X3UrTM.js";import"./preload-helper-BT4qy2DG.js";import"./PdfRenderer-BEpzx0qE.js";import"./index-CaZjzwHl.js";import"./PdfViewer-psj_OZ_1.js";import"./PdfViewer.module.css-DyVjscKH.js";import"./PdfViewerAnnotationLayer-DiLuH8Te.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XVyR4U79.js";import"./PdfViewerOutlineSidebar-DcBAWVl7.js";import"./PdfViewerSidebarHeader-BGchHB1f.js";import"./useBaseUiId-CuUj_9P0.js";import"./useControlled-DLW506J-.js";import"./CompositeRoot-CjloLzE1.js";import"./CompositeItem-DTyFfYKq.js";import"./ToolbarRootContext-CqYiE2F9.js";import"./composite-CqdSrGVi.js";import"./svgIconContainer-D1NrwXBl.js";import"./PdfViewerSearchBar-IefDp5S6.js";import"./chevron-up-Clg8K2P4.js";import"./chevron-down-B1bduZ3e.js";import"./cross-BP6wgmXe.js";import"./PdfViewerSidebar-LhBtC1yR.js";import"./index-6uAsZ-h5.js";import"./index-DZkiBKN3.js";import"./index-SAn_G_wi.js";import"./PdfViewerToolbar-BHtGqKXC.js";import"./Button-BltQyjod.js";import"./chevron-right-BgccvMr7.js";import"./Input-BW7gIe1E.js";import"./search-CfQ11krI.js";import"./spin-kTsFufmM.js";import"./error-BrX8f-50.js";import"./withOsdkMetrics-C77tE57v.js";import"./makeExternalStore-BTh_nx7a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
