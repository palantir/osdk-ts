import{j as r,M as s}from"./iframe-PKQ9ibCT.js";import{P as p}from"./pdf-viewer-CMjkExBf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CPovsRi5.js";import"./preload-helper-BH7VrshK.js";import"./PdfRenderer-DGUm_dRf.js";import"./index-ukVfuTjT.js";import"./PdfViewer-Dhikqh9A.js";import"./PdfViewer.module.css-jvLYYyvF.js";import"./PdfViewerAnnotationLayer-CgGj-m3H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9v85uVN.js";import"./PdfViewerOutlineSidebar-CGUO8GPX.js";import"./PdfViewerSidebarHeader-L37iBAEB.js";import"./useBaseUiId-DQlvSzSU.js";import"./useControlled-CfOLBN9x.js";import"./CompositeRoot-DpW10W-r.js";import"./CompositeItem-UPE06Smm.js";import"./ToolbarRootContext-B_pApPm-.js";import"./composite-tTdBmFM9.js";import"./svgIconContainer-YhegbL54.js";import"./PdfViewerSearchBar-CV6Uq_sm.js";import"./chevron-up-BBmiwaZT.js";import"./chevron-down-DK_Kvmib.js";import"./cross-DOJWIjq5.js";import"./PdfViewerSidebar-C5g858dK.js";import"./index-9HCV6PI6.js";import"./index-BW8rGv1i.js";import"./index-DZmTL9O1.js";import"./PdfViewerToolbar-C7I_gcTz.js";import"./Button-BRBjJXY9.js";import"./chevron-right-C8u0-sdA.js";import"./Input-D53UkdCo.js";import"./search-DepRLaUT.js";import"./spin-DmN40yC9.js";import"./error-65-LfMMs.js";import"./withOsdkMetrics-CcQyqJG6.js";import"./makeExternalStore-DsmTBrFd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
