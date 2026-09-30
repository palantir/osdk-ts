import{j as r,M as s}from"./iframe-CE_irqki.js";import{P as p}from"./pdf-viewer-BSW72fre.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BbrQ0040.js";import"./preload-helper-B0wObQeK.js";import"./PdfViewer-CwZ7aLWf.js";import"./index-CbZ4Cj79.js";import"./BasePdfViewer-BrxiKL4E.js";import"./BasePdfViewer.module.css-6Tsturkz.js";import"./PdfViewerAnnotationLayer-Dw9rJ5H-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C26SUTdj.js";import"./PdfViewerOutlineSidebar-Fvtdob6d.js";import"./PdfViewerSidebarHeader-C0Q2_usn.js";import"./useBaseUiId-Cuodx7xu.js";import"./useControlled-BqInFAvQ.js";import"./CompositeRoot-CjYH-Lye.js";import"./CompositeItem-BnnmhO1F.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./composite-CCcrzfR2.js";import"./svgIconContainer-co06VEp6.js";import"./PdfViewerSearchBar-C7LsFiyf.js";import"./chevron-up-X7mtzZB2.js";import"./chevron-down-oqAS4iB6.js";import"./cross-CiDhEPuo.js";import"./PdfViewerSidebar-D7NeoOAI.js";import"./index-BrqtMSKB.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./PdfViewerToolbar-D3iyrrUv.js";import"./Button-Do97WS9c.js";import"./chevron-right-BwxKv4VQ.js";import"./Input-CQv_PU5A.js";import"./search-BPF_4D3u.js";import"./spin-BnGTN_tn.js";import"./error-yF4FDunH.js";import"./withOsdkMetrics-TAUr-869.js";import"./makeExternalStore-BFTnjumI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
