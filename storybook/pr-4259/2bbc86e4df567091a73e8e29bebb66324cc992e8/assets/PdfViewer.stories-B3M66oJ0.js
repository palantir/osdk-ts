import{j as r,M as s}from"./iframe-DgHq46dL.js";import{P as p}from"./pdf-viewer-TmMNCbs1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJ9QaNAn.js";import"./preload-helper-2OibLDKZ.js";import"./PdfViewer-CfZyb3gt.js";import"./index-BhPwX7yA.js";import"./BasePdfViewer-cM44XQb-.js";import"./BasePdfViewer.module.css-Dkyipr36.js";import"./PdfViewerAnnotationLayer-C4OCdWxo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRufYr3i.js";import"./PdfViewerOutlineSidebar-C5kmUhYA.js";import"./PdfViewerSidebarHeader-Coq_tHQN.js";import"./useBaseUiId-DraHxLhq.js";import"./useControlled-C_PKKkAE.js";import"./CompositeRoot-DqUH0o6d.js";import"./CompositeItem-BY7KoFBl.js";import"./ToolbarRootContext-CNYHni6P.js";import"./composite-B03IEoiJ.js";import"./svgIconContainer-D-eVzjwP.js";import"./PdfViewerSearchBar-T9gUz9ec.js";import"./chevron-up-bX5ufkEA.js";import"./chevron-down-BFQTfWqg.js";import"./cross-kmyKn-Hd.js";import"./PdfViewerSidebar-DRLSGN1s.js";import"./index-Jhdjr3A-.js";import"./index-pFDv9Z-0.js";import"./index-oCxycBs6.js";import"./PdfViewerToolbar-LaDgbiaT.js";import"./Button-CSx6Joum.js";import"./chevron-right-BVdR8gN2.js";import"./Input-o88S38RY.js";import"./search-DW3-Ki40.js";import"./spin-D-C5tNIs.js";import"./error-D8zFMP2p.js";import"./withOsdkMetrics-CAH3qcfi.js";import"./makeExternalStore-D1CTkdeT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
