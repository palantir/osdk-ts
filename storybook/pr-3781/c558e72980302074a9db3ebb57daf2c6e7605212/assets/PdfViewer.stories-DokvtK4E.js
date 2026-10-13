import{j as r,M as s}from"./iframe-DQyXgQjF.js";import{P as p}from"./pdf-viewer-wffNWG3E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkepgMmR.js";import"./preload-helper-BwATEbbW.js";import"./PdfViewer-BWYXf_VK.js";import"./index-zxLoORa7.js";import"./BasePdfViewer-UfTOrYQM.js";import"./BasePdfViewer.module.css-BJEwW0ns.js";import"./PdfViewerAnnotationLayer-vyHvqJOE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM1yDHp3.js";import"./PdfViewerOutlineSidebar-Eo74vnLB.js";import"./PdfViewerSidebarHeader-BYHsDhHM.js";import"./useBaseUiId-3phzK7j-.js";import"./useControlled-D7uKPK_J.js";import"./CompositeRoot-D49dfhJt.js";import"./CompositeItem-RFl7h3zH.js";import"./ToolbarRootContext-BfCsQAap.js";import"./composite-CU43rjMu.js";import"./svgIconContainer-CWf268Wa.js";import"./PdfViewerSearchBar-KMDTfSJ9.js";import"./chevron-up-CMwa2FSb.js";import"./chevron-down-B7bppAwZ.js";import"./cross-DYm99n8j.js";import"./PdfViewerSidebar-CiMKFRIF.js";import"./index-Dvo2_Daj.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./PdfViewerToolbar-D4-EzZPe.js";import"./Button-7Yv-s8d8.js";import"./chevron-right-Cu5vS6wI.js";import"./Input-DiCaaolk.js";import"./search-BmUdzc_y.js";import"./spin-DOTGjr1K.js";import"./error-F90l69c5.js";import"./withOsdkMetrics-o51FJnXF.js";import"./makeExternalStore-CjiqYirX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
