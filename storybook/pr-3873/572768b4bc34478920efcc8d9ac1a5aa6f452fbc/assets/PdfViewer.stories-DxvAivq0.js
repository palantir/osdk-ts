import{j as r,M as s}from"./iframe-HyESsXeQ.js";import{P as p}from"./pdf-viewer-DwGpNxiV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcsHzBJO.js";import"./preload-helper-Bvz1Iq1b.js";import"./PdfViewer-CitFwRmO.js";import"./index-D0OJ8Trr.js";import"./BasePdfViewer-BV3hrTDd.js";import"./BasePdfViewer.module.css-BrGXxMhn.js";import"./PdfViewerAnnotationLayer-CTPyzf1B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BysIEV08.js";import"./PdfViewerOutlineSidebar-tTxSBqB0.js";import"./PdfViewerSidebarHeader-CEvIgO_L.js";import"./useBaseUiId-DuHypDOw.js";import"./useControlled-BBW-00hW.js";import"./CompositeRoot-D_iKJDiA.js";import"./CompositeItem-CPmZ1gPE.js";import"./ToolbarRootContext-ChUkw_F5.js";import"./composite-DiTBIa1i.js";import"./svgIconContainer-DoHo3GVe.js";import"./PdfViewerSearchBar-m7A51nIO.js";import"./chevron-up-DJsfiIRo.js";import"./chevron-down-BVfSkRRX.js";import"./cross-B4WufoMD.js";import"./PdfViewerSidebar-By4DQ3XR.js";import"./index-CjUqhSJN.js";import"./index-DXkwEgFU.js";import"./index-CgvnsYQE.js";import"./PdfViewerToolbar-CQlVWlYn.js";import"./Button-SWnrLxVW.js";import"./chevron-right-sCKXy6PS.js";import"./Input-DQmQ9_F8.js";import"./search-DCrGY9GL.js";import"./spin-DzrEfeMj.js";import"./error-Bf7Spqax.js";import"./withOsdkMetrics-X96S_7mx.js";import"./makeExternalStore-CrwMIP9a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
