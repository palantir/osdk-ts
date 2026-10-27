import{j as r,M as s}from"./iframe-CEC11uQP.js";import{P as p}from"./pdf-viewer-BVhrPQCf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BknkO0VR.js";import"./preload-helper-DVVUuTHt.js";import"./PdfViewer-B7RpR0vY.js";import"./index-PEoHNwfg.js";import"./BasePdfViewer-BLDcI_MI.js";import"./BasePdfViewer.module.css-DP2xM9Ro.js";import"./PdfViewerAnnotationLayer-BkNWlnlt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCzZ_YLP.js";import"./PdfViewerOutlineSidebar-D6BdbqWw.js";import"./PdfViewerSidebarHeader-B-_kdxyH.js";import"./useBaseUiId-BjpGd3DR.js";import"./useControlled-DZwN9m8e.js";import"./CompositeRoot-lIII5Bh9.js";import"./CompositeItem-Aj4qkjGh.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./composite-CmpMqd5k.js";import"./svgIconContainer-CbD2_3IP.js";import"./PdfViewerSearchBar-CNg7Y7PN.js";import"./chevron-up-BZqtqOR-.js";import"./chevron-down-6kcuRK_B.js";import"./cross-D6kuzFqN.js";import"./PdfViewerSidebar-CeNUSc63.js";import"./index-pK9n0EOx.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./PdfViewerToolbar-9vvx-R0W.js";import"./Button-BJ7HsXYN.js";import"./chevron-right-BCJ_8IKx.js";import"./Input-DBrhN4gs.js";import"./search-3jERTaIF.js";import"./spin-DQI769VT.js";import"./error-BC-ullpf.js";import"./withOsdkMetrics-CHiNkmki.js";import"./makeExternalStore-BiM7hkBW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
