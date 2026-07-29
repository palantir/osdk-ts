import{j as r,M as s}from"./iframe-Dgh8VYtn.js";import{P as p}from"./pdf-viewer-C3fo_FyL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-By0u9VU1.js";import"./preload-helper-CFJZ_ler.js";import"./PdfRenderer-9Sy-jDi1.js";import"./index-CR8Gg0Zj.js";import"./PdfViewer-Cb0g_-hi.js";import"./PdfViewer.module.css-C_rCC-BY.js";import"./PdfViewerAnnotationLayer-PhYIssqY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cv0Bhlop.js";import"./PdfViewerOutlineSidebar-DpjHoycK.js";import"./PdfViewerSidebarHeader-g2kKYTph.js";import"./useBaseUiId-BzDeHhXv.js";import"./useControlled-B4IBQ9ng.js";import"./CompositeRoot-CJU4y76g.js";import"./CompositeItem-Ckfi4QX3.js";import"./ToolbarRootContext-B-exhe9d.js";import"./composite-D6oOJknJ.js";import"./svgIconContainer-blw7niRf.js";import"./PdfViewerSearchBar-JTd-LunH.js";import"./chevron-up-DVOGxVy2.js";import"./chevron-down-CdpMlX1J.js";import"./cross-DPNz-mem.js";import"./PdfViewerSidebar-dEiknvDG.js";import"./index-CQ-zXVd9.js";import"./index-DKfcKTHa.js";import"./index-B6PBiQ8K.js";import"./PdfViewerToolbar-DlKoUjVA.js";import"./Button-BZm5BN2k.js";import"./chevron-right-CNybhd6w.js";import"./Input-5-CxMabY.js";import"./search-B0l3LahF.js";import"./spin-B-Cit4Gp.js";import"./error-_UZv3G_I.js";import"./withOsdkMetrics-Dg6KSq_n.js";import"./makeExternalStore-BNACMlLS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
