import{j as r,M as s}from"./iframe-C5F37WDS.js";import{P as p}from"./pdf-viewer-Bo6y3WDF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DThARG0N.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BypPLhFM.js";import"./index-DPmfEXn1.js";import"./BasePdfViewer-CdO41oUr.js";import"./BasePdfViewer.module.css-B7paZztN.js";import"./PdfViewerAnnotationLayer-BMkir6zU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNJ1bEd0.js";import"./PdfViewerOutlineSidebar-CRYx9Rsd.js";import"./PdfViewerSidebarHeader-518reE6I.js";import"./useBaseUiId-BGreBnEl.js";import"./useControlled-BmU56l0K.js";import"./CompositeRoot-HvUX-EuB.js";import"./CompositeItem-CkXf7jgb.js";import"./ToolbarRootContext-DTMhtNND.js";import"./composite-CGgdtCoR.js";import"./svgIconContainer-D5Hoa2ds.js";import"./PdfViewerSearchBar-rfjjcYmT.js";import"./chevron-up-DKd8Cyr0.js";import"./chevron-down--665Ugn9.js";import"./cross-CPshxXyQ.js";import"./PdfViewerSidebar-BCimcuyA.js";import"./index-EP0qYko_.js";import"./index-_URA0IQM.js";import"./index-DUd2_GTy.js";import"./PdfViewerToolbar-BupqOBEI.js";import"./Button-eBDyeEgi.js";import"./chevron-right-CQYKYAMI.js";import"./Input-CoBEe8YJ.js";import"./search-KDPiG0C3.js";import"./spin-CgdDq06V.js";import"./error-BZcVMBoG.js";import"./withOsdkMetrics-BPZHiAPa.js";import"./makeExternalStore-BJFp2_WD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
