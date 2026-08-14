import{j as r,M as s}from"./iframe-CfXo_xGs.js";import{P as p}from"./pdf-viewer-BBEN_Kuv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rfyt1qA7.js";import"./preload-helper-DICGDLzn.js";import"./PdfViewer-C6br7J84.js";import"./index-CnGqDH_i.js";import"./BasePdfViewer-DCiMK6-D.js";import"./BasePdfViewer.module.css-oYaMpWGo.js";import"./PdfViewerAnnotationLayer-BXvKGYou.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxFhOeAE.js";import"./PdfViewerOutlineSidebar-BXKpssZA.js";import"./PdfViewerSidebarHeader-sDDf_CdI.js";import"./useBaseUiId-DtsL1qz-.js";import"./useControlled-zSImE_Ef.js";import"./CompositeRoot-CllklVTp.js";import"./CompositeItem-B8aCK6n2.js";import"./ToolbarRootContext-D_iTI7z6.js";import"./composite-DPZWJgUc.js";import"./svgIconContainer-BAtltPp3.js";import"./PdfViewerSearchBar-DBcGiT8y.js";import"./chevron-up-BWZMcEED.js";import"./chevron-down-Bw0n8vBX.js";import"./cross-BJtxhdST.js";import"./PdfViewerSidebar-dGfxc8mt.js";import"./index-Wx3Cvrm7.js";import"./index-B5L6vnyq.js";import"./index-8kojcasY.js";import"./PdfViewerToolbar-CueDNm1y.js";import"./Button-Ctf32UkD.js";import"./chevron-right-RzP5ZZJA.js";import"./Input-6L5IGU13.js";import"./search-khU-kTlh.js";import"./spin-IB6puwgD.js";import"./error-DO1H2NAA.js";import"./withOsdkMetrics-BfkC7ecP.js";import"./makeExternalStore-BUEQbKkl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
