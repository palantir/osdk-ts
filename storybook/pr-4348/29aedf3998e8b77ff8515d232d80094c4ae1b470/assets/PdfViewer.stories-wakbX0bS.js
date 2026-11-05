import{j as r,M as s}from"./iframe-wedJSnud.js";import{P as p}from"./pdf-viewer-C_fm9mqs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-4qW_UcZK.js";import"./preload-helper-DcVHnV_i.js";import"./PdfViewer-CCKlbYIE.js";import"./index-BsI8HLJz.js";import"./BasePdfViewer-BlEns6UD.js";import"./BasePdfViewer.module.css-BmHQgRZT.js";import"./PdfViewerAnnotationLayer-BzF-vf7g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwXD7kTR.js";import"./PdfViewerOutlineSidebar-40GgI1bf.js";import"./PdfViewerSidebarHeader-DN6pJeFS.js";import"./useBaseUiId-BGqSil3r.js";import"./useControlled-RZ5VMgMB.js";import"./CompositeRoot-BiB9jmmP.js";import"./CompositeItem-DUPpieEN.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./composite-CGFDwdnq.js";import"./svgIconContainer-CJJHSkNv.js";import"./PdfViewerSearchBar-BWYt__ME.js";import"./chevron-up-C_Mmr20i.js";import"./chevron-down-DkT3Qzaa.js";import"./cross-CxbFlbaI.js";import"./PdfViewerSidebar-Bo8cbeia.js";import"./index-DWYfh9fQ.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./PdfViewerToolbar-CrbUxGf-.js";import"./Button-UisMFP1d.js";import"./chevron-right-DCSWp4TG.js";import"./Input-Z8OuidlN.js";import"./search-B0U_YWQT.js";import"./spin-DmOUjvKt.js";import"./error-BFWppJ2G.js";import"./withOsdkMetrics-B2en0C3P.js";import"./makeExternalStore-cCCuNZuQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
