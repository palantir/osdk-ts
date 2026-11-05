import{j as r,M as s}from"./iframe-B0O6MtlS.js";import{P as p}from"./pdf-viewer-DVJORrpU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClHr4ME_.js";import"./preload-helper-D6pURdot.js";import"./PdfViewer-99uEBucB.js";import"./index-CWmTKLGK.js";import"./BasePdfViewer-MF1aerr3.js";import"./BasePdfViewer.module.css-DupsPRT0.js";import"./PdfViewerAnnotationLayer-BaTlgVdX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnY4OzA6.js";import"./PdfViewerOutlineSidebar-BYwKS1x5.js";import"./PdfViewerSidebarHeader-DKmoDilF.js";import"./useBaseUiId-BznU3LGS.js";import"./useControlled-Bx-6J2ID.js";import"./CompositeRoot-bjmwauj3.js";import"./CompositeItem-BbV5-QNT.js";import"./ToolbarRootContext-DCOU3uiJ.js";import"./composite-BMg2yNSq.js";import"./svgIconContainer-DXqgtHND.js";import"./PdfViewerSearchBar-CE8WKOIt.js";import"./chevron-up-DuOAHvz8.js";import"./chevron-down-7CANPOc8.js";import"./cross-CWEImtxT.js";import"./PdfViewerSidebar-grlWsg9W.js";import"./index-CIng004C.js";import"./index-iJddnt6C.js";import"./index-D_qtusqG.js";import"./PdfViewerToolbar-frk3_3pz.js";import"./Button-BoJolYQb.js";import"./chevron-right-CiFqtEjJ.js";import"./Input-C5r_FU3t.js";import"./search-Ck63SNgv.js";import"./spin-t_mlAtTE.js";import"./error-CSV7R-eM.js";import"./withOsdkMetrics-CPnPG3g5.js";import"./makeExternalStore-CyQVHXN1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
