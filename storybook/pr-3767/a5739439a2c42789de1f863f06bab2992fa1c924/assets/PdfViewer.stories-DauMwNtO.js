import{j as r,M as s}from"./iframe-Dj2cKGnO.js";import{P as p}from"./pdf-viewer-Jpxw9xnI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgcEpeab.js";import"./preload-helper-C4DRB2fG.js";import"./PdfRenderer-a4zxmKmK.js";import"./index-BO7YIbLm.js";import"./PdfViewer-Bwiig3en.js";import"./PdfViewer.module.css-BOYL4W4R.js";import"./PdfViewerAnnotationLayer-MDMsiF0S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5mMs5UJC.js";import"./PdfViewerOutlineSidebar-1Ng0e1-e.js";import"./PdfViewerSidebarHeader-BgX4P-DO.js";import"./useBaseUiId-e1nCQA8K.js";import"./useControlled-B1nPULYy.js";import"./CompositeRoot-DeKIbrDU.js";import"./CompositeItem-BjekPXkF.js";import"./ToolbarRootContext-BHEFpPDT.js";import"./composite-5gl7qD0t.js";import"./svgIconContainer-BpBQ0iGt.js";import"./PdfViewerSearchBar-DJlxDWhR.js";import"./chevron-up-DzUDnhwQ.js";import"./chevron-down-LbKJSdTq.js";import"./cross-BR_uQDj2.js";import"./PdfViewerSidebar-DxZn3qT0.js";import"./index-CkLjKLx-.js";import"./index-Cz2dMcbH.js";import"./index-D7Xl9lR0.js";import"./PdfViewerToolbar-CDIeM8-k.js";import"./Button-CptP105M.js";import"./chevron-right-DSKk1uMn.js";import"./Input-DJhGkZgO.js";import"./search-C6Gs3wIW.js";import"./spin-C2mwu4lo.js";import"./error-DP1wqNc6.js";import"./withOsdkMetrics-BHLwwwlP.js";import"./makeExternalStore-BicNN6mB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
