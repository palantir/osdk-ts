import{j as r,M as s}from"./iframe-k4h-5zzl.js";import{P as p}from"./pdf-viewer-6KT67XKx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qzUFae7R.js";import"./preload-helper-CtKZFjaH.js";import"./PdfRenderer-B-rbjfMT.js";import"./index-BqMGnRYo.js";import"./PdfViewer-bfMU7Fho.js";import"./PdfViewer.module.css-1bLsY0_6.js";import"./PdfViewerAnnotationLayer-BUsBvxwS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpCfFYdX.js";import"./PdfViewerOutlineSidebar-BAtqfqoi.js";import"./PdfViewerSidebarHeader-CT6qty2E.js";import"./useBaseUiId-jXgPCs5e.js";import"./useControlled-lQPc9a7B.js";import"./CompositeRoot-CAAvZjIp.js";import"./CompositeItem--mieVhVv.js";import"./ToolbarRootContext-DfExoWCc.js";import"./composite-C8LN18L7.js";import"./svgIconContainer-COv1P89T.js";import"./PdfViewerSearchBar-CG27onCJ.js";import"./chevron-up-C2LdeWY3.js";import"./chevron-down-ChMPz-sA.js";import"./cross-_-Hiavhb.js";import"./PdfViewerSidebar-pNrG7G1t.js";import"./index-LVBzDTR0.js";import"./index-CqUB9DPW.js";import"./index-CeeqzFnD.js";import"./PdfViewerToolbar-B12UgZwO.js";import"./Button-jv54QSri.js";import"./chevron-right-ClnQfTmz.js";import"./Input-BdF0e0te.js";import"./search-BfpwWXDM.js";import"./spin-CWu-4Vde.js";import"./error-CSB6JE83.js";import"./withOsdkMetrics-DOza_dhj.js";import"./makeExternalStore-CzTCHZeg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
