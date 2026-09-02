import{j as r,M as s}from"./iframe-BPFPjQfN.js";import{P as p}from"./pdf-viewer-C82xbvSa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BSp9d56y.js";import"./preload-helper-BS5sFlIZ.js";import"./PdfViewer-DBwqdjZJ.js";import"./index-DLsuK50b.js";import"./BasePdfViewer-CEjYUJC2.js";import"./BasePdfViewer.module.css-BJvet-r9.js";import"./PdfViewerAnnotationLayer-BLbL9Rld.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMT2PCWX.js";import"./PdfViewerOutlineSidebar-Bk0gwbIi.js";import"./PdfViewerSidebarHeader-BHdqkvT_.js";import"./useBaseUiId-XR0mowR0.js";import"./useControlled-DWmknCjz.js";import"./CompositeRoot-CA970t9z.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./composite--6cSo0WV.js";import"./svgIconContainer-BCrLikms.js";import"./PdfViewerSearchBar-BA4cUbL1.js";import"./chevron-up-Cy7f5Tfh.js";import"./chevron-down-U37QTCrW.js";import"./cross-jacAbTr1.js";import"./PdfViewerSidebar-DxykRtfz.js";import"./index-D2ej1Jb2.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./PdfViewerToolbar-DvFEX25O.js";import"./Button-MukxU7Us.js";import"./chevron-right-CFbmX4Me.js";import"./Input-Cbr4DxDr.js";import"./search-CZtJ4QjI.js";import"./spin-DcQ8QPd8.js";import"./error-DEs_Iieb.js";import"./withOsdkMetrics-DyIxSijK.js";import"./makeExternalStore-BJ259EIr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
