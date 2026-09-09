import{j as r,M as s}from"./iframe-YaS06hyW.js";import{P as p}from"./pdf-viewer-B9rIWaxu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COvdpIow.js";import"./preload-helper-CHXu7ylM.js";import"./PdfViewer-BDHJGmFJ.js";import"./index-B-cO8d-Q.js";import"./BasePdfViewer-D5GZeZpM.js";import"./BasePdfViewer.module.css-ejxCFDLO.js";import"./PdfViewerAnnotationLayer-dYNsCkeR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjLkQrKh.js";import"./PdfViewerOutlineSidebar-bl_woK6Y.js";import"./PdfViewerSidebarHeader-1po0jWuC.js";import"./useBaseUiId-CjvUa8cY.js";import"./useControlled-Bm5M3oKq.js";import"./CompositeRoot-DvtlH5aJ.js";import"./CompositeItem-ClG1U4EV.js";import"./ToolbarRootContext-D-k46Imi.js";import"./composite-BkFZzr2I.js";import"./svgIconContainer-DLa4OU0n.js";import"./PdfViewerSearchBar-CI16L5G7.js";import"./chevron-up-kJrzu3TE.js";import"./chevron-down-CxKB5IcW.js";import"./cross-AobcYagI.js";import"./PdfViewerSidebar-BLXPlYfw.js";import"./index-D6PE6Ffo.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./PdfViewerToolbar-iJsYaDOZ.js";import"./Button-BEru0DpJ.js";import"./chevron-right-CE5dFICK.js";import"./Input-Dql0qM-e.js";import"./search-DaYARQRb.js";import"./spin-YRjSVpXC.js";import"./error-irND_epE.js";import"./withOsdkMetrics-8M4HiVCC.js";import"./makeExternalStore-Cqyecvoe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
