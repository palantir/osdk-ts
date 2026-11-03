import{j as r,M as s}from"./iframe-D9CyQ-7D.js";import{P as p}from"./pdf-viewer-ByO0ZmWV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYlTmyCn.js";import"./preload-helper-D5O23N40.js";import"./PdfViewer-DUyLPnhk.js";import"./index-DuJGsL9q.js";import"./BasePdfViewer-DBS8au0E.js";import"./BasePdfViewer.module.css-FbWaP5gA.js";import"./PdfViewerAnnotationLayer-BKSuZK47.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dwz594lQ.js";import"./PdfViewerOutlineSidebar-DAUt8AcG.js";import"./PdfViewerSidebarHeader-BLQfD2FO.js";import"./useBaseUiId-D_fLEN6E.js";import"./useControlled-C_-Glr9o.js";import"./CompositeRoot-B-6l-Lt8.js";import"./CompositeItem-DcIoFALJ.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./composite-XfhWG8gu.js";import"./svgIconContainer-AOGkHpnu.js";import"./PdfViewerSearchBar-ac7XZfeI.js";import"./chevron-up-cri8uVAA.js";import"./chevron-down-CdLJsGpG.js";import"./cross-BenluPmH.js";import"./PdfViewerSidebar-lkZR0ROp.js";import"./index-D1YdEA6M.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./PdfViewerToolbar-OMVAoW46.js";import"./Button-BQcwiuJB.js";import"./chevron-right-D1e8ovoy.js";import"./Input-CmtlVQ4G.js";import"./search-DGt86ZvF.js";import"./spin-CRStPKws.js";import"./error-C3QVKQPv.js";import"./withOsdkMetrics-C8sht1w0.js";import"./makeExternalStore-tubzd2Ls.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
