import{j as r,M as s}from"./iframe-By9pRaoA.js";import{P as p}from"./pdf-viewer-Bl9ZoTa1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaMj5dmJ.js";import"./preload-helper-fdgzTKHW.js";import"./PdfRenderer-D6AeupLq.js";import"./index-D2ozCwp5.js";import"./PdfViewer-DwCCTDPf.js";import"./PdfViewer.module.css-D_YUBXy-.js";import"./PdfViewerAnnotationLayer-B8pbj44E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX_3l91I.js";import"./PdfViewerOutlineSidebar-JoRIS7kc.js";import"./PdfViewerSidebarHeader-BWTfWntd.js";import"./useBaseUiId-CYMsd0M3.js";import"./useControlled-DAprVs_l.js";import"./CompositeRoot-DBZXLihA.js";import"./CompositeItem-DH6wy_la.js";import"./ToolbarRootContext-Bp8YW2C9.js";import"./composite-DIkwmFNe.js";import"./svgIconContainer-CpebHvXe.js";import"./PdfViewerSearchBar-DE15QHXS.js";import"./chevron-up-C-SDB5Om.js";import"./chevron-down-B4xA_P8g.js";import"./cross-P_4ciuh5.js";import"./PdfViewerSidebar-D0BaUP3m.js";import"./index-CeHK1pXv.js";import"./index-CnEr4dU_.js";import"./index-F4kEgzNU.js";import"./PdfViewerToolbar-DaPrvx_t.js";import"./Button-CzNzZXq8.js";import"./chevron-right-BtfimX-C.js";import"./Input-7YhiL2si.js";import"./search-BgHvItpS.js";import"./spin-xabtU6FD.js";import"./error-CoMa_A79.js";import"./withOsdkMetrics-BLQqcSnG.js";import"./makeExternalStore-CcYwcljB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
