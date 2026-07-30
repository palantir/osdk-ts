import{j as r,M as s}from"./iframe-CEXqwKDo.js";import{P as p}from"./pdf-viewer-ttlsmNd2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDxQYi8i.js";import"./preload-helper-DpdtVnp3.js";import"./PdfRenderer-ChJvCHM9.js";import"./index-DJnSicRq.js";import"./PdfViewer-BWylRlvo.js";import"./PdfViewer.module.css-Bv6bdoue.js";import"./PdfViewerAnnotationLayer-Dj2dB-IC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-e4HQNGeS.js";import"./PdfViewerOutlineSidebar-CCkkHtI_.js";import"./PdfViewerSidebarHeader-BBzzG38t.js";import"./useBaseUiId-CWMGkfoD.js";import"./useControlled-21P8hLcZ.js";import"./CompositeRoot-ivtzgrHs.js";import"./CompositeItem-M1EwA00W.js";import"./ToolbarRootContext-BT8GwrHL.js";import"./composite-DJSIkC4h.js";import"./svgIconContainer-BLXhb9q0.js";import"./PdfViewerSearchBar-wXhXDCKA.js";import"./chevron-up-Cn2YoFLI.js";import"./chevron-down-DGS9RK0n.js";import"./cross-I1-y4ayJ.js";import"./PdfViewerSidebar-DXeYNXzc.js";import"./index-BlHia6Sj.js";import"./index-D2peK4FA.js";import"./index-DEmj-frH.js";import"./PdfViewerToolbar-CeqzNucB.js";import"./Button-MZyF5CTL.js";import"./chevron-right-9RbACmn7.js";import"./Input-C1mfdO-x.js";import"./search-DS8naRzK.js";import"./spin-DWvzjGEr.js";import"./error-3ZtiZkhO.js";import"./withOsdkMetrics--K3s2hUl.js";import"./makeExternalStore-DrF82NRc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
