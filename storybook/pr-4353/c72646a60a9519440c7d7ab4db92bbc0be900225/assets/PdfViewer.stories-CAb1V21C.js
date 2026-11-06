import{j as r,M as s}from"./iframe-Dg2rP9Po.js";import{P as p}from"./pdf-viewer-BSsr_b4L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bl-OCNCR.js";import"./preload-helper-C62MX-HV.js";import"./PdfViewer-26d7sYAT.js";import"./index-Bk_L59vo.js";import"./BasePdfViewer-CyJa8GsZ.js";import"./BasePdfViewer.module.css-tQX9O-CW.js";import"./PdfViewerAnnotationLayer-lwI5xmQt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZaEhBBb.js";import"./PdfViewerOutlineSidebar-Dsk1klwb.js";import"./PdfViewerSidebarHeader-BX5CyN6O.js";import"./useBaseUiId-BrByyFcr.js";import"./useControlled-CPVhNzyr.js";import"./CompositeRoot-CH3hmoo4.js";import"./CompositeItem-Iitq3-0I.js";import"./ToolbarRootContext-DWEMgL85.js";import"./composite-DwarrJ_d.js";import"./svgIconContainer-CrwUJVFh.js";import"./PdfViewerSearchBar-Cg2MOwLr.js";import"./chevron-up-B-SEP9hD.js";import"./chevron-down-DghOfrxO.js";import"./cross-ByHx960q.js";import"./PdfViewerSidebar-tE84PRs7.js";import"./index-eL-YB9kv.js";import"./index-D51t4EhI.js";import"./index-BTK-QJaX.js";import"./PdfViewerToolbar-D_-fSwzK.js";import"./Button-3owJgmEd.js";import"./chevron-right-DoDM3NXT.js";import"./Input-CLdANV8F.js";import"./search-7S2iycUI.js";import"./spin-V9CIXkwO.js";import"./error-CpY5WHNo.js";import"./withOsdkMetrics-DWMO9N5k.js";import"./makeExternalStore-CyhjwBot.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
