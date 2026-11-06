import{j as r,M as s}from"./iframe-FZKVnNVk.js";import{P as p}from"./pdf-viewer-CZ7cEq6L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0cxdkuh.js";import"./preload-helper-3dwBIJCj.js";import"./PdfViewer-BlUOtLyZ.js";import"./index-Dde_nhTq.js";import"./BasePdfViewer-BTHc8LFD.js";import"./BasePdfViewer.module.css-DYpaT4IC.js";import"./PdfViewerAnnotationLayer-6qO8A7jm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMAAgxHN.js";import"./PdfViewerOutlineSidebar-DrxEj7Ld.js";import"./PdfViewerSidebarHeader-BHGvp2zM.js";import"./useBaseUiId-CHWJmPEK.js";import"./useControlled-z91UpuYz.js";import"./CompositeRoot-Cyq7teef.js";import"./CompositeItem-DwzK3_pD.js";import"./ToolbarRootContext-DURRKwiG.js";import"./composite-pRARdUSn.js";import"./svgIconContainer-XHaqdbDx.js";import"./PdfViewerSearchBar-Cwfa-c6U.js";import"./chevron-up-D77dziJ5.js";import"./chevron-down-D0c3SzT7.js";import"./cross-Dm4ybRp6.js";import"./PdfViewerSidebar-BYRattVx.js";import"./index-CO1rso4Q.js";import"./index-CF9ImBhb.js";import"./index-DcCADMqh.js";import"./PdfViewerToolbar-COogjiaG.js";import"./Button-CYIzntRV.js";import"./chevron-right-BVSSH1ut.js";import"./Input-CZghJbmx.js";import"./search-UOw594pj.js";import"./spin-D0vhUVCb.js";import"./error-ClLL5bQm.js";import"./withOsdkMetrics-BeTzvhLK.js";import"./makeExternalStore-BWIKD2My.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
