import{j as r,M as s}from"./iframe-BEf575A3.js";import{P as p}from"./pdf-viewer-Dbcy82Kp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjnojWjs.js";import"./preload-helper-B8yT8SXx.js";import"./PdfViewer-2zGs0Pjg.js";import"./index-DPOra9vP.js";import"./BasePdfViewer-hQL8ZZyH.js";import"./BasePdfViewer.module.css-DPPH0lyU.js";import"./PdfViewerAnnotationLayer-CodWKwfM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4Y4rrwb.js";import"./PdfViewerOutlineSidebar-uwxTM3NE.js";import"./PdfViewerSidebarHeader-5D7xCuJ0.js";import"./useBaseUiId-Du1Cq8KT.js";import"./useControlled-GhsyJ4IB.js";import"./CompositeRoot-DHMEqXXT.js";import"./CompositeItem-DQa7bQl1.js";import"./ToolbarRootContext-DeNEF_85.js";import"./composite-BVFiP9nk.js";import"./svgIconContainer-Ds_sg4id.js";import"./PdfViewerSearchBar-D6okQN9b.js";import"./chevron-up-CgTBv3lY.js";import"./chevron-down-Dh8dts5f.js";import"./cross-B2xt-49o.js";import"./PdfViewerSidebar-CH-7lPpD.js";import"./index-6kp1VAEO.js";import"./index-B6Jwaemq.js";import"./index-CSOMTnLn.js";import"./PdfViewerToolbar-XX6LCMXa.js";import"./Button-DQuoZQTN.js";import"./chevron-right-GytUL3JG.js";import"./Input-BSE_NzJ1.js";import"./search-BSaWqUSD.js";import"./spin-lO34IVfy.js";import"./error-i1IrNpAR.js";import"./withOsdkMetrics-B7g61Aed.js";import"./makeExternalStore-C8e7yQGc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
