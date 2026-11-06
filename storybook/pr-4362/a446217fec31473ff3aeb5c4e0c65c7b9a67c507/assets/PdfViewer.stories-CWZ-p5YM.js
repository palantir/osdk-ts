import{j as r,M as s}from"./iframe-D1PWQ8eg.js";import{P as p}from"./pdf-viewer-DXbWP1u6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CiRsPbj-.js";import"./preload-helper-ChDiB21Q.js";import"./PdfViewer-BZKnA2P1.js";import"./index-BfN20Yol.js";import"./BasePdfViewer-xJEI5S7P.js";import"./BasePdfViewer.module.css-Ch1OlCzt.js";import"./PdfViewerAnnotationLayer-CS7r6yao.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V0V9d5ar.js";import"./PdfViewerOutlineSidebar-DFUofst6.js";import"./PdfViewerSidebarHeader-CgYShS80.js";import"./useBaseUiId-DQZDizk3.js";import"./useControlled-D21_fOEO.js";import"./CompositeRoot-Dmveyke6.js";import"./CompositeItem-DoK1nl1V.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./composite-Dz4PW6bE.js";import"./svgIconContainer-BXQnyB7k.js";import"./PdfViewerSearchBar-Bm2doVX4.js";import"./chevron-up-BkjL9JfX.js";import"./chevron-down-h_s7BHqv.js";import"./cross-DpDhreOD.js";import"./PdfViewerSidebar-DDpDjzne.js";import"./index-BXJyqqou.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./PdfViewerToolbar-hFH6B94z.js";import"./Button-DGBWNQgJ.js";import"./chevron-right-CWmnnzRr.js";import"./Input-DcHTO1Eg.js";import"./search-Bzfmr3Yu.js";import"./spin-Bn5vZBoA.js";import"./error-CawAj1Hu.js";import"./withOsdkMetrics-DniPK0ul.js";import"./makeExternalStore-C-kCn6EW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
