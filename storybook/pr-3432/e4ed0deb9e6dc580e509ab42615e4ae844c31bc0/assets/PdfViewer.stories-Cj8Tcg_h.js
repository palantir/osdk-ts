import{j as r,M as s}from"./iframe-w9F8Brjw.js";import{P as p}from"./pdf-viewer-DDO237Y3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjStDu2z.js";import"./preload-helper-gOuIvRG0.js";import"./PdfViewer-DzjLns88.js";import"./index-BX6-ktEu.js";import"./BasePdfViewer-BtmuBlVj.js";import"./BasePdfViewer.module.css-1Fb6Fk-z.js";import"./PdfViewerAnnotationLayer-1wUEe4uy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9iMkHA2.js";import"./PdfViewerOutlineSidebar-DtAbN_Jr.js";import"./PdfViewerSidebarHeader-DTdVghiy.js";import"./useBaseUiId-C3CWNnun.js";import"./useControlled-1YClOBeG.js";import"./CompositeRoot-BLfOVQWd.js";import"./CompositeItem-CaktBZ-x.js";import"./ToolbarRootContext-CPJg8Zy4.js";import"./composite-DJjHoSCt.js";import"./svgIconContainer-52lfJd2c.js";import"./PdfViewerSearchBar-fLL_mtVO.js";import"./chevron-up-4ms-Au1v.js";import"./chevron-down-alluwZla.js";import"./cross-Bsja6aaP.js";import"./PdfViewerSidebar-_0PCo1yj.js";import"./index-yG1LfRf4.js";import"./index-CuwPgqye.js";import"./index-DeR9tbl3.js";import"./PdfViewerToolbar-d25TEziM.js";import"./Button-C0Dxr-Rp.js";import"./chevron-right-MDc0zzIW.js";import"./Input-BI7HWStD.js";import"./search-CJlgZYNJ.js";import"./spin-DLFq3CA-.js";import"./error-rgHAMUMi.js";import"./withOsdkMetrics-Brc0TCIF.js";import"./makeExternalStore-BPJfeWP7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
