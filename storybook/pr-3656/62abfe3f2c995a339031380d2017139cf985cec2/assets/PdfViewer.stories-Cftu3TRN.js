import{j as r,M as s}from"./iframe-DoJds5Yj.js";import{P as p}from"./pdf-viewer-k3cB6O6Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgZaTTwe.js";import"./preload-helper-RS5iTJdk.js";import"./PdfRenderer-4egCq8F4.js";import"./index-CpyAeASa.js";import"./PdfViewer-D0CGVky1.js";import"./PdfViewer.module.css-DIK-07Gc.js";import"./PdfViewerAnnotationLayer-ShG5MBqU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrVhq_5k.js";import"./PdfViewerOutlineSidebar-Ct4Z0gDV.js";import"./PdfViewerSidebarHeader-ByKj1sLk.js";import"./useBaseUiId-C56aISWF.js";import"./useControlled-DFg6pFz3.js";import"./CompositeRoot-DtYO_7aj.js";import"./CompositeItem-3ioIa48b.js";import"./ToolbarRootContext-wk4qZbjI.js";import"./composite-D-vbGeaq.js";import"./svgIconContainer-BxzmuM28.js";import"./PdfViewerSearchBar-CFnVA6ne.js";import"./chevron-up-CMPy-HKc.js";import"./chevron-down-j6b73UiU.js";import"./cross-DLVFX9qV.js";import"./PdfViewerSidebar-CnHdXrHl.js";import"./index-CIBiif7B.js";import"./index-BCW1_h7G.js";import"./index-Bk9LS9vz.js";import"./PdfViewerToolbar-DfELRGPy.js";import"./Button-CtJVynrP.js";import"./chevron-right-5zM7FqLP.js";import"./Input-6umAMkIy.js";import"./search-DAmHWSue.js";import"./spin--QRpdDdN.js";import"./error-xcTc2vTA.js";import"./withOsdkMetrics-DSCr3MbE.js";import"./makeExternalStore-CiQlKRbQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
