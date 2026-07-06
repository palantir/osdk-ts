import{j as r,M as s}from"./iframe-DcrGl_O-.js";import{P as p}from"./pdf-viewer-Bcs-Ee_w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9ccIw7bp.js";import"./preload-helper-DkTM98UZ.js";import"./PdfRenderer-CdxfKCSG.js";import"./index-t22ZryHL.js";import"./PdfViewer-DJ8x0j_r.js";import"./PdfViewer.module.css-BH0dFsyN.js";import"./PdfViewerAnnotationLayer-C4yCRE6t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cp3XrwW6.js";import"./PdfViewerOutlineSidebar-B6Pi1Z57.js";import"./PdfViewerSidebarHeader-BCJyL5l4.js";import"./useBaseUiId-BG7q8PzN.js";import"./useControlled-BKIeD5bs.js";import"./CompositeRoot-CZhajgMt.js";import"./CompositeItem-DVchhf0Z.js";import"./ToolbarRootContext-DvnycJee.js";import"./composite-JNfYZaHn.js";import"./svgIconContainer-DI9nrV8O.js";import"./PdfViewerSearchBar-ndJS8QOk.js";import"./chevron-up-CltYqL7a.js";import"./chevron-down-BLKzex50.js";import"./cross-BDte8GAy.js";import"./PdfViewerSidebar-CH5uYx1k.js";import"./index-B8JHvmpz.js";import"./index-BHn6IxTA.js";import"./index-BdTuNC5G.js";import"./PdfViewerToolbar-CYBoJ4ar.js";import"./Button-pEYsBApl.js";import"./chevron-right-Bvj1GxLh.js";import"./Input-C-1JAkdn.js";import"./search-QKPSMOkR.js";import"./spin-BFBs2ugj.js";import"./error-B0Z2eL6G.js";import"./withOsdkMetrics-CB_-TdaD.js";import"./makeExternalStore-DBdL1D3Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
