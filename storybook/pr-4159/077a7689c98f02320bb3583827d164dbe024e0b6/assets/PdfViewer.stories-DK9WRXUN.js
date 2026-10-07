import{j as r,M as s}from"./iframe-BqwXQKpA.js";import{P as p}from"./pdf-viewer-CUFlygH0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGTJGDB9.js";import"./preload-helper-CPn3kR4s.js";import"./PdfViewer-Xfz8fsdb.js";import"./index-CYwWJaLD.js";import"./BasePdfViewer-DRul1BDE.js";import"./BasePdfViewer.module.css-Bg0TPygA.js";import"./PdfViewerAnnotationLayer-CqCnuHBT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9Kixi2M.js";import"./PdfViewerOutlineSidebar-RgbTMcNv.js";import"./PdfViewerSidebarHeader-Co40NGQA.js";import"./useBaseUiId-DA7_UCFd.js";import"./useControlled-BcFAz7-u.js";import"./CompositeRoot-B2cteOrF.js";import"./CompositeItem-DhjczCvx.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./composite-Bp-cKdPO.js";import"./svgIconContainer-r8u0NG4v.js";import"./PdfViewerSearchBar-eq4oXuzX.js";import"./chevron-up-CBvqvd9z.js";import"./chevron-down-Dhf3bz-4.js";import"./cross-CedSfFXt.js";import"./PdfViewerSidebar-B_GA9Krc.js";import"./index-BmvdlYct.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./PdfViewerToolbar-BPN9Lm7w.js";import"./Button-DZqTJuVj.js";import"./chevron-right-DomxAiZC.js";import"./Input-DTs9C08W.js";import"./search-1XCyntXF.js";import"./spin-dVlo6X2z.js";import"./error-CT5yNLGi.js";import"./withOsdkMetrics-p_rJ049m.js";import"./makeExternalStore-CyyUqBSG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
