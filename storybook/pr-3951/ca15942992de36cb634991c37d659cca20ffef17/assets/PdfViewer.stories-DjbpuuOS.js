import{j as r,M as s}from"./iframe-CZmLz8ZP.js";import{P as p}from"./pdf-viewer-BrG7DVSZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoMcyeuV.js";import"./preload-helper-DvTMhaTO.js";import"./PdfViewer-CReMYBAw.js";import"./index-CAhEgdCZ.js";import"./BasePdfViewer-D17QlThP.js";import"./BasePdfViewer.module.css-DsHOJr1L.js";import"./PdfViewerAnnotationLayer-_0n9-flA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgwakQbP.js";import"./PdfViewerOutlineSidebar-CwrT258N.js";import"./PdfViewerSidebarHeader-DiRh4k53.js";import"./useBaseUiId-BCYLkR1F.js";import"./useControlled-BH9r8IuZ.js";import"./CompositeRoot-BfOALC99.js";import"./CompositeItem-C7RhivEH.js";import"./ToolbarRootContext-C9PFHMIF.js";import"./composite-BqzE7WbV.js";import"./svgIconContainer-Dqq8-oQ4.js";import"./PdfViewerSearchBar-Dxdv3nqO.js";import"./chevron-up-CPUe9j6A.js";import"./chevron-down-D49DBeyU.js";import"./cross-BwuwEvtS.js";import"./PdfViewerSidebar-B9ULi2Xj.js";import"./index-0tShKdJa.js";import"./index-8Ow4xnki.js";import"./index-BTcDhi6R.js";import"./PdfViewerToolbar-Di4uAPg4.js";import"./Button-D3buvkEb.js";import"./chevron-right-BmjPbo2s.js";import"./Input-IY6ZJX7E.js";import"./search-DI3kZ9bs.js";import"./spin-CJkSlkTw.js";import"./error-SF1rOjxj.js";import"./withOsdkMetrics-rK3p9Fti.js";import"./makeExternalStore-C3ECuZEf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
