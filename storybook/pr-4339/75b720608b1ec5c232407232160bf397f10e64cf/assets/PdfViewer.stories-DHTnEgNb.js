import{j as r,M as s}from"./iframe-DMbRIuDb.js";import{P as p}from"./pdf-viewer-Ce016pxu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DusTK5Ph.js";import"./preload-helper-sYBSF0kM.js";import"./PdfViewer-yqaM2JR5.js";import"./index-Bu-1yS3f.js";import"./BasePdfViewer-C6wgr7Ub.js";import"./BasePdfViewer.module.css-Ba18jtvc.js";import"./PdfViewerAnnotationLayer-CnUBsP49.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2GQ9zbx.js";import"./PdfViewerOutlineSidebar-CtdWUWpn.js";import"./PdfViewerSidebarHeader-B-o6SmXV.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./useControlled-CIwMJypC.js";import"./CompositeRoot-BQgljQc-.js";import"./CompositeItem-C_Zv4JbC.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./composite-BbcTHbJw.js";import"./svgIconContainer-DRmK9U-I.js";import"./PdfViewerSearchBar-CRz62UuB.js";import"./chevron-up-CQkTRFRH.js";import"./chevron-down-_C5sbwkb.js";import"./cross-D-Gd3Z1L.js";import"./PdfViewerSidebar-BpAlFzLq.js";import"./index-dCYLjsWC.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./PdfViewerToolbar-FkxHBCu4.js";import"./Button-CD6kVtUc.js";import"./chevron-right-CPRHmat1.js";import"./Input-D-dAAgmX.js";import"./search-0CHVsg6w.js";import"./spin-BcqwCgDo.js";import"./error-D_c53g1g.js";import"./withOsdkMetrics-CiT1Znwa.js";import"./makeExternalStore-H1BAkO0H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
