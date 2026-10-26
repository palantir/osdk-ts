import{j as r,M as s}from"./iframe-CvDCAeDH.js";import{P as p}from"./pdf-viewer-D1gzLGjA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmdD9yK4.js";import"./preload-helper-CySF3uCO.js";import"./PdfViewer-Cl_I_CsV.js";import"./index-nRFzHzzN.js";import"./BasePdfViewer-BCnwp0n0.js";import"./BasePdfViewer.module.css-cIYGWQxH.js";import"./PdfViewerAnnotationLayer-PGnBd6jS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6zVIsyK.js";import"./PdfViewerOutlineSidebar-CkxUZv4B.js";import"./PdfViewerSidebarHeader-CXdqwxID.js";import"./useBaseUiId-CERu-Mmn.js";import"./useControlled-C_KfRsXv.js";import"./CompositeRoot-CuxPdnM0.js";import"./CompositeItem-DMUlrRz3.js";import"./ToolbarRootContext-DAFODDmt.js";import"./composite-DRBh063u.js";import"./svgIconContainer-BhfMRbBd.js";import"./PdfViewerSearchBar-DZJIMIwH.js";import"./chevron-up-QV-X91NM.js";import"./chevron-down-ZDn0-ls9.js";import"./cross-EFfC56XR.js";import"./PdfViewerSidebar-C0M7v-1K.js";import"./index-YLVpcBQe.js";import"./index-RY0nU7lO.js";import"./index-DUHiZ1To.js";import"./PdfViewerToolbar-DD-EGjJH.js";import"./Button-DisPssKu.js";import"./chevron-right-DNLriARp.js";import"./Input-ALhJpCPl.js";import"./search-dKzEJt7B.js";import"./spin-B7GSQem2.js";import"./error-DzLL_NpE.js";import"./withOsdkMetrics-Ck_CFDG4.js";import"./makeExternalStore-feC-GRyZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
