import{j as r,M as s}from"./iframe-B0aax5t4.js";import{P as p}from"./pdf-viewer-IYyZXr0R.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXjl89qt.js";import"./preload-helper-B_i0Odcu.js";import"./PdfViewer-Cyv2zCdY.js";import"./index-CA_7V0ln.js";import"./BasePdfViewer-BBz_O2qk.js";import"./BasePdfViewer.module.css-B6kbXRso.js";import"./PdfViewerAnnotationLayer-DQcwMMKT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D169rm64.js";import"./PdfViewerOutlineSidebar-C5jJ34Eg.js";import"./PdfViewerSidebarHeader-D8pLcbay.js";import"./useBaseUiId-C9EFBUqt.js";import"./useControlled-Cjro_C_L.js";import"./CompositeRoot-CEtJtRCB.js";import"./CompositeItem-DhB66LbS.js";import"./ToolbarRootContext-D_WwjLAe.js";import"./composite-Cu5vApVf.js";import"./svgIconContainer-DSeQyMEd.js";import"./PdfViewerSearchBar-BM8W9bB0.js";import"./chevron-up-Bk5dNefX.js";import"./chevron-down-59Pc7DyK.js";import"./cross-C3BbzJF1.js";import"./PdfViewerSidebar-TvnXDD0h.js";import"./index-DhaocRdq.js";import"./index-FaCZN02u.js";import"./index-BOMUn4js.js";import"./PdfViewerToolbar-C534dqio.js";import"./Button-DcLOyqPK.js";import"./chevron-right-Ct1ezThM.js";import"./Input-DuNf2WGN.js";import"./search-7EK0E19p.js";import"./spin-CIOAQIJM.js";import"./error-DSukmTRO.js";import"./withOsdkMetrics-BMYYjUQJ.js";import"./makeExternalStore-C8fdPEkr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
