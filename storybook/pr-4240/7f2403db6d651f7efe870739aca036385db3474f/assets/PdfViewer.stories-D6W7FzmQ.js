import{j as r,M as s}from"./iframe-Crrq_V9a.js";import{P as p}from"./pdf-viewer-Vqw2qJnb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXEV86dz.js";import"./preload-helper-B0KSNMSf.js";import"./PdfViewer-7LcPeZEe.js";import"./index-BUK6uge5.js";import"./BasePdfViewer-BOuq3818.js";import"./BasePdfViewer.module.css-DTx0kcTj.js";import"./PdfViewerAnnotationLayer-DhD34lRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D16ODuR_.js";import"./PdfViewerOutlineSidebar-ChpZuAZ-.js";import"./PdfViewerSidebarHeader-BhhWFrIj.js";import"./useBaseUiId-G0RhfiSE.js";import"./useControlled-7_WCnHC_.js";import"./CompositeRoot-BMZZMLl-.js";import"./CompositeItem-COkq6uGE.js";import"./ToolbarRootContext-UM565H_l.js";import"./composite-DFN7AbeA.js";import"./svgIconContainer-CBsIZ9u2.js";import"./PdfViewerSearchBar-BXS45np_.js";import"./chevron-up-C3haDphm.js";import"./chevron-down-33yPdK7L.js";import"./cross-BfUth1rr.js";import"./PdfViewerSidebar-DlTnJj3B.js";import"./index-iPpy1sZ4.js";import"./index-LdB11F_t.js";import"./index-BhOk5BKE.js";import"./PdfViewerToolbar-DTi1hZvt.js";import"./Button-rjMzAizh.js";import"./chevron-right-Cp_InJ5E.js";import"./Input-BB-wuDqG.js";import"./search-UIxXkiNx.js";import"./spin-CA0SNYZw.js";import"./error-FZelDdZI.js";import"./withOsdkMetrics-BUiVXfiJ.js";import"./makeExternalStore-DqEHGNcf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
