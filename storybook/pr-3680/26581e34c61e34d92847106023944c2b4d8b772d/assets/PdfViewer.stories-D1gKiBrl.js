import{j as r,M as s}from"./iframe-CTWtvW7G.js";import{P as p}from"./pdf-viewer-CInDZOGs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRFglkVs.js";import"./preload-helper-1oxodiua.js";import"./PdfRenderer-DpjQjPm1.js";import"./index-B5ZJn9Gm.js";import"./PdfViewer-DU4_8TuW.js";import"./PdfViewer.module.css-B6vkqmY4.js";import"./PdfViewerAnnotationLayer-DIO2f6gH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DwyC7WOF.js";import"./PdfViewerOutlineSidebar-DpvYzJfR.js";import"./PdfViewerSidebarHeader-C8K6Uj49.js";import"./useBaseUiId-DaDRlDBy.js";import"./useControlled-Bb_4e2wz.js";import"./CompositeRoot-mi0OK0og.js";import"./CompositeItem-ByNmV234.js";import"./ToolbarRootContext-B4vVlVeR.js";import"./composite-ChO4tO4T.js";import"./svgIconContainer-BmXJ4UZQ.js";import"./PdfViewerSearchBar-Bxln4W2Z.js";import"./chevron-up-GTiSsXhA.js";import"./chevron-down-BEj-V-2_.js";import"./cross-DemFdpt3.js";import"./PdfViewerSidebar-gs2q5aYD.js";import"./index-CFiZgKoS.js";import"./index-C7xMDZy7.js";import"./index-B-Gs1YNk.js";import"./PdfViewerToolbar-nsbnvMEi.js";import"./Button-CNLRkRTL.js";import"./chevron-right-Bjm0J4SW.js";import"./Input-Cyrr3EQP.js";import"./search-f_eDtzuq.js";import"./spin-0T8XHhxE.js";import"./error-C-PnV0Ll.js";import"./withOsdkMetrics-B9XS-cmH.js";import"./makeExternalStore-DSL-ADyx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
