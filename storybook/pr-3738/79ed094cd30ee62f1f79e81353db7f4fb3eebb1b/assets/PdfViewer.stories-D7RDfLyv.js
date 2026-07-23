import{j as r,M as s}from"./iframe-BxrPZaNO.js";import{P as p}from"./pdf-viewer-Rn7MpnCR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KrtXuoJ9.js";import"./preload-helper-Cx3YQJHu.js";import"./PdfRenderer-BnQmL757.js";import"./index-J6lGX-m2.js";import"./PdfViewer-CNCh8yT2.js";import"./PdfViewer.module.css-VTYluFeT.js";import"./PdfViewerAnnotationLayer-BxsS9oug.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DajKnMcC.js";import"./PdfViewerOutlineSidebar-BlAoMWPQ.js";import"./PdfViewerSidebarHeader-CDZhZqut.js";import"./useBaseUiId-Di1mefXN.js";import"./useControlled-BtpDwHUZ.js";import"./CompositeRoot-wO39NLYt.js";import"./CompositeItem-DTxAmhYK.js";import"./ToolbarRootContext-Bqz8S5Yi.js";import"./composite-DfF43hpZ.js";import"./svgIconContainer-BEnRdrAB.js";import"./PdfViewerSearchBar-B6LUo2r-.js";import"./chevron-up-BQXoP0sf.js";import"./chevron-down-Be0JtK3U.js";import"./cross-BmUQIuiH.js";import"./PdfViewerSidebar-D6F5O-TG.js";import"./index-Cp78tmdM.js";import"./index-D_nzKAep.js";import"./index-BCG6silL.js";import"./PdfViewerToolbar-8FsGh8n4.js";import"./Button-B7x6CZke.js";import"./chevron-right-YPqwPjSu.js";import"./Input-BGI14JLq.js";import"./search-CfnXtNGj.js";import"./spin-CSvEcL2i.js";import"./error-ChOD6vLs.js";import"./withOsdkMetrics-D9tI6rXs.js";import"./makeExternalStore-9Fofboy5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
