import{j as r,M as s}from"./iframe-HdL12gTW.js";import{P as p}from"./pdf-viewer-Bc9dJjaH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkM0EyRb.js";import"./preload-helper-DuPhqSoR.js";import"./PdfViewer-BHSvTo4B.js";import"./index-BLRoaiA0.js";import"./BasePdfViewer-v3ybhpS1.js";import"./BasePdfViewer.module.css-C22n5s3w.js";import"./PdfViewerAnnotationLayer-BonVwTYk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5KhT1Ve.js";import"./PdfViewerOutlineSidebar-DZJqO8Ij.js";import"./PdfViewerSidebarHeader-B8eaJoVr.js";import"./useBaseUiId-ekw91PLD.js";import"./useControlled-m8IrfiDX.js";import"./CompositeRoot-FMeFA6_B.js";import"./CompositeItem-CdqweP-g.js";import"./ToolbarRootContext-o0MDLjcb.js";import"./composite-DN4TbWMs.js";import"./svgIconContainer-B7UNNoek.js";import"./PdfViewerSearchBar-BugVnZ8m.js";import"./chevron-up-Dm_iigpM.js";import"./chevron-down-DW1_9o68.js";import"./cross-DXB0ggN8.js";import"./PdfViewerSidebar-UzVfDg54.js";import"./index-CYZ7Zb3G.js";import"./index-BtcGM-tQ.js";import"./index-DHnE9wbz.js";import"./PdfViewerToolbar-EoREF4Qa.js";import"./Button-fEp34dTs.js";import"./chevron-right-BzhMO1R9.js";import"./Input-BmrCOBDc.js";import"./search-LcQw2NsK.js";import"./spin-DZ78F_II.js";import"./error-C0h-qjZV.js";import"./withOsdkMetrics-Bvqw_Q6i.js";import"./makeExternalStore-CFSL0hnp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
