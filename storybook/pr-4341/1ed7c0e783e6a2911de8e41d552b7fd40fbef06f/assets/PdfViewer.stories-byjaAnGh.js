import{j as r,M as s}from"./iframe-6oxuiw9Z.js";import{P as p}from"./pdf-viewer-3iXj5GKo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwCfjQvV.js";import"./preload-helper-BTY9tSHX.js";import"./PdfViewer-BcN-w3vN.js";import"./index-DDLC59ec.js";import"./BasePdfViewer-Bfr1Vpdj.js";import"./BasePdfViewer.module.css-DUD_Z2h8.js";import"./PdfViewerAnnotationLayer-BrncqSrT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7FD3BNP.js";import"./PdfViewerOutlineSidebar-Ckk9OgJG.js";import"./PdfViewerSidebarHeader-DYPpUFam.js";import"./useBaseUiId-CTF0uA8q.js";import"./useControlled-Dfn-KuCH.js";import"./CompositeRoot-BslKp4VJ.js";import"./CompositeItem-CxzD_nac.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./composite-D6aR9WOy.js";import"./svgIconContainer-CCWfPmIE.js";import"./PdfViewerSearchBar-DiLTxrpt.js";import"./chevron-up-RSO-Meb3.js";import"./chevron-down-D5GnK5oF.js";import"./cross-DFvXSKDO.js";import"./PdfViewerSidebar-qy9y8gZm.js";import"./index-Buj0z2vt.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./PdfViewerToolbar-B8ghU2NP.js";import"./Button-BYfKNsB1.js";import"./chevron-right-DsrUsQcH.js";import"./Input-CFCgD2F3.js";import"./search-CEhUV7Cx.js";import"./spin-DoZG_dbw.js";import"./error-CCmYgvH-.js";import"./withOsdkMetrics-DqypzTOB.js";import"./makeExternalStore-C5lUPI7i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
