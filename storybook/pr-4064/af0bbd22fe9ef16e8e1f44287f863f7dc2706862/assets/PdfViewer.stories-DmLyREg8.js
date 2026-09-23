import{j as r,M as s}from"./iframe-ChtCM8dE.js";import{P as p}from"./pdf-viewer-RURQiMo5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PYbwY1F2.js";import"./preload-helper-Cmiw_6tL.js";import"./PdfViewer-B5FGD91h.js";import"./index-uT5HIxUp.js";import"./BasePdfViewer-WnK4gaRJ.js";import"./BasePdfViewer.module.css-BhRKNhRe.js";import"./PdfViewerAnnotationLayer-q4Z0cXp2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHQFBrIx.js";import"./PdfViewerOutlineSidebar-IZEC_tOE.js";import"./PdfViewerSidebarHeader-DcIoZ5Ws.js";import"./useBaseUiId-BlvSRiC6.js";import"./useControlled-hlF0PwpK.js";import"./CompositeRoot-BGFsyASZ.js";import"./CompositeItem-DamdrYTg.js";import"./ToolbarRootContext-D57ExyiR.js";import"./composite-B9COiNPT.js";import"./svgIconContainer-B0Hb1RBl.js";import"./PdfViewerSearchBar-CsfpJ5FR.js";import"./chevron-up-DqI-k4m8.js";import"./chevron-down-9ZFNeU84.js";import"./cross-Cx7UUYd1.js";import"./PdfViewerSidebar-D_UNzSVw.js";import"./index-BcIK4VrX.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./PdfViewerToolbar-Bn66q-Dq.js";import"./Button-CY6Mleoh.js";import"./chevron-right-Y45tuyrn.js";import"./Input-CiDCxeu9.js";import"./search-NDA-MaEJ.js";import"./spin-BN0CT1ya.js";import"./error-C3rrhmyZ.js";import"./withOsdkMetrics-DVdIQmET.js";import"./makeExternalStore-CrEYLMCO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
