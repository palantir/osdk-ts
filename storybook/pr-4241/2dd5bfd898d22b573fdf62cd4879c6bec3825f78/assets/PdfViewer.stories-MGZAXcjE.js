import{j as r,M as s}from"./iframe-Cz66haSq.js";import{P as p}from"./pdf-viewer-CpZVJeGn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQdfumeW.js";import"./preload-helper-xhSAljX0.js";import"./PdfViewer-DeASTj0J.js";import"./index-BUXfO4Ju.js";import"./BasePdfViewer-dgGhfkvR.js";import"./BasePdfViewer.module.css-DL0LuBq4.js";import"./PdfViewerAnnotationLayer-CVeA8QiE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhHw9_lk.js";import"./PdfViewerOutlineSidebar-BECG_00K.js";import"./PdfViewerSidebarHeader-CaI6PNVT.js";import"./useBaseUiId--zYyuape.js";import"./useControlled-C9QmB7A0.js";import"./CompositeRoot-BcvfTJJB.js";import"./CompositeItem-hCCScXH4.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./composite-BA9faNy6.js";import"./svgIconContainer-DHL3SwmU.js";import"./PdfViewerSearchBar-L-vgh_pe.js";import"./chevron-up-CJ1mApF9.js";import"./chevron-down-e8LYC-cq.js";import"./cross-D9OamDgN.js";import"./PdfViewerSidebar-D7EbZOfl.js";import"./index-CWknVfE8.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./PdfViewerToolbar-BA8VBL3G.js";import"./Button-C0vlEOkp.js";import"./chevron-right-DYK0xRor.js";import"./Input-Bxz-Dd7O.js";import"./search-ARM4tErG.js";import"./spin-CvE6txch.js";import"./error-CctugoDe.js";import"./withOsdkMetrics-BKDPrjKN.js";import"./makeExternalStore-CSjj7q-A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
