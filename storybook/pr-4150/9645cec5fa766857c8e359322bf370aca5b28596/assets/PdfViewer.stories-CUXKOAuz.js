import{j as r,M as s}from"./iframe-BzqK-L3x.js";import{P as p}from"./pdf-viewer-Dn6pNkQn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nSJibc9-.js";import"./preload-helper-BKlEVweK.js";import"./PdfViewer-De5l3jqn.js";import"./index-CAFk7Pq5.js";import"./BasePdfViewer-BMi_Lgyw.js";import"./BasePdfViewer.module.css-DHGoIUwM.js";import"./PdfViewerAnnotationLayer-BJC78t4z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvmVNZxe.js";import"./PdfViewerOutlineSidebar-Dv2RDoBe.js";import"./PdfViewerSidebarHeader-BbRIUpqS.js";import"./useBaseUiId-C-iu15of.js";import"./useControlled-C0lOLQQX.js";import"./CompositeRoot-BDdQN3j1.js";import"./CompositeItem-BZg5qy-d.js";import"./ToolbarRootContext-k1NWQ1L0.js";import"./composite-C9E7l6t3.js";import"./svgIconContainer-CSL2gIeC.js";import"./PdfViewerSearchBar-CJmet3Ix.js";import"./chevron-up-DpUThF0A.js";import"./chevron-down-CaTsAVif.js";import"./cross-Dbky2_5e.js";import"./PdfViewerSidebar-3FIICcYM.js";import"./index-Bn_5eQCw.js";import"./index-BlWV0Ebq.js";import"./index-DncDRzcB.js";import"./PdfViewerToolbar-1nEJwsoq.js";import"./Button-fL19aB2n.js";import"./chevron-right-BNfHZHqI.js";import"./Input-Cpl2x-wp.js";import"./search-D0Jcsyiy.js";import"./spin-4w2_Ogba.js";import"./error-CPni5UMa.js";import"./withOsdkMetrics-o-hRBNLG.js";import"./makeExternalStore-BlKOrYUq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
