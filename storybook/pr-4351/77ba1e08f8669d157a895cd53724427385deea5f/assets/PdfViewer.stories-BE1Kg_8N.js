import{j as r,M as s}from"./iframe-D3hBsnsj.js";import{P as p}from"./pdf-viewer-DKm2phIb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpRmwTVG.js";import"./preload-helper-DMLOvsmI.js";import"./PdfViewer-DkNNZLNg.js";import"./index-BFoG3y9f.js";import"./BasePdfViewer-CdwCJ_1M.js";import"./BasePdfViewer.module.css-DDjlM6eE.js";import"./PdfViewerAnnotationLayer-bRAKiIB2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwDAWLtW.js";import"./PdfViewerOutlineSidebar-BYVwJfKi.js";import"./PdfViewerSidebarHeader-DPfbHqZR.js";import"./useBaseUiId-Bk-faTDV.js";import"./useControlled-D75sOh0K.js";import"./CompositeRoot-WtkNKfno.js";import"./CompositeItem-DxaSaYkw.js";import"./ToolbarRootContext-CMXlPgPk.js";import"./composite-DWlrqv2G.js";import"./svgIconContainer-Bz0YpGKi.js";import"./PdfViewerSearchBar-Bzg_UxS6.js";import"./chevron-up-DfLkcbVO.js";import"./chevron-down-i4CyxBDw.js";import"./cross-zcrYkWBY.js";import"./PdfViewerSidebar-Dq9ZmIOs.js";import"./index-DzDp982c.js";import"./index-CCkpr9rO.js";import"./index-BPny8RHi.js";import"./PdfViewerToolbar-dEGvZmcr.js";import"./Button-Z7wlB8te.js";import"./chevron-right-CoOlGSMn.js";import"./Input-DbDZgezU.js";import"./search-CE7lhKVr.js";import"./spin-Bx4QZZmT.js";import"./error-BUxN-ftl.js";import"./withOsdkMetrics-CQ22kB-k.js";import"./makeExternalStore-CKN6mP8s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
