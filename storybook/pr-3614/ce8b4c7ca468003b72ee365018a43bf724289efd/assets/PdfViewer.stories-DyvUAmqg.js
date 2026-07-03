import{j as r,M as s}from"./iframe-BrOKmODa.js";import{P as p}from"./pdf-viewer-oX5UWKiB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0xubZRJ.js";import"./preload-helper-LVFYmmqi.js";import"./PdfRenderer-B7zur1G0.js";import"./index-CywMtbWN.js";import"./PdfViewer-DgIzL_3A.js";import"./PdfViewer.module.css-GVpO2Ie-.js";import"./PdfViewerAnnotationLayer-DD6p94om.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_nUa0Kw3.js";import"./PdfViewerOutlineSidebar-DXzmhGaL.js";import"./PdfViewerSidebarHeader-Db9IBQOD.js";import"./useBaseUiId-BIiWUYx5.js";import"./useControlled-CMMICR1z.js";import"./CompositeRoot-BtebtiHB.js";import"./CompositeItem-CO4rFP1Q.js";import"./ToolbarRootContext-QdJBmK1o.js";import"./composite-BlwcPmpK.js";import"./svgIconContainer-CvMgkZOH.js";import"./PdfViewerSearchBar-DM-87UXT.js";import"./chevron-up-CIgFV0Wh.js";import"./chevron-down-DUz6wnwR.js";import"./cross-DPeARh2U.js";import"./PdfViewerSidebar-CWaySYoD.js";import"./index-B2Dh176u.js";import"./index-BUd79eaR.js";import"./index-BpN8QY9F.js";import"./PdfViewerToolbar-AojppX1x.js";import"./Button-BxtDJ6Vc.js";import"./chevron-right-Ctis8oU0.js";import"./Input-ddkTPuWd.js";import"./search-CLz6HOHb.js";import"./spin-BAQVF-Mm.js";import"./error-CdXFPQ-w.js";import"./withOsdkMetrics-Z-YaIuf_.js";import"./makeExternalStore-NvzB80jV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
