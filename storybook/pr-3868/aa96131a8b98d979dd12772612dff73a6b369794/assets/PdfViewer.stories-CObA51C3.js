import{j as r,M as s}from"./iframe-D9kZ7oKm.js";import{P as p}from"./pdf-viewer-C4Rfc0VA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CE6fPrHC.js";import"./preload-helper-D_9croem.js";import"./PdfViewer-BoJBRYeu.js";import"./index-CqRud9uD.js";import"./BasePdfViewer-BGXv3Rl7.js";import"./BasePdfViewer.module.css-DWLEJBWZ.js";import"./PdfViewerAnnotationLayer-BojHXsk5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xCy06ixa.js";import"./PdfViewerOutlineSidebar-DHq1D-hW.js";import"./PdfViewerSidebarHeader-Ddp78gql.js";import"./useBaseUiId-DLiXg0iE.js";import"./useControlled-D_VX6z4f.js";import"./CompositeRoot-BZi7H5om.js";import"./CompositeItem-CzKJLAoA.js";import"./ToolbarRootContext-DGR2lftI.js";import"./composite-CU2VzQxk.js";import"./svgIconContainer-rMQ6NxoF.js";import"./PdfViewerSearchBar-Dl1Yw4O_.js";import"./chevron-up-CFNnydYY.js";import"./chevron-down-CObaMvlQ.js";import"./cross-ByBOsUt4.js";import"./PdfViewerSidebar-C5s-Wj8p.js";import"./index-Bi1PFb4u.js";import"./index-BL5TYGry.js";import"./index-BV8mxMmV.js";import"./PdfViewerToolbar-CkwgWePA.js";import"./Button-BnTkb7kw.js";import"./chevron-right-Bk6h_Rqb.js";import"./Input-nS1tbIyp.js";import"./search-ZNDSswQj.js";import"./spin-BVSd6W3x.js";import"./error-BUXoxIB7.js";import"./withOsdkMetrics-BCGwBrf8.js";import"./makeExternalStore-SKHEbBrI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
