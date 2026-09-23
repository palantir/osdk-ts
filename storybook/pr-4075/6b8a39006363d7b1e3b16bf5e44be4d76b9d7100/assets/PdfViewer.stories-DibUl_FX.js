import{j as r,M as s}from"./iframe-34VatmEZ.js";import{P as p}from"./pdf-viewer-Cs0LFVoZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-De3Cj1xS.js";import"./preload-helper-DV4gmwFB.js";import"./PdfViewer-DoBILSLR.js";import"./index-BlAm73td.js";import"./BasePdfViewer-2v8xG1VG.js";import"./BasePdfViewer.module.css-ScMMJe2P.js";import"./PdfViewerAnnotationLayer-D-lmkjZZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMKSD-FR.js";import"./PdfViewerOutlineSidebar-BC0ChKhw.js";import"./PdfViewerSidebarHeader-CQ4zW9Zl.js";import"./useBaseUiId-DeI-Jtiv.js";import"./useControlled-DVccPDBX.js";import"./CompositeRoot--O9jUwEd.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./composite-1B_4pEYH.js";import"./svgIconContainer-_GM_NvIc.js";import"./PdfViewerSearchBar-Bzg8ewUd.js";import"./chevron-up-DSehXApS.js";import"./chevron-down-BtQO1pkc.js";import"./cross-DvtnLYbI.js";import"./PdfViewerSidebar-wQ32Va5t.js";import"./index-Dm8AHk8O.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./PdfViewerToolbar-DZTsQ8PD.js";import"./Button-DV1A9r6F.js";import"./chevron-right-BzvIpsuC.js";import"./Input-BKrVXT7B.js";import"./search-CVdCifPG.js";import"./spin-693FuYhE.js";import"./error-C-NsPFd6.js";import"./withOsdkMetrics-XZ0oOnyA.js";import"./makeExternalStore-D4cd6CTa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
