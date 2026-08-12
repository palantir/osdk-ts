import{j as r,M as s}from"./iframe-D0keSMdE.js";import{P as p}from"./pdf-viewer-B52gLNin.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5rO1ZXv.js";import"./preload-helper-CgWhzYZU.js";import"./PdfRenderer-BK4WzLi5.js";import"./index-BlRIDWUP.js";import"./PdfViewer-Dz-BJD1S.js";import"./PdfViewer.module.css-BoiyQq4K.js";import"./PdfViewerAnnotationLayer-1rjX-Ovq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzXuJY_m.js";import"./PdfViewerOutlineSidebar-DV-nQwe_.js";import"./PdfViewerSidebarHeader-HKnQXFfy.js";import"./useBaseUiId-BfGVExes.js";import"./useControlled-yw1OI-ys.js";import"./CompositeRoot-COjRKW91.js";import"./CompositeItem-Dcat_OLQ.js";import"./ToolbarRootContext-C7LF38_0.js";import"./composite-DXaC0pY0.js";import"./svgIconContainer-DmusCROY.js";import"./PdfViewerSearchBar-DNJ3eFbX.js";import"./chevron-up-DaBnWkc4.js";import"./chevron-down-CqaC9B7A.js";import"./cross-D5Zmda7x.js";import"./PdfViewerSidebar--PdPP-yn.js";import"./index-Ck9HyH0x.js";import"./index-BEB5yinp.js";import"./index-CPRvGqlK.js";import"./PdfViewerToolbar-DmY4Dfz1.js";import"./Button-BAAmeZ1M.js";import"./chevron-right-Bu4x96dL.js";import"./Input-CaL2qwMz.js";import"./search-ZZx32mw4.js";import"./spin-DdI8PtDn.js";import"./error-Cs55j0k0.js";import"./withOsdkMetrics-CKalA1p6.js";import"./makeExternalStore-BtSZghYs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
