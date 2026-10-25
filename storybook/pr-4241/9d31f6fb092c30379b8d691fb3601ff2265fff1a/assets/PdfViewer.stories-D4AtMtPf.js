import{j as r,M as s}from"./iframe-nl_vu0vo.js";import{P as p}from"./pdf-viewer-BxTsvdFI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DixhTqep.js";import"./preload-helper-Dj6yhN1L.js";import"./PdfViewer-C7dD13m3.js";import"./index-Bw4Di_Av.js";import"./BasePdfViewer-B5yOb4MO.js";import"./BasePdfViewer.module.css-DsMr-gwW.js";import"./PdfViewerAnnotationLayer-CBCJK-Bg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_8aeEYk.js";import"./PdfViewerOutlineSidebar-CPeibiwp.js";import"./PdfViewerSidebarHeader-BYTLYgeL.js";import"./useBaseUiId-BIN8dWsl.js";import"./useControlled-BwxmcO0L.js";import"./CompositeRoot-D3g13w29.js";import"./CompositeItem-ylAvuyxw.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./composite-BrMY9sNC.js";import"./svgIconContainer-dVj22x2p.js";import"./PdfViewerSearchBar-BOlwrNdI.js";import"./chevron-up-GkIkPLav.js";import"./chevron-down-Cg1zW2dH.js";import"./cross-BwLhOV3t.js";import"./PdfViewerSidebar-BDFkWT_D.js";import"./index-CvPJeLDe.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./PdfViewerToolbar-DUsuNHkz.js";import"./Button-B0tw-VeI.js";import"./chevron-right-CnDg9pAx.js";import"./Input-DsULXrnF.js";import"./search-Cx3JC5DT.js";import"./spin-4WlVPlDJ.js";import"./error-CXoZGWHU.js";import"./withOsdkMetrics-DScTmPNl.js";import"./makeExternalStore-lr4yKVc-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
