import{j as r,M as s}from"./iframe-CMeM9J6Y.js";import{P as p}from"./pdf-viewer-CJ_Uv1vz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvM5ZLTX.js";import"./preload-helper-BE9t9w6w.js";import"./PdfRenderer-DlZxgg2P.js";import"./index-DPhtRpPE.js";import"./PdfViewer-Yyfhem6a.js";import"./PdfViewer.module.css-BYlCq0ro.js";import"./PdfViewerAnnotationLayer-Bz28bCsv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxZQMA8K.js";import"./PdfViewerOutlineSidebar-BgIMFTLE.js";import"./PdfViewerSidebarHeader-DLU1eb3i.js";import"./useBaseUiId-DI9dP7QZ.js";import"./useControlled-BSYDrQ5g.js";import"./CompositeRoot-BofWsqeH.js";import"./CompositeItem-Dj-DsIKf.js";import"./ToolbarRootContext-vSWj9GvP.js";import"./composite-CY3k6TM7.js";import"./svgIconContainer-oyAS0UWq.js";import"./PdfViewerSearchBar-C5p7UR4j.js";import"./chevron-up-LHSWHVf9.js";import"./chevron-down-DMwhZAyE.js";import"./cross-BaQL3xgP.js";import"./PdfViewerSidebar-zOFuBCBH.js";import"./index-Bpq4QA1l.js";import"./index-DTL2R8mN.js";import"./index-CdeTLK2Z.js";import"./PdfViewerToolbar-d6sMmJz6.js";import"./Button-D3pZGYFY.js";import"./chevron-right-Cjbuy7gC.js";import"./Input-B3BEXVhr.js";import"./search-BAh8pYQa.js";import"./spin-DsQQm4YG.js";import"./error-C1BVHOGO.js";import"./withOsdkMetrics-ro0U0fU-.js";import"./makeExternalStore-D-x3UNlI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
