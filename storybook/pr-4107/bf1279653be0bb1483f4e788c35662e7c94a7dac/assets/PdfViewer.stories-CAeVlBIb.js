import{j as r,M as s}from"./iframe-BBbz1AL9.js";import{P as p}from"./pdf-viewer-CENWvP_O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_ivuOLg.js";import"./preload-helper-LktJP5uP.js";import"./PdfViewer-C2G83Lsh.js";import"./index-BOgOZGVm.js";import"./BasePdfViewer-DatTPq5h.js";import"./BasePdfViewer.module.css-Bee3XFDC.js";import"./PdfViewerAnnotationLayer-nLiHUmX2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C0kqeFrY.js";import"./PdfViewerOutlineSidebar-CzelHXuL.js";import"./PdfViewerSidebarHeader-qtjZOleS.js";import"./useBaseUiId-D4UJyJ9J.js";import"./useControlled-BAncaeLN.js";import"./CompositeRoot-2jUXapro.js";import"./CompositeItem-DV0DAQDv.js";import"./ToolbarRootContext-CDIUf1p8.js";import"./composite-MiODqQmu.js";import"./svgIconContainer-DFesH5dO.js";import"./PdfViewerSearchBar-DOaYCMgU.js";import"./chevron-up-BDwyfSZq.js";import"./chevron-down-DxqKQR7L.js";import"./cross-D2ow8c2-.js";import"./PdfViewerSidebar-vd7_xUFm.js";import"./index-DXllweDc.js";import"./index-CA8g9ho5.js";import"./index-Db4moevd.js";import"./PdfViewerToolbar-ChrJEj-T.js";import"./Button-DI71fvab.js";import"./chevron-right-CgwQxxcN.js";import"./Input-DMWAeir1.js";import"./search-DnvQFbf5.js";import"./spin-BJeNlVDw.js";import"./error-BG3KjKN_.js";import"./withOsdkMetrics-tTo2SGpZ.js";import"./makeExternalStore-D3rO5u3I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
