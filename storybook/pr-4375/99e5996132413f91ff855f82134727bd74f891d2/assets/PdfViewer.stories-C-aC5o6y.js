import{j as r,M as s}from"./iframe-kyVM35Yw.js";import{P as p}from"./pdf-viewer-B5KN4Ys2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJ3hMaWa.js";import"./preload-helper-BwEFl8vP.js";import"./PdfViewer-fOcgJ4RV.js";import"./index-C0Dea0yk.js";import"./BasePdfViewer-D9gveVRE.js";import"./BasePdfViewer.module.css-D4XK7OXu.js";import"./PdfViewerAnnotationLayer-LW6LM0IX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHvo9B6v.js";import"./PdfViewerOutlineSidebar-KVPAi1n3.js";import"./PdfViewerSidebarHeader-CXrGEoeF.js";import"./useBaseUiId-DRkyghGt.js";import"./useControlled-Dv9OfWlo.js";import"./CompositeRoot-bJeP23sD.js";import"./CompositeItem-CcZT4jH0.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./composite-uhZO0Uyq.js";import"./svgIconContainer-CLz_w4rV.js";import"./PdfViewerSearchBar-DvMaXYOr.js";import"./chevron-up-BX9GcG-R.js";import"./chevron-down-CnIiSLCf.js";import"./cross-C0YFkToE.js";import"./PdfViewerSidebar-CVsfTj6v.js";import"./index-C5nN5HSw.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./PdfViewerToolbar-DtsHo-eV.js";import"./Button-t3LDiAFT.js";import"./chevron-right-C464qOiL.js";import"./Input-DdIUmJav.js";import"./search-BZ_r27kW.js";import"./spin-De2sHlCP.js";import"./error-C0jSc5Zw.js";import"./withOsdkMetrics-B7MvmXC4.js";import"./makeExternalStore-DOr5nas7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
