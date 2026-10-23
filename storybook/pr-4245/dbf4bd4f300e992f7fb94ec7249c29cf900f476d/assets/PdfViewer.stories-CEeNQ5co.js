import{j as r,M as s}from"./iframe-vvAR62dd.js";import{P as p}from"./pdf-viewer-CxqSDIEW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bu5dA9sA.js";import"./preload-helper-CCln4nV6.js";import"./PdfViewer-DLriJ3Ex.js";import"./index-GmZDd95a.js";import"./BasePdfViewer-h8Q9tfeE.js";import"./BasePdfViewer.module.css-zbBOOdi9.js";import"./PdfViewerAnnotationLayer-DfdHl_fC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bp1ZHuMK.js";import"./PdfViewerOutlineSidebar-CJj4gg2r.js";import"./PdfViewerSidebarHeader-BhL-qwI8.js";import"./useBaseUiId-Z7KW9EIT.js";import"./useControlled-C-mBGUI2.js";import"./CompositeRoot-DwRpAa-k.js";import"./CompositeItem-DcxtPwna.js";import"./ToolbarRootContext-rrmxt5FX.js";import"./composite-zVuCDcDS.js";import"./svgIconContainer-Dzj9GXt6.js";import"./PdfViewerSearchBar-DIsuXsGr.js";import"./chevron-up-CWwWDDe9.js";import"./chevron-down-Bekr5naF.js";import"./cross-CpEJT7cV.js";import"./PdfViewerSidebar-BFcnPJZu.js";import"./index-Se0bF5VG.js";import"./index-OCJal9Dk.js";import"./index-CV2OXpxY.js";import"./PdfViewerToolbar-B-pnPut1.js";import"./Button-DYluNYeK.js";import"./chevron-right-BZek-Emb.js";import"./Input-CMHuklSy.js";import"./search-nGnjAR9u.js";import"./spin-BJqGL4mP.js";import"./error-DlRppvjG.js";import"./withOsdkMetrics-D2qelpzb.js";import"./makeExternalStore-5NWNtgTu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
