import{j as r,M as s}from"./iframe-Bq5j5aAZ.js";import{P as p}from"./pdf-viewer-az8xfpKR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-EfV89w.js";import"./preload-helper-Cst-Jesr.js";import"./PdfRenderer-D1rh8v1y.js";import"./index-DWEhBHOg.js";import"./PdfViewer-CZ6r4vel.js";import"./PdfViewer.module.css-ZT2vEuuD.js";import"./PdfViewerAnnotationLayer-RQA11Q8G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChSGVRQQ.js";import"./PdfViewerOutlineSidebar-BCg6xHgf.js";import"./PdfViewerSidebarHeader-DFskjLXG.js";import"./useBaseUiId-BdQXYMbQ.js";import"./useControlled-Bh97BPxb.js";import"./CompositeRoot-CGoY8jtl.js";import"./CompositeItem-D-DPXVET.js";import"./ToolbarRootContext-2btfoOPA.js";import"./composite-DrF_ejyf.js";import"./svgIconContainer-D0zN2PvM.js";import"./PdfViewerSearchBar-D30jZ8Sp.js";import"./chevron-up-D0EA5DaP.js";import"./chevron-down-Cyd20nPd.js";import"./cross-CbyP9ICU.js";import"./PdfViewerSidebar-pE5ym9XI.js";import"./index-XfaAXuD0.js";import"./index-B_vCnOWE.js";import"./index-3GM7jxUo.js";import"./PdfViewerToolbar-DwZRsVgU.js";import"./Button-BDOsP3IO.js";import"./chevron-right-BxuRiTHq.js";import"./Input-BUcGQGwq.js";import"./search-BjMKeiC8.js";import"./spin-DwS1ONwC.js";import"./error-BfeMGEzt.js";import"./withOsdkMetrics-Dh460Fmw.js";import"./makeExternalStore-DAAwZ8ri.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
