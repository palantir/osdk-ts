import{j as r,M as s}from"./iframe-Cw1OzJXI.js";import{P as p}from"./pdf-viewer-Cozg6UOr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CO7giKL2.js";import"./preload-helper-VRjhiqdY.js";import"./PdfRenderer-Gg8mFKyF.js";import"./index-AdREiO06.js";import"./PdfViewer-Bn-i3ea8.js";import"./PdfViewer.module.css-B3IGHwEv.js";import"./PdfViewerAnnotationLayer-BxN_RBT1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfvZHW3L.js";import"./PdfViewerOutlineSidebar-DQmoc-Oc.js";import"./PdfViewerSidebarHeader-BFvx65Xc.js";import"./useBaseUiId-kN-BHrn3.js";import"./useControlled-VUUaWxro.js";import"./CompositeRoot-BIDzlzMV.js";import"./CompositeItem-Wo-fO6cE.js";import"./ToolbarRootContext-D1YXlWsx.js";import"./composite-DRnZZr1P.js";import"./svgIconContainer-CJz7g1GO.js";import"./PdfViewerSearchBar-DIXJTzg8.js";import"./chevron-up-CpOLsBkD.js";import"./chevron-down-BF3wpGep.js";import"./cross-ByiNeePx.js";import"./PdfViewerSidebar-CXw8wRHW.js";import"./index-Br682WIl.js";import"./index-I5TpdhWE.js";import"./index-BeY0cXRG.js";import"./PdfViewerToolbar-CS-a1UdH.js";import"./Button-UoOH76gu.js";import"./chevron-right-BKaltHqY.js";import"./Input-D9ScyRrt.js";import"./search-B4Tj6n8T.js";import"./spin-ogoQWReV.js";import"./error-DCuGKUxC.js";import"./withOsdkMetrics-uQ7KoVP0.js";import"./makeExternalStore-Cti64u7E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
