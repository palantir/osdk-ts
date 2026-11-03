import{j as r,M as s}from"./iframe-C5CLXfWS.js";import{P as p}from"./pdf-viewer-Bpta7D8s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIWxolCl.js";import"./preload-helper-CmQDAWyb.js";import"./PdfViewer-Bl3dkvua.js";import"./index-DtGlOU-M.js";import"./BasePdfViewer-_g3tN5xE.js";import"./BasePdfViewer.module.css-uB8SJRXU.js";import"./PdfViewerAnnotationLayer-CeZXhLwK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-irskzhWU.js";import"./PdfViewerOutlineSidebar-DoUM-BQ7.js";import"./PdfViewerSidebarHeader-BMo5pq5n.js";import"./useBaseUiId-CqeeK3OI.js";import"./useControlled-CzKtgw0j.js";import"./CompositeRoot-D3v7mylM.js";import"./CompositeItem-Dx1-4fNK.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./composite-B3s1Z_B-.js";import"./svgIconContainer-BIzzh223.js";import"./PdfViewerSearchBar-CXrwUxP2.js";import"./chevron-up-Ceu2kqXI.js";import"./chevron-down-k0OiGtOZ.js";import"./cross-B3o49gy1.js";import"./PdfViewerSidebar-DqVFdzZL.js";import"./index-CaADRcIm.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./PdfViewerToolbar-B7sftNxM.js";import"./Button-W3Mp6JlA.js";import"./chevron-right-Bq5PMKem.js";import"./Input-D-cxIIFp.js";import"./search-aAg3Ft0P.js";import"./spin-DEWpdMTN.js";import"./error-aTWH99uz.js";import"./withOsdkMetrics-BjF1sUNW.js";import"./makeExternalStore-BfuCy0xW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
