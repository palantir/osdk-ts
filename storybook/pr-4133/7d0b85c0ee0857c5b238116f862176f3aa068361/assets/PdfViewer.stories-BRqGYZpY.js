import{j as r,M as s}from"./iframe-CwfFVXYm.js";import{P as p}from"./pdf-viewer-BcJX2N9L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUj0bYfY.js";import"./preload-helper-B0i1Ccv8.js";import"./PdfViewer-BJA2Tqo7.js";import"./index-12mUJC8n.js";import"./BasePdfViewer-DJBQkFt6.js";import"./BasePdfViewer.module.css-DJVXS2mG.js";import"./PdfViewerAnnotationLayer-HmYDJFzd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw1wsSyu.js";import"./PdfViewerOutlineSidebar-bZ2OcwtV.js";import"./PdfViewerSidebarHeader-CwkTiX3J.js";import"./useBaseUiId-D7i-0lUl.js";import"./useControlled-CBv31JWZ.js";import"./CompositeRoot-DnxEXpos.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./composite-B35ndqHm.js";import"./svgIconContainer-CGFZMhJS.js";import"./PdfViewerSearchBar-CBQml5F6.js";import"./chevron-up-DFx_f40v.js";import"./chevron-down-CYWunexi.js";import"./cross-vHANk4GA.js";import"./PdfViewerSidebar-DpR2ZXJe.js";import"./index-DTmUBa4U.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./PdfViewerToolbar-0IUWrPzy.js";import"./Button-BEoayh3H.js";import"./chevron-right-CgSUQ9dT.js";import"./Input-B3BLVjbw.js";import"./search-CXyOr2KE.js";import"./spin-DOk5ZQYs.js";import"./error-BbOajjO4.js";import"./withOsdkMetrics-Ojccrccx.js";import"./makeExternalStore-D75zw0dv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
