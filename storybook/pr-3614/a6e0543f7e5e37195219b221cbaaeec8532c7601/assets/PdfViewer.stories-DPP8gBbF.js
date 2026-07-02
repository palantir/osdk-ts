import{j as r,M as s}from"./iframe-Cj5Z4AqU.js";import{P as p}from"./pdf-viewer-qgLIDhwO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjGx0BNA.js";import"./preload-helper-BpFXxi93.js";import"./PdfRenderer-8J6C42jR.js";import"./index-BttBMQiy.js";import"./PdfViewer-DI3wshI2.js";import"./PdfViewer.module.css-BdQ2O5WE.js";import"./PdfViewerAnnotationLayer-DkZWkMVR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMxZe_JB.js";import"./PdfViewerOutlineSidebar-C2BzyK52.js";import"./PdfViewerSidebarHeader-CaVB4vnd.js";import"./useBaseUiId-ji54pTqi.js";import"./useControlled-DAkmZSYx.js";import"./CompositeRoot-CiUpe-A-.js";import"./CompositeItem-CbpWqHzA.js";import"./ToolbarRootContext-Bll_v3EE.js";import"./composite-erYjklIE.js";import"./svgIconContainer-DzEq2oSX.js";import"./PdfViewerSearchBar-DGOzrkFQ.js";import"./chevron-up-BNd5_m9b.js";import"./chevron-down-B2Fy7XqP.js";import"./cross-CgPUg4SZ.js";import"./PdfViewerSidebar-DBUl-GFc.js";import"./index-CuXjmdd-.js";import"./index-DQ9Iarnj.js";import"./index-BEhfv_BD.js";import"./PdfViewerToolbar-kgP7TKHG.js";import"./Button-BCPVdu5l.js";import"./chevron-right-DbySdR4l.js";import"./Input-CTSdR7eM.js";import"./minus-wwqamjl9.js";import"./search-zbr17KlE.js";import"./spin-CNfNdny4.js";import"./error-D9Z5bw_k.js";import"./withOsdkMetrics-DvaqX-vX.js";import"./makeExternalStore-Dwhp3AyG.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
