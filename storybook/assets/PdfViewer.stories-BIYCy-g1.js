import{j as r,M as s}from"./iframe-CnAEf3IJ.js";import{P as p}from"./pdf-viewer-BqXjpc0p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Do-n341F.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CStBpOMM.js";import"./index-B8Nz7JJW.js";import"./BasePdfViewer-CTntzyUW.js";import"./BasePdfViewer.module.css-6pKQodP9.js";import"./PdfViewerAnnotationLayer-G4FxcgxB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1ygWZQtw.js";import"./PdfViewerOutlineSidebar-CYwvCzH_.js";import"./PdfViewerSidebarHeader-DA8cZzCH.js";import"./useBaseUiId-CeIC7NO6.js";import"./useControlled-B_4lFiHq.js";import"./CompositeRoot-DynRPe8o.js";import"./CompositeItem-ByBfsUTK.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./composite-CL6haQa-.js";import"./svgIconContainer-BIdExII8.js";import"./PdfViewerSearchBar-BuV7SaKL.js";import"./chevron-up-jF1Dl8Jv.js";import"./chevron-down-Bwa7GCIs.js";import"./cross-Dt0cGPfd.js";import"./PdfViewerSidebar-CzBBZ4Wf.js";import"./index-FiIn5sfi.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./PdfViewerToolbar-CZKfzMrc.js";import"./Button-C2qyHp3c.js";import"./chevron-right-ClwV_owX.js";import"./Input-x_02lyVD.js";import"./search-CEklk6Yi.js";import"./spin-DdSPX-9K.js";import"./error-1wJ1mTzx.js";import"./withOsdkMetrics-B8y7kht9.js";import"./makeExternalStore-DBD3eHtk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
