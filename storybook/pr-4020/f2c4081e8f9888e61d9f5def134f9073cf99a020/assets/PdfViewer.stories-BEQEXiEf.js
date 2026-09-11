import{j as r,M as s}from"./iframe-CINa6Zgf.js";import{P as p}from"./pdf-viewer-DnlFZ3GK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfnzI5fh.js";import"./preload-helper-By73o2jw.js";import"./PdfViewer-DXBjkOVa.js";import"./index-BP4TKibe.js";import"./BasePdfViewer-ALF62F2W.js";import"./BasePdfViewer.module.css-D8BwulBA.js";import"./PdfViewerAnnotationLayer-K641lx_0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQhIMHHX.js";import"./PdfViewerOutlineSidebar-CDXCIWcf.js";import"./PdfViewerSidebarHeader-BdcNac_j.js";import"./useBaseUiId-CWUgitm1.js";import"./useControlled-CIQnPEcE.js";import"./CompositeRoot-CI7nAOO0.js";import"./CompositeItem-BieHCh4d.js";import"./ToolbarRootContext-DNhRV4PI.js";import"./composite-OajiVgE3.js";import"./svgIconContainer-CNFEqHpH.js";import"./PdfViewerSearchBar-pgMo-JM9.js";import"./chevron-up-C1BGfacZ.js";import"./chevron-down-DnNAIf49.js";import"./cross-BkRnKOPP.js";import"./PdfViewerSidebar-DPU0Qeeh.js";import"./index-DMjOHO7u.js";import"./index-CxG-P-nc.js";import"./index-CA-7i9jO.js";import"./PdfViewerToolbar-huPPWtow.js";import"./Button-S_wwBFsV.js";import"./chevron-right-CTzL9npa.js";import"./Input-CsP9VOhj.js";import"./search-DndjkDUR.js";import"./spin-DjAoot9Q.js";import"./error-BIO08ioS.js";import"./withOsdkMetrics-Ct4i0IXa.js";import"./makeExternalStore-BvvEwv00.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
