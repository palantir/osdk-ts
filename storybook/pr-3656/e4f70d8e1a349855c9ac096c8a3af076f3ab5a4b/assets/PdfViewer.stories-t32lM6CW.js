import{j as r,M as s}from"./iframe-CCipF1Gu.js";import{P as p}from"./pdf-viewer-CVBlXJhd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GEpf83_Q.js";import"./preload-helper-DyQNCCfn.js";import"./PdfRenderer-DEZ4wmcO.js";import"./index-Db8z_Hye.js";import"./PdfViewer-09_bZu-1.js";import"./PdfViewer.module.css-BgH7T6xU.js";import"./PdfViewerAnnotationLayer-Tv-BcjZj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7VYTzUJ.js";import"./PdfViewerOutlineSidebar-JC3oHuLS.js";import"./PdfViewerSidebarHeader-B2mNiJt_.js";import"./useBaseUiId-CWyUyXAh.js";import"./useControlled-C2ebkniI.js";import"./CompositeRoot-DmrIFpfJ.js";import"./CompositeItem-BEvC6B4Q.js";import"./ToolbarRootContext-BvBYCTeH.js";import"./composite-B1toWk7q.js";import"./svgIconContainer-DHE5fDWZ.js";import"./PdfViewerSearchBar-JD_rSBEZ.js";import"./chevron-up-BgwWSi1D.js";import"./chevron-down-CokEFD0V.js";import"./cross-DiOEkLx6.js";import"./PdfViewerSidebar-DHlkmHSF.js";import"./index-BXSH3t7d.js";import"./index-C_lc2ILX.js";import"./index-BMJ22wsT.js";import"./PdfViewerToolbar-CEgY4owa.js";import"./Button-hL4QnKp1.js";import"./chevron-right-Cwaq2txr.js";import"./Input--JNTo814.js";import"./search-rV5C5W_L.js";import"./spin-M4wkZf5l.js";import"./error-Cslg2EPx.js";import"./withOsdkMetrics-BxZv_ggk.js";import"./makeExternalStore-DfFo9Pzi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
