import{j as r,M as s}from"./iframe-B1dY-uMG.js";import{P as p}from"./pdf-viewer-B6VUFfzV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BL6n1LY6.js";import"./preload-helper-CsaNr_BP.js";import"./PdfViewer-B19WAL5U.js";import"./index-J8POe0xc.js";import"./BasePdfViewer-CmtY2hsr.js";import"./BasePdfViewer.module.css-C8mKOMrC.js";import"./PdfViewerAnnotationLayer-Ct6rie_i.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRTO8h3v.js";import"./PdfViewerOutlineSidebar-CNXW4CxF.js";import"./PdfViewerSidebarHeader-7KfedryQ.js";import"./useBaseUiId-BEMvDf4X.js";import"./useControlled-Q3FRIAaO.js";import"./CompositeRoot-Bi0nYZ5H.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./composite-DafZoXqK.js";import"./svgIconContainer-Hqh_F8lK.js";import"./PdfViewerSearchBar-JD90zajQ.js";import"./chevron-up-CeiRgD-2.js";import"./chevron-down-DfdYdGBP.js";import"./cross-CGzVaZsI.js";import"./PdfViewerSidebar-BiK3k2Mm.js";import"./index-BxyuVSQw.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./PdfViewerToolbar-COskw3Ge.js";import"./Button-WD0YpcbL.js";import"./chevron-right-D0zYFpMT.js";import"./Input-Bow4iCTS.js";import"./search-NElMm_h6.js";import"./spin-Bio8Zsw0.js";import"./error-BzEZzAbM.js";import"./withOsdkMetrics-DuwMRDrg.js";import"./makeExternalStore-CS-gtHXP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
