import{j as r,M as s}from"./iframe-CgaQrvJX.js";import{P as p}from"./pdf-viewer-C5SDjq5c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rhleX1Zd.js";import"./preload-helper-B2Xmrc95.js";import"./PdfViewer-5ekex4wy.js";import"./index-Bzmlqe5w.js";import"./BasePdfViewer-9I8s9qdr.js";import"./BasePdfViewer.module.css-Bx6pARpO.js";import"./PdfViewerAnnotationLayer--pY2pI0W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDy8CMSn.js";import"./PdfViewerOutlineSidebar-DWSzqiwR.js";import"./PdfViewerSidebarHeader-C3IJx3QF.js";import"./useBaseUiId-CIjmtvYO.js";import"./useControlled-A1Soqi4e.js";import"./CompositeRoot-CTq6S3ih.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./composite-B-SLP__V.js";import"./svgIconContainer-DNetVQYr.js";import"./PdfViewerSearchBar-DjC94wtY.js";import"./chevron-up-D3XsRzvV.js";import"./chevron-down-BU6VTUzE.js";import"./cross-IeILlXDu.js";import"./PdfViewerSidebar-CTyzhuLG.js";import"./index-CTmg82ji.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./PdfViewerToolbar-CBF6pXMc.js";import"./Button-BWSgruJ1.js";import"./chevron-right-BX0iQKsK.js";import"./Input-DQR44Pu5.js";import"./search-BUTYKFlQ.js";import"./spin-CCqZ3tIh.js";import"./error-DP9sVVUg.js";import"./withOsdkMetrics-C3kX09Hw.js";import"./makeExternalStore-BVbHcjBk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
