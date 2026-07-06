import{j as r,M as s}from"./iframe-Dosm-TT_.js";import{P as p}from"./pdf-viewer-DNCZX4U4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-plw86JVC.js";import"./preload-helper-DVnMXwFk.js";import"./PdfRenderer-D91eSLAe.js";import"./index-D1y6s0O_.js";import"./PdfViewer-D3_FZ162.js";import"./PdfViewer.module.css-C_b5uFOT.js";import"./PdfViewerAnnotationLayer-1VEn9FdH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5D_Rgyq.js";import"./PdfViewerOutlineSidebar-aU_78Jk_.js";import"./PdfViewerSidebarHeader-BZLnaP1x.js";import"./useBaseUiId-B3O-t6Rg.js";import"./useControlled-Qqs1pXRD.js";import"./CompositeRoot-BAuyediO.js";import"./CompositeItem-DToeVY_R.js";import"./ToolbarRootContext-BWKyVrsh.js";import"./composite-DIDiEn7q.js";import"./svgIconContainer-gSM7aVB8.js";import"./PdfViewerSearchBar-B5CYi-KC.js";import"./chevron-up-BNQX4CFD.js";import"./chevron-down-rsUTVL8g.js";import"./cross-DZYsf2bT.js";import"./PdfViewerSidebar-BPxTY0MX.js";import"./index-CPn0b97L.js";import"./index-qYnVUvvJ.js";import"./index-NaQYoD_T.js";import"./PdfViewerToolbar-BIICHrjK.js";import"./Button-_P8k0PT0.js";import"./chevron-right-Dhe6UhHQ.js";import"./Input-JfDyytdY.js";import"./search-DqB70Fo6.js";import"./spin-Drp6Wf1z.js";import"./error-CgCpmqrL.js";import"./withOsdkMetrics-ClNJzRHn.js";import"./makeExternalStore-Bbldta8w.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
