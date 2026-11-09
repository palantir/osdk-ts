import{j as r,M as s}from"./iframe-Chfnu1YD.js";import{P as p}from"./pdf-viewer-D91NNguu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHrNJPn4.js";import"./preload-helper-8IaaIvc6.js";import"./PdfViewer-BBMn8omZ.js";import"./index-vEtNoJy3.js";import"./BasePdfViewer-C1yUUhuY.js";import"./BasePdfViewer.module.css-BIe-a04d.js";import"./PdfViewerAnnotationLayer-D2ATo5FV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DA_Ogdlr.js";import"./PdfViewerOutlineSidebar-ueGjxJUF.js";import"./PdfViewerSidebarHeader-V3Ot5CEw.js";import"./useBaseUiId-1GAAVutu.js";import"./useControlled-G2n_omSR.js";import"./CompositeRoot-CnTPcoLH.js";import"./CompositeItem-B84_RNVq.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./composite-ptzmGyTW.js";import"./svgIconContainer-Cemmf0nA.js";import"./PdfViewerSearchBar-xMUh9FeB.js";import"./chevron-up-DiUNmFhg.js";import"./chevron-down-lrpzUfD-.js";import"./cross-DDh1oeg3.js";import"./PdfViewerSidebar-3cWHTlIl.js";import"./index-DvPbsGeG.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./PdfViewerToolbar-BwJ8ZAah.js";import"./Button-Ciq9JFcz.js";import"./chevron-right-CC3YmM1J.js";import"./Input-DWPUbvhX.js";import"./search-BNvr0C3M.js";import"./spin-BesZiZhs.js";import"./error-Dy9PQux-.js";import"./withOsdkMetrics-DRREQEVj.js";import"./makeExternalStore-CYR-IDnU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
