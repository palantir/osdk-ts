import{j as r,M as s}from"./iframe-BykysWv2.js";import{P as p}from"./pdf-viewer-DGKSF5Bg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lRs2chvP.js";import"./preload-helper-D-tSwkR5.js";import"./PdfViewer-n6cDqt3p.js";import"./index-CCmH1fLx.js";import"./BasePdfViewer-BrWBOOl5.js";import"./BasePdfViewer.module.css-BgV5o-FC.js";import"./PdfViewerAnnotationLayer-VdTQ9iav.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYJEkDrg.js";import"./PdfViewerOutlineSidebar-DxSNr91z.js";import"./PdfViewerSidebarHeader-B-JplgW5.js";import"./useBaseUiId-BtfasykQ.js";import"./useControlled-BHDm0MR_.js";import"./CompositeRoot-B7-e56yu.js";import"./CompositeItem-B2Va5Uj8.js";import"./ToolbarRootContext-hgVSKpi4.js";import"./composite-DVza1WGR.js";import"./svgIconContainer-DuuAzJ-q.js";import"./PdfViewerSearchBar-BKSnefGN.js";import"./chevron-up-mDXfMcfS.js";import"./chevron-down-BhIvQaF5.js";import"./cross-C6UPhC48.js";import"./PdfViewerSidebar-y4SHL_QW.js";import"./index-D5SG44W0.js";import"./index-CdS3MnO1.js";import"./index-D5tO8tmB.js";import"./PdfViewerToolbar-BzI45-Wq.js";import"./Button-CmlMFMdB.js";import"./chevron-right-DoZbtBCm.js";import"./Input-B6kNrbT5.js";import"./search-BDkejYae.js";import"./spin-6l0ftb1T.js";import"./error-DoPIKpmU.js";import"./withOsdkMetrics-byqTEtiY.js";import"./makeExternalStore-Efjiv4ks.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
