import{j as r,M as s}from"./iframe-BjvWEpQn.js";import{P as p}from"./pdf-viewer-C-zoM2rd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNeSgWc4.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-C1hh7Y9p.js";import"./index-C0GV4moV.js";import"./BasePdfViewer-DeHraEMk.js";import"./BasePdfViewer.module.css-8Rze9dhp.js";import"./PdfViewerAnnotationLayer-DVr73j6l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAHt9lLW.js";import"./PdfViewerOutlineSidebar-BWvvXXif.js";import"./PdfViewerSidebarHeader-DPdwzYZV.js";import"./useBaseUiId-CuHKCZXA.js";import"./useControlled-CIGB80Ap.js";import"./CompositeRoot-BZ6CJSg1.js";import"./CompositeItem-CsOj8GEh.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./composite-DOEC86eV.js";import"./svgIconContainer-Bo_QeWGy.js";import"./PdfViewerSearchBar-CC0Fl2OL.js";import"./chevron-up-Bf_ow2U4.js";import"./chevron-down-CIsozBEz.js";import"./cross-B1SVZ_Mp.js";import"./PdfViewerSidebar-CHMNn_wG.js";import"./index-CpObZ_CB.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./PdfViewerToolbar-DLeVMY2t.js";import"./Button-D0Bo1X54.js";import"./chevron-right-B1iPWR6H.js";import"./Input-mEIrwYjz.js";import"./search-BShNJex1.js";import"./spin-L2HDbdmG.js";import"./error-0abisA4-.js";import"./withOsdkMetrics-BESKZGnm.js";import"./makeExternalStore-CgVUsbup.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
