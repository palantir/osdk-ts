import{j as r,M as s}from"./iframe-D8ujQKLt.js";import{P as p}from"./pdf-viewer-DAUF1ufs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3wP6ZqhZ.js";import"./preload-helper-DFSc6wRM.js";import"./PdfViewer-ClE6JrVU.js";import"./index-9VE5Mn4e.js";import"./BasePdfViewer-4wDhACrj.js";import"./BasePdfViewer.module.css-BVzQm4oQ.js";import"./PdfViewerAnnotationLayer-CTZn528Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuxZLRmv.js";import"./PdfViewerOutlineSidebar-CEyugcp_.js";import"./PdfViewerSidebarHeader-DR_IF1ki.js";import"./useBaseUiId-DQIJbvft.js";import"./useControlled-CNmeKwYL.js";import"./CompositeRoot-MMwWMeoz.js";import"./CompositeItem-D1_uZNYL.js";import"./ToolbarRootContext-DDpleV8W.js";import"./composite-CqKkE9Tf.js";import"./svgIconContainer-CCFPJCSW.js";import"./PdfViewerSearchBar-DPC__2Dx.js";import"./chevron-up-CxwWNom-.js";import"./chevron-down-Dy0uKQHu.js";import"./cross-DL4CxuoW.js";import"./PdfViewerSidebar-De2u9eNB.js";import"./index-DEgBJtF2.js";import"./index-Df4arEo8.js";import"./index-4dyiHwoW.js";import"./PdfViewerToolbar-DluFA__k.js";import"./Button-DP0uEAZL.js";import"./chevron-right-Cm-9JA0r.js";import"./Input-BAcEpIh9.js";import"./search-lCLNBJzK.js";import"./spin-TPj7gAu3.js";import"./error-e8Ui46gA.js";import"./withOsdkMetrics-CoHNSoOK.js";import"./makeExternalStore-BCYZ0dRc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
