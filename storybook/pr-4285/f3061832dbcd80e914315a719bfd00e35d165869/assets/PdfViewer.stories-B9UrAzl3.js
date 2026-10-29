import{j as r,M as s}from"./iframe-97p3M09u.js";import{P as p}from"./pdf-viewer-CnwVAGsm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRwGEH_b.js";import"./preload-helper-CxVBxFAW.js";import"./PdfViewer-BKICm5Va.js";import"./index-DVPCIdd3.js";import"./BasePdfViewer-C4p38eeE.js";import"./BasePdfViewer.module.css-CQgKvrXi.js";import"./PdfViewerAnnotationLayer-Dy2MCCYp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IhLXBMLK.js";import"./PdfViewerOutlineSidebar-BAIwdHf7.js";import"./PdfViewerSidebarHeader-ZLWT9DBM.js";import"./useBaseUiId-DuQvLNdl.js";import"./useControlled-BVQhU86y.js";import"./CompositeRoot-BP4fWqzB.js";import"./CompositeItem-goXUaz1O.js";import"./ToolbarRootContext-BkrLDfAz.js";import"./composite-B7fVO-VQ.js";import"./svgIconContainer-BmP4bwRX.js";import"./PdfViewerSearchBar-DedJA_mh.js";import"./chevron-up-Wm3OZ7hh.js";import"./chevron-down-BW9trwrB.js";import"./cross-CaR0F6Vj.js";import"./PdfViewerSidebar-CVYRhlJX.js";import"./index-CpQuftWe.js";import"./index-mZLyQtJX.js";import"./index-DxXJGm8P.js";import"./PdfViewerToolbar-CiIIJ_3_.js";import"./Button-D31kv467.js";import"./chevron-right-ol5WjEWN.js";import"./Input-CM6A8_jN.js";import"./search-C9oUUQa_.js";import"./spin-Dw-RjSva.js";import"./error-DutCoEmF.js";import"./withOsdkMetrics-vNphc_NN.js";import"./makeExternalStore-hGx-yTqS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
