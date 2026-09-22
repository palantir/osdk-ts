import{j as r,M as s}from"./iframe-CEjFXQ7i.js";import{P as p}from"./pdf-viewer-C2Detauy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Clr5RLMG.js";import"./preload-helper-DLeq1RMI.js";import"./PdfViewer-IVDaIlYB.js";import"./index-D6JFDMhk.js";import"./BasePdfViewer-CtWLw4-c.js";import"./BasePdfViewer.module.css-DyfSHRAp.js";import"./PdfViewerAnnotationLayer-CdZpAcOf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fr1MbfIw.js";import"./PdfViewerOutlineSidebar-5H5CEpDv.js";import"./PdfViewerSidebarHeader-w6LMCq0t.js";import"./useBaseUiId-DIsNXkIK.js";import"./useControlled-Bactb4pm.js";import"./CompositeRoot-Cs_ogeyT.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./composite-YofervN4.js";import"./svgIconContainer-BmnNwyNQ.js";import"./PdfViewerSearchBar-Ccq0OV8J.js";import"./chevron-up-BrswIa9v.js";import"./chevron-down-B26wW5MT.js";import"./cross-D6CNu_FK.js";import"./PdfViewerSidebar-7nN3QnI0.js";import"./index-Dwcp4INV.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./PdfViewerToolbar-DT6lievB.js";import"./Button-4xVurfNi.js";import"./chevron-right-C0BzJAiu.js";import"./Input-CyL2x7p2.js";import"./search-BURF39r2.js";import"./spin-BlQJwLxW.js";import"./error-Bcog9g9V.js";import"./withOsdkMetrics-DOR5d9wI.js";import"./makeExternalStore-79RiVGfc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
