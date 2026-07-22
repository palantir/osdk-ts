import{j as r,M as s}from"./iframe-431E4LQg.js";import{P as p}from"./pdf-viewer-DuNuPOJk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1zZTfLN.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D2cg1dnk.js";import"./index-BbWCzhmW.js";import"./PdfViewer-BbBuD9te.js";import"./PdfViewer.module.css-psja-Tu5.js";import"./PdfViewerAnnotationLayer-DyASStUQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bz0ALph8.js";import"./PdfViewerOutlineSidebar-DLXZ2Kdj.js";import"./PdfViewerSidebarHeader-CoHD3sEP.js";import"./useBaseUiId-PrWN03i5.js";import"./useControlled-M9mWr4jz.js";import"./CompositeRoot-CmLibGCy.js";import"./CompositeItem-Bx4DSMlZ.js";import"./ToolbarRootContext-Dar9nRMQ.js";import"./composite-DF9yjivc.js";import"./svgIconContainer-CV2TKJDI.js";import"./PdfViewerSearchBar-DRbocONJ.js";import"./chevron-up-DnRc3Yaq.js";import"./chevron-down-aSGYZFUK.js";import"./cross-BpRFgWFZ.js";import"./PdfViewerSidebar-B3tL3aoa.js";import"./index-BvAj92lD.js";import"./index-DVf7JyOD.js";import"./index-DPQeQcQk.js";import"./PdfViewerToolbar-1iCQ4VYs.js";import"./Button-DQim2McI.js";import"./chevron-right-DkVR7M7K.js";import"./Input-DR9taV_j.js";import"./search-D9nf6d3V.js";import"./spin-C1pW6jom.js";import"./error-C_C4jw6J.js";import"./withOsdkMetrics-BRYSsTVO.js";import"./makeExternalStore-D34wlhpf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
