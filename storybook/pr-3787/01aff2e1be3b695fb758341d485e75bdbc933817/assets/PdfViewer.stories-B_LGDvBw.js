import{j as r,M as s}from"./iframe-Bm3fa2Ga.js";import{P as p}from"./pdf-viewer-DgjP0BiP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DhMmCxDG.js";import"./preload-helper-D06pMuuX.js";import"./PdfRenderer-DgAa7vrf.js";import"./index-exHa5srN.js";import"./PdfViewer-wdP0Ubfl.js";import"./PdfViewer.module.css-plysFw7B.js";import"./PdfViewerAnnotationLayer-CDcrd8PC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5W0V1WNQ.js";import"./PdfViewerOutlineSidebar-Dy6ehufW.js";import"./PdfViewerSidebarHeader--nYZz5QL.js";import"./useBaseUiId-gpm2SMjj.js";import"./useControlled-CeZ9aCri.js";import"./CompositeRoot-QRRHJxS8.js";import"./CompositeItem-DeL1bikB.js";import"./ToolbarRootContext-thHFFfWO.js";import"./composite-CeJsh_Dj.js";import"./svgIconContainer-BMtH4hPo.js";import"./PdfViewerSearchBar-YCc6kuVG.js";import"./chevron-up-Djv_zsK0.js";import"./chevron-down-CaanKCC-.js";import"./cross-BU7xL5ZY.js";import"./PdfViewerSidebar-BPOLTo-1.js";import"./index-C8gxRxXp.js";import"./index-LSlomKTu.js";import"./index-CSBVc4TV.js";import"./PdfViewerToolbar-BW1mS2-F.js";import"./Button-CKJng19p.js";import"./chevron-right-CnbsgNxs.js";import"./Input-Bs9zmxov.js";import"./search-hZlNybQI.js";import"./spin-CxTC64dt.js";import"./error-CUc3n5dL.js";import"./withOsdkMetrics-B-jEgCV5.js";import"./makeExternalStore-RYoaG-HB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
