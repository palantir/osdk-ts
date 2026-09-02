import{j as r,M as s}from"./iframe-aaRaUaQA.js";import{P as p}from"./pdf-viewer-CHsGGi9b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DobRaGXe.js";import"./preload-helper-DDdBuVC6.js";import"./PdfViewer-DtfyokqX.js";import"./index-BFxdwZW8.js";import"./BasePdfViewer-DXMDxB0R.js";import"./BasePdfViewer.module.css-JU1oaS1W.js";import"./PdfViewerAnnotationLayer-KfpQ4Iec.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-I39en5nZ.js";import"./PdfViewerOutlineSidebar-Czv0KAIf.js";import"./PdfViewerSidebarHeader-CADw8VXE.js";import"./useBaseUiId-OrvyFRjf.js";import"./useControlled-BxZDOjCN.js";import"./CompositeRoot-CbsGp_qK.js";import"./CompositeItem-ia1rPCPv.js";import"./ToolbarRootContext-CvLiSlR3.js";import"./composite-Brai8k8L.js";import"./svgIconContainer-DPD4yDJx.js";import"./PdfViewerSearchBar-BgsvINm0.js";import"./chevron-up-i0Foemxb.js";import"./chevron-down-DjMdYRFA.js";import"./cross-Civ52i0i.js";import"./PdfViewerSidebar-DVM9ZJmC.js";import"./index-BcetiFxi.js";import"./index-CjX3GsQ1.js";import"./index-B47dG2nh.js";import"./PdfViewerToolbar-KUIpJk_M.js";import"./Button-_hqfl3rB.js";import"./chevron-right-dUslmbNy.js";import"./Input-9MkH7huv.js";import"./search-rSQCSGrC.js";import"./spin-4nXRd6iU.js";import"./error-Bw88zVpy.js";import"./withOsdkMetrics-BCIN_T8e.js";import"./makeExternalStore-DgrVSoVp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
