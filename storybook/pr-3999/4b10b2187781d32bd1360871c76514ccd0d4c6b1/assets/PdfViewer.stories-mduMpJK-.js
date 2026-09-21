import{j as r,M as s}from"./iframe-DBZ29Q89.js";import{P as p}from"./pdf-viewer-BEFS5I79.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DsqTiEdA.js";import"./preload-helper-Cu7dcQLx.js";import"./PdfViewer-BuF5Sq_a.js";import"./index-DBtD-XxF.js";import"./BasePdfViewer-DGr77paY.js";import"./BasePdfViewer.module.css-BkLVG12L.js";import"./PdfViewerAnnotationLayer-D_CU9uto.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMFNY-g1.js";import"./PdfViewerOutlineSidebar-BF7SMcrZ.js";import"./PdfViewerSidebarHeader-BBV2n6bE.js";import"./useBaseUiId-RGrTJ31h.js";import"./useControlled-CAV9tSJk.js";import"./CompositeRoot-DKZZjXIy.js";import"./CompositeItem-CnzplN5I.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./composite-DRG53mMw.js";import"./svgIconContainer-DNY9aQZJ.js";import"./PdfViewerSearchBar-CiKYqnWI.js";import"./chevron-up-DMb1an1a.js";import"./chevron-down-m8Go69fz.js";import"./cross-B-xCEuKH.js";import"./PdfViewerSidebar-Ch5Vn94T.js";import"./index-D7JuEvow.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./PdfViewerToolbar-DSg8XvXS.js";import"./Button-TF5qO5TO.js";import"./chevron-right-D3kvJA7i.js";import"./Input-BW9ftY3W.js";import"./search-DFnGvI6Z.js";import"./spin-DbN6MR0G.js";import"./error-DYp6MgYM.js";import"./withOsdkMetrics-DDr2NyM9.js";import"./makeExternalStore-Dhyr5JD9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
