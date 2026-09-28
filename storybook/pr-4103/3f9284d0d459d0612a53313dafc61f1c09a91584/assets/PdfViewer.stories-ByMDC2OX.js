import{j as r,M as s}from"./iframe-DWfJ7zGz.js";import{P as p}from"./pdf-viewer-BLTyU7s8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D91tIdsM.js";import"./preload-helper-BLrTx2bV.js";import"./PdfViewer-CcDW_dsm.js";import"./index-gWYSOhKn.js";import"./BasePdfViewer-DQEh5Qxy.js";import"./BasePdfViewer.module.css-wWh3ZxS_.js";import"./PdfViewerAnnotationLayer-BZWASSJU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7SwP9Lsr.js";import"./PdfViewerOutlineSidebar-CEcpxIrR.js";import"./PdfViewerSidebarHeader-C7rb-LsU.js";import"./useBaseUiId-R5Nwqwa3.js";import"./useControlled-x_cvzMnI.js";import"./CompositeRoot-if2jPn0_.js";import"./CompositeItem-Db-3OHhb.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./composite-CRrOsq3D.js";import"./svgIconContainer-DSpgm6ur.js";import"./PdfViewerSearchBar-DLkAx-vv.js";import"./chevron-up-CBDb6XWY.js";import"./chevron-down-B0X1iKQC.js";import"./cross-osdHHFE1.js";import"./PdfViewerSidebar-BMpN6SN_.js";import"./index-1zb5OrbF.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./PdfViewerToolbar-DAviNAlS.js";import"./Button-D-n8pDY3.js";import"./chevron-right-D4tSTkbF.js";import"./Input-nyG97nhE.js";import"./search-tI2FUc7S.js";import"./spin-xixPXlQq.js";import"./error-DqCKC8-V.js";import"./withOsdkMetrics-CuePKHJA.js";import"./makeExternalStore-BbdjnJds.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
