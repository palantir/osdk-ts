import{j as r,M as s}from"./iframe-DbQMorYR.js";import{P as p}from"./pdf-viewer-D0DIY_Hl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-r6F0bjpx.js";import"./preload-helper-DES03_oL.js";import"./PdfViewer-DSgLcY1E.js";import"./index-CHOCnb0f.js";import"./BasePdfViewer-BvA2jrwd.js";import"./BasePdfViewer.module.css-B4fsU41a.js";import"./PdfViewerAnnotationLayer-C9v91KKT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B48NXU70.js";import"./PdfViewerOutlineSidebar-DXpyN-rm.js";import"./PdfViewerSidebarHeader-CwS4TzrW.js";import"./useBaseUiId-CKJO2MlM.js";import"./useControlled-DOgj4MtD.js";import"./CompositeRoot-Cd1N_6hG.js";import"./CompositeItem-DHvx_K1s.js";import"./ToolbarRootContext-D619hRph.js";import"./composite-BjHYFgsw.js";import"./svgIconContainer-Cwo2AziM.js";import"./PdfViewerSearchBar-B5pohHwr.js";import"./chevron-up-CtLRiEQ7.js";import"./chevron-down-CVwhtMCl.js";import"./cross-CE7V7QeW.js";import"./PdfViewerSidebar-Ri7xIlqp.js";import"./index-CwvWt_bc.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./PdfViewerToolbar-iVOuLOmS.js";import"./Button-S-V8j-aZ.js";import"./chevron-right-CFFpkpjy.js";import"./Input-Q-MRNWMg.js";import"./search-ChjdgZEs.js";import"./spin-B6Bp-t8d.js";import"./error-CkRxITwV.js";import"./withOsdkMetrics-BpNcVo1X.js";import"./makeExternalStore-smBq6vy5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
