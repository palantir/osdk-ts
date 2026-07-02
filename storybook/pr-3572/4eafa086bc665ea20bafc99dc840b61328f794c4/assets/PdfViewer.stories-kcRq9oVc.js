import{j as r,M as s}from"./iframe-zqPmFplz.js";import{P as p}from"./pdf-viewer-BBUehnT1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmJzje9b.js";import"./preload-helper-Cm-i8LsQ.js";import"./PdfRenderer-B6Ync9Ym.js";import"./index-CDabZ30i.js";import"./PdfViewer-c6uaSrQK.js";import"./PdfViewer.module.css-BeMEQ0rF.js";import"./PdfViewerAnnotationLayer-LBA3JHZu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGRHMjxS.js";import"./PdfViewerOutlineSidebar-Ck2c0ixh.js";import"./PdfViewerSidebarHeader-DK5Y4USZ.js";import"./useBaseUiId-Ctr8tfPF.js";import"./useControlled-CMoNYK3-.js";import"./CompositeRoot-5S67jH8U.js";import"./CompositeItem-CSkQicbg.js";import"./ToolbarRootContext-C47y4zj9.js";import"./composite-NMQNEue1.js";import"./svgIconContainer-CojLGXmi.js";import"./PdfViewerSearchBar-TWh3Cnf8.js";import"./chevron-up-D10No_fp.js";import"./chevron-down-BguXyqtq.js";import"./cross-CnxfX7uP.js";import"./PdfViewerSidebar-DIFD7F0I.js";import"./index-BTd-wCt1.js";import"./index-Bd0utzsO.js";import"./index-ChjI14_0.js";import"./PdfViewerToolbar-OtVJSaTW.js";import"./Button-CONCwakB.js";import"./chevron-right-DPB6Sutl.js";import"./Input-B3YqLlUw.js";import"./minus-DO21-9Eu.js";import"./search-D72tZ2FA.js";import"./spin-BelHwixh.js";import"./error-DvE3gtxW.js";import"./withOsdkMetrics-z75ah0j8.js";import"./makeExternalStore-BndIEMaq.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
