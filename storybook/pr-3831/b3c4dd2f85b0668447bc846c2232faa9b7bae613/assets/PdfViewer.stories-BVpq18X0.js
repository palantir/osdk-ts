import{j as r,M as s}from"./iframe-CZN1N75z.js";import{P as p}from"./pdf-viewer-8RtXBP9M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvSEMFax.js";import"./preload-helper-Cw86qjs4.js";import"./PdfRenderer-C88A1X0z.js";import"./index-BRVA8pfy.js";import"./PdfViewer-DJ96LApE.js";import"./PdfViewer.module.css-Dcqekn4c.js";import"./PdfViewerAnnotationLayer-K_bn9fnc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnHIh5QE.js";import"./PdfViewerOutlineSidebar-CG_zVZxt.js";import"./PdfViewerSidebarHeader-DcreuYxB.js";import"./useBaseUiId-BhqTpn-A.js";import"./useControlled-Co7-DLRd.js";import"./CompositeRoot-H9WP3Bfo.js";import"./CompositeItem-DLFuEVrs.js";import"./ToolbarRootContext-IqzlHljh.js";import"./composite-BOWBPj0r.js";import"./svgIconContainer-OYzxRDDu.js";import"./PdfViewerSearchBar-xB9jj5oq.js";import"./chevron-up-DO6ak2L6.js";import"./chevron-down-BBx72XFw.js";import"./cross-BUPEAbju.js";import"./PdfViewerSidebar-CQSFesZK.js";import"./index-C6DRiLu1.js";import"./index-BL8DZWnZ.js";import"./index-rUijMERz.js";import"./PdfViewerToolbar-OuI1ze1n.js";import"./Button-C8c4R169.js";import"./chevron-right-V1CcoUaU.js";import"./Input-4HpsLPAr.js";import"./search-DpmtddYG.js";import"./spin-DXxIaW9S.js";import"./error-Ohh9at4C.js";import"./withOsdkMetrics-C2NSp3nJ.js";import"./makeExternalStore-jXoxqI6f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
