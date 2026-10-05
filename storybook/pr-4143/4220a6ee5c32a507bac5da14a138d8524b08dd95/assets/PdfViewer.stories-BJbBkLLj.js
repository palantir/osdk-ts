import{j as r,M as s}from"./iframe-DGLAKnND.js";import{P as p}from"./pdf-viewer-DI5zp34C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFh2Gw0c.js";import"./preload-helper-DFgLk3H0.js";import"./PdfViewer-y2pCdQmQ.js";import"./index-MAOZVqBp.js";import"./BasePdfViewer-D8zZrh46.js";import"./BasePdfViewer.module.css-D7lA0WqK.js";import"./PdfViewerAnnotationLayer-GynjuGlA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CR9i5l4S.js";import"./PdfViewerOutlineSidebar-DUszXKGP.js";import"./PdfViewerSidebarHeader-BRMp8b7L.js";import"./useBaseUiId-BaGNlDqg.js";import"./useControlled-EZBO8tge.js";import"./CompositeRoot-Dt_xcinf.js";import"./CompositeItem-DgGcGQW6.js";import"./ToolbarRootContext-DLHGbFy6.js";import"./composite-CNVl9uwD.js";import"./svgIconContainer-FR2bqQFg.js";import"./PdfViewerSearchBar-D-MqfnSN.js";import"./chevron-up-OnyyxKMj.js";import"./chevron-down-BpoIGC6g.js";import"./cross-CxVHgnds.js";import"./PdfViewerSidebar-DTDk9tLh.js";import"./index-2SXn5UAQ.js";import"./index-D8VO6Jfw.js";import"./index-TSIf0hfv.js";import"./PdfViewerToolbar-D8BLdmwr.js";import"./Button-D_UOXx3n.js";import"./chevron-right-DmgH-Q3l.js";import"./Input-Cs47mLOC.js";import"./search-BOgD6jUI.js";import"./spin-CrqZcRSj.js";import"./error-D43b2FyI.js";import"./withOsdkMetrics-uBYACZNa.js";import"./makeExternalStore-Ckpy9L-L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
