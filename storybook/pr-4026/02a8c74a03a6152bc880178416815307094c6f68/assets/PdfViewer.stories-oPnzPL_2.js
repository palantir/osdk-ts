import{j as r,M as s}from"./iframe-BWi1ACEM.js";import{P as p}from"./pdf-viewer-BIENBKXU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Br-pmYcX.js";import"./preload-helper-CMYTaGeR.js";import"./PdfViewer-DbOaPHzP.js";import"./index-D-2uEljO.js";import"./BasePdfViewer-BPJzTKSG.js";import"./BasePdfViewer.module.css-ddm5_QFU.js";import"./PdfViewerAnnotationLayer-CUXBg2QS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuvguiyG.js";import"./PdfViewerOutlineSidebar-DEtZUPz6.js";import"./PdfViewerSidebarHeader-XaAU18VU.js";import"./useBaseUiId-YvjxUiEU.js";import"./useControlled-CfVPwlXb.js";import"./CompositeRoot-DiFiBBXK.js";import"./CompositeItem-BGhZB90A.js";import"./ToolbarRootContext--XbyivlW.js";import"./composite-4nRCZoba.js";import"./svgIconContainer-Cw0fxZBh.js";import"./PdfViewerSearchBar-DSjvFKij.js";import"./chevron-up-CjmvI4Vt.js";import"./chevron-down-Dyruysbi.js";import"./cross-CMcFjheT.js";import"./PdfViewerSidebar-BoxGkz3N.js";import"./index-DwdK-GcB.js";import"./index-B_isAlQk.js";import"./index-DUFPmdn4.js";import"./PdfViewerToolbar-CPnBW8NR.js";import"./Button-W_tcCiCZ.js";import"./chevron-right-DR2l-P5s.js";import"./Input-rlMpFyex.js";import"./search-C-U4g2F4.js";import"./spin-DoiXs1PG.js";import"./error-Ru_WceS-.js";import"./withOsdkMetrics-BqK1HlYa.js";import"./makeExternalStore-DOcJRkhv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
