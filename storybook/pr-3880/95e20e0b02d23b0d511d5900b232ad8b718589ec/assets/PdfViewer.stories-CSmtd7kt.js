import{j as r,M as s}from"./iframe-BiXi4-LQ.js";import{P as p}from"./pdf-viewer-tqgVUtYM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BButKk6T.js";import"./preload-helper-yAegVG8x.js";import"./PdfViewer-D2chIfhK.js";import"./index-BrYb8iNp.js";import"./BasePdfViewer-Cg-vxyqF.js";import"./BasePdfViewer.module.css-CqdDvjtm.js";import"./PdfViewerAnnotationLayer-CYKdgT_B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeUl-JsE.js";import"./PdfViewerOutlineSidebar-DTroWnfX.js";import"./PdfViewerSidebarHeader-CnVvddRu.js";import"./useBaseUiId-Ck_ISxlB.js";import"./useControlled-c9kxJqxt.js";import"./CompositeRoot-CnIM48RF.js";import"./CompositeItem-BXqEZ6rt.js";import"./ToolbarRootContext-BQjlRsif.js";import"./composite-CLFfo09d.js";import"./svgIconContainer-DZPF1Vn6.js";import"./PdfViewerSearchBar-BVP04LBS.js";import"./chevron-up-B9DMbIok.js";import"./chevron-down-ClJPVsRO.js";import"./cross-D3R_Vc26.js";import"./PdfViewerSidebar-DfiSOJzP.js";import"./index-CCDXSv--.js";import"./index-M3K30U7J.js";import"./index-DWweQBbd.js";import"./PdfViewerToolbar-CTihi95Y.js";import"./Button-XL1kbTRa.js";import"./chevron-right-CjmbQ2jg.js";import"./Input-7j2qVm5H.js";import"./search-BptKOPUi.js";import"./spin-CS-HtdoK.js";import"./error-D3sbkdzM.js";import"./withOsdkMetrics-DsR7pBBW.js";import"./makeExternalStore-DC5BX6mU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
