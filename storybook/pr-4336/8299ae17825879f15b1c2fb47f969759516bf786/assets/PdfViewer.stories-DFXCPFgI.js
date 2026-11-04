import{j as r,M as s}from"./iframe-Cm6Hi8JW.js";import{P as p}from"./pdf-viewer-DwYDTuq6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtGcQDek.js";import"./preload-helper-BYxBeAAs.js";import"./PdfViewer-ao6brXIx.js";import"./index-CDpDzJRy.js";import"./BasePdfViewer-Bwq9QXz_.js";import"./BasePdfViewer.module.css-Cr6ugg4u.js";import"./PdfViewerAnnotationLayer-DZqaXfJv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ce497FBn.js";import"./PdfViewerOutlineSidebar-D8d8HY21.js";import"./PdfViewerSidebarHeader-BJyir4D9.js";import"./useBaseUiId-DhmqNEB-.js";import"./useControlled-DQSuLFKk.js";import"./CompositeRoot-BZU2rbh7.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./composite-F8udgwsX.js";import"./svgIconContainer-agsfS07p.js";import"./PdfViewerSearchBar-BTRFgeDg.js";import"./chevron-up-D-ntY23M.js";import"./chevron-down-yfyql6cd.js";import"./cross-CqZ8qeBD.js";import"./PdfViewerSidebar-DhNYi2rX.js";import"./index-DID7t8gF.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./PdfViewerToolbar-DSHsMseN.js";import"./Button-Bc-QcRr6.js";import"./chevron-right-CrTmK-qJ.js";import"./Input-YqDpCJ5-.js";import"./search-9QnSKEDq.js";import"./spin-D8_Fsf46.js";import"./error-Dmy_j7rB.js";import"./withOsdkMetrics-BXiHxUU0.js";import"./makeExternalStore-BMRo_idP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
