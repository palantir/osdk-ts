import{j as r,M as s}from"./iframe-DNerilao.js";import{P as p}from"./pdf-viewer-CPHHNReI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dz21DTDp.js";import"./preload-helper-WYz0P8cg.js";import"./PdfRenderer-3fe8UUBA.js";import"./index-UbhKAx_n.js";import"./PdfViewer-BUvl9wXJ.js";import"./PdfViewer.module.css-BtPDOjO8.js";import"./PdfViewerAnnotationLayer-C-yW1TZA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0DwkfWS.js";import"./PdfViewerOutlineSidebar-DMQtlLbK.js";import"./PdfViewerSidebarHeader-Brbe8Hvo.js";import"./useBaseUiId-C28jYwd5.js";import"./useControlled-BeDJM6mu.js";import"./CompositeRoot-CpFrKHmu.js";import"./CompositeItem-Br2r_HtI.js";import"./ToolbarRootContext-E7gsUtdU.js";import"./composite-DxCnjG5P.js";import"./svgIconContainer-3RPFCLDD.js";import"./PdfViewerSearchBar-B-UwVdl3.js";import"./chevron-up-CnkAOfxx.js";import"./chevron-down-BkPpJX9T.js";import"./cross-CVNZ4V9L.js";import"./PdfViewerSidebar-Do0cSber.js";import"./index-BB87TWEZ.js";import"./index-BEpimtGK.js";import"./index-DW0TONpD.js";import"./PdfViewerToolbar-CYEjor1F.js";import"./Button-C82OcTXa.js";import"./chevron-right-CeRvxCBj.js";import"./Input-Dmwb3bCD.js";import"./search-Cct-baVl.js";import"./spin-tcTYt02u.js";import"./error-D1U1Mhs7.js";import"./withOsdkMetrics-iOKaPPya.js";import"./makeExternalStore-B9VO-zPd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
