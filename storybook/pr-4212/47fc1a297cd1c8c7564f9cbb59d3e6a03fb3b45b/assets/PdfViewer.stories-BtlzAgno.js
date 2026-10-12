import{j as r,M as s}from"./iframe-DfvwHsY4.js";import{P as p}from"./pdf-viewer-Bz16OvE1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BtPfekCZ.js";import"./preload-helper-B_za76P1.js";import"./PdfViewer-Bhz665Dg.js";import"./index-CQtOsoXK.js";import"./BasePdfViewer-DTMxvZmK.js";import"./BasePdfViewer.module.css-CbTI8O1V.js";import"./PdfViewerAnnotationLayer-CJPdGJRc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8Rr9zYyG.js";import"./PdfViewerOutlineSidebar-CAORqXPh.js";import"./PdfViewerSidebarHeader-C7ApfrDk.js";import"./useBaseUiId-B0xqZb_O.js";import"./useControlled-BjeqQkUk.js";import"./CompositeRoot-BCH0SjIT.js";import"./CompositeItem-DMwkjAkb.js";import"./ToolbarRootContext-rYStqux1.js";import"./composite-CSX6Mrkw.js";import"./svgIconContainer-B9JqQ2wt.js";import"./PdfViewerSearchBar-DHB9BDxq.js";import"./chevron-up-c_-7H9zc.js";import"./chevron-down-B-w_aZMu.js";import"./cross-fqG1RiYl.js";import"./PdfViewerSidebar-CREVy-bk.js";import"./index-dC_pSdIW.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./PdfViewerToolbar-BP-qcZTX.js";import"./Button-Ca04rN16.js";import"./chevron-right-M_R_uKJF.js";import"./Input-BPNZHdpC.js";import"./search-CsmvFGw5.js";import"./spin-JpYsc1V6.js";import"./error-1veqZu6X.js";import"./withOsdkMetrics-5OCT_Jru.js";import"./makeExternalStore-B0EaqGDc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
