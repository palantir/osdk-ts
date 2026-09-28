import{j as r,M as s}from"./iframe-C52xRtUi.js";import{P as p}from"./pdf-viewer-DEoT_nuJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mwZsb4oJ.js";import"./preload-helper-VoitBlG4.js";import"./PdfViewer-L35-jt7q.js";import"./index-C7u1bqdX.js";import"./BasePdfViewer-jPwigKU-.js";import"./BasePdfViewer.module.css-BjDVsd-h.js";import"./PdfViewerAnnotationLayer-Cgi26BNS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWTx_Glr.js";import"./PdfViewerOutlineSidebar-NzMyJTPE.js";import"./PdfViewerSidebarHeader-CYBvkOjs.js";import"./useBaseUiId-DJafaxQ0.js";import"./useControlled-DX7cxw4N.js";import"./CompositeRoot-CW0AwatW.js";import"./CompositeItem-DAwBJWeq.js";import"./ToolbarRootContext-CVcuXFio.js";import"./composite-B5eZIT_T.js";import"./svgIconContainer-BCVv-_g-.js";import"./PdfViewerSearchBar-5yPVLq6j.js";import"./chevron-up-CwlSNKkd.js";import"./chevron-down-C2zgY8nG.js";import"./cross-a7kzaFsa.js";import"./PdfViewerSidebar-DEFuDzg9.js";import"./index-1YKdHDT0.js";import"./index-DzK9GJWU.js";import"./index-pyzUPPmp.js";import"./PdfViewerToolbar-R6tgSILh.js";import"./Button-B-u0RyTK.js";import"./chevron-right-biDNbaiV.js";import"./Input-BgQuQrPL.js";import"./search-dgHR1_2q.js";import"./spin-9Rto8oDb.js";import"./error-COI_mt5G.js";import"./withOsdkMetrics-Csym3CTn.js";import"./makeExternalStore-Km1yOtHY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
