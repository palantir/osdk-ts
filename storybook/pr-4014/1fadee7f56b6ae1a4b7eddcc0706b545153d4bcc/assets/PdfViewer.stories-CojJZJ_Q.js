import{j as r,M as s}from"./iframe-Ch3dDQ73.js";import{P as p}from"./pdf-viewer-oysrdyr1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7oNGLmz.js";import"./preload-helper-Dt5E_MQT.js";import"./PdfViewer-BglyTdw_.js";import"./index-BPSQkvlq.js";import"./BasePdfViewer-Cn42723P.js";import"./BasePdfViewer.module.css-6FULMMhg.js";import"./PdfViewerAnnotationLayer-B1IGdQmF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPBh47M2.js";import"./PdfViewerOutlineSidebar-ZcHrSXCl.js";import"./PdfViewerSidebarHeader-DsastW5-.js";import"./useBaseUiId-BuMyPGEd.js";import"./useControlled-Uo30Ht4a.js";import"./CompositeRoot-8Pra9FHT.js";import"./CompositeItem-yRGsM-I0.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./composite-79LVsM0Q.js";import"./svgIconContainer-DsDanRUJ.js";import"./PdfViewerSearchBar-Cym0vQNG.js";import"./chevron-up-dV5G1tRb.js";import"./chevron-down-DtSbmNQ9.js";import"./cross-BwedcRbE.js";import"./PdfViewerSidebar-ByJXTjiq.js";import"./index-BVJ9nyHd.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./PdfViewerToolbar-DklafUMg.js";import"./Button-BdllNL1h.js";import"./chevron-right-BVwaL0V3.js";import"./Input-CyFa-sRf.js";import"./search-Dq24XcYb.js";import"./spin-D2p851ES.js";import"./error-C6gNYlkP.js";import"./withOsdkMetrics-D3LSYI9p.js";import"./makeExternalStore-9OgJXISf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
