import{j as r,M as s}from"./iframe-BQKQTmXB.js";import{P as p}from"./pdf-viewer-DSXnlf3B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-STx2liF6.js";import"./preload-helper-DpY65_Qx.js";import"./PdfViewer-QrcX4ZEx.js";import"./index-BAgavFcN.js";import"./BasePdfViewer-YdZI35rN.js";import"./BasePdfViewer.module.css-8sp7-db3.js";import"./PdfViewerAnnotationLayer-Du9OrVX7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aXCjS1je.js";import"./PdfViewerOutlineSidebar--qEnITlB.js";import"./PdfViewerSidebarHeader-ddr5ePNH.js";import"./useBaseUiId-D4SYKib3.js";import"./useControlled-C-CBJQhx.js";import"./CompositeRoot-C1Mupa4a.js";import"./CompositeItem-BvDVmAAl.js";import"./ToolbarRootContext-C9Gx_t9N.js";import"./composite-BB13Acp8.js";import"./svgIconContainer-s1izGso1.js";import"./PdfViewerSearchBar-HafDEl4c.js";import"./chevron-up-DyWu1xdg.js";import"./chevron-down-D5kmZbrP.js";import"./cross-BbeReS0g.js";import"./PdfViewerSidebar-_4aXTUTK.js";import"./index-GsxlN7I4.js";import"./index-DW4OjGFj.js";import"./index-DOiTTslB.js";import"./PdfViewerToolbar-BHBCNnnm.js";import"./Button-DY1Aghm3.js";import"./chevron-right-BbEBQOql.js";import"./Input-BvQQtcuT.js";import"./search-C5fONMO5.js";import"./spin-Tfnkn61P.js";import"./error-dE1POcw9.js";import"./withOsdkMetrics-DsblZkp9.js";import"./makeExternalStore-g6QM0BRI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
