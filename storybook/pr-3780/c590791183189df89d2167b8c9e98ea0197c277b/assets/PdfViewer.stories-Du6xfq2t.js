import{j as r,M as s}from"./iframe-BZATJdBl.js";import{P as p}from"./pdf-viewer-BafK4wPj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRPISfkS.js";import"./preload-helper-BVfEAMh5.js";import"./PdfViewer-EoZFXroX.js";import"./index-BeDf9ptc.js";import"./BasePdfViewer-Cf6uFF0M.js";import"./BasePdfViewer.module.css-B2BGIi1F.js";import"./PdfViewerAnnotationLayer-BGSFLaMt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuOErxJF.js";import"./PdfViewerOutlineSidebar-BtzhqxNg.js";import"./PdfViewerSidebarHeader-BghXMGwN.js";import"./useBaseUiId-Z8K4HKfz.js";import"./useControlled-CxH-Pm8q.js";import"./CompositeRoot-B32ywVbE.js";import"./CompositeItem-CaX5c1ho.js";import"./ToolbarRootContext-CQ2TQyf5.js";import"./composite-P4bAAMDx.js";import"./svgIconContainer-NoIJiYrj.js";import"./PdfViewerSearchBar-BbGLZW7l.js";import"./chevron-up-CEdciuKp.js";import"./chevron-down-CrGAJBeU.js";import"./cross-nok40gDW.js";import"./PdfViewerSidebar-C8I_Ou2E.js";import"./index-CmoMq8YN.js";import"./index-XwTUwDpB.js";import"./index-CoEA7CVQ.js";import"./PdfViewerToolbar-tQNtRZQb.js";import"./Button-NS3-hSgq.js";import"./chevron-right-CbyoYSgv.js";import"./Input-DEFEDUlG.js";import"./search-BVSZkFup.js";import"./spin-CROG7KT5.js";import"./error-p84hxrGR.js";import"./withOsdkMetrics-DkVKm51c.js";import"./makeExternalStore-DwSzgSOC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
